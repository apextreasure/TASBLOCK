import { PageType } from '../types';
import { MANUFACTURER_CASES } from '../data/tasblockData';
import { ArrowRight, BookOpen, Info } from 'lucide-react';

export default function ProjectsPage({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-12">
      <header className="max-w-3xl mx-auto text-center space-y-5">
        <span className="inline-flex gap-2 items-center text-sm text-[#99D5D9] border border-[#3EABB0]/40 rounded-full px-4 py-2 bg-[#245D98]/20"><BookOpen size={16} /> Rujukan teknologi</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">Projek & aplikasi Tasblock</h1>
        <p className="text-slate-300 leading-relaxed">Kenali penggunaan teknologi melalui rekod dalam profil korporat Tasblock (M) Sdn. Bhd. Rujukan pengeluar ini tidak dipersembahkan sebagai projek yang dilaksanakan oleh Tasblock Builder.</p>
      </header>
      <section aria-labelledby="case-title" className="space-y-6">
        <h2 id="case-title" className="text-2xl font-bold text-white font-heading">Rekod dalam profil pengeluar</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {MANUFACTURER_CASES.map((record) => (
            <article key={record.id} className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/80 flex flex-col">
              <figure className="p-4 pb-0"><img src={record.id === 'demo-2016' ? '/images/manufacturer-demo.webp' : '/images/manufacturer-school.webp'} alt={record.id === 'demo-2016' ? 'Rumah demonstrasi pengeluar 2016' : 'Bangunan SJKC Yu Ying dalam rujukan pengeluar'} width={record.id === 'demo-2016' ? 377 : 444} height={record.id === 'demo-2016' ? 411 : 262} loading="lazy" className="w-full h-72 object-contain bg-[#102c46] rounded-xl" /><figcaption className="text-xs text-slate-400 mt-3">{record.id === 'demo-2016' ? 'Foto rumah demonstrasi dalam profil Tasblock (M) Sdn. Bhd.' : 'Foto SJKC Yu Ying, petikan CIDB IBS Coffee Table Book dalam profil Tasblock (M) Sdn. Bhd.'} Rujukan pengeluar, bukan portfolio Builder.</figcaption></figure>
              <div className="p-6 sm:p-8 bg-gradient-to-br from-[#1b3858] to-[#0d2238] border-b border-slate-800">
                <p className="text-sm text-[#99D5D9] mb-4">Tasblock (M) Sdn. Bhd. · Rekod pengeluar</p>
                <p className="text-5xl font-bold text-[#3EABB0] font-mono mb-4">{record.year}</p>
                <h3 className="text-2xl font-bold font-heading text-white">{record.title}</h3>
              </div>
              <div className="p-6 sm:p-8 space-y-5 flex-1">
                <p className="text-slate-300 leading-relaxed">{record.description}</p>
                <ul className="flex flex-wrap gap-2">{record.facts.map(fact => <li key={fact} className="text-sm text-[#99D5D9] border border-[#3EABB0]/30 rounded-lg px-3 py-2 bg-[#245D98]/15">{fact}</li>)}</ul>
                <p className="text-sm text-slate-300 leading-relaxed border-l-2 border-[#3EABB0] pl-4">{record.caveat}</p>
                <p className="text-xs text-slate-400">Sumber: {record.source}. Peranan Tasblock Builder tidak disahkan dalam rekod ini.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <aside className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex items-start gap-4">
        <Info className="text-[#3EABB0] shrink-0 mt-1" aria-hidden="true" />
        <div className="space-y-2"><h2 className="text-lg font-bold text-white">Konteks yang jelas untuk setiap projek</h2><p className="text-sm text-slate-300 leading-relaxed">Foto di atas diambil daripada bahagian projek yang berkaitan dalam profil korporat pengeluar. Portfolio khusus Builder akan memerlukan pengesahan peranan, status kerja dan kebenaran penggunaan foto sebelum diterbitkan.</p></div>
      </aside>
      <section className="rounded-3xl border border-[#3EABB0]/30 bg-gradient-to-r from-[#1b3858] to-[#071827] p-8 space-y-4">
        <h2 className="text-2xl font-bold text-white font-heading">Setiap tapak mempunyai keperluan tersendiri</h2>
        <p className="text-slate-300">Kongsikan pelan, lokasi dan skop anda untuk perbincangan kesesuaian sistem. Kos dan jadual perlu dinilai bagi projek anda sendiri.</p>
        <button onClick={() => onNavigate('contact')} className="inline-flex gap-2 items-center px-6 py-3 bg-[#3EABB0] rounded-xl font-bold text-[#071827] hover:brightness-110">Bincang projek anda <ArrowRight size={18} /></button>
      </section>
    </div>
  );
}
