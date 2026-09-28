import { videoSource } from '../data/videoSources';
import { SectionLabel } from './PageContents';
import { useState } from 'react';
import { presentationAssets } from '../data/presentationAssets';
import { COMPANY_CONTACT } from '../data/tasblockData';

export function asset(id: string) {
  const value = presentationAssets.find(item => item.id === id);
  if (!value) throw new Error(`Unknown presentation asset: ${id}`);
  return value;
}
export const mediaFocus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#99D5D9]';
export function Photo({ id, technical = false }: { id: string; technical?: boolean }) {
  const image = asset(id);
  if (image.kind !== 'image') return null;
  return <figure className="space-y-2 min-w-0"><a href={image.url} target="_blank" rel="noopener noreferrer" className={`block rounded-xl ${mediaFocus}`} aria-label={`${image.alt_ms} — lihat imej penuh (tab baharu)`}><img src={image.url} alt={image.alt_ms} width={image.width} height={image.height} loading="lazy" decoding="async" className={`w-full rounded-xl ${technical ? 'h-56 object-contain bg-white p-4' : 'aspect-[3/2] object-cover'}`} /></a><figcaption className="text-sm text-slate-300">{!id.includes('design-render') && image.alt_ms}</figcaption></figure>;
}
const captions = [
 ['tasblock-system-assembly-animation', 'Animasi sistem', 'Pengenalan visual kepada susunan panel, adaptor dan sambungan.'],
 ['tasblock-wall-assembly-timelapse', 'Pemasangan dinding', 'Rakaman dipercepat pemasangan dinding demonstrasi; bukan penyiapan sebuah rumah lengkap.'],
 ['tasblock-wall-dismantling-timelapse', 'Pembongkaran untuk guna semula', 'Rakaman dipercepat pembongkaran. Kesesuaian penggunaan semula bergantung pada keadaan komponen.'],
];
export function VideoPlayer({ index }: { index: number }) {
 const [failed,setFailed] = useState(false);
 const [active,setActive] = useState(false);
 const [id,title,description] = captions[index]; const video = asset(id);
 if (video.kind !== 'video') return null;
 const src = videoSource(index===0 ? 'system-animation-cropped.mp4' : video.file.split('/').pop()!);
 const poster = index===0 ? '/images/tasblock/system-animation-cropped-poster.jpg' : video.poster_url;
 return <figure className="min-w-0"><div className="relative overflow-hidden rounded-2xl border border-white/15 bg-transparent shadow-2xl">{src && active && !failed ? <video ref={el => { if (el) { el.focus(); void el.play().catch(() => {}); } }} tabIndex={0} className="block w-full h-auto" controls playsInline preload="none" poster={poster} src={src} aria-label={title} onError={() => setFailed(true)} /> : <><img src={poster} alt={title} width={1280} height={720} loading="lazy" className="block w-full h-auto" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />{src && !failed ? <button type="button" onClick={() => setActive(true)} aria-label={`Tonton ${title}`} className={`absolute inset-0 group flex flex-col items-center justify-center gap-4 text-white ${mediaFocus}`}><span aria-hidden="true" className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#99D5D9] text-[#071827] shadow-lg motion-safe:transition-transform motion-safe:group-hover:scale-110"><svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span><span className="rounded-full bg-black/60 px-4 py-2 text-sm font-semibold">Tonton {title.toLowerCase()}</span></button> : <a href={`${COMPANY_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(`Salam Tasblock Builder, saya ingin melihat video ${title}.`)}`} target="_blank" rel="noopener noreferrer" className={`absolute bottom-5 left-5 right-5 rounded-xl bg-[#99D5D9] px-4 py-3 text-center font-bold text-[#071827] ${mediaFocus}`}>Minta video demonstrasi</a>}</>}</div><figcaption className="flex justify-between gap-4 pt-3 text-xs text-slate-400"><span>Tasblock (M) Sdn. Bhd. · {index === 0 ? 'Animasi' : 'Rakaman dipercepat'}</span><span>{Math.round(video.seconds)} saat</span></figcaption></figure>;
}
export function VideoSection({ index = 0 }: { index?: 0 | 1 | 2 }) {
 const stories = [
  { eyebrow:'01 / KENALI SISTEM',title:'Satu sistem. Lihat bagaimana ia bersambung.',body:'Daripada panel kepada ruang — terokai bagaimana komponen Tasblock disusun melalui animasi pengeluar.',points:['Kenali panel','Lihat sambungan','Bayangkan ruang'],link:'#products',cta:'Terokai komponen'},
  { eyebrow:'02 / CEPAT + MUDAH + TEPAT',title:'Pemasangan pertama dalam 2.5 jam.',body:'Kaedah pembinaan Tasblock dalam tindakan: pengeluar melaporkan pemasangan pertama struktur demonstrasi ini mengambil masa 2.5 jam.',points:['Alat tangan kecil dan alat kuasa mudah alih','Tanpa jentera berat dalam demonstrasi ini','Kaedah pemasangan yang memfokuskan produktiviti'],link:'#training',cta:'Bincang latihan pemasangan'},
  { eyebrow:'03 / PENYELESAIAN EKONOMI KITARAN',title:'Dibongkar sepenuhnya dalam 45 minit.',body:'Pengeluar menerangkan sistem demonstrasi ini sebagai sistem menanggung beban yang 100% boleh dibongkar, dengan masa pembongkaran 45 minit.',points:['Komponen boleh digunakan semula atau untuk tujuan baharu','Hanya alat tangan kecil diperlukan untuk pembongkaran','Nilai keadaan komponen sebelum penggunaan seterusnya'],link:'#projects?project=seaplast-2023',cta:'Lihat rujukan SEAPLAST'},
 ];
 const story=stories[index];const id=index===0?'assembly-videos':index===1?'installation-story':'reuse-story';
 return <section id={id} tabIndex={-1} aria-labelledby={`${id}-title`} className="scroll-mt-36 relative overflow-hidden rounded-3xl border border-[#3EABB0]/25 bg-gradient-to-br from-[#12314a] via-[#0b2033] to-[#071827] p-5 sm:p-8 lg:p-10"><div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center"><div className={`space-y-5 lg:col-span-2 ${index===2?'lg:order-2':''}`}><SectionLabel id={id}/><h2 id={`${id}-title`} className="text-2xl sm:text-3xl xl:text-4xl font-bold text-white leading-tight">{story.title}</h2><p className="text-slate-300 leading-relaxed">{story.body}</p><ol className="space-y-3 border-l border-[#99D5D9]/30 pl-4">{story.points.map((point,i)=><li key={point} className="flex gap-3 text-sm text-slate-200"><span className="font-mono shrink-0 w-6 whitespace-nowrap text-[#99D5D9]">0{i+1}</span>{point}</li>)}</ol><a href={story.link} className={`inline-flex min-h-12 items-center gap-3 font-bold text-[#99D5D9] ${mediaFocus}`}>{story.cta}<span aria-hidden="true">→</span></a></div><div className="lg:col-span-3"><VideoPlayer index={index}/>{index!==0 && <p className="mt-3 text-xs text-slate-400 leading-relaxed">Maklumat demonstrasi: Tasblock (M) Sdn. Bhd. Masa yang dilaporkan adalah untuk demonstrasi ini, bukan tempoh menyiapkan rumah lengkap. Video dipercepat; tempoh klip berbeza daripada tempoh kerja.{index===2 && " Kesesuaian menanggung beban dan guna semula mengikut reka bentuk serta keadaan komponen."}</p>}</div></div></section>;
}
export function TechnicalDocuments() {
 return <section className="rounded-2xl border border-[#3EABB0]/40 p-6 sm:p-8 space-y-4"><h2 className="text-2xl font-bold text-white">Minta dokumen teknikal</h2><p className="text-slate-300 max-w-3xl">Bincangkan spesifikasi komponen dan dokumen ujian pengeluar yang berkaitan dengan keperluan projek anda.</p><a className={`inline-flex min-h-12 items-center rounded-xl bg-[#3EABB0] text-[#071827] font-bold px-5 py-3 ${mediaFocus}`} href={`${COMPANY_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent('Salam Tasblock Builder, saya ingin meminta spesifikasi komponen dan dokumen ujian pengeluar yang berkaitan untuk projek saya.')}`} target="_blank" rel="noopener noreferrer">Minta dokumen teknikal melalui WhatsApp</a></section>;
}
