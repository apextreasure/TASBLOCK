import { useEffect, useRef, useState } from 'react';
import { PageType } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const navItems: { page: PageType; label: string }[] = [
  { page: 'home', label: 'Utama' },
  { page: 'services', label: 'Perkhidmatan' },
  { page: 'products', label: 'Komponen Sistem' },
  { page: 'projects', label: 'Rujukan Projek' },
  { page: 'training', label: 'Latihan' },
  { page: 'about', label: 'Mengenai Kami' },
  { page: 'enquiry', label: 'Pertanyaan Projek' },
  { page: 'contact', label: 'Hubungi' },
];
const focusStyle = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99D5D9]';

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => { setMobileMenuOpen(false); }, [currentPage]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1536px)');
    const closeOnDesktop = () => { if (desktop.matches) setMobileMenuOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onEscape);
    document.addEventListener('pointerdown', onOutside);
    return () => {
      document.removeEventListener('keydown', onEscape);
      document.removeEventListener('pointerdown', onOutside);
    };
  }, [mobileMenuOpen]);

  const handleNavigate = (page: PageType) => {
    if (mobileMenuOpen) toggleRef.current?.focus();
    setMobileMenuOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navButton = (item: typeof navItems[number], mobile = false) => (
    <button key={item.page} onClick={() => handleNavigate(item.page)}
      aria-current={currentPage === item.page ? 'page' : undefined}
      className={`${mobile ? 'w-full text-left px-4 text-base' : 'px-3 text-base whitespace-nowrap'} min-h-12 py-3 rounded-lg font-semibold ${focusStyle} ${
        currentPage === item.page ? 'bg-[#245D98]/40 text-[#99D5D9]' : item.page === 'enquiry' ? 'bg-[#3EABB0] text-[#071827] hover:bg-[#99D5D9]' : 'text-slate-200 hover:bg-slate-800 hover:text-white'
      }`}>
      {item.label}
    </button>
  );

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full bg-[#071827]/95 backdrop-blur-md border-b border-[#3EABB0]/20 shadow-lg"
      onBlur={(event) => {
        if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) setMobileMenuOpen(false);
      }}>
      <div className="bg-[#102c46] px-4 py-2 text-center text-sm text-slate-200">Teknologi komposit Tasblock untuk kontraktor tempatan & projek individu</div>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 min-h-20">
        <button onClick={() => handleNavigate('home')} aria-label="Tasblock Builder — Laman Utama" className={`flex items-center gap-3 text-left shrink-0 py-2 rounded-lg ${focusStyle}`}>
          <img src="/images/tasblock-symbol.png" alt="" width="58" height="72" className="h-16 w-auto object-contain" />
          <span className="flex flex-col leading-tight text-white">
            <span className="text-2xl font-bold tracking-tight">tasblock</span>
            <span className="text-sm font-semibold tracking-[0.2em]">BUILDER</span>
          </span>
        </button>
        <nav aria-label="Navigasi utama" className="hidden 2xl:flex items-center gap-3">{navItems.map(item => navButton(item))}</nav>
        <button ref={toggleRef} onClick={() => setMobileMenuOpen(open => !open)} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'} className={`2xl:hidden min-h-12 min-w-12 flex items-center justify-center rounded-lg border border-slate-600 text-slate-200 hover:bg-slate-800 ${focusStyle}`}>
          {mobileMenuOpen ? <X aria-hidden="true" className="w-6 h-6" /> : <Menu aria-hidden="true" className="w-6 h-6" />}
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Navigasi mudah alih" hidden={!mobileMenuOpen} className="2xl:hidden bg-[#071827] border-t border-slate-700 px-4 py-3 max-h-[calc(100dvh-10rem)] overflow-y-auto">
        <div className="grid gap-1">{navItems.map(item => navButton(item, true))}</div>
      </nav>
    </header>
  );
}
