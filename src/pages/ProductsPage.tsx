import { PageType } from '../types';
import { PRODUCTS_DATA, COMPANY_CONTACT } from '../data/tasblockData';
import { Layers, ArrowRight, MessageCircle, FileText } from 'lucide-react';

export default function ProductsPage({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-12">
      <header className="max-w-3xl mx-auto text-center space-y-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#3EABB0]/40 bg-[#245D98]/20 px-4 py-2 text-sm text-[#99D5D9]"><Layers size={16} /> Teknologi & komponen</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">Satu sistem.<br /><span className="text-[#3EABB0]">Pelbagai komponen.</span></h1>
        <p className="text-slate-300 leading-relaxed">Tasblock ialah sistem binaan berasaskan bahan komposit termaju dan bio-komposit. Profil Tasblock (M) Sdn. Bhd. menerangkan rangkaian yang merangkumi dinding, adaptor, rasuk, penyambung dan lantai.</p>
      </header>
      <section aria-labelledby="catalogue-title" className="space-y-6">
        <div><p className="text-sm text-[#99D5D9] mb-2">Rujukan: maklumat komponen pengeluar</p><h2 id="catalogue-title" className="text-2xl font-heading font-bold text-white">Kenali keluarga komponen Tasblock</h2></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS_DATA.map((product) => (
            <article key={product.id} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 flex flex-col gap-4 hover:border-[#3EABB0]/50 transition-colors">
              <Layers className="text-[#3EABB0]" aria-hidden="true" />
              <div><p className="text-xs uppercase tracking-wider text-[#99D5D9]">{product.role}</p><h3 className="text-xl font-bold text-white mt-2">{product.name}</h3></div>
              {product.code && <p className="font-mono text-sm text-[#99D5D9]">{product.code}</p>}
              <p className="text-sm text-slate-300 leading-relaxed flex-1">{product.description}</p>
              <a href={`${COMPANY_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(`Salam Tasblock Builder, saya ingin mengetahui tentang ${product.name}${product.code ? ` (${product.code})` : ''} untuk projek saya.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 p-3 text-sm font-semibold text-white hover:bg-[#245D98]/40"><MessageCircle size={16} /> Tanya tentang komponen</a>
            </article>
          ))}
        </div>
      </section>
      <section className="rounded-3xl border border-[#3EABB0]/30 bg-gradient-to-br from-[#1b3858] to-[#071827] p-6 sm:p-10 space-y-4">
        <FileText className="text-[#3EABB0]" aria-hidden="true" />
        <h2 className="text-2xl font-bold font-heading text-white">Daripada katalog kepada keperluan projek</h2>
        <p className="max-w-3xl text-slate-300 leading-relaxed">Senarai ini ialah pengenalan komponen, bukan helaian spesifikasi atau panduan pemasangan. Dimensi, prestasi, kesesuaian struktur dan ketersediaan perlu disahkan melalui dokumentasi pengeluar serta semakan projek. Pemilihan bahan perlu mengikut reka bentuk dan nasihat profesional yang berkaitan.</p>
        <button onClick={() => onNavigate('contact')} className="inline-flex items-center gap-2 rounded-xl bg-[#3EABB0] text-[#071827] px-6 py-3 font-bold hover:brightness-110">Bincang keperluan komponen <ArrowRight size={18} /></button>
      </section>
    </div>
  );
}
