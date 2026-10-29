import {useEffect,useState} from 'react';
import {analyticsConsent,measurementId,setAnalyticsConsent,startAnalytics,trackContactClick,trackPageView,type AnalyticsConsent} from '../analytics';
export default function GoogleAnalytics(){
 const [visible,setVisible]=useState(false);
 useEffect(()=>{
  if(!measurementId)return;
  let mounted=true;
  queueMicrotask(()=>{if(!mounted)return;const choice=analyticsConsent();setVisible(!choice);if(choice==='granted')startAnalytics();});
  const page=()=>queueMicrotask(()=>{if(mounted)trackPageView();});
  const storage=(event:StorageEvent)=>{if(event.key==='tasblock:google-analytics-consent'){if(event.newValue==='granted')startAnalytics();else setAnalyticsConsent('denied');}};
  window.addEventListener('tasblock:navigate',page);window.addEventListener('popstate',page);window.addEventListener('hashchange',page);window.addEventListener('storage',storage);document.addEventListener('click',trackContactClick);
  return()=>{mounted=false;window.removeEventListener('tasblock:navigate',page);window.removeEventListener('popstate',page);window.removeEventListener('hashchange',page);window.removeEventListener('storage',storage);document.removeEventListener('click',trackContactClick);};
 },[]);
 if(!measurementId)return null;
 const choose=(choice:AnalyticsConsent)=>{setAnalyticsConsent(choice);setVisible(false);};
 return <><button type="button" onClick={()=>setVisible(true)} className="mt-4 rounded-md text-sm text-[#99D5D9] underline underline-offset-4 focus-visible:outline focus-visible:outline-2">Tetapan Google Analytics</button>{visible && <section aria-label="Pilihan Google Analytics" className="fixed bottom-4 left-4 right-4 z-[70] max-w-xl rounded-2xl border border-[#99D5D9]/50 bg-[#071827] p-5 text-left shadow-2xl space-y-4"><h2 className="text-lg font-bold text-white">Pilihan Google Analytics</h2><p className="text-sm text-slate-300">Benarkan Google Analytics untuk mengukur lawatan halaman dan klik telefon / WhatsApp. Penjejakan tersuai ini tidak menghantar nama atau teks pertanyaan anda. Pilihan ini boleh diubah melalui pengaki laman.</p><div className="flex flex-wrap gap-3"><button type="button" onClick={()=>choose('granted')} className="rounded-lg bg-[#99D5D9] px-4 py-3 font-semibold text-[#071827]">Benarkan analitik</button><button type="button" onClick={()=>choose('denied')} className="rounded-lg border border-slate-500 px-4 py-3 font-semibold text-white">Tanpa Google Analytics</button></div></section>}</>;
}
