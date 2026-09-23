import { PageType } from '../types';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_CONTACT, SERVICES_DATA } from '../data/tasblockData';

interface FooterProps { onNavigate: (page: PageType) => void; }
const linkStyle = 'min-h-11 inline-flex items-center text-left rounded-md hover:text-[#99D5D9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99D5D9]';

export default function Footer({ onNavigate }: FooterProps) {
  const handleLink = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const quickLinks: { page: PageType; label: string }[] = [
    { page: 'home', label: 'Laman Utama' },
    { page: 'products', label: 'Komponen Sistem' },
    { page: 'projects', label: 'Rujukan Projek Pengeluar' },
    { page: 'about', label: 'Mengenai Kami' },
    { page: 'enquiry', label: 'Pertanyaan Projek' },
    { page: 'contact', label: 'Hubungi Kami & Soalan Lazim' },
  ];

  return (
    <footer className="bg-[#050f1a] text-slate-300 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">
          <div className="min-w-0 space-y-5">
            <div className="flex items-center gap-3">
              <img src="/images/tasblock-symbol.png" alt="Tasblock Builder" width="65" height="80" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed">{COMPANY_CONTACT.tagline}. Reka & bina, latihan pemasangan, pembekalan komponen serta bekal & pasang.</p>
          </div>

          <nav aria-label="Perkhidmatan di pengaki" className="min-w-0">
            <h2 className="font-bold text-white mb-3">Perkhidmatan</h2>
            <ul className="text-sm">
              {SERVICES_DATA.map(service => (
                <li key={service.id}><button onClick={() => { if (service.id === 'training') handleLink('training'); else { window.location.hash = `services?service=${encodeURIComponent(service.id)}`; window.scrollTo({ top: 0 }); } }} className={linkStyle}>{service.title}</button></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Pautan di pengaki" className="min-w-0">
            <h2 className="font-bold text-white mb-3">Pautan Pantas</h2>
            <ul className="text-sm">{quickLinks.map(link => <li key={link.page}><button onClick={() => handleLink(link.page)} className={linkStyle}>{link.label}</button></li>)}</ul>
          </nav>

          <div className="min-w-0">
            <h2 className="font-bold text-white mb-3">Hubungi Kami</h2>
            <ul className="space-y-3 text-sm break-words">
              {COMPANY_CONTACT.phoneRaw.trim() && COMPANY_CONTACT.phoneDisplay.trim() && (
                <li className="flex items-center gap-3"><Phone aria-hidden="true" className="w-5 h-5 text-[#3EABB0] shrink-0" /><a href={`tel:+${COMPANY_CONTACT.phoneRaw}`} className={linkStyle}>{COMPANY_CONTACT.phoneDisplay}</a></li>
              )}
              {COMPANY_CONTACT.whatsappBaseUrl.trim() && (
                <li><a href={COMPANY_CONTACT.whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className={`${linkStyle} text-[#99D5D9]`}>WhatsApp (tab baharu) ↗</a></li>
              )}
              {COMPANY_CONTACT.email.trim() && (
                <li className="flex items-center gap-3"><Mail aria-hidden="true" className="w-5 h-5 text-[#3EABB0] shrink-0" /><a href={`mailto:${COMPANY_CONTACT.email}`} className={`${linkStyle} min-w-0 break-all`}>{COMPANY_CONTACT.email}</a></li>
              )}
              {COMPANY_CONTACT.address.trim() && (
                <li className="flex items-start gap-3"><MapPin aria-hidden="true" className="w-5 h-5 text-[#3EABB0] shrink-0" /><span>{COMPANY_CONTACT.address}</span></li>
              )}
              {COMPANY_CONTACT.operatingHours.trim() && (
                <li className="flex items-start gap-3"><Clock aria-hidden="true" className="w-5 h-5 text-[#3EABB0] shrink-0" /><span>{COMPANY_CONTACT.operatingHours}</span></li>
              )}
              {COMPANY_CONTACT.coverageAreas.trim() && <li>Kawasan perkhidmatan: {COMPANY_CONTACT.coverageAreas}</li>}
            </ul>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 text-sm leading-relaxed">
          <p><strong className="text-white">Pengeluar dan Builder mempunyai peranan berbeza.</strong> Tasblock (M) Sdn. Bhd. ialah syarikat keluarga yang membangunkan dan mengilang teknologi Tasblock. Tasblock Builder ialah inisiatif berasingan untuk kontraktor tempatan, pelanggan individu dan projek berskala kecil. Rekod projek dan kelayakan pengeluar bukan secara automatik rekod atau kelayakan Builder.</p>
        </div>
        <p className="border-t border-slate-800 mt-8 pt-6 text-sm text-slate-400">&copy; {new Date().getFullYear()} Tasblock Builder. Hak cipta terpelihara.</p>
      </div>
    </footer>
  );
}
