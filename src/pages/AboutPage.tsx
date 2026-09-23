import { PageType } from '../types';
import { SERVICES_DATA } from '../data/tasblockData';
import { Building2, HeartHandshake, ArrowRight, Layers } from 'lucide-react';

export default function AboutPage({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-12">
      <header className="max-w-3xl mx-auto text-center space-y-5">
        <span className="inline-flex gap-2 items-center text-sm text-[#99D5D9] border border-[#3EABB0]/40 rounded-full px-4 py-2 bg-[#245D98]/20"><HeartHandshake size={16} /> Mengenai kami</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">Teknologi pengeluar.<br /><span className="text-[#3EABB0]">Fokus komuniti tempatan.</span></h1>
        <p className="text-slate-300 leading-relaxed">Tasblock Builder membantu kontraktor tempatan dan pelanggan individu meneroka penggunaan sistem binaan komposit Tasblock untuk keperluan projek berskala kecil.</p>
      </header>
      <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-10 space-y-8">
        <div className="max-w-3xl space-y-4"><p className="text-sm uppercase tracking-wider text-[#99D5D9]">Asal usul & peranan</p><h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">Hubungan keluarga, fokus yang berbeza</h2><p className="text-slate-300 leading-relaxed">Tasblock (M) Sdn. Bhd. ialah syarikat keluarga yang membangunkan dan mengilang teknologi Tasblock serta mempunyai pengalaman projek berskala besar. Pengasas Tasblock Builder berasal daripada keluarga pengeluar ini dan membangunkan inisiatif berasingan untuk kontraktor tempatan serta pelanggan individu.</p></div>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="p-6 rounded-2xl border border-slate-700 bg-slate-950/50 space-y-4"><Building2 className="text-[#7BB8D4]" aria-hidden="true" /><p className="text-sm text-[#7BB8D4]">Pengeluar teknologi</p><h3 className="text-xl font-bold text-white">Tasblock (M) Sdn. Bhd.</h3><p className="text-slate-300 leading-relaxed">Pembangunan dan pengilangan sistem berasaskan komposit termaju dan bio-komposit. Rekod teknologi dan projek dalam profil korporat dirujuk kepada pengeluar.</p></article>
          <article className="p-6 rounded-2xl border border-[#3EABB0]/40 bg-gradient-to-br from-[#1b3858] to-[#0d2238] space-y-4"><HeartHandshake className="text-[#3EABB0]" aria-hidden="true" /><p className="text-sm text-[#99D5D9]">Inisiatif untuk pasaran tempatan</p><h3 className="text-xl font-bold text-white">Tasblock Builder</h3><p className="text-slate-300 leading-relaxed">Fokus kepada perbincangan projek individu, keperluan kontraktor tempatan, latihan, bekalan komponen dan pemasangan melalui empat bidang perkhidmatan.</p></article>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed border-t border-slate-800 pt-5">Hubungan keluarga ini tidak menyatakan status anak syarikat atau pengedar eksklusif. Rekod projek dan dokumen pengeluar tidak secara automatik menjadi rekod pengalaman atau akreditasi Tasblock Builder.</p>
      </section>
      <section className="space-y-6"><h2 className="text-2xl font-bold text-white font-heading">Bagaimana kami boleh membantu</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{SERVICES_DATA.map(service => <article key={service.id} className="rounded-2xl border border-slate-800 p-6 bg-slate-900/60 space-y-3"><Layers className="text-[#3EABB0]" aria-hidden="true" /><h3 className="font-bold text-white text-lg">{service.title}</h3><p className="text-sm text-slate-300 leading-relaxed">{service.shortDesc}</p></article>)}</div></section>
      <section className="text-center space-y-5"><h2 className="text-2xl font-bold text-white font-heading">Mulakan dengan keperluan anda</h2><p className="text-slate-300">Pilih perkhidmatan yang sesuai atau daftar minat untuk mengetahui aturan latihan.</p><div className="flex flex-wrap gap-3 justify-center"><button onClick={() => onNavigate('services')} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3EABB0] text-[#071827] font-bold hover:brightness-110">Terokai perkhidmatan <ArrowRight size={18} /></button><button onClick={() => onNavigate('training')} className="px-6 py-3 rounded-xl bg-slate-800 text-white border border-slate-700 font-semibold hover:bg-slate-700">Daftar minat latihan</button></div></section>
    </div>
  );
}
