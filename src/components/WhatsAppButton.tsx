import { useEffect, useId, useRef, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_CONTACT, SERVICES_DATA } from '../data/tasblockData';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState(SERVICES_DATA[0].id);
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const service = SERVICES_DATA.find(item => item.id === topic)!;
  const message = `Salam Tasblock Builder, saya ingin bertanya mengenai ${service.title}. Mohon maklumat tentang skop dan ketersediaan.`;
  useEffect(() => {
    if (!isOpen) return;
    close.current?.focus();
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setIsOpen(false); trigger.current?.focus(); } };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [isOpen]);
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {isOpen && <section id={id} aria-labelledby={`${id}-title`} className="mb-3 w-80 sm:w-96 max-w-[calc(100vw-2rem)] max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-2xl bg-[#071827] border border-[#3EABB0]/40 shadow-2xl p-5 text-slate-100 space-y-4">
        <div className="flex items-center justify-between gap-3"><h2 id={`${id}-title`} className="font-bold text-white">Pertanyaan WhatsApp</h2><button ref={close} type="button" onClick={() => { setIsOpen(false); trigger.current?.focus(); }} aria-label="Tutup pertanyaan WhatsApp" className="p-2 rounded-lg hover:bg-slate-800"><X size={20} aria-hidden="true" /></button></div>
        <label htmlFor={`${id}-topic`} className="block text-sm font-semibold">Topik pertanyaan</label>
        <select id={`${id}-topic`} value={topic} onChange={event => setTopic(event.target.value)} className="w-full p-3 rounded-xl bg-slate-900 border border-slate-600 focus:ring-2 focus:ring-[#3EABB0]">{SERVICES_DATA.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}</select>
        <div className="rounded-xl border border-slate-700 p-3 space-y-2"><h3 className="text-sm font-bold text-[#99D5D9]">Pratonton mesej</h3><p className="text-sm text-slate-300">{message}</p></div>
        <p className="text-sm text-slate-300">Kepada {COMPANY_CONTACT.phoneDisplay}. Belum dihantar; anda perlu menghantar sendiri di WhatsApp.</p>
        <a href={`${COMPANY_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="block text-center px-4 py-3 rounded-xl bg-[#3EABB0] text-[#071827] font-bold hover:brightness-110">Buka draf di WhatsApp<span className="sr-only"> (tab baharu)</span></a>
      </section>}
      <button ref={trigger} type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls={isOpen ? id : undefined} aria-label="Hubungi WhatsApp Tasblock Builder" className="ml-auto flex items-center gap-2 py-3 px-4 rounded-full bg-[#3EABB0] text-[#071827] shadow-xl hover:brightness-110"><MessageCircle size={24} aria-hidden="true" /><span className="text-sm font-bold hidden sm:inline">Tanya Kami (WhatsApp)</span></button>
    </div>
  );
}
