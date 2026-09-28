import { videoSource } from '../data/videoSources';
import { useState } from 'react';
export default function EmbeddedVideo({file,poster,title,portrait=false}:{file:string;poster:string;title:string;portrait?:boolean}) {
 const [active,setActive]=useState(false); const [failed,setFailed]=useState(false);
 const src=videoSource(file);
 return <figure className={`space-y-3 ${portrait?'max-w-[220px] mx-auto w-full':''}`}><div className="relative overflow-hidden rounded-xl bg-transparent">{active && src && !failed ? <video controls autoPlay playsInline preload="none" src={src} poster={poster} aria-label={title} className="block w-full h-auto" onError={()=>setFailed(true)}/> : <><img src={poster} alt={title} className="block w-full h-auto" loading="lazy"/>{src && !failed ? <button onClick={()=>setActive(true)} aria-label={`Mainkan ${title}`} className="absolute inset-0 flex items-center justify-center bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#99D5D9]"><span className="rounded-full bg-[#99D5D9] px-5 py-4 font-bold text-[#071827]">▶ Mainkan video</span></button>:<p className="bg-[#12314a] p-3 text-sm text-slate-200">Video tersedia atas permintaan.</p>}</>}</div><figcaption className="text-sm text-slate-300">{title}</figcaption></figure>;
}
