import { useState, useEffect } from 'react';
import { PageType } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ProjectsPage from './pages/ProjectsPage';
import TrainingPage from './pages/TrainingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectEnquiry from './components/IbsCalculator';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Handle URL hash routing on mount and change
  useEffect(() => {
    const handleHashChange = () => {
      const [route, query] = window.location.hash.slice(1).split('?');
      const hash = (route === 'calculator' ? 'enquiry' : route || 'home') as PageType;
      if (route === 'calculator') {
        window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#enquiry${query ? `?${query}` : ''}`);
      }
      const validPages: PageType[] = [
        'home', 
        'services', 
        'products', 
        'enquiry',
        'projects', 
        'training', 
        'about', 
        'contact'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    const destination = page === 'calculator' ? 'enquiry' : page;
    setCurrentPage(destination);
    window.location.hash = destination;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071827] text-slate-100 selection:bg-[#3EABB0] selection:text-[#071827]">
      {/* Navigation Header */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content Body */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'products' && <ProductsPage onNavigate={handleNavigate} />}
        {currentPage === 'enquiry' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#3EABB0]">
                Bincangkan keperluan anda
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                Pertanyaan Projek
              </h1>
              <p className="text-xs sm:text-sm text-slate-300">
                Sediakan ringkasan projek untuk perbincangan. Tiada anggaran automatik atau komitmen kerja dibuat melalui borang ini.
              </p>
            </div>
            <ProjectEnquiry />
          </div>
        )}
        {currentPage === 'projects' && <ProjectsPage onNavigate={handleNavigate} />}
        {currentPage === 'training' && <TrainingPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      {/* Persistent Floating WhatsApp Contact Widget */}
      {!['enquiry', 'contact', 'training'].includes(currentPage) && <WhatsAppButton />}

      {/* Architectural Comprehensive Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
