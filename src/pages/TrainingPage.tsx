import { useState, type FormEvent } from 'react';
import { PageType } from '../types';
import { TRAINING_COURSES, COMPANY_CONTACT } from '../data/tasblockData';
import { GraduationCap, ArrowRight, Check, MessageCircle } from 'lucide-react';

export default function TrainingPage({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  const [name, setName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [location, setLocation] = useState('');
  const [background, setBackground] = useState('Kontraktor tempatan');
  const [message, setMessage] = useState('');
  const course = TRAINING_COURSES[0];
  const whatsappUrl = `${COMPANY_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  function prepareMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !location.trim()) return;
    setMessage(`Salam Tasblock Builder, saya ingin mendaftar minat latihan sistem Tasblock.\nNama: ${name.trim()}\nOrganisasi: ${organisation.trim() || 'Individu'}\nLokasi: ${location.trim()}\nLatar belakang: ${background}\nMohon maklumat kandungan, jadual, lokasi dan aturan latihan apabila disahkan. Saya memahami ini bukan tempahan tempat.`);
  }
  const fieldClass = 'w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-[#3EABB0]';
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-12">
      <header className="max-w-3xl mx-auto text-center space-y-5"><span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3EABB0]/40 bg-[#245D98]/20 text-sm text-[#99D5D9]"><GraduationCap size={16} /> Untuk kontraktor & individu</span><h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">Kenali sistem Tasblock.<br /><span className="text-[#3EABB0]">Mulakan dengan minat.</span></h1><p className="text-slate-300 leading-relaxed">Berminat memahami komponen dan pemasangan sistem binaan komposit Tasblock? Kongsikan latar belakang anda untuk perbincangan keperluan latihan.</p></header>
      <section className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6"><article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-5"><GraduationCap size={32} className="text-[#3EABB0]" aria-hidden="true" /><p className="text-sm text-[#99D5D9]">{course.audience}</p><h2 className="text-2xl font-bold text-white font-heading">{course.title}</h2><h3 className="font-semibold text-white">Topik cadangan untuk dibincangkan</h3><ul className="space-y-4">{course.syllabus.map(topic => <li key={topic} className="flex items-start gap-3 text-slate-300 leading-relaxed"><Check size={18} className="text-[#3EABB0] shrink-0 mt-1" />{topic}</li>)}</ul><p className="text-sm text-slate-400 border-t border-slate-800 pt-4">Silibus akhir, tenaga pengajar dan format latihan perlu disahkan. Ini bukan panduan pemasangan kendiri.</p></article><aside className="rounded-2xl border border-[#3EABB0]/30 bg-[#245D98]/15 p-6 space-y-3"><h2 className="text-lg font-bold text-white">Daftar minat, bukan tempahan tempat</h2><p className="text-sm text-slate-300 leading-relaxed">Tarikh, lokasi, tempoh dan yuran belum dimuktamadkan. Tiada bayaran diminta melalui halaman ini. Pendaftaran minat tidak menjanjikan sijil, akreditasi atau kelayakan profesional.</p></aside><button onClick={() => onNavigate('products')} className="inline-flex items-center gap-2 text-[#99D5D9] font-semibold hover:text-white">Kenali komponen dahulu <ArrowRight size={18} /></button></div>
        <div className="rounded-3xl border border-[#3EABB0]/30 bg-gradient-to-b from-[#0d2238] to-[#071827] p-6 sm:p-8 space-y-6">
          <div><h2 className="text-2xl font-bold text-white font-heading">Daftar minat latihan</h2><p className="text-sm text-slate-300 mt-3 leading-relaxed">Sediakan mesej untuk disemak, kemudian buka WhatsApp untuk menghantarnya sendiri. Tiada pendaftaran disimpan atau dihantar secara automatik oleh borang ini.</p></div>
          <form onSubmit={prepareMessage} onChange={() => setMessage('')} className="space-y-5">
            <div className="space-y-2"><label htmlFor="training-name" className="block text-sm font-semibold text-slate-200">Nama *</label><input id="training-name" autoComplete="name" required maxLength={100} value={name} onChange={event => setName(event.target.value)} className={fieldClass} /></div>
            <div className="space-y-2"><label htmlFor="training-organisation" className="block text-sm font-semibold text-slate-200">Syarikat / organisasi (pilihan)</label><input id="training-organisation" autoComplete="organization" maxLength={150} value={organisation} onChange={event => setOrganisation(event.target.value)} className={fieldClass} /></div>
            <div className="space-y-2"><label htmlFor="training-location" className="block text-sm font-semibold text-slate-200">Bandar / negeri *</label><input id="training-location" required maxLength={150} value={location} onChange={event => setLocation(event.target.value)} className={fieldClass} /></div>
            <div className="space-y-2"><label htmlFor="training-background" className="block text-sm font-semibold text-slate-200">Latar belakang</label><select id="training-background" value={background} onChange={event => setBackground(event.target.value)} className={fieldClass}>{['Kontraktor tempatan', 'Tukang / pasukan tapak', 'Jurutera / pelajar', 'Pemilik projek / individu'].map(option => <option key={option}>{option}</option>)}</select></div>
            <button type="submit" className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-[#3EABB0] text-[#071827] font-bold hover:brightness-110">Sediakan mesej minat <ArrowRight size={18} /></button>
          </form>
          {message && <div aria-live="polite" className="space-y-4 border-t border-slate-700 pt-5"><h3 className="font-bold text-white">Semak mesej anda</h3><p className="text-sm text-slate-300 whitespace-pre-wrap break-words rounded-xl bg-slate-950/70 p-4">{message}</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#3EABB0] text-[#071827] px-5 py-3 font-bold"><MessageCircle size={18} /> Buka WhatsApp untuk hantar</a><p className="text-sm text-slate-400">Belum dihantar. Tekan hantar di WhatsApp. Jika pautan tidak dibuka, salin mesej ini dan hubungi {COMPANY_CONTACT.phoneDisplay}.</p></div>}
        </div>
      </section>
    </div>
  );
}
