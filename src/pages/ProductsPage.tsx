import { PageType } from '../types';
import { PRODUCTS_DATA, COMPANY_CONTACT } from '../data/tasblockData';
import BlockVisualizer from '../components/BlockVisualizer';
import { 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  FileText, 
  Flame, 
  Scale, 
  Check, 
  Send
} from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: PageType) => void;
}

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  return (
    <div className="space-y-20 pb-20 pt-8">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#245D98]/30 border border-[#3EABB0]/40 text-[#3EABB0] text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Katalog & Spesifikasi Rasmi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Blok Interlocking IBS Tasblock Flexi-Fit
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Dihasilkan di bawah piawaian kawalan kualiti kilang <strong>Tasblock (M) Sdn. Bhd.</strong>, blok konkrit pratuang Flexi-Fit direka khas dengan sistem saling mengunci berketepatan tinggi untuk pembinaan dinding galas beban yang pantas, tegak dan selamat.
          </p>
        </div>
      </section>

      {/* Embedded Interactive Block Visualizer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
            Penguji & Anatomi Blok 3D Interaktif
          </h2>
          <span className="text-xs text-[#3EABB0] font-mono">Pilih model blok di bawah</span>
        </div>
        <BlockVisualizer />
      </section>

      {/* Grid of All 4 Product Variants */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3EABB0]">
            Siri Blok Flexi-Fit
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Rangkaian Lengkap Komponen Dinding
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS_DATA.map((prod) => (
            <div
              key={prod.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-6 glass-card-hover"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#3EABB0] uppercase tracking-wider block mb-1">
                      {prod.code}
                    </span>
                    <h3 className="text-xl font-bold text-white font-heading">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-[#99D5D9] mt-0.5">{prod.role}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#245D98]/30 border border-[#3EABB0]/30 text-white text-xs font-mono font-bold">
                    {prod.dimensions.split(' ')[0]}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {prod.description}
                </p>

                {/* Technical Metric Specs */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-800 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Kekuatan Mampatan</span>
                    <span className="font-bold text-slate-200">{prod.compressiveStrength}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Berat / Unit</span>
                    <span className="font-bold text-slate-200">{prod.weight}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Ketahanan Api (SIRIM)</span>
                    <span className="font-bold text-slate-200">{prod.fireRating}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Liputan Permukaan</span>
                    <span className="font-bold text-[#3EABB0] font-mono">{prod.coveragePerM2}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-1.5">
                  {prod.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#3EABB0] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=${encodeURIComponent(`Salam Tasblock Builder, saya ingin bertanyakan harga pembekalan bagi blok: ${prod.name} (${prod.code})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-[#245D98]/40 text-slate-200 hover:text-white border border-slate-700/80 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Pertanyaan Harga Blok Ini</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Comparison & Testing Accreditations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="rounded-2xl bg-gradient-to-r from-[#0a1f33] to-[#071827] border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3EABB0]">
              Laporan Makmal & Ujian Kejuruteraan
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Integriti Struktur Diiktiraf
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Semua ujian makmal rintangan api, ketumpatan, dan kekuatan mampatan dijalankan di bawah seliaan <strong>Tasblock (M) Sdn. Bhd.</strong> bagi memastikan setiap blok mematuhi piawaian pembinaan Malaysia:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#3EABB0] font-bold">
                <Flame className="w-4 h-4 text-[#ef4444]" />
                <span>Ujian Ketahanan Api SIRIM (2 Jam)</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Telah lulus ujian ketahanan api makmal SIRIM QAS International sehingga 2 jam integriti struktur tanpa keruntuhan, sesuai untuk dinding pemisah rumah kediaman.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#3EABB0] font-bold">
                <Scale className="w-4 h-4" />
                <span>Kekuatan Mampatan (&gt; 7.5 N/mm²)</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Memenuhi standard BS EN 771-3 / MS 1933 untuk bata konkrit galas beban, membolehkan pembinaan rumah tanpa memerlukan struktur tiang konvensional yang tebal.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#3EABB0] font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Pengiktirafan Sistem IBS CIDB</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Diiktiraf dalam Direktori Pengeluar & Sistem IBS Lembaga Pembangunan Industri Pembinaan Malaysia (CIDB) yang layak menyumbang skor IBS tinggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Order / Quote Trigger */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
          Perlukan Pengiraan Blok untuk Pelan Rumah Anda?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Gunakan kalkulator kami secara percuma untuk mengetahui anggaran tepat blok standard, blok sudut dan U-beam yang diperlukan.
        </p>
        <button
          onClick={() => onNavigate('calculator')}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#245D98] to-[#3EABB0] text-[#071827] font-bold text-xs hover:brightness-110 transition-all inline-flex items-center gap-2"
        >
          <span>Buka Kalkulator Anggaran Blok</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
}
