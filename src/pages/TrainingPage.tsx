import { useState } from 'react';
import { PageType } from '../types';
import { TRAINING_COURSES, COMPANY_CONTACT } from '../data/tasblockData';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  ArrowRight, 
  Award, 
  Users, 
  Briefcase
} from 'lucide-react';

interface TrainingPageProps {
  onNavigate: (page: PageType) => void;
}

export default function TrainingPage({ onNavigate: _onNavigate }: TrainingPageProps) {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(TRAINING_COURSES[0].id);
  
  // Registration form states
  const [participantName, setParticipantName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [phoneNo, setPhoneNo] = useState<string>('');
  const [paxCount, setPaxCount] = useState<number>(1);
  const [experienceLevel, setExperienceLevel] = useState<string>('Kontraktor G1-G3');
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const selectedCourse = TRAINING_COURSES.find(c => c.id === selectedCourseId) || TRAINING_COURSES[0];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!participantName || !phoneNo) {
      alert('Sila isikan Nama dan Nombor Telefon anda.');
      return;
    }

    const message = `Salam Tasblock Builder,\n\nSaya ingin mendaftar untuk:\nKursus: ${selectedCourse.title}\nNama: ${participantName}\nSyarikat: ${companyName || 'Individu/Persendirian'}\nNo. Telefon: ${phoneNo}\nBilangan Peserta: ${paxCount} orang\nPengalaman: ${experienceLevel}\nPengambilan: ${selectedCourse.nextIntake}\n\nMohon maklumkan slot dan invois pembayaran. Terima kasih.`;
    
    setSubmittedMessage(message);
    const url = `https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-20 pb-20 pt-8">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#245D98]/30 border border-[#3EABB0]/40 text-[#3EABB0] text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Akademi Pemerkasaan Kontraktor Tempatan</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Pusat Latihan & Pensijilan IBS Tasblock
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Kuasai teknik pembinaan moden <em>interlocking dry-stack</em>. Kami melatih kontraktor tempatan, tukang rumah dan jurutera muda agar mampu membina rumah IBS secara berkualiti tinggi, pantas dan menepati piawaian kejuruteraan.
          </p>
        </div>
      </section>

      {/* 4 Core Value Pillars for Contractors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#245D98]/30 text-[#3EABB0] flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Sijil Kemahiran Diiktiraf</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Menerima Sijil Tamat Latihan Amali Pemasang IBS Tasblock Builder untuk meningkatkan keyakinan pelanggan anda.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#245D98]/30 text-[#3EABB0] flex items-center justify-center font-bold">
              <Briefcase className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Diskaun Pembelian Blok</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Peserta bengkel layak menikmati rebat 5% untuk pembelian blok kelompok pertama bagi projek binaan anda.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#245D98]/30 text-[#3EABB0] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Direktori Rakan Kontraktor</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Nama syarikat anda dimasukkan ke dalam direktori rujukan kami apabila pemilik rumah mencari kontraktor di kawasan anda.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#245D98]/30 text-[#3EABB0] flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Bimbingan Teknikal Tapak</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Penyelia teknikal kami sedia membantu melalui panggilan video semasa anda membuat penetapan aras pertama di tapak.
            </p>
          </div>
        </div>
      </section>

      {/* Main Course Details & Registration Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Course Syllabus & Details (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Course Switcher */}
            <div className="flex flex-col sm:flex-row gap-3">
              {TRAINING_COURSES.map((crs) => (
                <button
                  key={crs.id}
                  onClick={() => setSelectedCourseId(crs.id)}
                  className={`p-4 rounded-2xl text-left border flex-1 transition-all ${
                    selectedCourseId === crs.id
                      ? 'bg-gradient-to-br from-[#245D98]/40 to-[#071827] border-[#3EABB0] text-white shadow-lg'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-[#3EABB0] uppercase tracking-wider block mb-1">
                    {crs.level}
                  </span>
                  <div className="font-bold text-sm leading-snug">{crs.title}</div>
                </button>
              ))}
            </div>

            {/* Selected Course Content Card */}
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-semibold text-[#3EABB0]">
                  Sasaran: {selectedCourse.audience}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
                  {selectedCourse.title}
                </h3>
              </div>

              {/* Course Meta Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#3EABB0] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Tempoh Masa</span>
                    <span className="font-semibold text-slate-200">{selectedCourse.duration}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#3EABB0] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Lokasi Bengkel</span>
                    <span className="font-semibold text-slate-200">{selectedCourse.location.split(',')[0]}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#3EABB0] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Pengambilan Seterusnya</span>
                    <span className="font-semibold text-slate-200">{selectedCourse.nextIntake}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#245D98]/20 border border-[#3EABB0]/30 flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-[#3EABB0] shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#3EABB0] block font-bold">Yuran Penyertaan</span>
                    <span className="font-bold text-white text-sm font-mono">{selectedCourse.pricePerPax}</span>
                  </div>
                </div>
              </div>

              {/* Detailed Syllabus */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Silibus Bengkel & Modul Praktikal:
                </h4>
                <div className="space-y-2">
                  {selectedCourse.syllabus.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/80 text-xs text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-[#245D98]/30 text-[#3EABB0] flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Online Registration Form (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-b from-[#0d2238] to-[#071827] border border-[#3EABB0]/30 p-6 sm:p-8 shadow-2xl space-y-6 sticky top-28">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#3EABB0]/20 text-[#3EABB0] text-[11px] font-semibold mb-2">
                  <Send className="w-3 h-3" />
                  <span>Tempahan Slot Pantas</span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Daftar Kursus Sekarang
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Tempat adalah terhad kepada 15 peserta bagi setiap sesi amali untuk memastikan kualiti bimbingan maksimum.
                </p>
              </div>

              <form onSubmit={handleRegister} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Nama Penuh Peserta *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Rosli Bin Baharom"
                    value={participantName}
                    onChange={(e) => setParticipantName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#3EABB0]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Nama Syarikat / Organisasi</label>
                  <input
                    type="text"
                    placeholder="Contoh: Megah Impian Bina Sdn Bhd (Pilihan)"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#3EABB0]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-slate-300 font-semibold block">No. Telefon (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="012-3456789"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#3EABB0]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-300 font-semibold block">Bilangan Peserta</label>
                    <select
                      value={paxCount}
                      onChange={(e) => setPaxCount(Number(e.target.value))}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-100 focus:outline-none focus:border-[#3EABB0]"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} Orang</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Latar Belakang / Pengalaman</label>
                  <select
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-100 focus:outline-none focus:border-[#3EABB0]"
                  >
                    <option value="Kontraktor G1-G3">Kontraktor Berdaftar (G1 - G3)</option>
                    <option value="Tukang Rumah & Mandur">Tukang Rumah / Mandur Tapak</option>
                    <option value="Jurutera / Pelajar">Jurutera / Graduan / Politeknik</option>
                    <option value="Pemilik Rumah DIY">Pemilik Rumah / Peminat DIY</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#245D98] via-[#2f74bc] to-[#3EABB0] text-[#071827] font-extrabold text-xs flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-[#245D98]/30 transition-all"
                  >
                    <span>Hantar Pendaftaran Melalui WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Maklumat pendaftaran anda akan dihantar terus ke WhatsApp penyelaras kursus untuk pengesahan slot.
                  </p>
                </div>
              </form>

              {submittedMessage && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-[11px] text-emerald-300">
                  <div className="font-bold mb-1">Mesej WhatsApp Telah Dibuka!</div>
                  <p>Jika aplikasi WhatsApp tidak dibuka secara automatik, sila salin dan hantar ke {COMPANY_CONTACT.phoneDisplay}.</p>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
