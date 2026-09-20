import { PageType } from '../types';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Clock, 
  TrendingUp, 
  GraduationCap, 
  Truck, 
  Hammer, 
  Layers, 
  Quote, 
  Award, 
  PhoneCall, 
  ChevronRight,
  Sparkles,
  Check
} from 'lucide-react';
import { SERVICES_DATA, PROJECTS_DATA, TESTIMONIALS_DATA, COMPANY_CONTACT } from '../data/tasblockData';
import BlockVisualizer from '../components/BlockVisualizer';
import IbsCalculator from '../components/IbsCalculator';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 lg:pt-28 overflow-hidden">
        {/* Architectural Grid & Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#245D98]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-32 right-1/4 w-96 h-96 bg-[#3EABB0]/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#245D98]/25 border border-[#3EABB0]/40 text-[#3EABB0] text-xs font-semibold backdrop-blur-sm shadow-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Sistem IBS Tasblock Flexi-Fit Bertauliah CIDB & Ujian SIRIM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-heading">
              Bina Rumah Impian <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-white via-[#99D5D9] to-[#3EABB0] bg-clip-text text-transparent">
                3X Lebih Pantas, Kukuh & Jimat
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <strong>Tasblock Builder</strong> memperkasakan kontraktor tempatan dan pemilik rumah individu di Malaysia dengan teknologi bata saling mengunci (interlocking) <strong>IBS Tasblock Flexi-Fit</strong> — tanpa memerlukan acuan kayu rumit mahupun lepaan simen tebal.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('calculator')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#245D98] via-[#2f74bc] to-[#3EABB0] text-[#071827] font-extrabold text-sm flex items-center justify-center gap-2 hover:brightness-110 shadow-xl shadow-[#245D98]/30 transition-all hover:scale-[1.02]"
              >
                <span>Kira Anggaran Kos Projek</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold text-sm border border-slate-700 hover:border-[#3EABB0]/40 transition-all flex items-center justify-center gap-2"
              >
                <span>Terokai 4 Perkhidmatan Kami</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=${encodeURIComponent('Salam Tasblock Builder, saya berminat untuk berbincang mengenai projek binaan IBS saya.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-bold text-sm border border-[#25D366]/40 flex items-center justify-center gap-2 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>

            {/* 4 Core Value Metric Pills */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm text-left">
                <div className="flex items-center gap-2 text-[#3EABB0] mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xl font-bold font-mono">50% - 65%</span>
                </div>
                <p className="text-xs text-slate-300 font-semibold">Jimat Masa Binaan</p>
                <p className="text-[11px] text-slate-500">Struktur dinding naik seawal 7-14 hari</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm text-left">
                <div className="flex items-center gap-2 text-[#3EABB0] mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xl font-bold font-mono">&gt; 7.5 N/mm²</span>
                </div>
                <p className="text-xs text-slate-300 font-semibold">Dinding Galas Beban</p>
                <p className="text-[11px] text-slate-500">Ujian mampatan makmal diiktiraf</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm text-left">
                <div className="flex items-center gap-2 text-[#3EABB0] mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-xl font-bold font-mono">0 Lepa Tebal</span>
                </div>
                <p className="text-xs text-slate-300 font-semibold">Skim Coat Terus</p>
                <p className="text-[11px] text-slate-500">Permukaan rata & interlocking jitu</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm text-left">
                <div className="flex items-center gap-2 text-[#3EABB0] mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-xl font-bold font-mono">100% CIDB</span>
                </div>
                <p className="text-xs text-slate-300 font-semibold">Patuh Skor IBS</p>
                <p className="text-[11px] text-slate-500">Layak kelulusan PBT & pinjaman LPPSA</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORPORATE POSITIONING & SYSTEM SANDARAN BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#0d2238] via-[#0b1c2e] to-[#071827] border border-[#7BB8D4]/20 p-6 md:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#245D98]/30 text-[#3EABB0] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sinergi Sistem IBS Terbukti</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Dihasilkan oleh Pengeluar Induk, Dilaksanakan Khusus untuk Anda
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pengasas Tasblock Builder berasal daripada keluarga pengeluar rasmi <strong>Tasblock (M) Sdn. Bhd.</strong> yang bertanggungjawab mengilang blok dan menerajui projek berskala besar di Malaysia. 
                Melalui <strong>Tasblock Builder</strong>, kepakaran sistem IBS Tasblock Flexi-Fit ini kini dibuka seluas-luasnya untuk <strong>pemilik tanah individu</strong> dan <strong>kontraktor tempatan</strong> yang ingin membina banglo, rumah kediaman, atau homestay berkualiti tinggi tanpa kerenah birokrasi yang rumit.
              </p>
            </div>
            
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={() => onNavigate('about')}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all text-center"
              >
                Ketahui Kisah Kami
              </button>
              <button
                onClick={() => onNavigate('training')}
                className="px-5 py-2.5 rounded-xl bg-[#3EABB0]/20 hover:bg-[#3EABB0]/30 text-[#3EABB0] text-xs font-bold border border-[#3EABB0]/40 transition-all text-center flex items-center justify-center gap-1.5"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Sertai Latihan Kontraktor</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 PERKHIDMATAN UTAMA (4 CORE PILLARS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3EABB0]">
            Solusi Menyeluruh IBS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            4 Cara Kami Membantu Projek Anda
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Sama ada anda pemilik rumah yang mahu serahan kunci terus atau kontraktor yang mencari bekalan bata dan latihan praktikal:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={srv.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800/80 p-6 flex flex-col justify-between glass-card-hover group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#245D98]/40 to-[#071827] border border-[#3EABB0]/30 flex items-center justify-center text-[#3EABB0] group-hover:scale-110 transition-transform">
                  {idx === 0 && <Building2 className="w-6 h-6" />}
                  {idx === 1 && <GraduationCap className="w-6 h-6" />}
                  {idx === 2 && <Truck className="w-6 h-6" />}
                  {idx === 3 && <Hammer className="w-6 h-6" />}
                </div>

                <div>
                  <span className="text-[10px] font-mono font-bold text-[#3EABB0] uppercase tracking-wider block mb-1">
                    Pakej 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#3EABB0] transition-colors">
                    {srv.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {srv.shortDesc}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-800">
                  {srv.benefits.slice(0, 2).map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                      <Check className="w-3.5 h-3.5 text-[#3EABB0] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-[#245D98]/40 text-slate-200 hover:text-white border border-slate-700/80 hover:border-[#3EABB0]/40 text-xs font-semibold flex items-center justify-between transition-all"
                >
                  <span>Butiran Lengkap</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#3EABB0]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PERBANDINGAN: KONVENSIONAL VS IBS TASBLOCK FLEXI-FIT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3EABB0]">
            Kelebihan Teknologi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Perbandingan Kaedah Binaan
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Mengapa ribuan pemaju dan kontraktor beralih daripada bata merah tradisional kepada Sistem Interlocking Tasblock Flexi-Fit:
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-[#071827]">
                  <th className="p-4 sm:p-5 text-slate-400 font-bold uppercase tracking-wider w-1/3">
                    Aspek Pembinaan
                  </th>
                  <th className="p-4 sm:p-5 text-slate-400 font-bold uppercase tracking-wider w-1/3">
                    Bata Merah / Pasir Konvensional
                  </th>
                  <th className="p-4 sm:p-5 text-[#3EABB0] font-bold uppercase tracking-wider w-1/3 bg-[#245D98]/20">
                    Sistem IBS Tasblock Flexi-Fit
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">1. Kelajuan Pemasangan Dinding</td>
                  <td className="p-4 sm:p-5 text-slate-400">Perlahan (bergantung kepada kemahiran ikat bata & lepa simen, ~25-45 hari)</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#3EABB0] bg-[#245D98]/10">
                    Pantas (~7 hingga 14 hari bekerja untuk sebuah rumah banglo)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">2. Keperluan Acuan Kayu (Formwork)</td>
                  <td className="p-4 sm:p-5 text-slate-400">Memerlukan kayu, papan lapis & perancah untuk setiap tiang dan rasuk lintol</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#3EABB0] bg-[#245D98]/10">
                    Hampir 0 acuan kayu (Blok Sudut & U-Block bertindak sebagai acuan kekal)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">3. Kemasan Dinding (Plastering)</td>
                  <td className="p-4 sm:p-5 text-slate-400">Wajib lapisan lepa pasir-simen tebal 15-20mm (risiko retak rerambut)</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#3EABB0] bg-[#245D98]/10">
                    Cukup sekadar skim coat nipis (1-3mm) atau boleh dicat terus
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">4. Kebersihan & Sisa Tapak</td>
                  <td className="p-4 sm:p-5 text-slate-400">Timbunan pasir, habuk lepaan, sisa potongan bata merah bersepah</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#3EABB0] bg-[#245D98]/10">
                    Tapak sangat bersih, blok berpalet, tiada sisa pemotongan dengan blok separuh modul
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">5. Penebatan Suhu & Akustik</td>
                  <td className="p-4 sm:p-5 text-slate-400">Menyerap haba panas siang hari dan membebaskannya ke dalam bilik pada waktu malam</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#3EABB0] bg-[#245D98]/10">
                    Rongga udara dalaman bertindak sebagai penebat haba & bunyi semula jadi (rumah lebih sejuk)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE BLOCK VISUALIZER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#3EABB0]">
              Anatomi Produk
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Sistem Blok Interlocking Flexi-Fit
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Kenali 4 jenis blok teras yang membentuk dinding galas beban yang kukuh dan tersusun rapi:
            </p>
          </div>

          <button
            onClick={() => onNavigate('products')}
            className="text-xs font-bold text-[#3EABB0] hover:text-white flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Lihat Semua Spesifikasi Teknikal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <BlockVisualizer />
      </section>

      {/* 6. INTERACTIVE IBS CALCULATOR EMBEDDED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IbsCalculator />
      </section>

      {/* 7. PROJEK TERPILIH (FEATURED PROJECTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#3EABB0]">
              Bukti Kejayaan di Tapak
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Kajian Kes Projek Bersama Tasblock Builder
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Pelaksanaan sebenar oleh pasukan kami dan rakan kontraktor terlatih di seluruh Semenanjung Malaysia:
            </p>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="text-xs font-bold text-[#3EABB0] hover:text-white flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Semak Galeri Projek Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.slice(0, 3).map((prj) => (
            <div 
              key={prj.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden flex flex-col justify-between glass-card-hover group hover:border-[#3EABB0]/40 transition-all shadow-xl"
            >
              {/* Card Photo Banner with Image */}
              <div 
                onClick={() => onNavigate('projects')}
                className="h-48 relative overflow-hidden cursor-pointer bg-slate-950"
              >
                <img 
                  src={prj.image} 
                  alt={prj.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071827] via-[#071827]/30 to-transparent"></div>

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md bg-[#071827]/85 backdrop-blur-md text-[#3EABB0] text-[10px] font-mono font-bold border border-slate-700">
                    {prj.location.split(',')[0]}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#245D98]/80 backdrop-blur-md text-white text-[10px] font-semibold border border-[#3EABB0]/30">
                    {prj.builtUpArea}
                  </span>
                </div>

                {/* Title on bottom of photo */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[10px] text-[#99D5D9] font-medium drop-shadow-sm">{prj.clientType}</div>
                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-[#3EABB0] transition-colors drop-shadow-md">
                    {prj.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {prj.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 text-xs py-2.5 px-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Tempoh Dinding</span>
                    <span className="font-bold text-slate-200">{prj.durationDays} Hari Bekerja</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Anggaran Blok</span>
                    <span className="font-bold text-[#3EABB0] font-mono">~{prj.blocksUsed.toLocaleString()} Unit</span>
                  </div>
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => onNavigate('projects')}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-[#245D98]/40 hover:border-[#3EABB0]/40 border border-slate-700/80 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>Lihat Galeri Foto & Fasa Pembinaan</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#3EABB0]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONI PELANGGAN & KONTRAKTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3EABB0]">
            Suara Dari Tapak
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Apa Kata Pemilik Rumah & Kontraktor Kami
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Pengalaman sebenar mereka yang telah menggunakan sistem Tasblock Builder:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((testi) => (
            <div
              key={testi.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between relative glass-card-hover"
            >
              <div className="space-y-4">
                <Quote className="w-7 h-7 text-[#3EABB0]/40" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{testi.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-4 space-y-1">
                <div className="font-bold text-white text-sm">{testi.name}</div>
                <div className="text-xs text-[#3EABB0]">{testi.role}</div>
                <div className="text-[11px] text-slate-500">{testi.location}</div>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#245D98]/20 text-[#3EABB0] border border-[#3EABB0]/30">
                    <CheckCircle2 className="w-3 h-3" />
                    {testi.verifiedBadge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CALL TO ACTION BANNER (CONSULTATION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#071827] via-[#163657] to-[#0b243d] border border-[#3EABB0]/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#3EABB0]/20 text-[#3EABB0] text-xs font-bold uppercase tracking-wider">
              Khidmat Nasihat Percuma
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
              Ada Pelan Rumah Sendiri? Biar Kami Kirakan Anggaran Blok & Kosnya.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Hantarkan pelan lantai (floor plan) atau lakaran ringkas anda. Pasukan jurutera teknikal Tasblock Builder akan menyediakan anggaran bilangan blok Flexi-Fit dan sebut harga secara telus tanpa sebarang komitmen.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#245D98] to-[#3EABB0] text-[#071827] font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-[#245D98]/30 transition-all"
              >
                <span>Hantar Pelan untuk Sebut Harga</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=${encodeURIComponent('Salam Tasblock Builder, saya mempunyai pelan rumah dan ingin berbincang mengenai sebut harga IBS.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#3EABB0]" />
                <span>Bercakap dengan Pasukan Kami</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
