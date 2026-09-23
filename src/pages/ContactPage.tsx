import { PageType } from '../types';
import { COMPANY_CONTACT, FAQ_DATA } from '../data/tasblockData';
import ProjectEnquiry from '../components/IbsCalculator';

export default function ContactPage({ onNavigate: _onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-12">
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#99D5D9]">Pertanyaan & perbincangan projek</p>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">Hubungi Tasblock Builder</h1>
        <p className="text-slate-300 leading-relaxed">Kongsikan keperluan reka & bina, pembekalan komponen, bekal & pasang atau minat latihan. Skop dan ketersediaan perkhidmatan perlu disahkan mengikut keperluan anda.</p>
      </header>
      <section aria-label="Saluran hubungan" className="max-w-5xl mx-auto rounded-3xl border border-[#7BB8D4]/25 bg-[#0d2238] p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-white">Telefon & WhatsApp</h2>
        <div className="flex flex-wrap items-center gap-4">
          <a href={`tel:+${COMPANY_CONTACT.phoneRaw}`} className="text-[#99D5D9] text-lg font-bold hover:underline">{COMPANY_CONTACT.phoneDisplay}</a>
          <a href={COMPANY_CONTACT.whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#3EABB0] text-[#071827] px-5 py-3 font-bold hover:brightness-110">Buka WhatsApp<span className="sr-only"> (tab baharu)</span></a>
        </div>
        <p className="text-sm text-slate-300">Gunakan borang di bawah untuk menyediakan ringkasan projek. Membuka WhatsApp tidak menghantar mesej secara automatik.</p>
      </section>
      <ProjectEnquiry />
      <section className="max-w-5xl mx-auto space-y-5" aria-labelledby="contact-faq-title">
        <h2 id="contact-faq-title" className="text-2xl font-bold text-white font-heading">Soalan lazim</h2>
        {FAQ_DATA.map(faq => <details key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"><summary className="font-semibold text-slate-100 cursor-pointer">{faq.question}</summary><p className="pt-4 text-sm text-slate-300 leading-relaxed">{faq.answer}</p></details>)}
      </section>
    </div>
  );
}
