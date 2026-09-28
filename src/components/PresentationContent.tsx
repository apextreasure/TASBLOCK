import { Clock3, Coins, ShieldCheck, Users, HardHat, Leaf } from 'lucide-react';

const source = 'Sumber: Tasblock Global 2025 · Tasblock (M) Sdn. Bhd.';

export function ManufacturerDirection() {
  return <section aria-labelledby="direction-title" className="space-y-6">
    <div><p className="text-sm font-semibold text-[#99D5D9] mb-3">HALA TUJU PENGELUAR</p><h2 id="direction-title" className="text-2xl sm:text-3xl font-bold text-white">Inovasi yang berpandukan tujuan</h2></div>
    <div className="grid md:grid-cols-3 gap-5">{[
      ['01 / VISI', 'Sistem binaan yang mesra dunia', 'Menjadi sistem binaan paling mesra dunia — “World Friendliest Building System”.'],
      ['02 / MISI', 'Mudah. Selamat. Mampan.', 'Terus berinovasi supaya amalan pembinaan menjadi lebih mudah, selamat dan mampan.'],
      ['03 / NILAI', 'Intuisi, kreativiti & integriti', 'Intuitiveness · Creativity · Integrity. Nilai yang memandu teknologi dan inovasi Tasblock.'],
    ].map(([label, title, text]) => <article key={label} className="rounded-2xl border border-[#3EABB0]/30 bg-gradient-to-br from-[#12314a] to-[#071827] p-6 sm:p-8 space-y-4"><p className="text-xs font-bold tracking-widest text-[#99D5D9]">{label}</p><h3 className="text-xl font-bold text-white">{title}</h3><p className="text-slate-300 leading-relaxed">{text}</p></article>)}</div>
    <p className="text-xs text-slate-400">{source} · Visi, misi dan nilai pengeluar.</p>
  </section>;
}

export function IndustryAndSolution() {
  const challenges = [
    { icon: Clock3, title: 'Masa', text: 'Kerja tapak yang memakan masa, bergantung pada cuaca dan terdedah kepada kelewatan.' },
    { icon: Coins, title: 'Kos', text: 'Turun naik harga bahan, kos tenaga kerja dan risiko kos projek melebihi anggaran.' },
    { icon: ShieldCheck, title: 'Kualiti', text: 'Kawalan mutu di tapak, keperluan pekerja mahir dan pengurangan kecacatan binaan.' },
    { icon: Users, title: 'Tenaga kerja', text: 'Kekurangan pekerja, kebergantungan pada buruh asing dan penyelarasan pelbagai tred.' },
    { icon: HardHat, title: 'Kesihatan & keselamatan', text: 'Kerja berisiko, habuk dan keadaan tapak yang boleh menjejaskan keselamatan pekerja.' },
    { icon: Leaf, title: 'Kelestarian', text: 'Pelepasan karbon, penggunaan sumber dan sisa semasa pembinaan serta akhir hayat bangunan.' },
  ];
  return <section aria-labelledby="challenges-title" className="space-y-8">
    <div className="max-w-3xl space-y-3"><p className="text-sm font-semibold text-[#99D5D9]">CABARAN → PENDEKATAN</p><h2 id="challenges-title" className="text-2xl sm:text-4xl font-bold text-white">Mengapa fikir semula cara kita membina?</h2><p className="text-slate-300">Pembentangan Tasblock mengenal pasti enam cabaran industri yang menjadi fokus inovasi sistemnya.</p></div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{challenges.map(({icon: Icon,title,text}) => <article key={title} className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6"><Icon aria-hidden="true" className="text-[#99D5D9] mb-4"/><h3 className="text-lg font-bold text-white mb-2">{title}</h3><p className="text-sm text-slate-300 leading-relaxed">{text}</p></article>)}</div>
    <div className="rounded-3xl border border-[#3EABB0]/30 bg-[#12314a] p-6 sm:p-9 space-y-6"><div className="max-w-3xl space-y-3"><p className="text-sm font-bold text-[#99D5D9]">PENYELESAIAN TASBLOCK</p><h3 className="text-2xl sm:text-3xl font-bold text-white">Bahan komposit. Sambungan FlexiFit. Potensi guna semula.</h3><p className="text-slate-200 leading-relaxed">Tasblock memperkenalkan komposit polimer bertetulang gentian (FRPC) dan kaedah sambungan ketuk masuk FlexiFit. Pengeluar menerangkan komponen ringan dengan kekuatan mampatan, tegangan dan impak, serta rintangan terhadap bahan kimia dan anai-anai.</p></div>
      <div className="grid sm:grid-cols-2 gap-5">{[
        ['Kesihatan & keselamatan', 'Komponen ringan, pemasangan tanpa jentera berat dan sambungan FlexiFit yang diterangkan tanpa paku, skru atau gam; pendekatan untuk tapak lebih kemas dan kurang berhabuk.'],
        ['Tenaga kerja & produktiviti', 'Pembinaan kering dengan lebih sedikit pekerja dan tred, untuk membantu perancangan tempoh penghantaran dan kawalan kos.'],
        ['Kualiti yang dirancang', 'Komponen prafabrikasi dalam persekitaran terkawal, dengan geometri sambungan untuk membantu ketegakan, sudut tepat dan penjajaran dinding.'],
        ['Ekonomi kitaran', 'Sistem boleh dibongkar untuk penggunaan semula atau tujuan baharu. Bio-komposit dan pengurangan sisa ialah sebahagian daripada pendekatan kelestarian pengeluar.'],
      ].map(([title,text]) => <div key={title} className="border-l-2 border-[#99D5D9]/50 pl-4"><h4 className="font-bold text-white mb-2">{title}</h4><p className="text-sm text-slate-300 leading-relaxed">{text}</p></div>)}</div>
      <p className="text-xs text-slate-400">{source} · Ringkasan pendekatan pengeluar; hasil sebenar bergantung pada reka bentuk dan skop projek.</p>
    </div>
  </section>;
}

export function CompositeMaterials() {
  return <section aria-labelledby="acm-title" className="space-y-8">
    <div className="grid lg:grid-cols-2 gap-8 items-start"><div className="space-y-4"><p className="text-sm font-bold text-[#99D5D9]">TEKNOLOGI BAHAN</p><h2 id="acm-title" className="text-2xl sm:text-4xl font-bold text-white">Apakah Advanced Composite Material (ACM)?</h2><p className="text-slate-300 leading-relaxed">Komposit menggabungkan dua atau lebih bahan yang berbeza untuk mendapatkan gabungan sifat yang dikehendaki. Tasblock memilih bahan komposit mengikut fungsi dan keperluan aplikasi komponen.</p><p className="text-sm text-slate-400 leading-relaxed">Teknologi komposit turut digunakan dalam aeroangkasa dan marin, robotik, automotif serta minyak dan gas. Ini ialah contoh penggunaan komposit secara umum.</p></div>
    <div className="rounded-2xl border border-[#3EABB0]/30 bg-gradient-to-br from-[#12314a] to-[#071827] p-6 sm:p-8 space-y-4"><h3 className="text-xl font-bold text-white">Ciri yang diterangkan oleh pengeluar</h3><ul className="space-y-3 text-slate-200">{['Nisbah kekuatan kepada berat yang tinggi', 'Ringan dan stabil secara kimia', 'Rintangan terhadap api dan bahan kimia', 'Sifat antikarat dan jangka hayat panjang'].map(text => <li key={text} className="flex gap-3"><span aria-hidden="true" className="text-[#99D5D9]">✓</span>{text}</li>)}</ul><p className="text-xs text-slate-400">Prestasi khusus dan penarafan ketahanan api perlu dirujuk kepada spesifikasi serta dokumen ujian produk berkaitan.</p></div></div>
    <div><h3 className="text-2xl font-bold text-white mb-5">Tiga rangkaian. Aplikasi yang berbeza.</h3><div className="grid md:grid-cols-3 gap-5">{[
      {name:'alphaTAC',material:'GENTIAN KACA',purpose:'Prestasi menanggung beban',text:'Komposit bertetulang gentian kaca untuk aplikasi beban lebih tinggi. Pembentangan menyebut bangunan tinggi, bentangan besar dan jambatan sebagai contoh aplikasi, tertakluk kepada reka bentuk dan spesifikasi.',color:'border-t-[#7BB8D4]'},
      {name:'hiTAC',material:'KENAF',purpose:'Bio-komposit untuk pembinaan umum',text:'Komposit bertetulang kenaf untuk pembinaan umum. Pengeluar menekankan potensi penangkapan karbon dan sokongan kepada ekonomi komoditi kenaf tempatan; tiada nilai penjimatan karbon khusus dinyatakan di sini.',color:'border-t-[#99D5D9]'},
      {name:'ecoTAC',material:'SISA PERTANIAN',purpose:'Nilai baharu daripada sumber pertanian',text:'Menggunakan tandan kosong kelapa sawit (OPEFB) dan sekam padi untuk penyelesaian ekonomi dan mampan dalam aplikasi yang keperluan bebannya tidak kritikal.',color:'border-t-amber-300'},
    ].map(item => <article key={item.name} className={`rounded-2xl border border-slate-700 border-t-4 ${item.color} bg-slate-900/60 p-6 space-y-4`}><p className="text-xs tracking-widest text-slate-400">{item.material}</p><h4 className="text-3xl font-bold text-white">{item.name}</h4><p className="font-semibold text-[#99D5D9]">{item.purpose}</p><p className="text-sm text-slate-300 leading-relaxed">{item.text}</p></article>)}</div></div>
    <p className="text-xs text-slate-400">{source} Pemilihan rangkaian mengikut spesifikasi dan kesesuaian projek.</p>
  </section>;
}
