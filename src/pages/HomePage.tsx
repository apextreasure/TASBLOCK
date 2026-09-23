import { PageType } from '../types';
import { ArrowRight, Building2, GraduationCap, Truck, Hammer, Layers } from 'lucide-react';
import { SERVICES_DATA, PRODUCTS_DATA } from '../data/tasblockData';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

const focusStyle = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#99D5D9]';
const serviceIcons = [Building2, GraduationCap, Truck, Hammer];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      <section className="relative overflow-hidden pt-12 md:pt-20 lg:pt-24">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#245D98]/20 via-transparent to-[#3EABB0]/10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pb-8">
          <p className="text-[#99D5D9] font-semibold">Kontraktor tempatan · Pelanggan individu · Projek berskala kecil</p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-heading">
            Teknologi Tasblock untuk <span className="text-[#99D5D9]">projek anda</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
            Terokai sistem binaan berasaskan bahan komposit dan bio-komposit melalui Tasblock Builder: reka & bina, latihan pemasangan, pembekalan komponen serta bekal & pasang.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 pt-2">
            <button onClick={() => onNavigate('enquiry')} className={`min-h-12 px-6 py-3 rounded-xl bg-[#3EABB0] text-[#071827] font-bold inline-flex items-center justify-center gap-2 hover:bg-[#99D5D9] ${focusStyle}`}>
              Pertanyaan Projek <ArrowRight aria-hidden="true" className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('training')} className={`min-h-12 px-6 py-3 rounded-xl border border-slate-600 bg-slate-800 text-white font-semibold hover:bg-slate-700 ${focusStyle}`}>
              Daftar Minat Latihan
            </button>
          </div>
          <p className="text-sm text-slate-400">Kesesuaian sistem, skop, kos dan jadual tertakluk kepada semakan projek.</p>
        </div>
        <figure className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src="/images/hero.webp" alt="Ilustrasi konsep rumah taman dengan suasana tropika" width="1440" height="960" fetchPriority="high" className="w-full aspect-[16/9] object-cover rounded-3xl" />

        </figure>
      </section>

      <section aria-labelledby="home-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-8">
          <p className="text-[#99D5D9] font-semibold">Perkhidmatan Tasblock Builder</p>
          <h2 id="home-services" className="text-2xl sm:text-4xl font-bold text-white font-heading">Empat cara untuk bermula</h2>
          <p className="text-slate-300 leading-relaxed">Pilih perkhidmatan mengikut keperluan anda. Skop terperinci dan aturan pelaksanaan perlu dipersetujui untuk setiap pertanyaan.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {SERVICES_DATA.map((service, index) => {
            const Icon = serviceIcons[index] || Building2;
            return (
              <article key={service.id} className="min-w-0 rounded-2xl border border-slate-700 bg-slate-900/70 p-6 flex flex-col">
                <figure className="mb-5">
                  <img src={`/images/${service.id}.webp`} alt={`Ilustrasi ${service.title}`} width="1440" height="960" loading="lazy" className="w-full aspect-[3/2] object-cover rounded-xl" />

                </figure>
                <Icon aria-hidden="true" className="w-8 h-8 text-[#3EABB0] mb-5" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-6">{service.shortDesc}</p>
                <button onClick={() => { if (service.id === 'training') onNavigate('training'); else { window.location.hash = `services?service=${encodeURIComponent(service.id)}`; window.scrollTo({ top: 0 }); } }} className={`mt-auto min-h-12 text-left text-[#99D5D9] font-semibold inline-flex items-center justify-between gap-2 rounded-lg ${focusStyle}`} aria-label={`Ketahui lanjut: ${service.title}`}>
                  Ketahui lanjut <ArrowRight aria-hidden="true" className="w-5 h-5 shrink-0" />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="home-system" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 rounded-3xl bg-gradient-to-br from-[#102c46] to-[#071827] border border-[#3EABB0]/30 p-6 sm:p-10">
          <div className="space-y-5">
            <Layers aria-hidden="true" className="w-9 h-9 text-[#3EABB0]" />
            <h2 id="home-system" className="text-2xl sm:text-3xl font-bold text-white">Sistem komposit, bukan sekadar panel dinding</h2>
            <p className="text-slate-300 leading-relaxed">Sistem Tasblock merangkumi beberapa keluarga komponen. Pemilihan komponen dan kaedah pemasangan perlu merujuk dokumentasi pengeluar serta reka bentuk projek yang sesuai.</p>
            <button onClick={() => onNavigate('products')} className={`min-h-12 text-[#99D5D9] font-semibold rounded-lg inline-flex items-center gap-2 ${focusStyle}`}>
              Kenali Komponen Sistem <ArrowRight aria-hidden="true" className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4"><figure><img src="/images/components.webp" alt="Komponen sistem daripada profil pengeluar Tasblock" width="355" height="325" loading="lazy" className="w-full max-h-72 object-contain bg-white rounded-xl p-4" /><figcaption className="text-xs text-slate-400 mt-2">Sumber: Profil korporat Tasblock (M) Sdn. Bhd. · Rujukan komponen, bukan panduan pemasangan.</figcaption></figure>
          <ul className="grid sm:grid-cols-2 gap-3 content-center">
            {PRODUCTS_DATA.map(component => (
              <li key={component.id} className="p-4 rounded-xl bg-[#071827]/70 border border-slate-700 text-slate-200">{component.name}</li>
            ))}
          </ul></div>
        </div>
      </section>

      <section aria-labelledby="home-relationship" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 id="home-relationship" className="text-2xl sm:text-3xl font-bold text-white">Pengeluar & Tasblock Builder</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="p-6 sm:p-8 rounded-2xl border border-slate-700 bg-slate-900/60 space-y-4">
            <h3 className="text-xl font-semibold text-[#99D5D9]">Tasblock (M) Sdn. Bhd.</h3>
            <p className="text-slate-300 leading-relaxed">Syarikat keluarga yang membangunkan dan mengilang teknologi Tasblock, dengan pengalaman projek berskala besar.</p>
            <button onClick={() => onNavigate('projects')} className={`min-h-12 text-[#99D5D9] text-left font-semibold rounded-lg ${focusStyle}`}>Rujukan projek pengeluar →</button>
          </article>
          <article className="p-6 sm:p-8 rounded-2xl border border-slate-700 bg-slate-900/60 space-y-4">
            <h3 className="text-xl font-semibold text-[#99D5D9]">Tasblock Builder</h3>
            <p className="text-slate-300 leading-relaxed">Inisiatif berasingan yang memfokuskan kontraktor tempatan, pelanggan individu dan projek berskala kecil melalui empat perkhidmatan di atas.</p>
            <button onClick={() => onNavigate('about')} className={`min-h-12 text-[#99D5D9] text-left font-semibold rounded-lg ${focusStyle}`}>Mengenai kami →</button>
          </article>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">Rekod projek dan kelayakan pengeluar bukan secara automatik rekod kerja atau kelayakan Tasblock Builder.</p>
      </section>

      <section aria-labelledby="home-enquiry" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#102c46] to-[#0b243d] border border-[#3EABB0]/30 p-6 sm:p-10 space-y-5">
          <h2 id="home-enquiry" className="text-2xl sm:text-4xl text-white font-bold">Bincangkan keperluan projek anda</h2>
          <p className="max-w-3xl text-slate-300 leading-relaxed">Mulakan dengan lokasi, tujuan bangunan, pelan jika tersedia dan perkhidmatan yang diperlukan. Maklumat ini membantu perbincangan kesesuaian sistem dan skop sebelum sebut harga dipersetujui.</p>
          <p className="max-w-3xl text-sm text-slate-400 leading-relaxed">Reka bentuk, kelulusan bangunan dan pembiayaan memerlukan semakan pihak berkaitan. Penggunaan sistem ini tidak menjamin kelulusan atau pembiayaan.</p>
          <button onClick={() => onNavigate('enquiry')} className={`min-h-12 w-full sm:w-auto px-6 py-3 rounded-xl bg-[#3EABB0] text-[#071827] font-bold hover:bg-[#99D5D9] ${focusStyle}`}>Pertanyaan Projek</button>
        </div>
      </section>
    </div>
  );
}
