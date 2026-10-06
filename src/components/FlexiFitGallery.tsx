import { useRef, useState } from 'react';
import { Expand, X } from 'lucide-react';

const groups = ['Semua', 'Panel dinding', 'Adaptor dinding', 'Adaptor tapak'] as const;
type Group = typeof groups[number];
const components: { code: string; file: string; group: Group; label: string; scale: number }[] = [
  { code: 'W2', file: 'w2', group: 'Panel dinding', label: 'Panel dinding · 200 mm', scale: 1.35 },
  { code: 'W3', file: 'w3', group: 'Panel dinding', label: 'Panel dinding · 300 mm', scale: 1.25 },
  { code: 'W12', file: 'w12', group: 'Panel dinding', label: 'Panel dinding · 1,200 mm', scale: 1.15 },
  { code: 'WB', file: 'wb', group: 'Panel dinding', label: 'Panel dengan bukaan rasuk · 300 mm', scale: 1.2 },
  { code: 'A1', file: 'a1', group: 'Adaptor dinding', label: 'Adaptor dinding · 100 mm', scale: 2.7 },
  { code: 'A2', file: 'a2', group: 'Adaptor dinding', label: 'Adaptor dinding · 200 mm', scale: 2.3 },
  { code: 'A3', file: 'a3', group: 'Adaptor dinding', label: 'Adaptor dinding · 300 mm', scale: 1.85 },
  { code: 'A12', file: 'a12', group: 'Adaptor dinding', label: 'Adaptor dinding · 1,200 mm', scale: 1.25 },
  { code: 'AC 2×4', file: 'ac-2x4', group: 'Adaptor dinding', label: 'Adaptor sudut · 200 × 400 mm', scale: 1.9 },
  { code: 'B1', file: 'b1', group: 'Adaptor tapak', label: 'Adaptor tapak · 100 mm', scale: 3.3 },
  { code: 'B2', file: 'b2', group: 'Adaptor tapak', label: 'Adaptor tapak · 200 mm', scale: 2.7 },
  { code: 'B3', file: 'b3', group: 'Adaptor tapak', label: 'Adaptor tapak · 300 mm', scale: 2.2 },
  { code: 'B6', file: 'b6', group: 'Adaptor tapak', label: 'Adaptor tapak · 600 mm', scale: 1.5 },
  { code: 'BC 2×4', file: 'bc-2x4', group: 'Adaptor tapak', label: 'Adaptor sudut · 200 × 400 mm', scale: 1.7 },
  { code: 'BC 3×3', file: 'bc-3x3', group: 'Adaptor tapak', label: 'Adaptor sudut · 300 × 300 mm', scale: 1.7 },
];
const imagePath = (file: string) => `/images/tasblock/flexi-fit/${file}.png`;

export default function FlexiFitGallery() {
  const [group, setGroup] = useState<Group>('Semua');
  const [selected, setSelected] = useState(components[0]);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible = components.filter(item => group === 'Semua' || item.group === group);

  return <div className="space-y-6">
    <div className="max-w-3xl space-y-3">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">Sistem Dinding IBS Tasblock Flexi-fit</h2>
      <p className="text-slate-300 leading-relaxed">Kenali panel dinding, adaptor dinding dan adaptor tapak dalam satu sistem. Pilih komponen untuk melihat gambar yang lebih besar.</p>
      <p className="text-[#99D5D9]">Ketebalan nominal dinding: 100 mm · 1 MC = 100 mm</p>
    </div>
    <div className="flex flex-wrap gap-3" role="group" aria-label="Tapis keluarga komponen">
      {groups.map(value => <button key={value} type="button" aria-pressed={group === value} onClick={() => setGroup(value)} className={`min-h-12 rounded-xl border px-4 py-3 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#99D5D9] ${group === value ? 'border-[#99D5D9] bg-[#99D5D9] text-[#071827]' : 'border-slate-600 text-slate-200 hover:bg-[#12314a]'}`}>{value}</button>)}
    </div>
    <p className="text-slate-300" role="status">{visible.length} komponen{group !== 'Semua' && ` · ${group}`}</p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {visible.map(item => <button key={item.file} type="button" aria-label={`Lihat ${item.code}: ${item.label}`} onClick={() => { setSelected(item); dialog.current?.showModal(); }} className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/60 text-left hover:border-[#99D5D9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#99D5D9]">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#a2a3a6]">
          <img src={imagePath(item.file)} alt={`Komponen Tasblock Flexi-fit ${item.code}`} width={1600} height={900} loading="lazy" className="h-full w-full object-contain" style={{ transform: `scale(${item.scale})` }} />
          <span className="absolute bottom-3 right-3 flex items-center gap-2 rounded-lg bg-[#071827]/90 px-3 py-2 text-sm text-white"><Expand size={18} aria-hidden="true" />Besarkan</span>
        </div>
        <div className="p-5 space-y-2"><h3 className="text-2xl font-bold text-white">{item.code}</h3><p className="text-slate-300">{item.label}</p></div>
      </button>)}
    </div>
    <p className="text-slate-400">Gambar menunjukkan bentuk komponen; saiz paparan tidak mengikut skala yang sama.</p>
    <dialog ref={dialog} aria-labelledby="flexi-fit-preview-title" className="flexi-fit-dialog" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="flex items-center justify-between gap-4 p-4 sm:p-6">
        <div><h3 id="flexi-fit-preview-title" className="text-2xl font-bold text-white">{selected.code}</h3><p className="text-slate-300">{selected.label}</p></div>
        <button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Tutup gambar komponen" className="flex min-h-12 min-w-12 items-center justify-center rounded-xl border border-slate-500 text-white focus-visible:outline-2 focus-visible:outline-[#99D5D9]"><X aria-hidden="true" /></button>
      </div>
      <div className="overflow-hidden bg-[#a2a3a6]"><img src={imagePath(selected.file)} alt={`Gambar penuh komponen Tasblock ${selected.code}`} width={1600} height={900} className="w-full max-h-[65dvh] object-contain" style={{ transform: `scale(${selected.scale})` }} /></div>
    </dialog>
  </div>;
}
