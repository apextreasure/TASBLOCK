# Manufacturer gallery image provenance

Source supplied by the client: `Tasblock (M) Sdn Bhd CV - 2026-R1_260915_205329_aionui_1790153411843-5c336783.pdf`.
Local source: `/root/.config/AionUi/config/temp/Tasblock (M) Sdn Bhd CV - 2026-R1_260915_205329_aionui_1790153411843-5c336783.pdf`.

All page references are **physical PDF pages, counting the cover**, not printed footer numbers. These are manufacturer references, not verified Tasblock Builder jobs. The supplied source is provenance, not a claim of independent verification or an additional image licence.

## Displayed assets

| File in public/images | Physical page | PDF image xref | Native/stored dimensions | Subject |
| --- | --- | --- | --- | --- |
| manufacturer-demo-construction.jpeg | 14 | 167 | 536 × 349 | Top-left landscape photo of demonstration structural installation |
| manufacturer-school.webp | 15 | Existing cropped derivative; retained unchanged | 444 × 262 | SJKC Yu Ying courtyard, upper-right photo in the CIDB book excerpt |
| manufacturer-felda-hostel.jpeg | 18 | 205 | 343 × 278 | FELDA / KPF Agro hostel under construction; specific site not identified |
| manufacturer-trabzon-house.jpeg | 19 | 211 | 314 × 265 | Top-left photo accompanying Trabzon village house |
| manufacturer-moscow-house.jpeg | 19 | 215 | 318 × 267 | Lower-right photo accompanying Moscow affordable house |
| manufacturer-istanbul-office.jpeg | 20 | 222 | 487 × 317 | Finished facade of the Esenyurt, Istanbul site office |
| manufacturer-baghdad-warehouse.jpeg | 21 | 230 | 800 × 362 | Warehouse interior, highest-resolution embedded warehouse photo |

Six new JPEG files were extracted directly with PyMuPDF `Document.extract_image(xref)` and saved from the returned bytes. They have not been resized, recompressed, retouched, AI-generated, or AI-upscaled. Borders already embedded in the originals remain. The existing school WebP is retained rather than claiming its earlier crop is an untouched embedded original. Its subject was visually checked against physical page 15. The previous portrait `manufacturer-demo.webp` remains on disk unchanged but is no longer used for the gallery.

## Residential source ambiguity

Physical page 19 is headed “RESIDENTIAL PROJECTS IN TÜRKIYE”. Its upper pair of images accompanies “Trabzon village house”: two storeys, 300 m², February 2013, 24 days. The lower images accompany “Moscow affordable house”: 70 m², April 2013, seven working days and arched window openings. Page layout and image placement were visually inspected before assigning xrefs 211 and 215. The gallery preserves the source's Moscow label but explicitly flags the inconsistent country context rather than asserting that the project is in Russia or Türkiye.

## Presentation and claim limits

Seven cards retain the existing demo and school records and add five references. All images use equal 3:2 landscape CSS frames with `object-cover`; each card links to its complete stored image, without the presentation crop, in a new tab. The demo now uses a landscape construction image to avoid severe cropping of the former portrait. Captions include physical source pages and manufacturer attribution. Native pixel dimensions are shown by each link; low-resolution source limitations are disclosed in the gallery. The school link opens the complete retained derivative, not an uncropped PDF page.

The school package description is also supported by physical page 16. Missing years for hostel, office and warehouse are explicitly left unspecified. Reported durations are qualified as source-specific, not promises for new projects. No record is attributed to Tasblock Builder.
