"""All-page typography and footer branding regression."""
import os
from pathlib import Path
from playwright.sync_api import sync_playwright
base=os.environ.get('QA_BASE_URL','http://127.0.0.1:4173')
out=Path(os.environ.get('QA_OUTPUT','/tmp/tasblock-readability'));out.mkdir(parents=True,exist_ok=True)
failures=[]
with sync_playwright() as p:
    browser=p.chromium.launch(args=['--no-sandbox']);page=browser.new_page()
    page.on('pageerror',lambda e:failures.append(str(e)))
    for width in [375,768,1536]:
        page.set_viewport_size({'width':width,'height':1000})
        for route in ['home','services','products','projects','training','about','enquiry','contact']:
            page.goto(base+'/#'+route,wait_until='networkidle')
            small=page.evaluate('''()=>[...document.querySelectorAll('main *,footer *')].filter(e=>e.getClientRects().length && [...e.childNodes].some(n=>n.nodeType===3 && n.textContent.trim()) && !e.closest('svg') && parseFloat(getComputedStyle(e).fontSize)<18).map(e=>({text:e.textContent.slice(0,60),size:getComputedStyle(e).fontSize}))''')
            if small:failures.append(f'{width}/{route}: small text {small[:5]}')
            if 'BUILDER' not in page.locator('footer').inner_text():failures.append('Footer label missing')
            if not page.evaluate('document.documentElement.scrollWidth<=innerWidth'):failures.append(f'{width}/{route}: overflow')
            if route=='home':
                page.screenshot(path=str(out/f'home-{width}.png'))
                page.locator('footer').scroll_into_view_if_needed();page.screenshot(path=str(out/f'footer-{width}.png'),full_page=True)
    browser.close()
print('\n'.join(failures) if failures else 'PASS: all eight pages, minimum 18px content, footer branding, no overflow or page errors')
assert not failures
