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

import ExportPage from './pages/ExportPage';
import SearchAnswers from './components/SearchAnswers';
import { routes, pagePath, routeForPath, servicePath, navigateTo, updateSeo } from './seo';

export default function App({initialPath='/'}:{initialPath?:string}) {
  const [locationKey,setLocationKey]=useState(initialPath);
  const route=routeForPath(locationKey.split('?')[0]);
  const currentPage=route?.page || 'home';
  useEffect(()=>{
    const sync=()=>{
      const legacy=window.location.hash.slice(1).split('?');
      const old=routes.find(r=>r.page===legacy[0]);
      if(old || legacy[0]==='calculator'){
        const params=new URLSearchParams(legacy[1]||'');
        let path=legacy[0]==='calculator'?pagePath('enquiry'):old!.path;
        if(old?.page==='services' && params.has('service')){path=servicePath(params.get('service')!);params.delete('service');}
        window.history.replaceState({},'',path+(params.size?'?'+params.toString():''));
      }
      const query=new URLSearchParams(window.location.search);
      if(routeForPath(window.location.pathname)?.page==='services' && query.has('service')){
        const path=servicePath(query.get('service')!);query.delete('service');
        window.history.replaceState({},'',path+(query.size?'?'+query.toString():''));
      }
      setLocationKey(window.location.pathname+window.location.search);
      updateSeo(window.location.pathname);
    };
    const follow=(event:MouseEvent)=>{
      if(event.defaultPrevented || event.button!==0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)return;
      const a=(event.target as Element)?.closest?.('a[href]');
      if(!a || a.getAttribute('target') || a.hasAttribute('download'))return;
      const url=new URL(a.getAttribute('href')!,window.location.href);
      if(url.origin!==window.location.origin || !routeForPath(url.pathname))return;
      if(url.pathname===window.location.pathname && url.search===window.location.search && url.hash)return;
      event.preventDefault();navigateTo(url.pathname+url.search+url.hash);
    };
    sync();window.addEventListener('popstate',sync);window.addEventListener('hashchange',sync);window.addEventListener('tasblock:navigate',sync);document.addEventListener('click',follow);
    return()=>{window.removeEventListener('popstate',sync);window.removeEventListener('hashchange',sync);window.removeEventListener('tasblock:navigate',sync);document.removeEventListener('click',follow);};
  },[]);
  useEffect(()=>{if(!new URLSearchParams(locationKey.split('?')[1]).has('project'))window.scrollTo({top:0,behavior:'instant'});},[locationKey]);
  const handleNavigate=(page:PageType)=>navigateTo(pagePath(page));

  return (
    <div className="min-h-screen flex flex-col bg-[#071827] text-slate-100 selection:bg-[#3EABB0] selection:text-[#071827]">
      {/* Navigation Header */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content Body */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} initialService={route?.service} />}
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
        {currentPage === 'export' && <ExportPage />}
        <SearchAnswers page={currentPage}/>
      </main>

      {/* Persistent Floating WhatsApp Contact Widget */}
      {!['enquiry', 'contact', 'training'].includes(currentPage) && <WhatsAppButton />}

      {/* Architectural Comprehensive Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
