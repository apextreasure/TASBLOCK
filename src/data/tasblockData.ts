import { ServiceItem, ProductSpec, ProjectItem, TrainingCourse, TestimonialItem, FaqItem } from '../types';

// Service categories come from the client brief. Detailed scope is agreed per enquiry.
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'design-build', title: 'Reka & Bina', iconName: 'Building2',
    shortDesc: 'Bincangkan pelan dan keperluan binaan anda menggunakan sistem komposit Tasblock.',
    fullDesc: 'Khidmat reka & bina untuk pelanggan individu dan projek berskala kecil. Kesesuaian sistem, penglibatan profesional, kerja tapak dan skop pembinaan perlu dinilai sebelum tawaran projek dimuktamadkan.',
    targetAudience: 'Pemilik tanah, pelanggan individu dan pemilik projek',
    benefits: ['Perbincangan bermula dengan keperluan projek anda', 'Skop reka bentuk dan pembinaan diperjelas sebelum persetujuan'],
    scope: ['Semakan awal pelan, lokasi dan tujuan bangunan', 'Perbincangan kesesuaian sistem dan keperluan profesional', 'Penetapan skop, tanggungjawab dan peringkat kerja'],
    deliverables: ['Skop dan sebut harga tertakluk kepada semakan projek', 'Jadual serta dokumen projek mengikut persetujuan bertulis']
  },
  {
    id: 'training', title: 'Latihan Pemasangan', iconName: 'GraduationCap',
    shortDesc: 'Daftar minat untuk penerangan dan latihan berkaitan komponen sistem Tasblock.',
    fullDesc: 'Saluran pendaftaran minat untuk kontraktor tempatan dan individu yang ingin mengenali sistem Tasblock. Kandungan, tenaga pengajar, kaedah dan pelaksanaan latihan masih perlu disahkan.',
    targetAudience: 'Kontraktor tempatan, pasukan tapak dan individu berminat',
    benefits: ['Nyatakan pengalaman serta keperluan pembelajaran anda', 'Dapatkan maklumat program apabila butirannya disahkan'],
    scope: ['Pendaftaran minat peserta', 'Perbincangan topik pengenalan komponen dan pemasangan', 'Pengesahan aturan latihan sebelum penyertaan'],
    deliverables: ['Maklumat latihan tertakluk kepada pengesahan', 'Pendaftaran minat bukan tempahan tempat atau kelayakan profesional']
  },
  {
    id: 'supply', title: 'Pembekalan Komponen', iconName: 'Truck',
    shortDesc: 'Pertanyaan bekalan panel, adaptor, rasuk dan komponen sistem Tasblock.',
    fullDesc: 'Pembekalan komponen untuk kontraktor dan pemilik projek yang mempunyai aturan pemasangan sendiri. Senarai bahan, ketersediaan dan urusan penghantaran perlu disahkan mengikut pelan serta lokasi tapak.',
    targetAudience: 'Kontraktor, pengurus projek dan pelanggan individu',
    benefits: ['Pemilihan komponen berdasarkan keperluan projek', 'Keperluan bekalan dan pemasangan dibezakan dengan jelas'],
    scope: ['Semakan senarai komponen atau pelan yang tersedia', 'Pengesahan spesifikasi dan ketersediaan dengan pengeluar', 'Perbincangan akses tapak, penghantaran dan penerimaan'],
    deliverables: ['Senarai bekalan dan terma penghantaran yang dipersetujui', 'Harga dan kuantiti selepas semakan keperluan']
  },
  {
    id: 'supply-install', title: 'Bekal & Pasang', iconName: 'ShieldCheck',
    shortDesc: 'Bincangkan bekalan komponen bersama keperluan pemasangan di tapak.',
    fullDesc: 'Pilihan bekal & pasang untuk pelanggan yang memerlukan penyelarasan bahan dan kerja pemasangan. Kapasiti pasukan, keadaan tapak dan sempadan kerja ditentukan untuk setiap projek.',
    targetAudience: 'Kontraktor utama dan pemilik projek',
    benefits: ['Keperluan bahan dan kerja pemasangan dibincangkan bersama', 'Tanggungjawab setiap pihak dijelaskan dalam skop projek'],
    scope: ['Semakan pelan dan kesiapsiagaan tapak', 'Pengesahan komponen serta kaedah pemasangan yang sesuai', 'Persetujuan skop pemasangan dan pemeriksaan kerja'],
    deliverables: ['Skop bekal & pasang secara bertulis', 'Jadual, pemeriksaan dan terma kerja mengikut persetujuan projek']
  }
];

// CV 2026-R1, physical page 8. Empty technical fields are intentional;
// legacy svgType is retained for type compatibility, NOT an approved product drawing.
const component = (id: string, name: string, code: string, role: string, description: string): ProductSpec => ({
  id, name, code, role, description, dimensions: '', weight: '', compressiveStrength: '',
  fireRating: '', coveragePerM2: '', keyFeatures: ['Dinamakan dalam maklumat komponen pengeluar'],
  recommendedUse: 'Pemilihan dan penggunaan tertakluk kepada dokumentasi pengeluar serta reka bentuk projek.',
  svgType: 'standard'
});
export const PRODUCTS_DATA: ProductSpec[] = [
  component('wall-panels', 'Panel Dinding', 'W2 / W3 / W12 / WB', 'Wall panels', 'Kumpulan panel dinding dalam sistem binaan komposit Tasblock.'),
  component('base-adaptors', 'Adaptor Tapak', 'BC / B6', 'Base adaptors', 'Komponen yang disenaraikan sebagai base adaptors dalam katalog pengeluar.'),
  component('wall-adaptors', 'Adaptor Dinding', 'A1 / A2 / A3 / A12 / AC', 'Wall adaptors', 'Kumpulan adaptor dinding yang melengkapkan rangkaian komponen sistem.'),
  component('beams', 'Rasuk', 'Be1 / Be2', 'Beams', 'Rasuk yang dinamakan dalam profil korporat pengeluar.'),
  component('connectors', 'Aksesori & Penyambung', '', 'Accessories / connectors', 'Aksesori dan penyambung turut disenaraikan sebagai sebahagian daripada sistem.'),
  component('floors', 'Komponen Lantai', '', 'Waffle slabs / folded-plate floors', 'Profil pengeluar menyenaraikan waffle slabs dan folded-plate floors; sistem ini bukan hanya panel dinding.')
];

// No verified Builder jobs. Keep the legacy export without inventing required
// client types, block counts, images or durations for manufacturer case records.
export const PROJECTS_DATA: ProjectItem[] = [];
// Image dimensions are the actual source pixels, not upscaled replacements.
// Source page numbers below count physical PDF pages, including the cover.
// Photographs extracted from the supplied corporate profile; see public/images/manufacturer-gallery-provenance.md.
export const MANUFACTURER_CASES = [
  {
    id: 'demo-2016', year: '2016', title: 'Demonstrasi dinding & komponen struktur', source: 'Profil Tasblock (M) Sdn. Bhd.',
    image: { src: '/images/manufacturer-demo-construction.jpeg', width: 536, height: 349, alt: 'Pemasangan komponen struktur rumah demonstrasi pengeluar', caption: 'Pemasangan rumah demonstrasi 2016', page: 14, position: 'center' },
    description: 'Profil Tasblock (M) Sdn. Bhd. merekodkan pemasangan dinding dan komponen struktur dalam empat hari bekerja oleh tiga pekerja dan seorang penyelia.',
    facts: ['4 hari bekerja', '3 pekerja', '1 penyelia'],
    caveat: 'Rekod demonstrasi khusus, bukan tempoh menyiapkan sebuah rumah lengkap. Keputusan ini tidak menjamin tempoh atau keperluan tenaga kerja projek lain.'
  },
  {
    id: 'schools-2017', year: '2017', title: 'Pakej kemudahan pendidikan', source: 'Profil Tasblock (M) Sdn. Bhd.',
    image: { src: '/images/manufacturer-school.webp', width: 444, height: 262, alt: 'Bangunan SJKC Yu Ying dalam profil pengeluar', caption: 'SJKC Yu Ying, petikan CIDB IBS Coffee Table Book dalam profil pengeluar', page: 15, position: 'center' },
    description: 'Profil Tasblock (M) Sdn. Bhd. merekodkan pakej empat sekolah yang merangkumi 34 bilik darjah dan empat blok tandas dalam tempoh lima bulan.',
    facts: ['4 sekolah', '34 bilik darjah', '4 blok tandas', '5 bulan'],
    caveat: 'Tempoh merujuk kepada pakej yang dilaporkan dalam profil pengeluar. Ia bukan tempoh setiap sekolah dan tidak boleh digunakan sebagai janji bagi projek baharu.'
  },
  {
    id: 'felda-hostel', year: null, title: 'Asrama FELDA untuk KPF Agro', source: 'Profil Tasblock (M) Sdn. Bhd., halaman fizikal 18',
    image: { src: '/images/manufacturer-felda-hostel.jpeg', width: 343, height: 278, alt: 'Bangunan asrama dalam rekod FELDA pengeluar', caption: 'Rujukan asrama FELDA / KPF Agro', page: 18, position: 'center' },
    description: 'Profil pengeluar merekodkan enam blok asrama untuk KPF Agro. Lokasi yang disenaraikan termasuk Kg Awah, Raja Alias 2, Jenderak Utara, Triang dan Bukit Tongkat.',
    facts: ['6 blok asrama', 'KPF Agro'],
    caveat: 'Empat hari yang dilaporkan merujuk pemasangan struktur bagi satu blok penginapan dan blok tandas di setiap lokasi, bukan keseluruhan kerja siap. Lokasi khusus foto ini tidak dinyatakan.'
  },
  {
    id: 'trabzon-house', year: '2013', title: 'Rumah kampung Trabzon', source: 'Profil Tasblock (M) Sdn. Bhd., halaman fizikal 19',
    image: { src: '/images/manufacturer-trabzon-house.jpeg', width: 314, height: 265, alt: 'Rumah dua tingkat yang dilabel Trabzon village house oleh pengeluar', caption: 'Trabzon village house, foto kiri atas pada halaman sumber', page: 19, position: 'center' },
    description: 'Profil pengeluar menyenaraikan rumah dua tingkat seluas 300 m² di Trabzon. Rekod tersebut menyatakan siap pada Februari 2013 dalam 24 hari ketika musim sejuk.',
    facts: ['2 tingkat', '300 m²', 'Februari 2013'],
    caveat: 'Tempoh ialah rekod khusus pengeluar, bukan jaminan jadual bagi projek lain. Skop kerja terperinci tidak dihuraikan pada halaman ini.'
  },
  {
    id: 'moscow-house', year: '2013', title: 'Rumah mampu milik — label “Moscow”', source: 'Profil Tasblock (M) Sdn. Bhd., halaman fizikal 19',
    image: { src: '/images/manufacturer-moscow-house.jpeg', width: 318, height: 267, alt: 'Rumah setingkat dengan tingkap melengkung berlabel Moscow affordable house dalam profil', caption: 'Moscow affordable house, foto kanan bawah pada halaman sumber', page: 19, position: 'center' },
    description: 'Di bawah label “Moscow affordable house”, profil merekodkan rumah 70 m² yang siap pada April 2013 dalam tujuh hari bekerja, dengan bukaan tingkap melengkung.',
    facts: ['70 m²', 'April 2013', 'Bukaan tingkap melengkung'],
    caveat: 'Label “Moscow” muncul pada halaman bertajuk “Residential Projects in Türkiye”. Lokasi negara tidak disahkan kerana sumber tidak konsisten; nama dikekalkan seperti dalam profil. Tempoh bukan jaminan projek baharu.'
  },
  {
    id: 'istanbul-office', year: null, title: 'Pejabat tapak lima tingkat, Istanbul', source: 'Profil Tasblock (M) Sdn. Bhd., halaman fizikal 20',
    image: { src: '/images/manufacturer-istanbul-office.jpeg', width: 487, height: 317, alt: 'Fasad bangunan pejabat tapak lima tingkat di Istanbul dalam profil pengeluar', caption: 'Fasad pejabat tapak di Esenyurt, Istanbul', page: 20, position: 'center' },
    description: 'Profil pengeluar menyenaraikan bangunan pejabat tapak lima tingkat di Esenyurt, Istanbul sebagai rujukan penggunaan sistem Tasblock untuk bangunan bertingkat.',
    facts: ['5 tingkat', 'Esenyurt, Istanbul'],
    caveat: 'Tahun dan tempoh pembinaan tidak dinyatakan pada halaman sumber. Rujukan ini bukan pengesahan kesesuaian sistem bagi semua bangunan bertingkat.'
  },
  {
    id: 'baghdad-warehouse', year: null, title: 'Gudang Pepsi, Baghdad', source: 'Profil Tasblock (M) Sdn. Bhd., halaman fizikal 21',
    image: { src: '/images/manufacturer-baghdad-warehouse.jpeg', width: 800, height: 362, alt: 'Ruang dalaman gudang Pepsi di Baghdad dalam rekod pengeluar', caption: 'Ruang dalaman gudang Pepsi, Baghdad', page: 21, position: 'center' },
    description: 'Profil pengeluar merekodkan gudang Pepsi seluas 4,000 m² di Baghdad dengan ketinggian dinding sembilan meter. Tempoh pemasangan seni bina dan struktur dilaporkan sebagai 41 hari.',
    facts: ['4,000 m²', 'Dinding 9 m', '41 hari pemasangan'],
    caveat: 'Tempoh merujuk pemasangan seni bina dan struktur yang dilaporkan, bukan janji tempoh penyerahan keseluruhan bagi gudang lain. Tahun tidak dinyatakan pada halaman sumber.'
  }
];

export const TRAINING_COURSES: TrainingCourse[] = [{
  id: 'minat-latihan', title: 'Pengenalan & Pemasangan Sistem Tasblock', level: 'Asas & Pengenalan',
  duration: '', audience: 'Kontraktor tempatan, pasukan tapak dan individu berminat', mode: '',
  location: '', pricePerPax: '', nextIntake: '',
  syllabus: ['Pengenalan sistem komposit dan bio-komposit Tasblock', 'Pengenalan keluarga komponen dalam katalog pengeluar', 'Keperluan dokumentasi, penyelarasan tapak dan keselamatan pemasangan'],
  benefits: ['Topik cadangan untuk perbincangan; silibus akhir perlu disahkan']
}];
export const TESTIMONIALS_DATA: TestimonialItem[] = [];

export const FAQ_DATA: FaqItem[] = [
  { category: 'sistem-ibs', question: 'Apakah teknologi IBS Tasblock?', answer: 'Profil pengeluar menerangkan sistem binaan berasaskan bahan komposit termaju dan bio-komposit. Rangkaiannya merangkumi panel dinding, adaptor, rasuk, penyambung serta komponen lantai; bukan sekadar panel dinding.' },
  { category: 'sistem-ibs', question: 'Apakah hubungan Tasblock Builder dengan pengeluar?', answer: 'Tasblock (M) Sdn. Bhd. ialah syarikat keluarga yang membangunkan dan mengilang teknologi Tasblock. Tasblock Builder ialah inisiatif berasingan yang memfokuskan kontraktor tempatan, pelanggan individu dan projek berskala kecil. Rekod pengeluar bukan secara automatik rekod kerja Builder.' },
  { category: 'kos-anggaran', question: 'Bagaimana mendapatkan anggaran projek?', answer: 'Kongsikan lokasi, pelan jika ada, tujuan bangunan dan skop yang diperlukan. Kuantiti, kos dan jadual hanya boleh ditentukan selepas semakan projek; tiada kadar standard atau peratus penjimatan dijanjikan di sini.' },
  { category: 'permit-lppsa', question: 'Adakah penggunaan sistem menjamin kelulusan atau pembiayaan?', answer: 'Tidak. Keperluan reka bentuk, kelulusan bangunan dan pembiayaan tertakluk kepada projek, pihak berkuasa, profesional berkaitan dan pemberi pembiayaan. Dokumen pengeluar tidak menggantikan kelulusan projek.' },
  { category: 'latihan', question: 'Bagaimana saya menyertai latihan?', answer: 'Daftar minat melalui halaman latihan atau WhatsApp. Jadual, lokasi, yuran, kandungan dan aturan latihan belum dimuktamadkan. Pendaftaran minat bukan pengesahan tempat dan tidak menjanjikan pensijilan.' },
  { category: 'sistem-ibs', question: 'Di manakah saya boleh mendapatkan spesifikasi teknikal?', answer: 'Hubungi kami untuk membincangkan dokumentasi pengeluar yang sesuai dengan projek anda. Dimensi, prestasi dan kaedah pemasangan perlu disahkan berdasarkan dokumen berkaitan; halaman ini bukan panduan kejuruteraan.' }
];

export const COMPANY_CONTACT = {
  name: 'Tasblock Builder', tagline: 'Teknologi komposit Tasblock untuk kontraktor tempatan & projek individu',
  phoneDisplay: '+60 13-274 4018', phoneRaw: '60132744018',
  email: '', address: '', operatingHours: '',
  whatsappBaseUrl: 'https://wa.me/60132744018', coverageAreas: ''
};
