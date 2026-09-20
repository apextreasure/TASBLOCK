import { useState } from 'react';
import { MessageCircle, X, Send, ChevronRight } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/tasblockData';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Sebut Harga Rumah IBS');

  const topics = [
    { title: 'Sebut Harga Rumah IBS', text: 'Salam Tasblock Builder, saya ingin mendapatkan sebut harga untuk membina rumah menggunakan sistem IBS Flexi-Fit.' },
    { title: 'Bengkel Latihan Kontraktor', text: 'Salam, saya berminat menyertai Bengkel Latihan Kemahiran Pemasangan IBS Tasblock Builder yang akan datang.' },
    { title: 'Pembekalan Blok Flexi-Fit', text: 'Salam, saya seorang kontraktor dan ingin bertanyakan harga dan penghantaran blok IBS Tasblock Flexi-Fit ke tapak projek saya.' },
    { title: 'Pakej Bekal & Pasang', text: 'Salam, saya ingin tahu kadar harga pakej Bekal & Pasang (Supply & Install) untuk dinding projek saya.' }
  ];

  const handleSendWhatsApp = (customText?: string) => {
    const textToSend = customText || topics.find(t => t.title === selectedTopic)?.text || 'Salam Tasblock Builder, saya ingin bertanyakan tentang IBS Flexi-Fit.';
    const url = `https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pop-up dialog */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#071827] border border-[#3EABB0]/40 shadow-2xl p-4 text-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">Khidmat Pantas WhatsApp</h4>
                <p className="text-[11px] text-[#3EABB0] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3EABB0] animate-ping"></span>
                  Pakar Teknikal Bersedia Membantu
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 my-3 leading-relaxed">
            Pilih topik pertanyaan anda untuk berhubung terus dengan jururunding teknikal Tasblock Builder:
          </p>

          <div className="space-y-2 mb-4">
            {topics.map((t) => (
              <button
                key={t.title}
                onClick={() => setSelectedTopic(t.title)}
                className={`w-full text-left p-2.5 rounded-xl text-xs transition-all border ${
                  selectedTopic === t.title
                    ? 'bg-[#245D98]/40 border-[#3EABB0] text-white shadow-sm'
                    : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="font-semibold flex items-center justify-between">
                  <span>{t.title}</span>
                  {selectedTopic === t.title && <ChevronRight className="w-3.5 h-3.5 text-[#3EABB0]" />}
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => handleSendWhatsApp()}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-[#25D366]/20 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Mula Chat di WhatsApp Sekarang</span>
          </button>
        </div>
      )}

      {/* Main floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 py-3 px-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#1ebe5d] text-white shadow-xl shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all"
        aria-label="Hubungi WhatsApp Tasblock Builder"
      >
        <MessageCircle className="w-6 h-6 fill-white text-transparent" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Tanya Kami (WhatsApp)
        </span>
      </button>
    </div>
  );
}
