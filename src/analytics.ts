import {ga4MeasurementId} from './data/analyticsConfig';
export type AnalyticsConsent='granted'|'denied';
type EventName='whatsapp_click'|'phone_click'|'enquiry_preview'|'training_interest_preview';
declare global {interface Window {dataLayer?:unknown[];gtag?:(...args:unknown[])=>void;}}
const STORAGE_KEY='tasblock:google-analytics-consent';
const configuredId=String(import.meta.env.VITE_GA4_MEASUREMENT_ID || ga4MeasurementId).trim();
export const measurementId=/^G-[A-Z0-9]{6,20}$/.test(configuredId)?configuredId:'';
let started=false,lastPath='',lastLocation='',memoryConsent:AnalyticsConsent|undefined;
export function analyticsConsent():AnalyticsConsent|undefined {
 try {const saved=localStorage.getItem(STORAGE_KEY);return saved==='granted'||saved==='denied'?saved:memoryConsent;}catch{return memoryConsent;}
}
export function cleanAnalyticsUrl(raw:string,allowCampaign=false):string {
 if(!raw)return '';
 try {const url=new URL(raw);if(!['https:','http:'].includes(url.protocol))return '';const clean=new URL(url.origin+url.pathname);
  if(allowCampaign)for(const key of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']){const value=url.searchParams.get(key);if(value && /^[A-Za-z0-9_.~ -]{1,100}$/.test(value))clean.searchParams.set(key,value);}
  return clean.href;
 }catch{return '';}
}
function disabled(value:boolean){(window as unknown as Record<string,unknown>)['ga-disable-'+measurementId]=value;}
export function trackPageView(){
 if(!measurementId || !started || analyticsConsent()!=='granted')return;
 const path=window.location.pathname;if(path===lastPath)return;
 const location=cleanAnalyticsUrl(window.location.href,true);
 window.gtag?.('event','page_view',{send_to:measurementId,page_location:location,page_title:document.title,page_referrer:lastLocation||cleanAnalyticsUrl(document.referrer)});
 lastPath=path;lastLocation=location;
}
export function startAnalytics(){
 if(!measurementId || analyticsConsent()!=='granted')return;
 disabled(false);
 if(!started){
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer!.push(arguments);};
  window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  window.gtag('js',new Date());
  window.gtag('set',{page_location:cleanAnalyticsUrl(window.location.href,true),page_referrer:cleanAnalyticsUrl(document.referrer)});
  window.gtag('config',measurementId,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,page_location:cleanAnalyticsUrl(window.location.href,true),page_referrer:cleanAnalyticsUrl(document.referrer)});
  window.gtag('consent','update',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  const script=document.createElement('script');script.id='tasblock-ga4';script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+measurementId;document.head.appendChild(script);
  started=true;
 }else window.gtag?.('consent','update',{analytics_storage:'granted'});
 trackPageView();
}
export function setAnalyticsConsent(choice:AnalyticsConsent){
 memoryConsent=choice;try{localStorage.setItem(STORAGE_KEY,choice);}catch{/* Retain choice for this page if storage is unavailable. */}
 if(choice==='granted'){startAnalytics();return;}
 if(!measurementId)return;
 disabled(true);lastPath='';lastLocation='';
 window.gtag?.('consent','update',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
 const domains=[window.location.hostname,'.'+window.location.hostname,'.tasblockbuilder.com'];
 for(const name of document.cookie.split(';').map(s=>s.split('=')[0].trim()).filter(n=>/^_ga(?:_|$)/.test(n))){
  document.cookie=name+'=; Max-Age=0; Path=/';
  for(const domain of domains)document.cookie=name+'=; Max-Age=0; Path=/; Domain='+domain;
 }
}
export function trackAnalyticsEvent(name:EventName,service?:string){
 if(!measurementId || !started || analyticsConsent()!=='granted')return;
 const params:Record<string,string>={send_to:measurementId,page_path:window.location.pathname,page_location:cleanAnalyticsUrl(window.location.href,true)};
 if(service && ['design-build','supply','supply-install','training'].includes(service))params.service_id=service;
 // Never attach link URLs, names, locations, enquiry text or WhatsApp message bodies.
 window.gtag?.('event',name,params);
}
export function trackContactClick(event:MouseEvent){
 const anchor=(event.target as Element)?.closest?.('a[href]');if(!anchor)return;
 const href=anchor.getAttribute('href')||'';
 if(href.startsWith('tel:')){trackAnalyticsEvent('phone_click');return;}
 try {const url=new URL(href,window.location.href);if(['wa.me','api.whatsapp.com','web.whatsapp.com'].includes(url.hostname))trackAnalyticsEvent('whatsapp_click');}catch{/* Not an outbound contact URL. */}
}
