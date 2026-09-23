"""Browser regression: QA_BASE_URL selects local preview or deployed Cloudflare site.
Run with a Python environment containing playwright and installed Chromium.
"""
import os
from pathlib import Path
from playwright.sync_api import sync_playwright
BASE = os.environ.get('QA_BASE_URL', 'http://127.0.0.1:4173')
OUT = Path(os.environ.get('QA_OUTPUT', '/tmp/tasblock-qa'))
OUT.mkdir(parents=True, exist_ok=True)
failures = []
def check(value, message):
    if not value: failures.append(message)
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=['--no-sandbox'])
    page = browser.new_page()
    page.on('pageerror', lambda e: failures.append(str(e)))
    for width in [375, 768, 1280, 1440, 1536, 1920]:
        page.set_viewport_size({'width': width, 'height': 1000})
        page.goto(BASE, wait_until='networkidle')
        brand = page.get_by_role('button', name='Tasblock Builder — Laman Utama')
        check('BUILDER' in brand.inner_text(), f'{width}: brand missing')
        check(page.evaluate('document.documentElement.scrollWidth <= innerWidth'), f'{width}: overflow')
        desktop = page.get_by_role('navigation', name='Navigasi utama', exact=True)
        check(desktop.is_visible() == (width >= 1536), f'{width}: wrong navigation breakpoint')
        if width >= 1536:
            check(desktop.locator('button').first.evaluate('(e)=>parseFloat(getComputedStyle(e).fontSize)>=16'), 'desktop label too small')
            check(desktop.evaluate('(e)=>parseFloat(getComputedStyle(e).columnGap)>=12'), 'desktop gap too tight')
            check(brand.bounding_box()['x'] + brand.bounding_box()['width'] < desktop.bounding_box()['x'], 'brand overlaps menu')
        else:
            toggle = page.get_by_role('button', name='Buka menu navigasi')
            if toggle.is_visible():
                toggle.click()
                page.get_by_role('navigation', name='Navigasi mudah alih').get_by_role('button', name='Perkhidmatan', exact=True).click()
                check('services' in page.url, 'mobile navigation did not navigate')
        page.screenshot(path=str(OUT / f'header-{width}.png'))
    for width in [375, 1536]:
        page.set_viewport_size({'width': width, 'height': 1000})
        for service in ['design-build', 'training', 'supply', 'supply-install']:
            page.goto(BASE + '/#services?service=' + service, wait_until='networkidle')
            image = page.locator('main article figure img').first
            image.scroll_into_view_if_needed()
            page.wait_for_function('Array.from(document.querySelectorAll("main article figure img")).every(i=>i.complete && i.naturalWidth>0)')
            check(image.evaluate('(i)=>Math.abs(i.clientWidth/i.clientHeight-i.naturalWidth/i.naturalHeight)<0.02'), f'{width}/{service}: image cropped or distorted')
            page.screenshot(path=str(OUT / f'{service}-{width}.png'))
        page.goto(BASE + '/#projects', wait_until='networkidle')
        cards = page.locator('main article')
        check(cards.count() >= 6, f'{width}: missing manufacturer references')
        sizes=[]
        page.locator('main article img').evaluate_all('(images)=>images.forEach(i=>i.loading="eager")')
        for card in cards.all():
            image=card.locator('img'); image.scroll_into_view_if_needed()
            image.evaluate('(i)=>i.loading="eager"')
            page.wait_for_function('Array.from(document.querySelectorAll("main article img")).every(i=>i.complete && i.naturalWidth>0)')
            check(card.get_by_role('link', name='Lihat foto penuh').count() == 1, 'full photo unavailable')
            sizes.append(image.bounding_box()['height'])
        check(max(sizes)-min(sizes)<2, f'{width}: inconsistent photo frames')
        check(page.evaluate('document.documentElement.scrollWidth <= innerWidth'), f'{width}: project overflow')
        page.evaluate('window.scrollTo(0,0)')
        page.screenshot(path=str(OUT / f'projects-{width}.png'), full_page=True)
    browser.close()
print('\n'.join(failures) if failures else 'PASS: responsive menu, full service images, sourced gallery, no page errors')
assert not failures, f'{len(failures)} regression checks failed'
