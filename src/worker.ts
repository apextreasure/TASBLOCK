// Canonicalise document requests while static media stay on the asset CDN.
import {routeForPath,servicePath} from './seo';
interface Env { ASSETS: {fetch(request:Request):Promise<Response>}; }
export default {
 async fetch(request:Request,env:Env):Promise<Response>{
  const url=new URL(request.url);
  let redirect=false;
  if(url.protocol==='http:' || ['tasblockbuilder.com','tasblock.mail-82f.workers.dev'].includes(url.hostname)){
   url.protocol='https:';url.hostname='www.tasblockbuilder.com';url.port='';
   redirect=true;
  }
  const aliases:Record<string,string>={home:'/',about:'/mengenai-kami/',services:'/perkhidmatan/',products:'/sistem-tasblock/',projects:'/rujukan-projek/',training:'/latihan/',enquiry:'/pertanyaan-projek/',calculator:'/pertanyaan-projek/',contact:'/hubungi/'};
  const alias=aliases[url.pathname.replace(/^\/+|\/+$/g,'')];
  if(alias){url.pathname=alias;redirect=true;}
  if(url.pathname==='/perkhidmatan/' && url.searchParams.has('service')){url.pathname=servicePath(url.searchParams.get('service')!);url.searchParams.delete('service');redirect=true;}
  const route=routeForPath(url.pathname);
  if(route && route.path!==url.pathname){url.pathname=route.path;redirect=true;}
  if(redirect)return Response.redirect(url.href,301);
  return env.ASSETS.fetch(request);
 }
};
