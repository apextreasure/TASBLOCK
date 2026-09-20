import { useState } from 'react';
import { PageType, ProjectItem } from '../types';
import { PROJECTS_DATA, COMPANY_CONTACT } from '../data/tasblockData';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Layers, 
  Calendar, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  PhoneCall, 
  CheckCircle2,
  TrendingUp,
  Camera,
  Eye
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageType) => void;
}

export default function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [activePhoto, setActivePhoto] = useState<string>('');

  const categories = [
    { id: 'semua', label: 'Semua Projek' },
    { id: 'banglo', label: 'Banglo & Kediaman' },
    { id: 'homestay', label: 'Homestay & Resort' },
    { id: 'mampu-milik', label: 'Rumah Mampu Milik' },
    { id: 'komersial', label: 'Institusi & Bilik Darjah' },
    { id: 'dinding', label: 'Pagar & Dinding' },
  ];

  const filteredProjects = selectedCategory === 'semua'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  const handleOpenModal = (prj: ProjectItem) => {
    setActiveModalProject(prj);
    setActivePhoto(prj.image);
  };

  return (
    <div className="space-y-16 pb-20 pt-8">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#245D98]/30 border border-[#3EABB0]/40 text-[#3EABB0] text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Kajian Kes & Galeri Pembinaan Tapak Sebenar</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Galeri Projek Tasblock Builder
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Lihat pembinaan struktur dinding interlocking IBS Tasblock Flexi-Fit di tapak projek sebenar — dari banglo kediaman moden, calet resort, sehingga ke blok bilik darjah sekolah.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#245D98] to-[#3EABB0] text-[#071827] shadow-lg shadow-[#245D98]/20'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((prj) => (
            <div
              key={prj.id}
              className="rounded-3xl bg-slate-900/80 border border-slate-800 overflow-hidden flex flex-col justify-between glass-card-hover group shadow-xl hover:border-[#3EABB0]/40 transition-all"
            >
              {/* Card Photo Container with Real Image and Overlays */}
              <div 
                onClick={() => handleOpenModal(prj)}
                className="relative h-64 sm:h-72 w-full overflow-hidden cursor-pointer bg-slate-950"
              >
                <img 
                  src={prj.image} 
                  alt={prj.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Gradient scrim for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071827] via-[#071827]/40 to-transparent"></div>

                {/* Top Floating Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#071827]/85 backdrop-blur-md text-[#3EABB0] text-xs font-mono font-bold border border-slate-700/80 shadow-md">
                    <MapPin className="w-3 h-3" />
                    {prj.location.split(',')[0]}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#245D98]/70 backdrop-blur-md border border-[#3EABB0]/40 text-white text-xs font-semibold shadow-md">
                    {prj.builtUpArea}
                  </span>
                </div>

                {/* Bottom Overlay Info inside Photo */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="space-y-1 pr-2">
                    <span className="text-[11px] font-semibold text-[#99D5D9] bg-[#071827]/80 px-2 py-0.5 rounded backdrop-blur-sm border border-slate-700/60 inline-block">
                      {prj.clientType}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-[#3EABB0] transition-colors drop-shadow-md">
                      {prj.title}
                    </h3>
                  </div>

                  {/* Gallery Count Pill */}
                  {prj.gallery && prj.gallery.length > 1 && (
                    <div className="shrink-0 flex items-center gap-1 text-[11px] text-slate-200 bg-[#071827]/90 px-2.5 py-1 rounded-lg border border-slate-700 backdrop-blur-sm">
                      <Camera className="w-3.5 h-3.5 text-[#3EABB0]" />
                      <span>{prj.gallery.length} Foto</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {prj.description}
                </p>

                {/* 3 Metric Badges */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/90 text-center">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Tempoh Binaan</span>
                    <span className="text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-[#3EABB0]" />
                      {prj.durationDays} Hari
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 block">Jumlah Blok</span>
                    <span className="text-xs sm:text-sm font-bold text-[#3EABB0] font-mono flex items-center justify-center gap-1 mt-0.5">
                      <Layers className="w-3.5 h-3.5" />
                      ~{prj.blocksUsed.toLocaleString()}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 block">Penjimatan</span>
                    <span className="text-[11px] sm:text-xs font-bold text-emerald-400 flex items-center justify-center gap-1 mt-0.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {prj.savingsAchieved.split('&')[0]}
                    </span>
                  </div>
                </div>

                {/* Highlights preview */}
                <div className="space-y-1.5">
                  {prj.highlights.map((hl, hlIdx) => (
                    <div key={hlIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3EABB0] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Attribution note */}
                <div className="text-[11px] text-slate-400 italic pt-2 border-t border-slate-800/80">
                  {prj.systemAttribution}
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <button
                    onClick={() => handleOpenModal(prj)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-[#245D98]/40 text-slate-200 hover:text-white border border-slate-700/80 hover:border-[#3EABB0]/40 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <Eye className="w-4 h-4 text-[#3EABB0]" />
                    <span>Lihat Galeri Foto & Fasa Pembinaan</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal with Interactive Photo Gallery */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#071827] border border-[#3EABB0]/40 p-5 sm:p-7 shadow-2xl text-slate-100 space-y-5">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono text-[#3EABB0] block">
                  {activeModalProject.location} • {activeModalProject.builtUpArea}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-0.5">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/60"
                aria-label="Tutup Paparan"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Photo Viewer with Gallery Selector */}
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 aspect-[16/10] sm:aspect-[16/9] w-full">
                <img 
                  src={activePhoto || activeModalProject.image} 
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 bg-[#071827]/80 backdrop-blur-sm border border-slate-700 text-xs px-2.5 py-1 rounded-md text-slate-300">
                  Foto Tapak Projek Sebenar
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {activeModalProject.gallery && activeModalProject.gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {activeModalProject.gallery.map((photoUrl, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => setActivePhoto(photoUrl)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                        activePhoto === photoUrl 
                          ? 'border-[#3EABB0] scale-105 shadow-md shadow-[#3EABB0]/30' 
                          : 'border-slate-700 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={photoUrl} 
                        alt={`Sudut ${pIdx + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Stats Banner */}
            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center text-xs">
              <div>
                <span className="text-slate-400 text-[10px] block">Tempoh Dinding</span>
                <span className="font-bold text-white">{activeModalProject.durationDays} Hari Bekerja</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">Anggaran Blok</span>
                <span className="font-bold text-[#3EABB0] font-mono">~{activeModalProject.blocksUsed.toLocaleString()} unit</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">Faedah Projek</span>
                <span className="font-bold text-emerald-400">{activeModalProject.savingsAchieved}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeModalProject.description}
              </div>

              {/* Milestone Phases Timeline */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#3EABB0]" />
                  <span>Jadual Fasa Pembinaan Sebenar</span>
                </h4>

                <div className="space-y-2.5">
                  {activeModalProject.phases.map((ph, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1">
                      <div className="flex items-center justify-between text-[#3EABB0] font-bold">
                        <span>{ph.day}</span>
                        <span className="font-semibold text-white">{ph.title}</span>
                      </div>
                      <p className="text-slate-400 pt-0.5 leading-relaxed">
                        {ph.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#245D98]/20 border border-[#3EABB0]/30 text-xs text-slate-300">
                <strong className="text-white block mb-1">Sandaran Sistem & Pelaksanaan:</strong>
                <p className="text-slate-400">{activeModalProject.systemAttribution}</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-slate-800">
              <a
                href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=${encodeURIComponent(`Salam Tasblock Builder, saya berminat dengan projek contoh: ${activeModalProject.title} di ${activeModalProject.location}. Bolehkah beri sebut harga untuk reka bentuk serupa?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md shadow-[#25D366]/20"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Bincang Projek Serupa di WhatsApp</span>
              </a>
              <button
                onClick={() => setActiveModalProject(null)}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Calculator Link Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#0d2238] to-[#071827] border border-[#7BB8D4]/25 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white font-heading">
              Ingin Tahu Anggaran Masa & Kos Rumah Anda?
            </h3>
            <p className="text-xs text-slate-300">
              Masukkan saiz keluasan rumah anda ke dalam kalkulator kami sekarang untuk melihat bilangan blok dan anggaran penjimatan masa.
            </p>
          </div>
          <button
            onClick={() => onNavigate('calculator')}
            className="px-6 py-3 rounded-xl bg-[#3EABB0] text-[#071827] font-bold text-xs hover:brightness-110 transition-all shrink-0 shadow-lg shadow-[#3EABB0]/20"
          >
            Buka Kalkulator Kos Segera
          </button>
        </div>
      </section>

    </div>
  );
}
