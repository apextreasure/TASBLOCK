# TASBLOCK — Content source of truth

Status: evidence-based draft for owner review, not a legal, technical or certification approval. Source facts below follow the supplied brief and `tasblock-audit/TASBLOCK-content-audit.md` (in the workspace alongside the repository). This implementation used that audit's extraction of the supplied CV; it did not independently revalidate laboratory reports or current registrations.

## Sources and publication boundaries

| Source | Supported content | Boundary |
| --- | --- | --- |
| Owner brief / relationship explanation | Tasblock (M) Sdn. Bhd. is the family manufacturer/developer with large-project experience; Builder is a separate initiative serving local contractors, individuals and smaller projects | Not evidence of legal subsidiary status, exclusivity, registered trading entity or inherited credentials |
| Owner brief | Four service areas: design/build, training, component supply, supply/install | Detailed deliverables, availability, coverage, prices, warranties and professional arrangements require agreement |
| Owner-supplied Malaysian number `0132744018` | Display `+60 13-274 4018`; international digits `60132744018`; WhatsApp `https://wa.me/60132744018` | Ownership and operational WhatsApp availability should be checked by owner; no alternate number invented |
| Tasblock (M) Sdn Bhd CV - 2026-R1, physical p. 8 | Advanced composite / bio-composite building system; wall panels W2, W3, W12, WB; base adaptors BC, B6; wall adaptors A1, A2, A3, A12, AC; beams Be1, Be2; accessories/connectors; waffle slabs and folded-plate floors | Names/categories only. Not approved dimensions, weight, strength, coverage, fire rating, installation advice or stock availability |
| CV physical p. 14 | 2016 demonstration: wall and structural components installed in four working days by three workers and one supervisor | Manufacturer-reported, project-specific demonstration, not complete-house delivery time or a Builder job |
| CV physical pp. 15–16 | 2017 package: four schools, 34 classrooms, four toilet blocks, five months | Manufacturer-reported package, not every school's duration or a Builder job. Do not merge with separate Yu Ying two-month statement |
| Original Builder Google Site | Context, audience and application labels | Labels do not establish Builder delivery role, completion status, location, quantity, savings or photo provenance |

Original reference pages:
- https://sites.google.com/view/tasblockbuilder/home
- https://sites.google.com/view/tasblockbuilder/projects-portfolio
- https://sites.google.com/view/tasblockbuilder/about-us/our-team-member

Manufacturer marketing records are not independent technical verification. Numerical project facts must retain source, attribution, scope and caveat beside them.

## Implemented content rules

- Malay informational pages retain the navy/teal visual theme and direct enquiry paths.
- Catalogue shows named component families only; no numerical technical specifications or concrete-block diagrams.
- Unknown email, address, opening hours and coverage remain empty in shared data. Consumers must hide empty contact fields rather than manufacture replacements.
- Training is an expression-of-interest flow only. Proposed topics are labelled as proposed; dates, venue, duration, fees, instructors, syllabus and certificates are not confirmed.
- Training form prepares a visible message. Users explicitly open WhatsApp and send it themselves. It does not claim successful submission or reserve a place.
- No photographs are paired with the manufacturer case studies. No unsupported Builder job portfolio is published.
- No testimonials are published without verified testimony and consent.
- Project design, suitability, permits and lending decisions require their own qualified review; use of the system guarantees none of these.

### Data compatibility

All existing exports and interfaces are preserved. `PROJECTS_DATA: ProjectItem[]` is deliberately empty: that legacy type requires client classification and numeric block counts that cannot truthfully describe these manufacturer records. A new `MANUFACTURER_CASES` export supplies the attributed case studies to ProjectsPage without fabricating fields. Do not render an empty Builder portfolio section elsewhere.

`TESTIMONIALS_DATA` is deliberately empty. Product technical strings and unconfirmed training metadata are intentionally blank and must not become empty specification tables. `svgType` remains solely for legacy type compatibility, not as an approved depiction. ProductsPage no longer mounts BlockVisualizer. Any other consumer of that legacy visualizer should be removed or replaced by its owning developer.

## Pending owner approvals / evidence

| Item | Required evidence / decision | Publication gate |
| --- | --- | --- |
| Logo and brand | Approved Builder vector/high-resolution logo and manufacturer brand-use authority | Do not describe generated artwork as the official mark |
| Legal relationship | Confirm trading/legal name, registration, family relationship wording and commercial authority | No subsidiary or exclusive-distributor assertion |
| Project roles and imagery | Job records, actual delivery entity, Builder scope, completion status, image ownership and permission | No named job/photo pairing or Builder attribution before evidence |
| Training | Instructor, syllabus, safety arrangements, venue, schedule, fees and certificate scope if any | Expression of interest only until confirmed; no accreditation promise |
| Product documents | Current approved catalogue, applicable reports, installation instructions and qualified project design | No performance figures or engineering advice based only on marketing |
| Certificate renewals | Current copies and issuer/scope checks | No active certification badges or automatic transfer to Builder |
| Services and commercial terms | Geographic coverage, staffing, professional appointments, supply/logistics, warranty and quote conditions | Subject to project-specific written agreement |
| Contact | Owner verifies number/WhatsApp, approved email, address and hours | Unknown items stay blank; no manufacturer address substituted |
| Testimonials | Traceable statements, consent and service attribution | Keep unpublished until approved |

### Certificate cautions recorded in the audit

The audit assessed copies against 23 September 2026. CV p. 28 CREAM product approval printed validity ends 18 September 2026; p. 35 manufacturer CIDB G7 registration printed expiry is 9 May 2026; p. 43 individual MyCREST facilitator document printed expiry is 7 February 2026. Those supplied copies were beyond printed dates at audit time. This does **not** prove no renewal exists or determine current registration status. Request and verify replacements before using current-status badges. Manufacturer/individual credentials do not automatically accredit Builder or its training. Redact personal identity numbers from any approved scans.

## Claims removed from this implementation's owned files

- Precast-concrete block, hollow-core rebar/grout, dry-stack, U-lintel and invented standard/corner/half-block product model.
- TBF-STD/CNR/UB/HLF product codes, invented dimensions, weights, strengths, coverage and fire ratings.
- Unsupported performance percentages, universal speed/cost/thermal/acoustic promises, fixed installation durations and retaining-wall safety claims.
- Fabricated customer names, quotations, verified badges and contractor-directory promises.
- Invented Builder projects, locations, built-up areas, block counts, timelines, savings, phases and photo-to-project pairings.
- Training prices, recurring dates, venues, seat caps, discounts and certificate/accreditation commitments.
- Unverified patent, SIRIM/CIDB status and general authority/lender approval claims.
- Placeholder phone numbers, invented email/address, office hours and coverage.
- Calculator links promising accurate quantities/costs from the rejected block model.

## Release review

This sheet records informational-page/shared-data remediation. Home, navigation/footer, contact and calculator are handled by other contributors. Review all consumers of shared exports, confirm no legacy block visualizer is mounted, test mobile/desktop layouts, service selection and the training WhatsApp draft flow, and confirm the contact destination before release. No deployment or publication approval is implied by these edits.
