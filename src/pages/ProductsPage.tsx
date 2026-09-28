import ComponentCatalogue from '../components/ComponentCatalogue';
import SystemComparison from '../components/SystemComparison';
import TechnicalEvidence from '../components/TechnicalEvidence';
import { PageType } from '../types';
import { PRODUCTS_DATA, COMPANY_CONTACT } from '../data/tasblockData';
import { Layers, MessageCircle } from 'lucide-react';
import { Photo, VideoSection } from '../components/PresentationMedia';
import { CompositeMaterials } from '../components/PresentationContent';
import PageContents, { SectionLabel } from '../components/PageContents';
export default function ProductsPage({onNavigate}:{onNavigate:(page:PageType)=>void}) {
return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-12">
 <header className="max-w-3xl space-y-4"><p className="text-sm text-[#99D5D9] font-semibold">KENALI TASBLOCK</p><h1 className="text-3xl sm:text-5xl font-bold text-white">Sistem, bahan & cara pemasangan</h1><p className="text-slate-300 leading-relaxed">Mulakan dengan gambaran sistem, kenali komponennya, kemudian lihat demonstrasi pemasangan dan pembongkaran. Maklumat teknikal terperinci berada di bahagian akhir.</p></header>
 <PageContents/>
 <VideoSection />

 <ComponentCatalogue/>
 <div id="materials" tabIndex={-1} className="scroll-mt-36"><SectionLabel id="materials"/><CompositeMaterials /></div>
 <VideoSection index={1}/><VideoSection index={2}/>
 <TechnicalEvidence />
 <SystemComparison />
 <section className="border-t border-slate-700 pt-8 flex flex-wrap gap-4"><button onClick={()=>onNavigate('projects')} className="min-h-12 rounded-xl bg-[#99D5D9] text-[#071827] px-5 font-bold">Seterusnya: lihat projek →</button><button onClick={()=>onNavigate('enquiry')} className="min-h-12 rounded-xl border border-slate-600 px-5 text-white">Bincangkan keperluan anda</button></section>
 </div>;
}
