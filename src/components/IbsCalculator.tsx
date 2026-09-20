import { useState, useId } from 'react';
import { 
  Calculator, 
  Send, 
  Clock, 
  Building2, 
  Layers, 
  RotateCcw, 
  FileText
} from 'lucide-react';
import { COMPANY_CONTACT } from '../data/tasblockData';

type CalcMode = 'house' | 'wall';
type ServicePackage = 'supply_only' | 'supply_install' | 'full_design_build';

export default function IbsCalculator() {
  const [mode, setMode] = useState<CalcMode>('house');
  
  // Unique accessible IDs for inputs
  const houseAreaInputId = useId();
  const wallLengthInputId = useId();
  const wallHeightInputId = useId();

  // House Mode States
  const [houseAreaSqft, setHouseAreaSqft] = useState<number>(1200);
  const [storeys, setStoreys] = useState<number>(1);
  const [ceilingHeightFt, setCeilingHeightFt] = useState<number>(10);
  const [servicePackage, setServicePackage] = useState<ServicePackage>('supply_install');

  // Wall Mode States
  const [wallLengthMeters, setWallLengthMeters] = useState<number>(30);
  const [wallHeightMeters, setWallHeightMeters] = useState<number>(2.0);

  // Client Details (Optional for quotation)
  const [clientName, setClientName] = useState<string>('');
  const [clientLocation, setClientLocation] = useState<string>('');

  // Calculations:
  // For House Mode:
  // Rule of thumb for residential IBS:
  // Wall surface area (net after openings ~ 20%) is approx 2.2x to 2.5x the floor area perimeter.
  // Standard block coverage: 12.5 blocks per m².
  // 1 sqft = 0.0929 m²
  const floorAreaM2 = houseAreaSqft * 0.0929;
  // Estimated wall area in m2 for single storey based on typical architectural ratio
  const heightMultiplier = ceilingHeightFt / 10;
  const estimatedWallAreaM2 = mode === 'house' 
    ? (Math.sqrt(floorAreaM2) * 4 * 2.8 * (storeys === 2 ? 1.85 : 1.0) * heightMultiplier * 0.82)
    : (wallLengthMeters * wallHeightMeters);

  // Total blocks: 12.5 blocks / m2 with 5% allowance
  const totalStandardBlocks = Math.ceil(estimatedWallAreaM2 * 11.2 * 1.05);
  const totalCornerBlocks = Math.ceil((mode === 'house' ? (storeys * 8 * (ceilingHeightFt / 0.65)) : (wallLengthMeters / 3 * (wallHeightMeters / 0.2))) * 0.6);
  const totalUBlocks = Math.ceil((mode === 'house' ? (Math.sqrt(floorAreaM2) * 4 * 2.5 * storeys) : (wallLengthMeters * 2.5)));
  const totalAllBlocks = totalStandardBlocks + totalCornerBlocks + totalUBlocks;

  // Thin bed adhesive / grout: 1 bag per 50 blocks
  const adhesiveBags = Math.ceil(totalAllBlocks / 45);

  // Estimated Duration comparison
  // Conventional bricklaying & plastering: ~ 100 blocks equivalent per day for a crew
  // Tasblock IBS Flexi-fit: ~ 350-450 blocks per day per crew
  const tasblockDays = Math.max(3, Math.ceil(totalAllBlocks / 380));
  const conventionalDays = Math.max(9, Math.ceil(totalAllBlocks / 110) + (mode === 'house' ? 14 : 5)); // includes formwork & plaster curing
  const daysSaved = conventionalDays - tasblockDays;
  const timeSavedPercent = Math.round((daysSaved / conventionalDays) * 100);

  // Estimated Cost Rates in Malaysia (Indicative Benchmark):
  // 1. Supply Only: Blok rate ~ RM 5.20 - RM 5.80 / block including basic adhesive + delivery allocation
  // 2. Supply & Install: ~ RM 95 - RM 125 per m² of wall (blocks + rebar + grout + skilled installation)
  // 3. Full Design & Build (House only): ~ RM 135 - RM 175 per sqft (complete house turnkey)
  let estimatedCostMin = 0;
  let estimatedCostMax = 0;

  if (mode === 'house') {
    if (servicePackage === 'supply_only') {
      estimatedCostMin = Math.round(totalAllBlocks * 5.2);
      estimatedCostMax = Math.round(totalAllBlocks * 6.2);
    } else if (servicePackage === 'supply_install') {
      estimatedCostMin = Math.round(estimatedWallAreaM2 * 95);
      estimatedCostMax = Math.round(estimatedWallAreaM2 * 125);
    } else {
      // full design & build
      estimatedCostMin = Math.round(houseAreaSqft * 135);
      estimatedCostMax = Math.round(houseAreaSqft * 175);
    }
  } else {
    // Wall mode
    if (servicePackage === 'supply_only') {
      estimatedCostMin = Math.round(totalAllBlocks * 5.2);
      estimatedCostMax = Math.round(totalAllBlocks * 6.2);
    } else {
      estimatedCostMin = Math.round(estimatedWallAreaM2 * 90);
      estimatedCostMax = Math.round(estimatedWallAreaM2 * 120);
    }
  }

  // Format currency
  const formatRM = (val: number) => {
    return 'RM ' + val.toLocaleString('en-MY');
  };

  // Generate WhatsApp Message with full detailed calculation
  const handleSendToWhatsApp = () => {
    const packageName = 
      servicePackage === 'supply_only' ? 'Pembekalan Blok Flexi-Fit Sahaja' :
      servicePackage === 'supply_install' ? 'Pakej Bekal & Pasang Dinding IBS' :
      'Pakej Penuh Reka & Bina (Design & Build)';

    let message = `Salam Tasblock Builder,\n\nSaya telah menggunakan Kalkulator IBS di laman web anda dan ingin mendapatkan sebut harga rasmi:\n\n`;
    if (clientName) message += `Nama: ${clientName}\n`;
    if (clientLocation) message += `Lokasi Projek: ${clientLocation}\n`;
    
    if (mode === 'house') {
      message += `Jenis Projek: Bina Rumah IBS (${storeys} Tingkat)\n`;
      message += `Keluasan Rumah: ${houseAreaSqft} kps (sqft)\n`;
      message += `Tinggi Siling: ${ceilingHeightFt} kaki\n`;
    } else {
      message += `Jenis Projek: Pagar / Dinding Penahan IBS\n`;
      message += `Panjang Dinding: ${wallLengthMeters} meter\n`;
      message += `Tinggi Dinding: ${wallHeightMeters} meter\n`;
    }

    message += `Pilihan Pakej: ${packageName}\n\n`;
    message += `--- ANGGARAN KALKULATOR ---\n`;
    message += `• Anggaran Jumlah Blok: ~${totalAllBlocks.toLocaleString()} unit\n`;
    message += `• Anggaran Beg Pelekat/Grout: ~${adhesiveBags} beg\n`;
    message += `• Anggaran Tempoh Dinding IBS: ~${tasblockDays} hari (Jimat ~${daysSaved} hari berbanding konvensional)\n`;
    message += `• Anggaran Julat Kos: ${formatRM(estimatedCostMin)} - ${formatRM(estimatedCostMax)}\n\n`;
    message += `Mohon pihak Tasblock Builder semak dan berikan sebut harga terperinci. Terima kasih!`;

    const whatsappUrl = `https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleReset = () => {
    setHouseAreaSqft(1200);
    setStoreys(1);
    setCeilingHeightFt(10);
    setServicePackage('supply_install');
    setWallLengthMeters(30);
    setWallHeightMeters(2.0);
    setClientName('');
    setClientLocation('');
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-[#0a1b2d] border border-[#7BB8D4]/25 shadow-2xl overflow-hidden">
      
      {/* Calculator Header */}
      <div className="bg-gradient-to-r from-[#071827] via-[#245D98]/60 to-[#071827] p-6 sm:p-8 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3EABB0]/20 text-[#3EABB0] text-xs font-semibold mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Alat Penganggar Segera IBS Malaysia</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Kalkulator Anggaran Kos & Blok IBS Flexi-Fit
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Kira bilangan blok interlocking, anggaran tempoh penyiapan dan julat bajet untuk projek rumah atau dinding anda dalam beberapa saat.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-700 shrink-0">
            <button
              onClick={() => setMode('house')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                mode === 'house'
                  ? 'bg-[#245D98] text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Bina Rumah</span>
            </button>
            <button
              onClick={() => setMode('wall')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                mode === 'wall'
                  ? 'bg-[#245D98] text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Dinding / Pagar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Col: Parameter Controls (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 border-b lg:border-b-0 lg:border-r border-slate-800">
          
          {mode === 'house' ? (
            <>
              {/* House Area Slider + Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor={houseAreaInputId} className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Keluasan Rumah (Kaki Persegi / sqft)
                  </label>
                  <span className="text-base font-bold text-[#3EABB0] font-mono">
                    {houseAreaSqft.toLocaleString()} kps
                  </span>
                </div>
                <input
                  id={houseAreaInputId}
                  type="range"
                  min="400"
                  max="4000"
                  step="50"
                  value={houseAreaSqft}
                  onChange={(e) => setHouseAreaSqft(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#3EABB0]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>400 kps (Chalet/Tambahan)</span>
                  <span>1,200 kps (Standard 3 Bilik)</span>
                  <span>4,000 kps (Banglo Besar)</span>
                </div>
              </div>

              {/* Storeys & Ceiling Height */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                    Bilangan Tingkat
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setStoreys(s)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                          storeys === s
                            ? 'bg-[#245D98]/40 border-[#3EABB0] text-white'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {s} Tingkat
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                    Ketinggian Siling
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {[9, 10, 11].map((h) => (
                      <button
                        key={h}
                        type="button"
                        onClick={() => setCeilingHeightFt(h)}
                        className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                          ceilingHeightFt === h
                            ? 'bg-[#245D98]/40 border-[#3EABB0] text-white'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {h} Kaki
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Package Selection */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  Pakej Perkhidmatan Yang Diinginkan
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setServicePackage('supply_only')}
                    className={`p-3 rounded-xl text-left border transition-all text-xs ${
                      servicePackage === 'supply_only'
                        ? 'bg-[#245D98]/40 border-[#3EABB0] text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="font-bold text-slate-200">1. Bekal Blok Sahaja</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Untuk kontraktor yang ada tukang sendiri.</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServicePackage('supply_install')}
                    className={`p-3 rounded-xl text-left border transition-all text-xs ${
                      servicePackage === 'supply_install'
                        ? 'bg-[#245D98]/40 border-[#3EABB0] text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="font-bold text-slate-200">2. Bekal & Pasang</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Struktur dinding siap dipasang pasukan pakar.</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServicePackage('full_design_build')}
                    className={`p-3 rounded-xl text-left border transition-all text-xs ${
                      servicePackage === 'full_design_build'
                        ? 'bg-[#245D98]/40 border-[#3EABB0] text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="font-bold text-slate-200">3. Reka & Bina Penuh</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Rumah siap serah kunci dari A hingga Z.</div>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Wall Mode Inputs */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor={wallLengthInputId} className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Panjang Dinding / Pagar (Meter)
                    </label>
                    <span className="text-base font-bold text-[#3EABB0] font-mono">{wallLengthMeters} Meter</span>
                  </div>
                  <input
                    id={wallLengthInputId}
                    type="range"
                    min="5"
                    max="150"
                    step="5"
                    value={wallLengthMeters}
                    onChange={(e) => setWallLengthMeters(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#3EABB0]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>5 m (Dinding Kecil)</span>
                    <span>50 m (Pagar Rumah Teres)</span>
                    <span>150 m (Perimeter Lot Luas)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor={wallHeightInputId} className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Tinggi Dinding (Meter)
                    </label>
                    <span className="text-base font-bold text-[#3EABB0] font-mono">{wallHeightMeters.toFixed(1)} Meter</span>
                  </div>
                  <input
                    id={wallHeightInputId}
                    type="range"
                    min="1.0"
                    max="3.6"
                    step="0.2"
                    value={wallHeightMeters}
                    onChange={(e) => setWallHeightMeters(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#3EABB0]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>1.0 m (Pagar Rendah)</span>
                    <span>2.0 m (Standard Pagar Privasi)</span>
                    <span>3.6 m (Dinding Gudang / Tinggi)</span>
                  </div>
                </div>

                {/* Wall Service Package */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                    Pilihan Pakej Dinding
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setServicePackage('supply_only')}
                      className={`p-3 rounded-xl text-left border transition-all text-xs ${
                        servicePackage === 'supply_only'
                          ? 'bg-[#245D98]/40 border-[#3EABB0] text-white shadow-md'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="font-bold text-slate-200">Bekal Blok Flexi-Fit Sahaja</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Hantar terus ke tapak binaan.</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setServicePackage('supply_install')}
                      className={`p-3 rounded-xl text-left border transition-all text-xs ${
                        servicePackage === 'supply_install'
                          ? 'bg-[#245D98]/40 border-[#3EABB0] text-white shadow-md'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="font-bold text-slate-200">Bekal & Pasang Dinding</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Siap pasang tegak oleh tukang pakar.</div>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Client Details Optional Fields */}
          <div className="pt-3 border-t border-slate-800/80">
            <span className="text-xs font-bold text-slate-400 block mb-2">
              Maklumat Anda (Pilihan - untuk cetakan / simpanan sebut harga):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Nama Anda / Syarikat Kontraktor"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#3EABB0]"
              />
              <input
                type="text"
                placeholder="Lokasi Tapak (cth: Sepang / Kuantan)"
                value={clientLocation}
                onChange={(e) => setClientLocation(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#3EABB0]"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleReset}
              className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Set Semula Pengiraan</span>
            </button>
          </div>

        </div>

        {/* Right Col: Calculation Output & Instant Quotation (5 Cols) */}
        <div className="lg:col-span-5 bg-[#071524] p-6 sm:p-8 flex flex-col justify-between space-y-6">
          
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3EABB0]">
                Ringkasan Hasil Anggaran
              </span>
              <span className="text-[10px] text-slate-500 font-mono">Ketepatan ±5-10%</span>
            </div>

            {/* Estimated Price Display */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#12283e] to-[#071827] border border-[#3EABB0]/40 shadow-inner">
              <span className="text-[11px] font-medium text-slate-400 block">
                {servicePackage === 'full_design_build' 
                  ? 'Anggaran Bajet Reka & Bina Siap Serah Kunci:'
                  : servicePackage === 'supply_install' 
                  ? 'Anggaran Kos Bekal & Pasang Struktur Dinding:' 
                  : 'Anggaran Kos Pembekalan Blok Flexi-Fit:'}
              </span>
              <div className="flex items-baseline flex-nowrap gap-1.5 sm:gap-2 text-xl sm:text-2xl lg:text-[21px] xl:text-[25px] font-extrabold text-[#3EABB0] font-mono mt-1.5 whitespace-nowrap overflow-x-auto scrollbar-none py-0.5">
                <span className="whitespace-nowrap">{formatRM(estimatedCostMin)}</span>
                <span className="text-slate-400 font-normal text-base sm:text-lg select-none px-0.5">&ndash;</span>
                <span className="whitespace-nowrap">{formatRM(estimatedCostMax)}</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                {servicePackage === 'full_design_build' 
                  ? '*Kiraan kasar berdasarkan purata pasaran RM135 - RM175/kps mengikut spesifikasi standard.'
                  : '*Harga sebenar tertakluk kepada lukisan struktur terperinci dan lokasi tapak.'}
              </p>
            </div>

            {/* Quantity Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Jumlah Blok IBS Diperlukan</span>
                <span className="text-lg font-bold text-slate-100 font-mono">
                  ~{totalAllBlocks.toLocaleString()} <span className="text-xs font-normal text-slate-400">unit</span>
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Termasuk blok sudut & U-beam</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Simen Pelekat & Grout</span>
                <span className="text-lg font-bold text-slate-100 font-mono">
                  ~{adhesiveBags} <span className="text-xs font-normal text-slate-400">beg</span>
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Untuk lapisan dan sambungan</span>
              </div>
            </div>

            {/* Time Comparison Bar */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#3EABB0]" />
                  Tempoh Penyiapan Dinding
                </span>
                <span className="text-[#3EABB0] font-bold">
                  Jimat ~{timeSavedPercent}% Masa!
                </span>
              </div>

              {/* IBS Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span className="font-bold text-slate-200">Sistem IBS Tasblock:</span>
                  <span className="font-mono text-[#3EABB0] font-bold">~{tasblockDays} Hari Bekerja</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#245D98] to-[#3EABB0] rounded-full"
                    style={{ width: `${Math.round((tasblockDays / conventionalDays) * 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Conventional Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Kaedah Bata Merah Konvensional:</span>
                  <span className="font-mono text-slate-400">~{conventionalDays} Hari Bekerja</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-600 rounded-full w-full"></div>
                </div>
              </div>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-2">
            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-[#25D366]/20 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Hantar Kiraan Ini ke WhatsApp Rasmi</span>
            </button>

            <button
              onClick={() => {
                alert(`Ringkasan Anggaran IBS Tasblock:\n\nProjek: ${mode === 'house' ? `Rumah ${houseAreaSqft} kps` : `Dinding ${wallLengthMeters}m x ${wallHeightMeters}m`}\nBlok Diperlukan: ~${totalAllBlocks} unit\nTempoh IBS: ~${tasblockDays} hari\nJulat Anggaran: ${formatRM(estimatedCostMin)} - ${formatRM(estimatedCostMax)}\n\nSila hubungi Tasblock Builder di +60 12-345 6789 untuk pengesahan lukisan struktur.`);
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>Simpan / Papar Ringkasan Sebut Harga</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
