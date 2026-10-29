import assert from 'node:assert/strict';
import {build} from 'vite';
import {rm} from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
const root=process.cwd(),temp=path.resolve(root,'.analytics-check');
assert.ok(temp.startsWith(path.resolve(root)+path.sep));
async function load(id,name){
 await build({configFile:false,plugins:[{name:'isolated-test-config',transform(code,file){if(file.replaceAll('\\','/').endsWith('/src/data/analyticsConfig.ts'))return "export const ga4MeasurementId='';";}}],define:{'import.meta.env.VITE_GA4_MEASUREMENT_ID':JSON.stringify(id)},build:{ssr:'src/analytics.ts',outDir:temp,emptyOutDir:false,rollupOptions:{output:{entryFileNames:name+'.mjs'}}}});
 return import(pathToFileURL(path.join(temp,name+'.mjs')).href);
}
const scripts=[],store=new Map();
globalThis.localStorage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)};
globalThis.window={location:{href:'https://www.tasblockbuilder.com/hubungi/?text=PRIVATE_MESSAGE&email=PRIVATE_EMAIL&utm_source=google',pathname:'/hubungi/',hostname:'www.tasblockbuilder.com'}};
globalThis.document={title:'Hubungi Tasblock Builder',referrer:'https://www.google.com/search?q=PRIVATE_QUERY',cookie:'',head:{appendChild:s=>scripts.push(s)},createElement:()=>({})};
try {
 const empty=await load('','empty');empty.setAnalyticsConsent('granted');empty.startAnalytics();assert.equal(scripts.length,0,'No ID must not load a Google tag');
 store.clear();delete window.gtag;delete window.dataLayer;
 const a=await load('G-TEST123456','configured');a.startAnalytics();assert.equal(scripts.length,0,'No consent must not load a tag');
 a.setAnalyticsConsent('denied');a.startAnalytics();assert.equal(scripts.length,0,'Denied consent must not load a tag');
 a.setAnalyticsConsent('granted');assert.equal(scripts.length,1);a.startAnalytics();assert.equal(scripts.length,1,'Initialisation is idempotent');
 const events=()=>window.dataLayer.map(x=>Array.from(x)).filter(x=>x[0]==='event');
 assert.equal(events().filter(x=>x[1]==='page_view').length,1,'One initial page view');
 window.location.pathname='/sistem-tasblock/';window.location.href='https://www.tasblockbuilder.com/sistem-tasblock/?name=PRIVATE_NAME';a.trackPageView();a.trackPageView();assert.equal(events().filter(x=>x[1]==='page_view').length,2,'One view per changed page');
 a.trackContactClick({target:{closest:()=>({getAttribute:()=> 'https://wa.me/60132744150?text=PRIVATE_MESSAGE'})}});
 assert.equal(events().at(-1)[1],'whatsapp_click');assert.equal(events().at(-1)[2].link_url,'https://wa.me/60132744150');
 for(const href of ['https://api.whatsapp.com/send?phone=60132744150&text=PRIVATE_MESSAGE','https://web.whatsapp.com/send?phone=60132744150&text=PRIVATE_MESSAGE']){
  a.trackContactClick({target:{closest:()=>({getAttribute:()=>href})}});assert.equal(events().at(-1)[1],'whatsapp_click');assert.equal(events().at(-1)[2].link_url,'https://wa.me/60132744150');
 }
 a.trackAnalyticsEvent('enquiry_preview','PRIVATE_NAME');assert.ok(!('service_id' in events().at(-1)[2]));
 assert.ok(!JSON.stringify(window.dataLayer).includes('PRIVATE_'),'No private query, referrer or message data in payloads');
 const before=events().length;a.setAnalyticsConsent('denied');a.trackAnalyticsEvent('phone_click');a.trackPageView();assert.equal(events().length,before,'Withdrawal stops application event collection');
 assert.equal(window['ga-disable-G-TEST123456'],true);
 console.log('PASS: missing ID, consent gating, page-view deduplication, contact privacy and withdrawal. No network requests were made by this test.');
} finally {await rm(temp,{recursive:true,force:true});}
