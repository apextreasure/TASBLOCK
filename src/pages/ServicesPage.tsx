import { useEffect, useState } from 'react';
import { PageType } from '../types';
import { SERVICES_DATA, COMPANY_CONTACT } from '../data/tasblockData';
import { Building2, GraduationCap, Truck, Hammer, ArrowRight, Check } from 'lucide-react';

const icons = [Building2, GraduationCap, Truck, Hammer];
const steps = [
  ['Kongsikan keperluan', 'Beritahu lokasi, tujuan projek, pelan yang tersedia dan skop bantuan yang diperlukan.'],
  ['Semak kesesuaian', 'Bincangkan sistem, keadaan tapak, keperluan profesional dan ketersediaan perkhidmatan.'],
  ['Persetujui skop', 'Perjelas tanggungjawab, dokumen, harga dan jadual sebelum sebarang komitmen kerja.'],
  ['Selaras pelaksanaan', 'Aturan kerja dan pemeriksaan ditentukan mengikut skop projek yang dipersetujui.']
];
export default function ServicesPage({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  const readService = () => {
    const value = new URLSearchParams(window.location.hash.split('?')[1] || '').get('service');
    return SERVICES_DATA.some(item => item.id === value) ? value! : 'design-build';
  };
  const [activeServiceId, setActiveServiceId] = useState(readService);
  useEffect(() => {
    const sync = () => setActiveServiceId(readService());
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);
  const service = SERVICES_DATA.find(item => item.id === activeServiceId) || SERVICES_DATA[0];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-12">
      <header className="max-w-3xl mx-auto text-center space-y-5"><p className="text-sm uppercase tracking-widest text-[#99D5D9]">Perkhidmatan Tasblock Builder</p><h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">Sokongan mengikut<br /><span className="text-[#3EABB0]">keperluan projek anda.</span></h1><p className="text-slate-300 leading-relaxed">Empat bidang perkhidmatan untuk kontraktor tempatan dan pelanggan individu. Pilih bidang di bawah untuk melihat perkara yang boleh dibincangkan.</p></header>
      <section aria-label="Pilihan perkhidmatan" className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{SERVICES_DATA.map((item, index) => { const Icon = icons[index]; return <button key={item.id} aria-pressed={item.id === service.id} onClick={() => { setActiveServiceId(item.id); window.location.hash = `services?service=${encodeURIComponent(item.id)}`; }} className={`text-left rounded-2xl border p-4 sm:p-6 space-y-4 transition-colors ${item.id === service.id ? 'border-[#3EABB0] bg-[#245D98]/30 text-white' : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-600'}`}><Icon className="text-[#3EABB0]" aria-hidden="true" /><span className="block font-bold">{item.title}</span></button>; })}</div>
        <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-10 space-y-8">
          <figure><img src={`/images/${service.id}.webp`} alt={`Ilustrasi ${service.title}`} width="1440" height="960" loading="lazy" className="block w-full h-auto object-contain rounded-2xl" /></figure>
          <div className="max-w-3xl space-y-3"><p className="text-sm text-[#99D5D9]">Untuk {service.targetAudience.toLowerCase()}</p><h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">{service.title}</h2><p className="text-slate-300 leading-relaxed">{service.fullDesc}</p></div>
          <div className="grid md:grid-cols-2 gap-8"><div className="space-y-4"><h3 className="font-bold text-white text-lg">Skop untuk dibincangkan</h3><ul className="space-y-3">{service.scope.map(item => <li key={item} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300"><Check size={18} className="text-[#3EABB0] shrink-0" />{item}</li>)}</ul></div><div className="space-y-6"><div className="space-y-3"><h3 className="font-bold text-white text-lg">Fokus perkhidmatan</h3>{service.benefits.map(item => <p key={item} className="text-sm text-slate-300 leading-relaxed">{item}</p>)}</div><div className="space-y-3"><h3 className="font-bold text-white text-lg">Perkara untuk dipersetujui</h3>{service.deliverables.map(item => <p key={item} className="rounded-xl border border-[#3EABB0]/20 bg-[#245D98]/15 p-4 text-sm text-slate-300">{item}</p>)}</div></div></div>
          <p className="text-sm text-slate-400 border-t border-slate-800 pt-5">Skop akhir, ketersediaan, kos dan jadual tertakluk kepada pengesahan. Kelulusan bangunan dan pembiayaan ialah keputusan pihak berkaitan, bukan jaminan perkhidmatan.</p>
          <div className="flex flex-wrap gap-3"><button onClick={() => { if (service.id === 'training') onNavigate('training'); else { window.location.hash = `enquiry?service=${encodeURIComponent(service.id)}`; window.scrollTo({ top: 0 }); } }} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3EABB0] text-[#071827] font-bold hover:brightness-110">{service.id === 'training' ? 'Daftar minat latihan' : 'Bincang skop projek'} <ArrowRight size={18} /></button><a href={`${COMPANY_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(`Salam Tasblock Builder, saya ingin bertanya mengenai ${service.title}.`)}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl border border-slate-700 bg-slate-800 text-white font-semibold hover:bg-slate-700">Tanya di WhatsApp</a></div>
        </article>
      </section>
      <section className="space-y-6"><h2 className="text-2xl font-bold text-white font-heading">Daripada pertanyaan kepada skop yang jelas</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{steps.map(([title, description], index) => <article key={title} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3"><span className="text-3xl font-mono text-[#3EABB0]">0{index + 1}</span><h3 className="font-bold text-white">{title}</h3><p className="text-sm text-slate-300 leading-relaxed">{description}</p></article>)}</div></section>
    </div>
  );
}
