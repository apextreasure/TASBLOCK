import { videoSource } from '../data/videoSources';
import { useState } from 'react';
export default function EmbeddedVideo({file,poster,title,portrait=false}:{file:string;poster:string;title:string;portrait?:boolean}) {
 const [active,setActive]=useState(false); const [failed,setFailed]=useState(false);
 const src=videoSource(file);
 return <figure className={`space-y-3 ${portrait?'max-w-[220px] mx-auto w-full':''}`}>
  <div className="overflow-hidden rounded-xl bg-transparent">{active && src && !failed ? <video controls autoPlay playsInline preload="none" src={src} poster={poster} aria-label={title} className="block w-full h-auto" onError={()=>setFailed(true)}/> : <img src={poster} alt={title} className="block w-full h-auto" loading="lazy"/>}</div>
  {!active && src && !failed && <button type="button" onClick={()=>setActive(true)} aria-label={`Mainkan ${title}`} className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#99D5D9]/50 bg-[#12314a] px-2 py-2 text-sm font-semibold whitespace-nowrap text-[#99D5D9] hover:bg-[#1b425c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99D5D9]"><span aria-hidden="true">▶</span>Mainkan video</button>}
  {(!src || failed) && <p className="rounded-lg bg-[#12314a] p-3 text-sm text-slate-200">Video tersedia atas permintaan.</p>}
  <figcaption className="text-sm text-slate-300">{title}</figcaption>
 </figure>;
}
