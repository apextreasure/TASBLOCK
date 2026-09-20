import { useState } from 'react';
import { PageType } from '../types';
import { FAQ_DATA, COMPANY_CONTACT } from '../data/tasblockData';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Upload, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search,
  Building2,
  FileCheck
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

export default function ContactPage({ onNavigate: _onNavigate }: ContactPageProps) {
  // Quotation Form States
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Reka & Bina Rumah Penuh (Design & Build)');
  const [floorPlanStatus, setFloorPlanStatus] = useState('Sudah ada pelan lantai (AutoCAD / PDF)');
  const [landStatus, setLandStatus] = useState('Tanah sendiri berstatus bina kediaman');
  const [estimatedSqft, setEstimatedSqft] = useState('');
  const [notes, setNotes] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ States
  const [faqSearch, setFaqSearch] = useState('');
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('all');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  const filteredFaq = FAQ_DATA.filter((item) => {
    const matchesCat = activeFaqCategory === 'all' || item.category === activeFaqCategory;
    const matchesSearch = item.question.toLowerCase().includes(faqSearch.toLowerCase()) || 
                          item.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Sila isikan Nama dan Nombor Telefon anda.');
      return;
    }

    const message = `Salam Tasblock Builder,\n\nSaya ingin memohon Sebut Harga Rasmi bagi projek IBS saya:\n\n` +
      `• Nama: ${fullName}\n` +
      `• Telefon: ${phone}\n` +
      (email ? `• E-mel: ${email}\n` : '') +
      `• Lokasi Tapak: ${location || 'Belum dinyatakan'}\n` +
      `• Perkhidmatan: ${serviceNeeded}\n` +
      `• Anggaran Keluasan: ${estimatedSqft ? `${estimatedSqft} kps` : 'Belum pasti'}\n` +
      `• Status Pelan: ${floorPlanStatus}\n` +
      `• Status Tanah: ${landStatus}\n` +
      (uploadedFileName ? `• Dokumen Disertakan: ${uploadedFileName}\n` : '') +
      (notes ? `• Catatan Tambahan: ${notes}\n` : '') +
      `\nMohon pihak Tasblock Builder hubungi saya untuk pengiraan blok dan sebut harga. Terima kasih.`;

    setFormSubmitted(true);
    const url = `https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-20 pb-20 pt-8">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#245D98]/30 border border-[#3EABB0]/40 text-[#3EABB0] text-xs font-semibold">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Pusat Khidmat Pelanggan & Sebut Harga</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Hubungi Tasblock Builder
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Dapatkan sebut harga telus, jadualkan lawatan ke pusat latihan kami, atau bincangkan spesifikasi blok untuk projek binaan anda.
          </p>
        </div>
      </section>

      {/* Main Grid: Quotation Form (7 cols) + Contact Details Card (5 cols) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Official RFQ Form (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#3EABB0]">
                Borang Sebut Harga Rasmi
              </span>
              <h2 className="text-2xl font-bold text-white font-heading mt-1">
                Maklumat Projek & Permohonan
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Isikan butiran di bawah untuk menerima anggaran kuantiti blok Flexi-Fit dan kos kasar secara percuma.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Nama Penuh *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Haji Azman Bin Mokhtar"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#3EABB0]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">No. Telefon (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="012-3456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#3EABB0]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Alamat E-mel (Pilihan)</label>
                  <input
                    type="email"
                    placeholder="contoh@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#3EABB0]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Lokasi Tapak Projek (Negeri & Daerah) *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Sepang, Selangor"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#3EABB0]"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-1">
                <label className="text-slate-300 font-semibold block">Perkhidmatan Yang Diingini *</label>
                <select
                  value={serviceNeeded}
                  onChange={(e) => setServiceNeeded(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-100 focus:outline-none focus:border-[#3EABB0]"
                >
                  <option value="Reka & Bina Rumah Penuh (Design & Build)">Pakej Reka & Bina Rumah Penuh (Design & Build)</option>
                  <option value="Bekal & Pasang Dinding IBS (Supply & Install)">Pakej Bekal & Pasang Dinding IBS (Supply & Install)</option>
                  <option value="Pembekalan Blok IBS Flexi-Fit Sahaja">Pembekalan Blok IBS Flexi-Fit Sahaja</option>
                  <option value="Bengkel Latihan Kontraktor & Tukang">Bengkel Latihan & Pensijilan Kontraktor</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Status Pelan Lantai</label>
                  <select
                    value={floorPlanStatus}
                    onChange={(e) => setFloorPlanStatus(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-100 focus:outline-none focus:border-[#3EABB0]"
                  >
                    <option value="Sudah ada pelan lantai (AutoCAD / PDF)">Sudah ada pelan arkitek (PDF / CAD)</option>
                    <option value="Ada lakaran asas sahaja">Ada lakaran asas sahaja</option>
                    <option value="Belum ada, perlukan khidmat reka bentuk dari awal">Belum ada, mahu khidmat reka pelan</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Anggaran Saiz Rumah (Kaki Persegi)</label>
                  <input
                    type="number"
                    placeholder="Contoh: 1500"
                    value={estimatedSqft}
                    onChange={(e) => setEstimatedSqft(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#3EABB0]"
                  />
                </div>
              </div>

              {/* Status Tanah */}
              <div className="space-y-1">
                <label className="text-slate-300 font-semibold block">Status Tanah</label>
                <select
                  value={landStatus}
                  onChange={(e) => setLandStatus(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-100 focus:outline-none focus:border-[#3EABB0]"
                >
                  <option value="Tanah sendiri berstatus bina kediaman">Tanah sendiri (Geran individu berstatus bangunan)</option>
                  <option value="Tanah lot pertanian / perlukan tukar syarat">Tanah lot pertanian / perkongsian</option>
                  <option value="Sedang dalam proses pembelian tanah">Sedang dalam proses pembelian tanah</option>
                  <option value="Tapak projek kontraktor utama">Tapak projek klien kontraktor</option>
                </select>
              </div>

              {/* File Attachment Drag & Drop / Click */}
              <div className="space-y-1 pt-1">
                <label className="text-slate-300 font-semibold block">Muat Naik Pelan Lantai / Lakaran (Pilihan)</label>
                <label className="border-2 border-dashed border-slate-700 hover:border-[#3EABB0]/50 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-950/40">
                  <Upload className="w-6 h-6 text-[#3EABB0] mb-2" />
                  <span className="text-slate-200 font-medium text-xs">
                    {uploadedFileName ? uploadedFileName : 'Klik atau seret fail pelan lantai (PDF, PNG, JPG, DWG)'}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Maksimum 25MB</span>
                  <input 
                    type="file" 
                    onChange={handleFileUpload} 
                    className="hidden" 
                    accept=".pdf,.png,.jpg,.jpeg,.dwg"
                  />
                </label>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-slate-300 font-semibold block">Catatan Tambahan (Pilihan)</label>
                <textarea
                  rows={3}
                  placeholder="Nyatakan bajet anggaran, masa yang disasarkan untuk mula membina, atau soalan khusus anda..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#3EABB0]"
                ></textarea>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#245D98] via-[#2f74bc] to-[#3EABB0] text-[#071827] font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-[#245D98]/30 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Hantar Permohonan Sebut Harga (WhatsApp)</span>
                </button>
              </div>

              {formSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  <span>Permohonan anda telah sedia dihantar! Pasukan teknikal kami akan menyemak dalam masa 24 jam bekerja.</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Contact Details, Map & Hotline (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="rounded-3xl bg-gradient-to-b from-[#0d2238] to-[#071827] border border-[#7BB8D4]/25 p-6 sm:p-8 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#3EABB0]">
                  Pusat Operasi
                </span>
                <h3 className="text-xl font-bold text-white font-heading mt-1">
                  Hub Latihan & Khidmat Pelanggan
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <MapPin className="w-5 h-5 text-[#3EABB0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Alamat Hub & Tapak Latihan:</strong>
                    <span className="text-slate-300 leading-relaxed">{COMPANY_CONTACT.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <PhoneCall className="w-5 h-5 text-[#3EABB0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Hotline Telefon & WhatsApp:</strong>
                    <a 
                      href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#3EABB0] hover:underline font-bold text-sm block"
                    >
                      {COMPANY_CONTACT.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">Respons pantas pada waktu pejabat.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Mail className="w-5 h-5 text-[#3EABB0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">E-mel Pertanyaan Rasmi:</strong>
                    <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-slate-200 hover:text-[#3EABB0] transition-colors">
                      {COMPANY_CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Clock className="w-5 h-5 text-[#3EABB0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Waktu Operasi Pejabat & Pameran:</strong>
                    <span className="text-slate-300">{COMPANY_CONTACT.operatingHours}</span>
                  </div>
                </div>
              </div>

              {/* Coverage Area Note */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1">
                <span className="text-[11px] text-[#3EABB0] font-bold uppercase tracking-wider block">
                  Liputan Penghantaran & Pembinaan:
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {COMPANY_CONTACT.coverageAreas}.
                </p>
              </div>

              {/* Direct WhatsApp Quick Button */}
              <a
                href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=${encodeURIComponent('Salam Tasblock Builder, saya ingin bercakap terus dengan jururunding teknikal anda.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-[#25D366]/20 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Chat Terus di WhatsApp Sekarang</span>
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section (Soalan Lazim) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#245D98]/30 border border-[#3EABB0]/40 text-[#3EABB0] text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pusat Maklumat</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Soalan Lazim Mengenai IBS Tasblock
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Segala persoalan mengenai sistem interlocking, kekuatan dinding, kelulusan pinjaman, dan perbezaan kos dihuraikan secara telus:
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari soalan (contoh: LPPSA, lepa, kekuatan, tiang, permit)..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-[#3EABB0]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'Semua Kategori' },
              { id: 'sistem-ibs', label: 'Sistem IBS & Dinding' },
              { id: 'kos-anggaran', label: 'Kos & Penjimatan' },
              { id: 'permit-lppsa', label: 'Kelulusan PBT & LPPSA' },
              { id: 'latihan', label: 'Latihan Kontraktor' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFaqCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeFaqCategory === cat.id
                    ? 'bg-[#245D98] text-white'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaq.length > 0 ? (
            filteredFaq.map((faq, idx) => {
              const isOpen = expandedFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-slate-100 hover:text-[#3EABB0] transition-colors focus:outline-none"
                  >
                    <span className="font-bold text-xs sm:text-sm leading-snug">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#3EABB0] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-xs text-slate-500 rounded-2xl bg-slate-900/40 border border-slate-800">
              Tiada soalan yang sepadan dengan carian anda. Sila hubungi kami terus melalui WhatsApp untuk bantuan segera.
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
