import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';

export default function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const start = useRef<{x:number;y:number} | null>(null);
  const urls = [...new Set(images)];
  const change = (step: number) => setIndex(current => (current + step + urls.length) % urls.length);
  return <div role="region" aria-roledescription="carousel" aria-label={`Galeri ${title}`} tabIndex={0}
    onKeyDown={event => { if (urls.length > 1 && ['ArrowLeft','ArrowRight'].includes(event.key)) { event.preventDefault(); change(event.key === 'ArrowRight' ? 1 : -1); } }}
    onTouchStart={event => { const touch=event.touches[0]; start.current={x:touch.clientX,y:touch.clientY}; }}
    onTouchEnd={event => { const touch=event.changedTouches[0]; if (start.current && urls.length > 1) { const dx=touch.clientX-start.current.x; const dy=touch.clientY-start.current.y; if (Math.abs(dx)>45 && Math.abs(dx)>Math.abs(dy)) change(dx<0?1:-1); } start.current=null; }}
    className="project-gallery group relative aspect-[3/2] shrink-0 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#99D5D9]">
    <img src={urls[index]} alt={`${title} — foto ${index+1} daripada ${urls.length}`} loading="lazy" className="h-full w-full object-cover"/>
    {urls.length>1 && <><button type="button" onClick={()=>change(-1)} aria-label={`Foto sebelumnya: ${title}`} className="gallery-control absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-[#071827]/85 text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#99D5D9]"><ChevronLeft aria-hidden="true" size={22}/></button><button type="button" onClick={()=>change(1)} aria-label={`Foto seterusnya: ${title}`} className="gallery-control absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-[#071827]/85 text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#99D5D9]"><ChevronRight aria-hidden="true" size={22}/></button></>}
    <span aria-live="polite" aria-atomic="true" className="absolute bottom-3 left-3 rounded-full bg-[#071827]/85 px-3 py-1 text-xs font-semibold text-white">{index+1} / {urls.length}</span>
    <a href={urls[index]} target="_blank" rel="noopener noreferrer" aria-label={`Buka foto ${index+1} ${title} dalam saiz penuh`} className="gallery-control absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#071827]/85 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#99D5D9]"><Expand size={17} aria-hidden="true"/></a>
  </div>;
}
