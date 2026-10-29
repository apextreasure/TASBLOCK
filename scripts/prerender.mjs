import { build } from 'vite';
import { readFile,writeFile,mkdir,rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
const root=process.cwd(),scratch=path.join(root,'.seo-build');
if(!path.resolve(scratch).startsWith(path.resolve(root)+path.sep))throw new Error('Build directory must remain inside project root');
await mkdir(scratch,{recursive:true});
try {
 await build({configFile:false,build:{ssr:'src/entry-server.tsx',outDir:scratch,emptyOutDir:true,rollupOptions:{output:{entryFileNames:'server.mjs'}}}});
 const {renderPage,routes,SITE_URL,structuredData,worker}=await import(pathToFileURL(path.join(scratch,'server.mjs')).href+'?v='+Date.now());
 const redirectChecks=[
  ['http://tasblockbuilder.com/products?x=1',SITE_URL+'/sistem-tasblock/?x=1'],
  ['https://tasblock.mail-82f.workers.dev/projects?project=icw',SITE_URL+'/rujukan-projek/?project=icw'],
  [SITE_URL+'/perkhidmatan/?service=supply&utm_source=test',SITE_URL+'/perkhidmatan/bekalan-komponen/?utm_source=test'],
  [SITE_URL+'/hubungi',SITE_URL+'/hubungi/']
 ];
 const testEnv={ASSETS:{fetch:async()=>new Response('asset')}};
 for(const [from,to] of redirectChecks){const result=await worker.fetch(new Request(from),testEnv);if(result.status!==301 || result.headers.get('location')!==to)throw new Error('Canonical redirect check failed: '+from);}
 if(await(await worker.fetch(new Request(SITE_URL+'/'),testEnv)).text()!=='asset')throw new Error('Canonical host asset pass-through failed');
 const template=await readFile('dist/index.html','utf8');
 if(!template.includes('<div id="root"></div>'))throw new Error('Run the client Vite build before pre-rendering');
 const escape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 for(const route of routes){
  let html=template.replace(/<title>[\s\S]*?<\/title>/,'<title>'+escape(route.title)+'</title>');
  html=html.replace(/\s*<meta\s+(?:name|property)="(?:description|og:[^"]+|twitter:[^"]+|robots)"[^>]*>/g,'');
  const tags=[['name','description',route.description],['name','robots','index,follow,max-image-preview:large'],['property','og:title',route.title],['property','og:description',route.description],['property','og:type','website'],['property','og:url',SITE_URL+route.path],['property','og:image',SITE_URL+'/images/hero.webp'],['property','og:image:alt','Tasblock Builder — sistem binaan IBS komposit'],['property','og:locale','ms_MY'],['property','og:site_name','Tasblock Builder'],['name','twitter:card','summary_large_image'],['name','twitter:title',route.title],['name','twitter:description',route.description],['name','twitter:image',SITE_URL+'/images/hero.webp']].map(([key,name,value])=>`<meta ${key}="${name}" content="${escape(value)}" />`).join('\n');
  html=html.replace('</head>',tags+'\n<link rel="canonical" href="'+SITE_URL+route.path+'" />\n<script id="site-structured-data" type="application/ld+json">'+JSON.stringify(structuredData(route.path)).replace(/</g,'\\u003c')+'</script>\n</head>');
  html=html.replace('<div id="root"></div>','<div id="root" data-path="'+route.path+'">'+renderPage(route.path)+'</div>');
  const dest=path.join(root,'dist',route.path.slice(1));await mkdir(dest,{recursive:true});await writeFile(path.join(dest,'index.html'),html);
 }
 await writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+routes.map(r=>'<url><loc>'+SITE_URL+r.path+'</loc></url>').join('\n')+'\n</urlset>\n');
 await writeFile('dist/404.html','<!doctype html><html lang="ms"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Halaman tidak dijumpai | Tasblock Builder</title><body style="background:#071827;color:white;font:18px system-ui;max-width:800px;margin:80px auto;padding:24px"><h1>Halaman tidak dijumpai</h1><p>Pautan mungkin telah berubah.</p><a style="color:#99d5d9" href="/">Kembali ke Tasblock Builder</a></body></html>');
 console.log('Pre-rendered '+routes.length+' crawlable pages and sitemap.xml');
} finally {await rm(scratch,{recursive:true,force:true});}
