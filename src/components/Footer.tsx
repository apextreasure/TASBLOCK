import { PageType } from '../types';
import { Building2, Phone, Mail, MapPin, Clock, ArrowUpRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/tasblockData';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLink = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050f1a] text-slate-300 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#3EABB0_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Positioning */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 p-1.5 rounded-xl bg-white border border-white/30 shadow-md flex items-center justify-center shrink-0">
                <img 
                  src="/tasblock-logo.png" 
                  alt="Tasblock Builder Logo" 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/tasblock-logo.svg';
                  }}
                />
              </div>
              <div className="flex flex-col justify-center select-none">
                <span className="text-[17px] font-medium tracking-tight text-slate-300 leading-[1.05] font-sans lowercase">
                  tasblock
                </span>
                <span className="text-[13px] font-extrabold tracking-[0.19em] text-[#3B82F6] leading-[1.05] uppercase font-sans mt-0.5">
                  BUILDER
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Membantu kontraktor tempatan, tukang rumah dan pemilik individu membina struktur kediaman yang pantas, kukuh dan jimat dengan mengadaptasi teknologi <strong>IBS Tasblock Flexi-Fit</strong>.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#245D98]/20 border border-[#3EABB0]/30 text-[#3EABB0] text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Teknologi Bertauliah IBS CIDB</span>
              </div>
            </div>
          </div>

          {/* Col 2: Perkhidmatan Teras */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading border-b border-slate-800 pb-2">
              4 Perkhidmatan Kami
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handleLink('services')} 
                  className="hover:text-[#3EABB0] flex items-center gap-1.5 transition-colors text-left"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#3EABB0]" />
                  <span>Reka & Bina Rumah IBS (Design & Build)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('training')} 
                  className="hover:text-[#3EABB0] flex items-center gap-1.5 transition-colors text-left"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#3EABB0]" />
                  <span>Bengkel Latihan & Pensijilan Kontraktor</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('products')} 
                  className="hover:text-[#3EABB0] flex items-center gap-1.5 transition-colors text-left"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#3EABB0]" />
                  <span>Pembekalan Blok IBS Flexi-Fit</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('services')} 
                  className="hover:text-[#3EABB0] flex items-center gap-1.5 transition-colors text-left"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#3EABB0]" />
                  <span>Pakej Bekal & Pasang Dinding (Supply & Install)</span>
                </button>
              </li>
              <li className="pt-2">
                <button 
                  onClick={() => handleLink('calculator')} 
                  className="text-[#3EABB0] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Kira Anggaran Kos Projek Anda &rarr;</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Halaman Pantas */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading border-b border-slate-800 pb-2">
              Pautan Pantas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLink('home')} className="hover:text-[#3EABB0] transition-colors">
                  Laman Utama
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('products')} className="hover:text-[#3EABB0] transition-colors">
                  Spesifikasi Teknikal Blok Flexi-Fit
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('projects')} className="hover:text-[#3EABB0] transition-colors">
                  Galeri Projek & Kajian Kes Tapak
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('about')} className="hover:text-[#3EABB0] transition-colors">
                  Mengenai Kami & Hubungan Induk
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('contact')} className="hover:text-[#3EABB0] transition-colors">
                  Borang Sebut Harga & Soalan Lazim (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Maklumat Perhubungan & Hub */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading border-b border-slate-800 pb-2">
              Pusat Operasi & Hub
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3EABB0] shrink-0 mt-0.5" />
                <span className="text-slate-400">{COMPANY_CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#3EABB0] shrink-0" />
                <a 
                  href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#3EABB0] transition-colors"
                >
                  {COMPANY_CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#3EABB0] shrink-0" />
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-[#3EABB0] transition-colors">
                  {COMPANY_CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#3EABB0] shrink-0 mt-0.5" />
                <span className="text-slate-400">{COMPANY_CONTACT.operatingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Transparency & Attribution Notice */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 text-xs leading-relaxed mb-8">
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-[#3EABB0] shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200">Ketelusan Korporat & Sandaran Sistem:</strong>
              <p className="mt-1">
                Tasblock Builder adalah platform operasi perumahan individu, latihan praktikal kontraktor dan pembekalan runcit bagi sistem IBS Tasblock Flexi-Fit. 
                Semua hak pengilangan blok, rekod paten, ujian makmal rintangan api & mampatan SIRIM, perakuan CIDB IBS, serta pelaksanaan projek-projek mega/infrastruktur komersial terdahulu adalah disandarkan secara rasmi kepada <strong>Tasblock (M) Sdn. Bhd.</strong> / sistem IBS Tasblock induk.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Tasblock Builder. Hak Cipta Terpelihara. Mengadaptasi Sistem IBS Tasblock Flexi-Fit.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3EABB0]" />
              Sistem Terbukti di Malaysia
            </span>
            <button onClick={() => handleLink('contact')} className="hover:text-slate-300 transition-colors">
              Dasar Privasi & Khidmat Nasihat
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
