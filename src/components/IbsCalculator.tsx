import { useEffect, useId, useState } from 'react';
import type { FormEvent } from 'react';
import { COMPANY_CONTACT, SERVICES_DATA } from '../data/tasblockData';

function serviceFromUrl() {
  if (typeof window === 'undefined') return '';
  const query = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const value = query.get('service') ?? new URLSearchParams(window.location.search).get('service');
  return SERVICES_DATA.some(item => item.id === value) ? value! : '';
}

// Legacy filename/default export retained for existing consumers.
export default function ProjectEnquiry() {
  const id = useId();
  const [fields, setFields] = useState({ name: '', location: '', service: serviceFromUrl(), description: '' });
  const [preview, setPreview] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  useEffect(() => {
    const sync = () => { setFields(previous => ({ ...previous, service: serviceFromUrl() })); setPreview(''); setErrors({}); };
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => { window.removeEventListener('hashchange', sync); window.removeEventListener('popstate', sync); };
  }, []);
  const edit = (key: keyof typeof fields, value: string) => {
    setFields(previous => ({ ...previous, [key]: value }));
    setPreview('');
    setErrors({});
  };
  const prepare = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selected = SERVICES_DATA.find(item => item.id === fields.service);
    const next: Record<string, string> = {};
    if (!fields.location.trim()) next.location = 'Sila nyatakan lokasi projek.';
    if (!selected) next.service = 'Sila pilih perkhidmatan.';
    if (!fields.description.trim()) next.description = 'Sila terangkan keperluan projek anda.';
    setErrors(next);
    setPreview('');
    if (Object.keys(next).length) { document.getElementById(`${id}-${Object.keys(next)[0]}`)?.focus(); return; }
    setPreview(['Salam Tasblock Builder, saya ingin membincangkan keperluan projek saya.', '',
      ...(fields.name.trim() ? [`Nama: ${fields.name.trim()}`] : []),
      `Lokasi projek: ${fields.location.trim()}`, `Perkhidmatan: ${selected!.title}`,
      `Penerangan projek: ${fields.description.trim()}`, '',
      'Mohon semakan kesesuaian dan skop projek. Kos, kuantiti dan jadual perlu disahkan selepas semakan.'
    ].join('\n'));
  };
  const fieldClass = 'w-full rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#3EABB0]';
  return (
    <section aria-labelledby={`${id}-title`} className="max-w-5xl mx-auto rounded-3xl bg-[#0a1b2d] border border-[#7BB8D4]/25 p-6 sm:p-8 space-y-6">
      <h2 id={`${id}-title`} className="text-2xl font-bold text-white font-heading">Ceritakan keperluan projek anda</h2>
      <p className="text-slate-300 leading-relaxed">Borang ini menyediakan draf pertanyaan, bukan pengiraan atau sebut harga. Kesesuaian sistem, kuantiti, kos dan jadual hanya boleh ditentukan selepas semakan pelan, lokasi dan skop projek.</p>
      <p id={`${id}-help`} className="text-sm text-slate-300">Medan * wajib diisi. Butiran tidak dihantar melalui laman ini. Semak pratonton, kemudian buka WhatsApp dan hantar sendiri. Elakkan maklumat peribadi sensitif.</p>
      <form noValidate onSubmit={prepare} aria-describedby={`${id}-help`} className="space-y-5">
        <div className="space-y-2"><label htmlFor={`${id}-name`} className="block font-semibold text-sm">Nama (pilihan)</label><input id={`${id}-name`} name="name" autoComplete="name" maxLength={120} value={fields.name} onChange={event => edit('name', event.target.value)} className={fieldClass} /></div>
        <div className="space-y-2"><label htmlFor={`${id}-location`} className="block font-semibold text-sm">Lokasi projek (daerah & negeri) *</label><input id={`${id}-location`} name="location" required maxLength={200} value={fields.location} onChange={event => edit('location', event.target.value)} aria-invalid={!!errors.location} aria-describedby={errors.location ? `${id}-location-error` : undefined} className={fieldClass} />{errors.location && <p id={`${id}-location-error`} role="alert" className="text-red-300 text-sm">{errors.location}</p>}</div>
        <div className="space-y-2"><label htmlFor={`${id}-service`} className="block font-semibold text-sm">Perkhidmatan yang diperlukan *</label><select id={`${id}-service`} name="service" required value={fields.service} onChange={event => edit('service', event.target.value)} aria-invalid={!!errors.service} aria-describedby={errors.service ? `${id}-service-error` : undefined} className={fieldClass}><option value="">Pilih perkhidmatan</option>{SERVICES_DATA.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}</select>{errors.service && <p id={`${id}-service-error`} role="alert" className="text-red-300 text-sm">{errors.service}</p>}</div>
        <div className="space-y-2"><label htmlFor={`${id}-description`} className="block font-semibold text-sm">Penerangan projek / keperluan *</label><textarea id={`${id}-description`} name="description" required rows={5} maxLength={2500} value={fields.description} onChange={event => edit('description', event.target.value)} aria-invalid={!!errors.description} aria-describedby={`${id}-description-help${errors.description ? ` ${id}-description-error` : ''}`} className={fieldClass} /><p id={`${id}-description-help`} className="text-sm text-slate-400">Nyatakan tujuan projek, skop bantuan dan sama ada pelan tersedia. Pelan boleh dikongsi sendiri dalam WhatsApp; tiada muat naik fail di sini. Pertanyaan latihan ialah pendaftaran minat sahaja.</p>{errors.description && <p id={`${id}-description-error`} role="alert" className="text-red-300 text-sm">{errors.description}</p>}</div>
        <button type="submit" className="rounded-xl bg-[#3EABB0] text-[#071827] px-5 py-3 font-bold hover:brightness-110">Pratonton mesej</button>
      </form>
      <div aria-live="polite">{preview && <section aria-labelledby={`${id}-preview-title`} className="rounded-2xl border border-[#3EABB0]/40 bg-[#071827] p-5 space-y-4"><h3 id={`${id}-preview-title`} className="text-lg font-bold text-white">Pratonton pertanyaan</h3><p className="whitespace-pre-wrap break-words text-sm text-slate-200">{preview}</p><p className="text-sm text-slate-300">Belum dihantar. Pautan membuka draf kepada {COMPANY_CONTACT.phoneDisplay}. Anda perlu menekan Hantar di WhatsApp. Mengubah borang membatalkan pratonton ini.</p><a href={`${COMPANY_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(preview)}`} target="_blank" rel="noopener noreferrer" className="inline-block rounded-xl bg-[#3EABB0] text-[#071827] px-5 py-3 font-bold hover:brightness-110">Buka draf di WhatsApp<span className="sr-only"> (tab baharu)</span></a></section>}</div>
    </section>
  );
}
