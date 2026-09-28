import { SectionLabel } from './PageContents';
const systems = ['Tasblock', 'Konkrit pratuang (PC)', 'Blok / bata', 'Kerangka keluli', 'Acuan guna semula'];
const features: [string, boolean[]][] = [
 ['Kawalan kualiti', [true,true,true,true,true]],
 ['Ringan', [true,false,false,true,false]],
 ['Pembinaan pantas', [true,true,false,true,true]],
 ['Mudah dikendalikan', [true,false,true,false,false]],
 ['Mampan', [true,true,true,true,true]],
 ['Kos overhed rendah', [true,false,true,true,false]],
 ['Pekerja berkemahiran umum', [true,false,true,false,false]],
 ['Tidak memerlukan reka bentuk berulang', [true,false,true,true,false]],
 ['Kebiasaan dalam industri', [false,true,true,true,true]],
];
export default function SystemComparison() {
 return <section id="comparison" tabIndex={-1} aria-labelledby="comparison-title" className="scroll-mt-36 space-y-5"><SectionLabel id="comparison"/>
  <div className="max-w-3xl space-y-3"><p className="text-sm font-semibold text-[#99D5D9]">BANDINGKAN PENDEKATAN BINAAN</p><h2 id="comparison-title" className="text-2xl sm:text-3xl font-bold text-white">Tasblock berbanding sistem IBS lain</h2><p className="text-slate-300">Perbandingan ciri oleh Tasblock (M) Sdn. Bhd. untuk membantu anda mengenali perbezaan antara sistem.</p></div>
  <p id="comparison-help" className="text-xs text-slate-400">Pada skrin kecil, leret jadual ke kiri atau kanan. ✓ = ditandakan mempunyai ciri; ✕ = tidak ditandakan mempunyai ciri dalam perbandingan pengeluar.</p>
  <div role="region" aria-label="Jadual perbandingan sistem IBS" aria-describedby="comparison-help" tabIndex={0} className="overflow-x-auto scroll-without-bar rounded-2xl border border-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#99D5D9]">
   <table className="w-full min-w-[850px] text-sm text-left border-collapse"><caption className="sr-only">Perbandingan pengeluar bagi lima sistem binaan</caption><thead><tr className="bg-[#12314a]"><th scope="col" className="p-4 w-64">Ciri produk</th>{systems.map((name,i)=><th key={name} scope="col" className={`p-4 text-center whitespace-nowrap ${i===0?'bg-[#99D5D9] text-[#071827]':'text-white'}`}>{name}</th>)}</tr></thead><tbody>
   {features.map(([label,values])=><tr key={label} className="border-t border-slate-700"><th scope="row" className="p-4 font-medium text-slate-200 bg-slate-900">{label}</th>{values.map((value,i)=><td key={systems[i]} className={`p-4 text-center whitespace-nowrap ${i===0?'bg-[#123b42]':'bg-slate-900/40'}`}><span aria-hidden="true" className={`text-xl font-bold ${value?'text-[#99D5D9]':'text-amber-300'}`}>{value?'✓':'✕'}</span><span className="sr-only">{value?'Ya':'Tidak'}</span></td>)}</tr>)}
   {[
    ['Skor IBS*', ['1*','1–0.6','0.4–0.8','Tidak dinyatakan','0.2–0.6']],
    ['Fleksibiliti aplikasi', ['Terbaik','Baik','Baik','Baik','Rendah']],
   ].map(([label,values])=><tr key={label as string} className="border-t border-slate-600 bg-[#12314a]"><th scope="row" className="p-4 font-medium">{label}</th>{(values as string[]).map((value,i)=><td key={systems[i]} className={`p-4 text-center whitespace-nowrap ${i===0?'bg-[#123b42] text-[#99D5D9] font-bold':''}`}>{value}</td>)}</tr>)}
   </tbody></table>
  </div>
  <div className="space-y-2 text-xs leading-relaxed text-slate-400"><p>*Angka skor dipetik daripada jadual pengeluar yang merujuk Jadual 2, CIS 18:2018. Ruang kosong bagi kerangka keluli ditunjukkan sebagai “Tidak dinyatakan”.</p><p>Nota pengeluar: Tasblock IBS ialah sistem struktur menanggung beban dengan pembinaan 100% kering dan penyelesaian sistem lengkap. Perbandingan ini ialah penilaian pengeluar, bukan penarafan bebas atau skor IBS yang disahkan untuk projek anda.</p></div>
 </section>;
}
