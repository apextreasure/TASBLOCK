import ProjectGallery from './ProjectGallery';
import { conceptPortfolio } from '../data/conceptPortfolio';

export default function ConceptPortfolio() {
  return <section id="concept-portfolio" className="scroll-mt-36 space-y-6 border-t border-slate-700 pt-10" aria-labelledby="concept-title">
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold text-[#99D5D9]">PORTFOLIO REKA BENTUK ASAL</p>
      <h2 id="concept-title" className="text-2xl sm:text-3xl font-bold text-white">Konsep rumah & chalet TB01–TB06</h2>
      <p className="text-slate-300">Imej dan pelan daripada portfolio asal Tasblock Builder. Ini ialah rujukan konsep reka bentuk; gambar tidak mengesahkan projek telah dibina.</p>
      <a href="https://sites.google.com/view/tasblockbuilder/projects-portfolio" target="_blank" rel="noopener noreferrer" className="inline-block text-[#99D5D9] underline underline-offset-4">Lihat portfolio sumber →</a>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
      {conceptPortfolio.map(p => <article id={p.id} key={p.id} className="scroll-mt-36 min-w-0 rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/50">
        <ProjectGallery images={p.images} title={p.title} />
        <div className="p-5 space-y-3"><p className="text-xs font-semibold text-[#99D5D9]">Konsep reka bentuk</p><h3 className="text-lg font-bold text-white">{p.title}</h3><p className="text-slate-300 leading-relaxed">{p.description}</p></div>
      </article>)}
    </div>
  </section>;
}
