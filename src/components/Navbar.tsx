import { useState } from 'react';
import { PageType } from '../types';
import { 
  Menu, 
  X, 
  Calculator, 
  PhoneCall, 
  GraduationCap, 
  Layers, 
  Home, 
  Briefcase, 
  Image as ImageIcon,
  Info,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { COMPANY_CONTACT } from '../data/tasblockData';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Streamlined desktop navigation items - no duplication of calculator or contact CTA
  const primaryNavItems: { page: PageType; label: string; icon: any }[] = [
    { page: 'home', label: 'Utama', icon: Home },
    { page: 'services', label: 'Perkhidmatan', icon: Briefcase },
    { page: 'products', label: 'Blok IBS', icon: Layers },
    { page: 'projects', label: 'Galeri Projek', icon: ImageIcon },
    { page: 'training', label: 'Latihan', icon: GraduationCap },
    { page: 'about', label: 'Mengenai Kami', icon: Info },
  ];

  // Full list for mobile drawer
  const mobileNavItems: { page: PageType; label: string; icon: any }[] = [
    { page: 'home', label: 'Laman Utama', icon: Home },
    { page: 'services', label: 'Perkhidmatan (Reka & Bina / Bekal)', icon: Briefcase },
    { page: 'products', label: 'Spesifikasi Blok Flexi-Fit', icon: Layers },
    { page: 'projects', label: 'Galeri Projek Tapak', icon: ImageIcon },
    { page: 'training', label: 'Latihan & Pensijilan Kontraktor', icon: GraduationCap },
    { page: 'calculator', label: 'Kalkulator Anggaran Kos IBS', icon: Calculator },
    { page: 'about', label: 'Mengenai Kami & Hubungan Tasblock', icon: Info },
    { page: 'contact', label: 'Hubungi Kami & Sebut Harga', icon: PhoneCall },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#071827]/95 backdrop-blur-md border-b border-[#3EABB0]/20 shadow-lg shadow-[#071827]/60">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#071827] via-[#245D98]/40 to-[#071827] text-[11px] sm:text-xs text-slate-300 py-1.5 px-4 text-center border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span className="inline-flex items-center text-[#3EABB0] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3EABB0] animate-pulse mr-1.5"></span>
            Sistem IBS Bertauliah CIDB & Ujian Ketahanan SIRIM
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-300">Rakan Pelaksana Kontraktor Tempatan & Pemilik Individu</span>
          <span className="hidden md:inline text-slate-600">|</span>
          <a 
            href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=${encodeURIComponent('Salam Tasblock Builder, saya ingin bertanyakan tentang sistem IBS Flexi-Fit.')}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-[#3EABB0] transition-colors font-medium underline underline-offset-2"
          >
            Hotline: {COMPANY_CONTACT.phoneDisplay.split('/')[0]}
          </a>
        </div>
      </div>

      {/* Main Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          
          {/* Brand Logo & Name - Official Tasblock Brand with Builder Identifier */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none shrink-0 py-1"
            aria-label="Kembali ke Laman Utama Tasblock Builder"
          >
            {/* Official Tasblock Logo Image with white background box */}
            <div className="h-11 w-11 sm:h-12 sm:w-12 flex items-center justify-center p-1.5 rounded-xl bg-white border border-white/40 group-hover:border-[#3EABB0] transition-all shrink-0 shadow-md">
              <img 
                src="/tasblock-logo.png" 
                alt="Tasblock Builder" 
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/tasblock-logo.svg';
                }}
              />
            </div>

            {/* Exact Brand Lockup matching reference */}
            <div className="flex flex-col justify-center select-none pl-0.5">
              <span className="text-[17px] sm:text-[19px] font-medium tracking-tight text-slate-300 leading-[1.05] font-sans lowercase">
                tasblock
              </span>
              <span className="text-[13px] sm:text-[15px] font-extrabold tracking-[0.19em] text-[#3B82F6] sm:text-[#4A90E2] leading-[1.05] uppercase font-sans mt-0.5">
                BUILDER
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links - Compact, Clean, Never Wraps */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {primaryNavItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-2.5 xl:px-3.5 py-2 text-xs xl:text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#245D98]/30 text-[#3EABB0] border border-[#3EABB0]/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action CTAs - Uncrowded, High Value */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Calculator Quick Link */}
            <button
              onClick={() => handleNavClick('calculator')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg whitespace-nowrap border transition-all ${
                currentPage === 'calculator'
                  ? 'bg-[#245D98]/40 text-[#3EABB0] border-[#3EABB0]/50'
                  : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border-slate-700 hover:border-[#3EABB0]/40'
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-[#3EABB0]" />
              <span>Kira Kos IBS</span>
            </button>

            {/* Primary Contact CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap bg-gradient-to-r from-[#245D98] to-[#3EABB0] text-[#071827] hover:brightness-110 shadow-md shadow-[#245D98]/20 transition-all font-heading"
            >
              <span>Hubungi Kami</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger buttons (< lg) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('calculator')}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-800/90 text-[#3EABB0] border border-slate-700"
              title="Kalkulator IBS"
              aria-label="Kalkulator IBS"
            >
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">Kira Kos</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none border border-slate-800"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#3EABB0]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071827]/98 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="p-2.5 mb-2 bg-[#245D98]/20 rounded-xl border border-[#3EABB0]/20 flex items-center justify-between">
            <span className="text-xs text-slate-300">Pakar Sistem IBS Flexi-Fit</span>
            <span className="text-xs text-[#3EABB0] font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Semenanjung M'sia
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {mobileNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#245D98]/40 text-[#3EABB0] border border-[#3EABB0]/40 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#3EABB0]' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => handleNavClick('calculator')}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl bg-slate-800 text-slate-100 border border-slate-700"
            >
              <Calculator className="w-4 h-4 text-[#3EABB0]" />
              <span>Buka Kalkulator IBS</span>
            </button>
            <a
              href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=${encodeURIComponent('Salam Tasblock Builder, saya ingin berbincang mengenai projek binaan IBS saya.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold rounded-xl bg-gradient-to-r from-[#245D98] to-[#3EABB0] text-[#071827]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp Kami</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

