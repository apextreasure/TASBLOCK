import { PageType } from '../types';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Users, 
  ArrowRight, 
  HeartHandshake
} from 'lucide-react';
import { COMPANY_CONTACT } from '../data/tasblockData';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="space-y-20 pb-20 pt-8">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#245D98]/30 border border-[#3EABB0]/40 text-[#3EABB0] text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Kisah & Ketelusan Korporat</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Mengenai Tasblock Builder
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Menghubungkan kecemerlangan pengilangan industri IBS kepada realiti tapak binaan kontraktor tempatan dan pemilik rumah di Malaysia.
          </p>
        </div>
      </section>

      {/* Origin & Transparent Corporate Positioning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-12 space-y-8 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3EABB0]">
              Hubungan Pengasas & Pengeluar
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Sinergi Kekeluargaan untuk Memperkasakan Pasaran Tempatan
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Teknologi <strong>IBS Tasblock Flexi-Fit</strong> dibangunkan dan dikilangkan secara rasmi oleh <strong>Tasblock (M) Sdn. Bhd.</strong>, sebuah entiti milik keluarga yang telah bertahun-tahun memberi tumpuan kepada penyelidikan produk konkrit pratuang, pendaftaran paten sistem, dan pelaksanaan projek-projek perumahan berskala besar di Malaysia.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Melihat kepada cabaran yang dihadapi oleh kontraktor kecil-sederhana dan individu yang sukar mengadaptasi teknologi IBS kerana skala pesanan yang minimum atau kekurangan pendedahan amali, pengasas <strong>Tasblock Builder</strong>—yang mempunyai pertalian keluarga erat dengan syarikat induk—telah menubuhkan inisiatif ini khusus untuk pasaran runcit dan komuniti.
            </p>
          </div>

          {/* Two Pillars Grid: Tasblock (M) Sdn. Bhd. vs Tasblock Builder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Induk: Tasblock (M) Sdn. Bhd. */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#245D98]/30 text-[#7BB8D4] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading">
                    Tasblock (M) Sdn. Bhd.
                  </h3>
                  <span className="text-[11px] text-[#7BB8D4] font-medium">Pengeluar Induk & Pemilik Sistem</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7BB8D4] shrink-0 mt-0.5" />
                  <span>Pengilangan berpusat dengan standard kawalan kualiti tinggi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7BB8D4] shrink-0 mt-0.5" />
                  <span>Pemegang hak paten reka bentuk profil interlocking Flexi-Fit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7BB8D4] shrink-0 mt-0.5" />
                  <span>Pemilikan ujian makmal SIRIM (Ketahanan Api 2 Jam & Mampatan).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7BB8D4] shrink-0 mt-0.5" />
                  <span>Pendaftaran pengiktirafan rasmi Direktori IBS CIDB Malaysia.</span>
                </li>
              </ul>
            </div>

            {/* Pelaksana: Tasblock Builder */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1b3858] to-[#0d2238] border border-[#3EABB0]/40 space-y-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3EABB0]/20 text-[#3EABB0] flex items-center justify-center font-bold">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading">
                    Tasblock Builder
                  </h3>
                  <span className="text-[11px] text-[#3EABB0] font-bold">Rakan Pelaksana & Pemerkasaan Komuniti</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3EABB0] shrink-0 mt-0.5" />
                  <span>Khidmat Reka & Bina (Design & Build) rumah atas tanah sendiri.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3EABB0] shrink-0 mt-0.5" />
                  <span>Bengkel latihan amali praktikal untuk kontraktor tempatan & tukang.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3EABB0] shrink-0 mt-0.5" />
                  <span>Pembekalan runcit & borong blok IBS terus ke tapak projek kecil.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3EABB0] shrink-0 mt-0.5" />
                  <span>Pakej Bekal & Pasang (Supply & Install) bersama tenaga pakar.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Legal Notice */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#3EABB0] shrink-0 mt-0.5" />
            <p>
              <strong>Komitmen Ketelusan:</strong> Kami tidak membuat tuntutan status subsidiari rekaan, hak monopoli palsu atau dakwaan peneraju pasaran melampau. Semua sejarah pencapaian kejuruteraan, pengiktirafan sijil SIRIM, CIDB dan projek-projek mega institusi terdahulu adalah disandarkan dengan bangga kepada sistem dan pengeluar Tasblock (M) Sdn. Bhd.
            </p>
          </div>

        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#245D98]/30 text-[#3EABB0] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">
              Misi Kami
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Merapatkan jurang teknologi pembinaan dengan menyediakan akses mudah kepada blok IBS Tasblock Flexi-Fit, latihan kemahiran amali yang berkesan, dan khidmat binaan telus tanpa kos tersembunyi bagi setiap rakyat Malaysia yang ingin memiliki rumah yang kukuh dan sejuk.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#245D98]/30 text-[#3EABB0] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">
              Visi Kami
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Menjadikan sistem interlocking IBS pilihan utama bagi pembinaan rumah persendirian dan projek perumahan komuniti di seluruh Semenanjung Malaysia, sambil memperkasa ribuan kontraktor tempatan menjadi usahawan binaan moden yang berdaya saing.
            </p>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
          Ingin Menjadi Sebahagian Daripada Revolusi Binaan IBS?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Sama ada anda ingin membina rumah impian sendiri atau berminat menyertai bengkel latihan kontraktor seterusnya, kami sentiasa bersedia membimbing anda.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('training')}
            className="px-6 py-3 rounded-xl bg-[#3EABB0] text-[#071827] font-bold text-xs hover:brightness-110 transition-all inline-flex items-center gap-2"
          >
            <span>Daftar Bengkel Kontraktor</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all"
          >
            Hubungi Pusat Operasi Kami
          </button>
        </div>
      </section>

    </div>
  );
}
