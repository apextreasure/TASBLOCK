import { ServiceItem, ProductSpec, ProjectItem, TrainingCourse, TestimonialItem, FaqItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'design-build',
    title: 'Reka & Bina (Design & Build)',
    shortDesc: 'Khidmat pembinaan menyeluruh dari pelan seni bina, kelulusan PBT sehingga rumah IBS siap didiami.',
    fullDesc: 'Pakej lengkap bina rumah atas tanah sendiri untuk pemilik individu dan pemaju skala sederhana. Kami mengoptimumkan pelan rumah anda mengikut modul dimensi IBS Tasblock Flexi-Fit bagi mengelakkan pembaziran pemotongan bata dan mempercepatkan proses serahan kunci.',
    iconName: 'Building2',
    targetAudience: 'Pemilik Tanah Individu, Pembeli Rumah Pertama & Pemaju Skala Kecil',
    benefits: [
      'Penjimatan masa binaan 50% lebih pantas berbanding kaedah konvensional',
      'Struktur dinding lebih tegak, rapi dan tidak memerlukan lepa tebal (skimming terus)',
      'Pengudaraan & penebat haba lebih nyaman dengan rongga udara dalam blok IBS',
      'Harga kontrak tetap tanpa kos tersembunyi berulang kali'
    ],
    scope: [
      'Konsultasi pelan seni bina berorientasikan modul IBS',
      'Penyediaan lukisan struktur & permohonan kelulusan PBT / LPPSA / Bank',
      'Kerja asas tapak, cerucuk (jika perlu) dan papak lantai (ground slab)',
      'Pemasangan dinding interlocking IBS Tasblock Flexi-Fit',
      'Pemasangan bumbung kekuda besi, siling, pendawaian elektrik & perpaipan',
      'Kemasan lantai jubin, cat luaran/dalaman dan penyerahan kunci (Handover)'
    ],
    deliverables: [
      'Lukisan 3D & Pelan Struktur Bertauliah',
      'Jadual Pembinaan Telus (Milestone Progress)',
      'Sijil Jaminan Struktur & Sokongan Pasca Penyerahan Kunci'
    ]
  },
  {
    id: 'training',
    title: 'Latihan & Pensijilan Kontraktor',
    shortDesc: 'Bengkel amali dan teori pemasangan bata IBS Tasblock untuk kontraktor, tukang dan jurutera tempatan.',
    fullDesc: 'Program pemerkasaan kemahiran binaan moden bagi kontraktor tempatan. Matlamat kami adalah memindahkan kemahiran praktikal pemasangan bata saling mengunci (interlocking) agar kontraktor mampu membina rumah IBS secara berkualiti tinggi dan selamat mengikut standard industri.',
    iconName: 'GraduationCap',
    targetAudience: 'Kontraktor G1-G4, Tukang Rumah, Pelajar Kejuruteraan/Politeknik & Peminat DIY',
    benefits: [
      'Menguasai teknik "dry-stack" interlocking dengan pantas dan tepat',
      'Memahami kaedah ikatan tetulang besi tiang (tie-columns) & rasuk lintol (lintels)',
      'Mengurangkan kebergantungan kepada buruh asing mahir lepa simen',
      'Peluang didaftarkan ke dalam Direktori Rakan Kontraktor Tasblock Builder'
    ],
    scope: [
      'Modul Teori: Pengenalan Sistem IBS, Modulasi Grid & Pengiraan Bahan',
      'Modul Amali 1: Penyediaan Asas Lapisan Pertama (Base Levelling Course)',
      'Modul Amali 2: Teknik Susunan Interlocking & Penguncian Sudut (Corner Alignment)',
      'Modul Amali 3: Pemasangan U-Block Rasuk & Laluan Saliran/Elektrik (MEP)',
      'Ujian Kualiti: Kerataan Dinding (Plumb & Level) dan Kaedah Penggautan (Grouting)'
    ],
    deliverables: [
      'Sijil Penyertaan Bengkel Kemahiran IBS Tasblock Builder',
      'Buku Panduan Pemasangan Rasmi (Hardcopy & PDF)',
      'Akses Sokongan Khidmat Nasihat Teknikal Tapak Binaan secara berterusan'
    ]
  },
  {
    id: 'supply',
    title: 'Pembekalan Blok IBS Flexi-Fit',
    shortDesc: 'Penghantaran blok IBS Tasblock Flexi-Fit berkualiti tinggi terus ke tapak projek anda di seluruh Semenanjung.',
    fullDesc: 'Khidmat logistik dan pembekalan terus blok IBS Tasblock Flexi-Fit yang dikilangkan dengan kawalan kualiti ketat. Sesuai untuk kontraktor yang sudah mempunyai tenaga kerja sendiri dan memerlukan bekalan bahan mentah tepat pada masanya mengikut fasa pembinaan.',
    iconName: 'Truck',
    targetAudience: 'Kontraktor Pembinaan, Sub-kontraktor Struktur & Pemilik Projek Kendiri',
    benefits: [
      'Kualiti blok seragam dengan kekuatan mampatan teruji (SIRIM)',
      'Penghantaran berpalet mengurangkan kerosakan dan serpihan semasa pemunggahan',
      'Jadual penghantaran fleksibel mengikut fasa kemajuan tapak (Just-in-Time)',
      'Bantuan pengiraan anggaran bilangan unit mengikut pelan lantai anda'
    ],
    scope: [
      'Pemeriksaan pelan untuk pengiraan kuantiti blok (Take-off Bill of Quantities)',
      'Penyediaan set blok lengkap: Blok Standard, Blok Sudut, U-Block & Blok Penamat',
      'Pengurusan lori kren untuk pemunggahan selamat di tapak projek',
      'Panduan penerimaan dan penyimpanan bahan di tapak'
    ],
    deliverables: [
      'Blok IBS Tasblock Flexi-Fit berpalet dan berbalut rapi',
      'Nota Penghantaran Rasmi & Laporan Ujian Kualiti Kelompok (Batch Quality Sheet)',
      'Khidmat sokongan penggantian jika terdapat blok rosak semasa transit'
    ]
  },
  {
    id: 'supply-install',
    title: 'Pakej Bekal & Pasang (Supply & Install)',
    shortDesc: 'Penyelesaian struktur dinding IBS siap dipasang oleh pasukan pakar terlatih kami untuk kontraktor utama.',
    fullDesc: 'Bagi kontraktor utama yang ingin menjimatkan masa dan mengelakkan risiko kerja berulang (rework), kami menyediakan pakej bekal bersama tukang pakar IBS. Kami siapkan dinding berstruktur penuh dari papak lantai hingga ke aras rasuk bumbung.',
    iconName: 'ShieldCheck',
    targetAudience: 'Kontraktor Utama (Main Con), Pengurus Projek & Pemilik Rumah',
    benefits: [
      'Jaminan kualiti pemasangan tegak, kemas dan mematuhi spesifikasi kejuruteraan',
      'Kontraktor utama tidak perlu melatih pekerja baharu di tapak',
      'Pengawasan tapak oleh penyelia teknikal berpengalaman',
      'Kelajuan penyiapan dinding rumah teres/banglo seawal 7 hingga 14 hari bekerja'
    ],
    scope: [
      'Mobilisasi pasukan tukang terlatih Tasblock Builder ke tapak',
      'Pemasangan baris penentu aras (datum line) dengan simen mortar khas',
      'Pemasangan blok interlocking tingkat demi tingkat',
      'Pemasukan tetulang besi Y10/Y12 ke rongga tiang & tuangan konkrit grout',
      'Pemasangan blok lintol tingkap dan pintu dengan tetulang keluli',
      'Pembersihan tapak dan serahan dinding bersedia untuk kerja siling & bumbung'
    ],
    deliverables: [
      'Struktur dinding IBS yang siap dipasang dan disahkan rata',
      'Laporan Pemeriksaan Bersama (Joint Site Inspection Form)',
      'Jaminan Mutu Kerja Pemasangan (Workmanship Warranty)'
    ]
  }
];

export const PRODUCTS_DATA: ProductSpec[] = [
  {
    id: 'tb-std-400',
    name: 'Blok Standard Interlocking (Flexi-Fit STD)',
    code: 'TBF-STD-400',
    role: 'Blok Utama Dinding Galas & Pemisah',
    dimensions: '400mm (P) x 150mm (L) x 200mm (T)',
    weight: '11.8 kg / unit',
    compressiveStrength: '> 7.5 N/mm² (Kategori Dinding Galas Beban)',
    fireRating: '2 Jam (Ujian Ketahanan Api Makmal SIRIM)',
    coveragePerM2: '12.5 unit / m²',
    description: 'Blok teras sistem Tasblock Flexi-Fit dengan profil rabung saling mengunci (tongue & groove) di bahagian atas dan bawah. Mempunyai 2 rongga tengah untuk laluan tetulang besi tegak dan saluran paip utiliti.',
    keyFeatures: [
      'Sambungan "tongue & groove" jitu dengan toleransi ±1mm',
      'Sistem "mortarless" pada sambungan tegak, hanya nipis pelekat di sambungan mendatar',
      'Rongga berongga (hollow cores) memberikan penebatan haba & akustik yang cemerlang',
      'Mengurangkan berat struktur keseluruhan berbanding bata tanah liat pejal'
    ],
    recommendedUse: 'Dinding luaran galas beban, dinding pemisah bilik, dinding sempadan perimeter & struktur homestay.',
    svgType: 'standard'
  },
  {
    id: 'tb-cnr-400',
    name: 'Blok Sudut & Tiang (Flexi-Fit Corner)',
    code: 'TBF-CNR-400',
    role: 'Penyambung Sudut 90 Darjah & Tiang Pengukuh',
    dimensions: '400mm (P) x 150mm (L) x 200mm (T)',
    weight: '12.4 kg / unit',
    compressiveStrength: '> 8.0 N/mm²',
    fireRating: '2 Jam',
    coveragePerM2: 'Mengikut ketinggian sudut (5 unit bagi setiap meter tinggi sudut)',
    description: 'Direka khas dengan satu permukaan rata di bahagian hujung untuk membentuk bucu dinding 90 darjah yang sempurna tanpa perlu memotong blok. Berfungsi sebagai acuan tetap bagi tiang pengukuh (stiffener column).',
    keyFeatures: [
      'Permukaan bucu licin dan rata untuk kemasan tepi yang kemas',
      'Rongga teras selari untuk laluan besi rebar pengukuh tiang',
      'Membolehkan ikatan ikatan berselang (running bond) terbentuk secara semula jadi',
      'Menghapuskan keperluan memasang papan acuan (formwork) kayu untuk tiang'
    ],
    recommendedUse: 'Semua bucu persimpangan dinding, tiang anjung rumah, dan penamat bingkai pintu/tingkap.',
    svgType: 'corner'
  },
  {
    id: 'tb-ublk-400',
    name: 'Blok Rasuk Lintol U (Flexi-Fit Lintol U-Block)',
    code: 'TBF-UB-400',
    role: 'Rasuk Pengikat (Ring Beam) & Lintol Pintu/Tingkap',
    dimensions: '400mm (P) x 150mm (L) x 200mm (T)',
    weight: '10.5 kg / unit',
    compressiveStrength: '> 7.5 N/mm²',
    fireRating: '2 Jam',
    coveragePerM2: '2.5 unit bagi setiap meter panjang lintol / rasuk',
    description: 'Blok berbentuk palung "U" yang bertindak sebagai acuan kekal untuk rasuk lintol mendatar di atas bukaan tingkap dan pintu serta rasuk pengikat atas (tie-beam). Besi pengukuh mendatar diletakkan di dalam palung dan dituangkan simen konkrit.',
    keyFeatures: [
      'Menghapuskan penggunaan kayu formwork dan perancah rumit untuk rasuk',
      'Penyeragaman bahan permukaan dinding yang memudahkan kerja mengecat/skimming',
      'Menyokong beban bumbung kekuda besi secara sekata ke seluruh dinding',
      'Pemasangan pantas tanpa perlu menunggu tempoh tanggasan acuan kayu'
    ],
    recommendedUse: 'Lintol bukaan pintu, lintol tingkap, dan rasuk pengikat keliling aras atas dinding.',
    svgType: 'lintel'
  },
  {
    id: 'tb-hlf-200',
    name: 'Blok Separuh Penamat (Flexi-Fit Half Block)',
    code: 'TBF-HLF-200',
    role: 'Penyelaras Panjang Dinding & Penamat Bukaan',
    dimensions: '200mm (P) x 150mm (L) x 200mm (T)',
    weight: '5.9 kg / unit',
    compressiveStrength: '> 7.5 N/mm²',
    fireRating: '2 Jam',
    coveragePerM2: 'Digunakan berselang-seli pada bukaan dinding',
    description: 'Blok separuh modul berukuran 200mm untuk melengkapkan corak susunan bata berselang (staggered joint) di hujung bukaan tingkap dan pintu tanpa memerlukan sebarang kerja memotong di tapak.',
    keyFeatures: [
      'Menjimatkan masa pemotongan dan mengurangkan habuk berbahaya di tapak binaan',
      'Memastikan integriti kekemasan tepi bukaan pintu dan tingkap',
      'Mengelakkan pembaziran sisa binaan (zero-waste concept)',
      'Ketepatan dimensi kilang yang memudahkan pemasangan sub-frame aluminium'
    ],
    recommendedUse: 'Penamat tepi tingkap, pintu, dan dinding henti (dead-end walls).',
    svgType: 'half'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'banglo-sepang',
    title: 'Banglo Moden 1 Tingkat (2,200 kps)',
    category: 'banglo',
    location: 'Salak Tinggi, Sepang & Rawang, Selangor',
    clientType: 'Pemilik Individu',
    builtUpArea: '2,200 sqft',
    blocksUsed: 3850,
    durationDays: 14,
    savingsAchieved: 'Jimat 42 hari & 35% kos buruh',
    description: 'Pembinaan struktur dinding penuh banglo 4 bilik tidur dan 3 bilik air. Pemasangan dinding siap dalam masa 14 hari bekerja oleh 4 orang tukang terlatih, sebelum kerja bumbung dan kemasan diteruskan.',
    systemAttribution: 'Menggunakan Sistem IBS Tasblock Flexi-Fit keluaran Tasblock (M) Sdn. Bhd., dilaksanakan melalui khidmat Bekal & Pasang oleh Tasblock Builder.',
    highlights: [
      'Tiada kayu formwork digunakan untuk tiang dan lintol',
      'Skim coat terus ke permukaan bata tanpa lapisan plaster tebal',
      'Suhu dalam rumah terasa lebih nyaman walaupun tanpa pendingin hawa'
    ],
    image: '/projects/banglo-rawang.jpg',
    gallery: [
      '/projects/banglo-rawang.jpg',
      '/projects/pemasangan-interlocking.jpg',
      '/projects/dinding-pasang.jpg'
    ],
    phases: [
      { day: 'Hari 1-2', title: 'Lapisan Asas & Pengesahan Aras', desc: 'Pemasangan lapisan pertama pada slab dengan penetapan water-level laser dan dowel bar tiang.' },
      { day: 'Hari 3-8', title: 'Pemasangan Dinding Sehingga Paras Ambang', desc: 'Susunan blok standard, lintol tingkap U-Block, dan pemasangan konduit elektrik dalam rongga.' },
      { day: 'Hari 9-14', title: 'Rasuk Pengikat Atas & Grouting', desc: 'Pemasangan U-Block aras atas, ikatan tetulang keluli dan penuangan grout konkrit pengikat.' }
    ]
  },
  {
    id: 'banglo-moden-2-tingkat',
    title: 'Banglo Kontemporari 2 Tingkat (3,600 kps)',
    category: 'banglo',
    location: 'Bandar Enstek, Negeri Sembilan',
    clientType: 'Pemilik Individu',
    builtUpArea: '3,600 sqft',
    blocksUsed: 6200,
    durationDays: 24,
    savingsAchieved: 'Jimat 60 hari berbanding konvensional',
    description: 'Reka bentuk kediaman moden 2 tingkat dengan modul struktur IBS Tasblock Flexi-Fit. Mengintegrasikan rasuk lintol tersembunyi dan dinding galas beban yang kukuh tanpa memerlukan formwork leceh.',
    systemAttribution: 'Dihasilkan menggunakan modul blok IBS sistem Tasblock (M) Sdn. Bhd. dengan rekabentuk struktur bertauliah.',
    highlights: [
      'Pemasangan papak tingkat atas terus bersambung dengan U-Block galas beban',
      'Permukaan dinding tepat dan lurus memudahkan pemasangan tingkap casement',
      'Penebat akustik yang tinggi memberikan ketenangan ruang dalaman'
    ],
    image: '/projects/banglo-moden-2-tingkat.jpg',
    gallery: [
      '/projects/banglo-moden-2-tingkat.jpg',
      '/projects/pemasangan-interlocking.jpg'
    ],
    phases: [
      { day: 'Hari 1-10', title: 'Struktur Tingkat Bawah', desc: 'Pemasangan dinding blok interlocking tingkat bawah dan papak lantai aras satu.' },
      { day: 'Hari 11-18', title: 'Struktur Tingkat Atas', desc: 'Pemasangan blok aras atas, pembukaan tingkap panorama dan lintol pengukuh.' },
      { day: 'Hari 19-24', title: 'Rasuk Bumbung & Penyerahan Dinding', desc: 'Pengikatan kekuda bumbung terus ke atas dinding galas IBS.' }
    ]
  },
  {
    id: 'homestay-lumut',
    title: 'Pusat Rehat & Homestay Eco-Resort 4 Unit',
    category: 'homestay',
    location: 'Teluk Senangin, Lumut, Perak',
    clientType: 'Pengusaha Komersial',
    builtUpArea: '3,400 sqft (4 Chalet)',
    blocksUsed: 5900,
    durationDays: 21,
    savingsAchieved: 'Siap 2 bulan lebih awal daripada jangkaan asal',
    description: 'Projek pembinaan 4 unit calet santai berkonsepkan estetik separa terdedah (semi-exposed brick look). Ketahanan terhadap udara masin laut dan penebat haba menjadikannya pilihan ideal untuk pengusaha chalet.',
    systemAttribution: 'Sistem IBS Tasblock Flexi-Fit dibekalkan dari kilang pengeluar Tasblock (M) Sdn. Bhd., diselaraskan oleh Tasblock Builder.',
    highlights: [
      'Ketahanan terhadap kelembapan pantai tanpa retakan rerambut',
      'Penebat bunyi akustik antara bilik yang sangat memuaskan pelanggan homestay',
      'Pengusaha dapat memulakan operasi sewaan 60 hari lebih cepat'
    ],
    image: '/projects/chalet-resort.jpg',
    gallery: [
      '/projects/chalet-resort.jpg',
      '/projects/banglo-1-tingkat.jpg'
    ],
    phases: [
      { day: 'Hari 1-5', title: 'Pemasangan Unit 1 & 2', desc: 'Mobilisasi bahan blok dan pemasangan dinding struktur utama 2 unit pertama.' },
      { day: 'Hari 6-12', title: 'Pemasangan Unit 3 & 4', desc: 'Pemasangan dinding serentak dengan kerja paip air kumbahan tersembunyi.' },
      { day: 'Hari 13-21', title: 'Pemasangan U-Beam & Pemeriksaan Kualiti', desc: 'Penyempurnaan lintol pintu gelangsar kaca besar dan kerja salutan kalis air (water repellent).' }
    ]
  },
  {
    id: 'kontraktor-kedah',
    title: 'Rumah Mampu Milik Komuniti (1,000 kps)',
    category: 'mampu-milik',
    location: 'Baling, Kedah',
    clientType: 'Kontraktor Tempatan',
    builtUpArea: '1,000 sqft',
    blocksUsed: 1950,
    durationDays: 9,
    savingsAchieved: 'Jimat 28 hari kerja kontraktor tempatan',
    description: 'Kontraktor tempatan yang telah menghadiri Kursus Latihan Tasblock Builder membeli blok dan membina rumah ini sendiri dengan bimbingan teknikal tapak oleh juruteknik kami.',
    systemAttribution: 'Sistem bata IBS Tasblock Flexi-Fit teruji CIDB, dibekalkan di bawah program sokongan kontraktor Tasblock Builder.',
    highlights: [
      'Kontraktor hanya perlukan 3 orang tenaga kerja tempatan',
      'Kawasan tapak binaan sangat bersih tanpa timbunan pasir dan sisa simen melimpah',
      'Pelanggan gembira dapat jimat sewa rumah lama kerana rumah baharu cepat siap'
    ],
    image: '/projects/banglo-1-tingkat.jpg',
    gallery: [
      '/projects/banglo-1-tingkat.jpg',
      '/projects/pemasangan-interlocking.jpg'
    ],
    phases: [
      { day: 'Hari 1', title: 'Bimbingan Setting Out Tapak', desc: 'Penyelia Tasblock Builder turun ke tapak untuk menyemak ketepatan garisan asas.' },
      { day: 'Hari 2-6', title: 'Pemasangan Dinding oleh Kontraktor', desc: 'Tukang tempatan memasang blok dengan pantas berpandukan sistem interlocking.' },
      { day: 'Hari 7-9', title: 'Penuangan Grout & Penyerahan Dinding', desc: 'Pengisian konkrit ke dalam tiang-tiang pengukuh sudut dan penutup dinding.' }
    ]
  },
  {
    id: 'institusi-sekolah-melaka',
    title: 'Blok Pendidikan & Bilik Darjah IBS (SK Kerubong & SJKC Yu Ying)',
    category: 'komersial',
    location: 'Melaka Tengah, Melaka',
    clientType: 'Pengusaha Komersial',
    builtUpArea: '5,800 sqft (14 Bilik Darjah)',
    blocksUsed: 9400,
    durationDays: 28,
    savingsAchieved: 'Kelulusan pantas & pembinaan tanpa gangguan sesi sekolah',
    description: 'Pembinaan bilik darjah tambahan modular di SK Kerubong (8 bilik darjah) dan SJK(C) Yu Ying (6 bilik darjah). Struktur modular IBS membolehkan pembinaan selesai dengan pantas, bersih dan selamat untuk persekitaran sekolah.',
    systemAttribution: 'Sistem IBS Tasblock Flexi-Fit terbukti melalui rekod pembinaan fasiliti awam dan komersial Tasblock (M) Sdn. Bhd.',
    highlights: [
      'Mematuhi piawaian keselamatan struktur Jabatan Kerja Raya (JKR)',
      'Tapak binaan bebas sisa habuk pasir yang berbahaya kepada pelajar',
      'Penebat haba unggul mengekalkan suasana kelas yang sejuk'
    ],
    image: '/projects/sk-kerubong.jpg',
    gallery: [
      '/projects/sk-kerubong.jpg',
      '/projects/projek-sekolah-melaka.jpg'
    ],
    phases: [
      { day: 'Hari 1-7', title: 'Mobilisasi & Asas Tapak', desc: 'Pemasangan starter bar pada tapak konkrit bertauliah.' },
      { day: 'Hari 8-20', title: 'Pemasangan Dinding 14 Bilik Darjah', desc: 'Pemasangan serentak dinding interlocking dan lintol pintu lebar.' },
      { day: 'Hari 21-28', title: 'Kemasan Pantas Skim Coat & Penyerahan', desc: 'Kemasan skim coat halus dan pemeriksaan kualiti penuh.' }
    ]
  },
  {
    id: 'dinding-pagar-shah-alam',
    title: 'Pagar Perimeter Privasi & Dinding Penahan Taman',
    category: 'dinding',
    location: 'Bukit Jelutong, Shah Alam',
    clientType: 'Pemilik Individu',
    builtUpArea: '180 meter panjang x 2.2m tinggi',
    blocksUsed: 4950,
    durationDays: 8,
    savingsAchieved: 'Selesai dalam 8 hari tanpa sebarang papan acuan',
    description: 'Pembinaan pagar perimeter estetika tinggi mengelilingi lot banglo sudut. Kekuatan dinding galas dan rintangan cuaca memastikan dinding kekal tegak dan kukuh tanpa risiko retak akibat tekanan tanah.',
    systemAttribution: 'Blok IBS Tasblock Flexi-Fit berkualiti pengeluar Tasblock (M) Sdn. Bhd.',
    highlights: [
      'Pemasangan tanpa memerlukan lepa pasir simen tradisional yang mengotorkan landskap',
      'Tiang pagar terintegrasi di dalam blok dengan tetulang besi Y12 berkualiti',
      'Rupa bentuk moden industri yang selari dengan reka bentuk landskap kontemporari'
    ],
    image: '/projects/dinding-pasang.jpg',
    gallery: [
      '/projects/dinding-pasang.jpg',
      '/projects/pemasangan-interlocking.jpg'
    ],
    phases: [
      { day: 'Hari 1-3', title: 'Penggalian Asas & Lapisan Tapak', desc: 'Pemasangan starter bar besi pada asas konkrit memanjang.' },
      { day: 'Hari 4-6', title: 'Susunan Blok & Rongga Pengukuh', desc: 'Susunan 11 lapisan blok dengan corak interlocking rapat.' },
      { day: 'Hari 7-8', title: 'Pemasangan Blok Atas (Capping) & Kemasan', desc: 'Penutupan lubang atas dan kerja kemasan cat rintangan cuaca.' }
    ]
  }
];

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    id: 'kursus-asas-kontraktor',
    title: 'Bengkel Amali & Teori Pemasangan IBS Tasblock Flexi-Fit',
    level: 'Praktikal Tapak',
    duration: '2 Hari Penuh (Sabtu & Ahad, 9:00 AM - 5:00 PM)',
    audience: 'Kontraktor Kelas F/G1-G4, Tukang Rumah, Mandur Tapak & Jurutera Muda',
    mode: 'Fizikal di Pusat Latihan & Tapak Ujian Binaan',
    location: 'Pusat Latihan Tasblock Builder, Rawang / Banting, Selangor',
    pricePerPax: 'RM 350 / peserta (Termasuk Makan, Nota & Kit Pemasang)',
    syllabus: [
      'Pengenalan Sistem IBS Tasblock Flexi-Fit & Perbezaan dengan Kaedah Konvensional',
      'Pengiraan Anggaran Kuantiti (Bill of Materials) Berdasarkan Pelan Rumah',
      'Teknik Menetapkan Lapisan Pertama (Datum Course) menggunakan Laser Level',
      'Kaedah "Dry-Stack" Interlocking Pantas & Kawalan Kerataan Dinding (Plumb Check)',
      'Pemasangan Bucu 90 Darjah dengan Blok Sudut tanpa pemotongan',
      'Aplikasi Blok U-Lintol untuk Bukaan Pintu & Tingkap',
      'Pengurusan Tetulang Keluli (Rebar) dan Teknik Grouting Konkrit yang betul',
      'Pemasangan Laluan Pendawaian Elektrik & Paip Tanpa Perlu Memecah Dinding (Hacking)'
    ],
    benefits: [
      'Sijil Tamat Latihan Kemahiran Pemasang IBS Tasblock Builder',
      'Diskaun 5% untuk pembelian blok kelompok pertama bagi projek anda',
      'Pendaftaran percuma ke dalam Direktori Rakan Kontraktor Tasblock',
      'Sokongan teknikal panggilan video terus semasa menjalankan projek sebenar anda'
    ],
    nextIntake: 'Sabtu & Ahad Minggu Ketiga Setiap Bulan'
  },
  {
    id: 'kursus-pengurusan-projek',
    title: 'Seminar Pengurusan Projek & Kos Binaan IBS untuk Kontraktor',
    level: 'Lanjutan & Pengurusan IBS',
    duration: '1 Hari (9:00 AM - 4:30 PM)',
    audience: 'Pemilik Syarikat Pembinaan, Jurukur Bahan (QS), Pemaju & Jurutera Tapak',
    mode: 'Hibrid (Fizikal di Hotel / Atas Talian Zoom)',
    location: 'Pusat Konvensyen Shah Alam / Akses Zoom HD',
    pricePerPax: 'RM 250 / peserta',
    syllabus: [
      'Analisis Aliran Tunai & Penjimatan Masa Projek Menggunakan IBS',
      'Penyediaan Dokumen Tender & Sebut Harga Rumah IBS untuk Pelanggan',
      'Kelulusan Pihak Berkuasa Tempatan (PBT) dan Panduan Skor CIDB IBS',
      'Strategi Pengurusan Logistik dan Tapak Binaan Padat'
    ],
    benefits: [
      'Template Excel Pengiraan Kos & Sebut Harga Rumah IBS',
      'Contoh Dokumen Spesifikasi Teknikal untuk disertakan kepada Pelanggan',
      'Sijil Kehadiran Profesional'
    ],
    nextIntake: 'Khamis Minggu Pertama Setiap Bulan'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Tuan Haji Azman Mokhtar',
    role: 'Pemilik Rumah Banglo',
    location: 'Kuala Selangor, Selangor',
    quote: 'Awalnya risau bila tukang kata bina rumah tanpa lepa tebal. Tapi bila Tasblock Builder pasang dari hari ke hari, dinding naik sangat lurus dan kemas! Jimat hampir 2 bulan masa membina, anak-anak masuk rumah rasa sejuk walaupun tengah hari terik.',
    serviceUsed: 'Pakej Reka & Bina (Design & Build)',
    verifiedBadge: 'Pelanggan Sah Reka & Bina'
  },
  {
    id: 't2',
    name: 'En. Rosli Baharom',
    role: 'Pengarah Urusan Megah Impian Bina (Kontraktor G2)',
    location: 'Sungai Petani, Kedah',
    quote: 'Masalah utama saya sebelum ini ialah sukar cari tukang ikat bata dan tukang plaster yang mahir. Lepas hantar 3 orang pekerja pergi latihan Tasblock Builder, kami boleh siapkan dinding sebuah rumah dalam masa 8 hari sahaja. Tapak binaan pun bersih, tiada pembaziran pasir!',
    serviceUsed: 'Latihan Kontraktor & Pembekalan Blok',
    verifiedBadge: 'Rakan Kontraktor Bertauliah'
  },
  {
    id: 't3',
    name: 'Puan Siti Nurhaliza Mansor',
    role: 'Pengusaha Villa & Homestay',
    location: 'Melaka Bandar Bersejarah',
    quote: 'Kami ambil pakej Bekal & Pasang daripada Tasblock Builder untuk 2 unit chalet tambahan. Pasukan mereka sangat berdisiplin, datang awal pagi dan siap lebih awal daripada jadual. Tetamu homestay sering puji dindingnya yang unik dan kedap bunyi.',
    serviceUsed: 'Pakej Bekal & Pasang (Supply & Install)',
    verifiedBadge: 'Pelanggan Sah Komersial'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'sistem-ibs',
    question: 'Apakah sebenarnya Sistem IBS Tasblock Flexi-Fit ini?',
    answer: 'Sistem IBS Tasblock Flexi-Fit adalah kaedah binaan perindustrian (Industrialised Building System) menggunakan blok konkrit pratuang interlocking (saling mengunci). Sistem ini mengurangkan kebergantungan kepada mortar pasir-simen tradisional yang tebal, menghasilkan dinding yang lebih tegak, kuat, dan pantas disiapkan dengan konsep "tongue-and-groove" yang jitu.'
  },
  {
    category: 'sistem-ibs',
    question: 'Adakah dinding Tasblock Flexi-Fit cukup kuat tanpa tiang konkrit konvensional?',
    answer: 'Ya, dinding ini bertindak sebagai sistem dinding galas beban (load-bearing wall). Di setiap sudut dan jarak tertentu (biasanya setiap 3 meter), rongga dalam blok dimasukkan tetulang keluli (rebar Y10/Y12) dan diisi konkrit grout berkekuatan tinggi. Ia membentuk tiang pengukuh tersembunyi (hidden reinforced stiffener columns) yang memenuhi piawaian kejuruteraan struktur.'
  },
  {
    category: 'kos-anggaran',
    question: 'Berapakah kos pembinaan menggunakan IBS Tasblock berbanding bata merah konvensional?',
    answer: 'Secara kos bahan mentah, harga blok interlocking mungkin setanding atau sedikit berbeza, tetapi penjimatan besar datang daripada (1) Pengurangan masa pembinaan sehingga 50% (jimat kos upah harian tukang), (2) Menghapuskan kerja lepaan tebal (hanya skim coat nipis atau cat terus), dan (3) Mengurangkan sisa buangan tapak binaan hampir sifar. Secara keseluruhan, projek jimat antara 15% hingga 25% kos operasi tapak.'
  },
  {
    category: 'permit-lppsa',
    question: 'Bolehkah rumah menggunakan sistem ini memohon pinjaman LPPSA atau pinjaman Bank komersial?',
    answer: 'Boleh. Sistem IBS Tasblock (M) Sdn. Bhd. mempunyai pengiktirafan status IBS CIDB dan ujian makmal berkaitan. Apabila lukisan struktur diluluskan oleh Jurutera Bertauliah (PE) dan mendapat kelulusan Pelan Bangunan daripada Pihak Berkuasa Tempatan (PBT), permohonan pinjaman LPPSA atau bank komersial boleh diproses seperti biasa.'
  },
  {
    category: 'latihan',
    question: 'Saya kontraktor kecil yang belum pernah pasang IBS. Adakah saya boleh belajar?',
    answer: 'Sangat dialu-alukan! Tasblock Builder ditubuhkan khusus untuk membantu kontraktor tempatan dan individu menguasai teknologi ini. Kami menyediakan Bengkel Amali 2 Hari di mana anda akan memegang sendiri blok, menyusun aras lapisan pertama, mengunci sudut, dan menguruskan tetulang bersama bimbingan penyelia kami.'
  },
  {
    category: 'sistem-ibs',
    question: 'Apakah hubungan antara Tasblock Builder dan Tasblock (M) Sdn. Bhd.?',
    answer: 'Tasblock (M) Sdn. Bhd. adalah syarikat keluarga induk yang mengkhususkan kepada pengilangan blok IBS serta pelaksanaan projek-projek berskala besar dan perindustrian. Pengasas Tasblock Builder berasal daripada keluarga pengeluar ini, dan menubuhkan Tasblock Builder dengan fokus khusus untuk mendemokrasikan teknologi ini kepada pasaran perumahan individu, pemilik tanah dan pemerkasaan kontraktor tempatan melalui khidmat Reka & Bina, Latihan, Pembekalan dan Pemasangan.'
  },
  {
    category: 'sistem-ibs',
    question: 'Bagaimanakah laluan paip air dan wayar elektrik dipasang pada dinding ini?',
    answer: 'Blok Tasblock Flexi-Fit mempunyai rongga menegak terintegrasi. Untuk pendawaian elektrik dan paip air, konduit terus disalurkan ke dalam rongga blok sebelum dinding ditutup, tanpa memerlukan kerja memecah dinding (hacking) seperti kaedah konvensional. Ini mengekalkan kekuatan struktur dan kawasan kerja kekal kemas.'
  }
];

export const COMPANY_CONTACT = {
  name: 'Tasblock Builder',
  tagline: 'Rakan Pelaksana & Pengedar IBS Tasblock Flexi-Fit Malaysia',
  phoneDisplay: '+60 12-345 6789 / +60 19-876 5432',
  phoneRaw: '60123456789',
  email: 'info@tasblockbuilder.com.my',
  address: 'Hub Operasi & Pusat Latihan: Lot 482, Kawasan Perindustrian Rawang Perdana, 48000 Rawang, Selangor Darul Ehsan.',
  operatingHours: 'Isnin - Jumaat: 8:30 AM - 5:30 PM | Sabtu: 9:00 AM - 1:00 PM (Ahad & Cuti Umum Tutup)',
  whatsappBaseUrl: 'https://wa.me/60123456789',
  coverageAreas: 'Selangor, WP Kuala Lumpur, Perak, Kedah, Negeri Sembilan, Melaka, Pahang & Seluruh Semenanjung Malaysia'
};
