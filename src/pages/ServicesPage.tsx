import { useState } from 'react';
import { PageType } from '../types';
import { SERVICES_DATA, COMPANY_CONTACT } from '../data/tasblockData';
import { 
  Building2, 
  GraduationCap, 
  Truck, 
  Hammer, 
  Check, 
  ArrowRight, 
  PhoneCall, 
  FileCheck2,
  Calendar,
  Layers,
  Award
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>('design-build');

  const selectedService = SERVICES_DATA.find(s => s.id === activeServiceId) || SERVICES_DATA[0];

  const buildWorkflowSteps = [
    {
      step: '01',
      title: 'Konsultasi & Penyesuaian Pelan',
      desc: 'Pelan arkitek diselaraskan mengikut modul 400mm IBS Tasblock bagi meminimumkan pemotongan blok dan memaksimumkan integriti galas beban.'
    },
    {
      step: '02',
      title: 'Kelulusan Struktur & PBT / LPPSA',
      desc: 'Penyediaan dokumen kejuruteraan struktur bersama Jurutera Bertauliah (PE) untuk kelulusan PBT dan permohonan pembiayaan bank / LPPSA.'
    },
    {
      step: '03',
      title: 'Asas Tapak & Ground Slab',
      desc: 'Pembinaan cerucuk/asas tapak konkrit dengan starter rebar dowel bar tepat pada kedudukan tiang dan sudut dinding.'
    },
    {
      step: '04',
      title: 'Pemasangan Dinding IBS Pantas',
      desc: 'Blok Tasblock Flexi-Fit disusun secara interlocking, rongga tiang diisi rebar & grout, serta lintol U-Block dipasang di atas bukaan pintu/tingkap.'
    },
    {
      step: '05',
      title: 'Bumbung, Kemasan & Serahan Kunci',
      desc: 'Pemasangan kekuda besi bumbung, skim coat dinding dalaman/luaran, pendawaian elektrik, jubin lantai, dan serahan kunci rumah siap.'
    }
  ];

  return (
    <div className="space-y-20 pb-20 pt-8">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#245D98]/30 border border-[#3EABB0]/40 text-[#3EABB0] text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Solusi Komprehensif IBS Flexi-Fit</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Perkhidmatan Khusus Tasblock Builder
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Kami menghubungkan teknologi IBS pengeluar industri dengan keperluan sebenar pemilik rumah individu dan kontraktor tempatan melalui empat cabang perkhidmatan berfokus:
          </p>
        </div>
      </section>

      {/* Interactive Service Navigator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {SERVICES_DATA.map((srv, idx) => (
            <button
              key={srv.id}
              onClick={() => setActiveServiceId(srv.id)}
              className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                activeServiceId === srv.id
                  ? 'bg-gradient-to-br from-[#245D98]/40 to-[#071827] border-[#3EABB0] text-white shadow-xl shadow-[#071827]'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold text-[#3EABB0]">
                  Pakej 0{idx + 1}
                </span>
                {idx === 0 && <Building2 className="w-5 h-5 text-[#3EABB0]" />}
                {idx === 1 && <GraduationCap className="w-5 h-5 text-[#3EABB0]" />}
                {idx === 2 && <Truck className="w-5 h-5 text-[#3EABB0]" />}
                {idx === 3 && <Hammer className="w-5 h-5 text-[#3EABB0]" />}
              </div>
              <div className="font-bold text-sm leading-snug">{srv.title}</div>
            </button>
          ))}
        </div>

        {/* Selected Service Detailed View */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3EABB0]">
                Sasaran: {selectedService.targetAudience}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {selectedService.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                {selectedService.fullDesc}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#245D98] to-[#3EABB0] text-[#071827] font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-[#245D98]/20 transition-all"
              >
                <span>Dapatkan Sebut Harga Pakej Ini</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=${encodeURIComponent(`Salam Tasblock Builder, saya ingin mendapatkan maklumat lanjut mengenai perkhidmatan: ${selectedService.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#25D366]" />
                <span>Tanya di WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Scope vs Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Scope of Work */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#3EABB0]" />
                <span>Skop Kerja & Tanggungjawab</span>
              </h3>
              <div className="space-y-2.5">
                {selectedService.scope.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-[#245D98]/30 text-[#3EABB0] flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Value & Deliverables */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#3EABB0]" />
                  <span>Kelebihan Utama Pakej Ini</span>
                </h3>
                <div className="space-y-2">
                  {selectedService.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-[#3EABB0]/20 text-[#3EABB0] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#3EABB0]" />
                  <span>Dokumen & Hasil Yang Diterima (Deliverables)</span>
                </h3>
                <div className="space-y-2">
                  {selectedService.deliverables.map((del, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#245D98]/15 border border-[#3EABB0]/20 text-xs text-slate-300 flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#3EABB0]"></div>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Design & Build 5-Step Workflow Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3EABB0]">
            Langkah Demi Langkah
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Bagaimana Kami Bina Rumah Anda
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Proses telus, teratur dan bebas pening kepala dari lakaran awal sehingga serahan kunci:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {buildWorkflowSteps.map((ws) => (
            <div
              key={ws.step}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4 relative group hover:border-[#3EABB0]/40 transition-colors"
            >
              <div className="space-y-2">
                <span className="text-3xl font-extrabold text-[#3EABB0]/40 font-mono group-hover:text-[#3EABB0] transition-colors">
                  {ws.step}
                </span>
                <h4 className="text-sm font-bold text-white leading-snug">
                  {ws.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#1b3b5f] to-[#071827] border border-[#3EABB0]/30 p-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
            Perlukan Cadangan Pakej Yang Sesuai dengan Bajet Anda?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Gunakan kalkulator kos segera kami atau hubungi perunding teknikal untuk semakan pelan lantai anda.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('calculator')}
              className="px-6 py-3 rounded-xl bg-[#3EABB0] text-[#071827] font-bold text-xs hover:brightness-110 transition-all"
            >
              Buka Kalkulator Kos IBS
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all"
            >
              Borang Permohonan Sebut Harga
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
