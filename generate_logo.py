import zlib, struct

# Target dimensions 500x500
W, H = 500, 500
SCALE = 2
SW, SH = W * SCALE, H * SCALE

buf = bytearray(SW * SH * 4)

def point_in_polygon(x, y, poly):
    inside = False
    n = len(poly)
    p1x, p1y = poly[0]
    for i in range(1, n + 1):
        p2x, p2y = poly[i % n]
        if y > min(p1y, p2y):
            if y <= max(p1y, p2y):
                if x <= max(p1x, p2x):
                    if p1y != p2y:
                        xinters = (y - p1y) * (p2x - p1x) / (p2y - p1y) + p1x
                    if p1x == p2x or x <= xinters:
                        inside = not inside
        p1x, p1y = p2x, p2y
    return inside

def fill_poly(poly, r, g, b, a=255):
    spoly = [(px * SCALE, py * SCALE) for px, py in poly]
    min_x = max(0, int(min(p[0] for p in spoly)))
    max_x = min(SW - 1, int(max(p[0] for p in spoly)))
    min_y = max(0, int(min(p[1] for p in spoly)))
    max_y = min(SH - 1, int(max(p[1] for p in spoly)))
    
    for y in range(min_y, max_y + 1):
        for x in range(min_x, max_x + 1):
            if point_in_polygon(x + 0.5, y + 0.5, spoly):
                idx = (y * SW + x) * 4
                old_a = buf[idx + 3] / 255.0
                src_a = a / 255.0
                out_a = src_a + old_a * (1 - src_a)
                if out_a > 0:
                    buf[idx] = int((r * src_a + buf[idx] * old_a * (1 - src_a)) / out_a)
                    buf[idx + 1] = int((g * src_a + buf[idx + 1] * old_a * (1 - src_a)) / out_a)
                    buf[idx + 2] = int((b * src_a + buf[idx + 2] * old_a * (1 - src_a)) / out_a)
                    buf[idx + 3] = int(out_a * 255)

# 1. Outer Diamond Frame (Sky Cyan-Blue: #64B5F6 -> rgb(91, 192, 235))
# Diamond is drawn as two polygonal arms
diamond_left = [
    (118, 230),  # top outer cutoff
    (52, 296),   # left outer tip
    (248, 492),  # bottom outer tip
    (248, 458),  # bottom inner tip
    (78, 288),   # left inner tip
    (134, 246)   # top inner cutoff
]

diamond_right = [
    (378, 230),  # top outer cutoff
    (444, 296),  # right outer tip
    (248, 492),  # bottom outer tip
    (248, 458),  # bottom inner tip
    (418, 288),  # right inner tip
    (362, 246)   # top inner cutoff
]

# 2. Left Tower (Azure / Ocean Blue: #0B75AF -> rgb(11, 117, 175))
left_tower = [
    (168, 280),
    (168, 460),
    (92, 384),
    (92, 356)
]

# 3. Top Dark Teal Chevron (#01627A -> rgb(1, 98, 122))
top_chevron = [
    (282, 16),
    (282, 190),
    (260, 168),
    (260, 68),
    (204, 124),
    (204, 94)
]

# 4. Center Teal Column (#28A8A0 -> rgb(40, 168, 160))
center_tower = [
    (248, 58),
    (248, 332),
    (210, 370),
    (210, 452),
    (176, 486),
    (176, 302),
    (148, 274),
    (148, 158)
]

# 5. Right Navy Tower (#1E4E8C -> rgb(30, 78, 140))
right_tower = [
    (336, 186),
    (412, 262),
    (412, 360),
    (312, 460),
    (312, 210)
]

# Render shapes
fill_poly(diamond_left, 100, 195, 238)
fill_poly(diamond_right, 100, 195, 238)
fill_poly(left_tower, 11, 117, 175)
fill_poly(top_chevron, 1, 98, 122)
fill_poly(center_tower, 40, 168, 160)
fill_poly(right_tower, 30, 78, 140)

# Downsample and save PNG
out_buf = bytearray(W * H * 4)
for y in range(H):
    for x in range(W):
        r = g = b = a = 0
        for dy in range(SCALE):
            for dx in range(SCALE):
                idx = ((y * SCALE + dy) * SW + (x * SCALE + dx)) * 4
                r += buf[idx]
                g += buf[idx + 1]
                b += buf[idx + 2]
                a += buf[idx + 3]
        div = SCALE * SCALE
        oidx = (y * W + x) * 4
        out_buf[oidx] = r // div
        out_buf[oidx + 1] = g // div
        out_buf[oidx + 2] = b // div
        out_buf[oidx + 3] = a // div

raw_rows = []
for y in range(H):
    raw_rows.append(b'\x00' + out_buf[y * W * 4 : (y + 1) * W * 4])
raw_data = b''.join(raw_rows)
compressed = zlib.compress(raw_data)

png = b'\x89PNG\r\n\x1a\n'
ihdr = struct.pack('>IIBBBBB', W, H, 8, 6, 0, 0, 0)
png += struct.pack('>I', len(ihdr)) + b'IHDR' + ihdr + struct.pack('>I', zlib.crc32(b'IHDR' + ihdr))
png += struct.pack('>I', len(compressed)) + b'IDAT' + compressed + struct.pack('>I', zlib.crc32(b'IDAT' + compressed))
png += struct.pack('>I', 0) + b'IEND' + struct.pack('>I', zlib.crc32(b'IEND'))

with open('public/tasblock-logo.png', 'wb') as f:
    f.write(png)
with open('dist/tasblock-logo.png', 'wb') as f:
    f.write(png)

# Also create SVG version
svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <!-- Diamond Frame Left -->
  <polygon points="118,230 52,296 248,492 248,458 78,288 134,246" fill="#64B5F6" />
  <!-- Diamond Frame Right -->
  <polygon points="378,230 444,296 248,492 248,458 418,288 362,246" fill="#64B5F6" />
  <!-- Left Tower (Azure Blue) -->
  <polygon points="168,280 168,460 92,384 92,356" fill="#0B75AF" />
  <!-- Top Dark Teal Chevron -->
  <polygon points="282,16 282,190 260,168 260,68 204,124 204,94" fill="#01627A" />
  <!-- Center Main Teal Column -->
  <polygon points="248,58 248,332 210,370 210,452 176,486 176,302 148,274 148,158" fill="#28A8A0" />
  <!-- Right Navy Tower -->
  <polygon points="336,186 412,262 412,360 312,460 312,210" fill="#1E4E8C" />
</svg>'''

with open('public/tasblock-logo.svg', 'w') as f:
    f.write(svg_content)
with open('dist/tasblock-logo.svg', 'w') as f:
    f.write(svg_content)

print("tasblock-logo.png and tasblock-logo.svg successfully created!")
