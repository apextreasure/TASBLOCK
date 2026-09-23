"""Assert three distinct desktop header groups and centered main links."""
import os
from pathlib import Path
from playwright.sync_api import sync_playwright
base=os.environ.get('QA_BASE_URL','http://127.0.0.1:4173')
out=Path(os.environ.get('QA_OUTPUT','/tmp/tasblock-header'))
out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
    browser=p.chromium.launch(args=['--no-sandbox'])
    page=browser.new_page()
    for width in [1536,1920,2135]:
        page.set_viewport_size({'width':width,'height':1000})
        page.goto(base,wait_until='networkidle')
        nav=page.get_by_role('navigation',name='Navigasi utama',exact=True)
        assert nav.locator('button').count()==6, 'Main navigation must contain six links, excluding actions'
        actions=page.get_by_role('navigation',name='Tindakan projek',exact=True)
        assert actions.locator('button').all_text_contents()==['Pertanyaan Projek','Hubungi']
        brand=page.get_by_role('button',name='Tasblock Builder — Laman Utama').bounding_box()
        left=nav.locator('button').first.bounding_box();right=nav.locator('button').last.bounding_box();a=actions.bounding_box()
        gap_left=left['x']-(brand['x']+brand['width'])
        gap_right=a['x']-(right['x']+right['width'])
        assert gap_left>12 and gap_right>12, 'Header groups overlap or crowd'
        assert abs(gap_left-gap_right)<3, f'Main group not centered between brand/actions: {gap_left}, {gap_right}'
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
        page.screenshot(path=str(out/f'centered-header-{width}.png'))
        actions.get_by_role('button',name='Pertanyaan Projek',exact=True).click()
        assert '#enquiry' in page.url
        actions.get_by_role('button',name='Hubungi',exact=True).click()
        assert '#contact' in page.url
    browser.close()
print('PASS: centered six-link navigation, separate right actions, no overlap, both actions work')
