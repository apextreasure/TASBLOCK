import { useState } from 'react';
import { ProductSpec } from '../types';
import { PRODUCTS_DATA } from '../data/tasblockData';
import { ShieldCheck, Ruler, Scale, Flame, Check } from 'lucide-react';

export default function BlockVisualizer() {
  const [selectedProductId, setSelectedProductId] = useState<string>('tb-std-400');

  const selectedProduct = PRODUCTS_DATA.find(p => p.id === selectedProductId) || PRODUCTS_DATA[0];

  return (
    <div className="rounded-2xl bg-gradient-to-b from-[#0e2238] to-[#071827] border border-[#7BB8D4]/25 p-6 md:p-8 shadow-2xl">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        
        {/* Left Column: Visual Architectural Schematic SVG */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-[#050e18] border border-[#245D98]/50 p-6 flex flex-col items-center justify-center relative overflow-hidden group">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#245D98_1px,transparent_1px),linear-gradient(to_bottom,#245D98_1px,transparent_1px)] bg-[size:20px_20px] opacity-15"></div>
            
            {/* SVG Render based on product type */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {selectedProduct.svgType === 'standard' && (
                <svg viewBox="0 0 340 220" className="w-full h-full max-h-56 filter drop-shadow-[0_10px_15px_rgba(62,171,176,0.15)]">
                  {/* Standard Interlocking Block Isometric Style */}
                  {/* Main Block Body */}
                  <path d="M 60 90 L 170 35 L 280 90 L 280 160 L 170 215 L 60 160 Z" fill="#1b3652" stroke="#7BB8D4" strokeWidth="2.5" />
                  {/* Top Face */}
                  <path d="M 60 90 L 170 35 L 280 90 L 170 145 Z" fill="#244d75" stroke="#7BB8D4" strokeWidth="2.5" />
                  {/* Left Face */}
                  <path d="M 60 90 L 170 145 L 170 215 L 60 160 Z" fill="#162e45" stroke="#7BB8D4" strokeWidth="2" />
                  {/* Right Face */}
                  <path d="M 170 145 L 280 90 L 280 160 L 170 215 Z" fill="#0f2133" stroke="#7BB8D4" strokeWidth="2" />
                  
                  {/* Interlocking Tongues on Top */}
                  <ellipse cx="120" cy="80" rx="22" ry="12" fill="#3EABB0" fillOpacity="0.4" stroke="#3EABB0" strokeWidth="2" />
                  <ellipse cx="220" cy="95" rx="22" ry="12" fill="#3EABB0" fillOpacity="0.4" stroke="#3EABB0" strokeWidth="2" />
                  
                  {/* Hollow Core Holes (Rongga Dalaman) */}
                  <ellipse cx="120" cy="80" rx="14" ry="7" fill="#050e18" stroke="#7BB8D4" strokeWidth="1.5" />
                  <ellipse cx="220" cy="95" rx="14" ry="7" fill="#050e18" stroke="#7BB8D4" strokeWidth="1.5" />

                  {/* Measurement lines */}
                  <line x1="60" y1="175" x2="170" y2="230" stroke="#3EABB0" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="100" y="215" fill="#3EABB0" fontSize="11" fontWeight="bold" fontFamily="monospace">400 mm</text>
                  <text x="235" y="195" fill="#7BB8D4" fontSize="11" fontWeight="bold" fontFamily="monospace">150 mm</text>
                  <text x="35" y="125" fill="#7BB8D4" fontSize="11" fontWeight="bold" fontFamily="monospace">200 mm</text>
                </svg>
              )}

              {selectedProduct.svgType === 'corner' && (
                <svg viewBox="0 0 340 220" className="w-full h-full max-h-56 filter drop-shadow-[0_10px_15px_rgba(62,171,176,0.15)]">
                  {/* Corner Block with Smooth 90 deg edge */}
                  <path d="M 70 85 L 170 35 L 270 85 L 270 165 L 170 215 L 70 165 Z" fill="#1b3652" stroke="#3EABB0" strokeWidth="2.5" />
                  <path d="M 70 85 L 170 35 L 270 85 L 170 135 Z" fill="#244d75" stroke="#3EABB0" strokeWidth="2" />
                  <path d="M 70 85 L 170 135 L 170 215 L 70 165 Z" fill="#132a40" stroke="#3EABB0" strokeWidth="2" />
                  <path d="M 170 135 L 270 85 L 270 165 L 170 215 Z" fill="#0c1d2e" stroke="#3EABB0" strokeWidth="2" />
                  
                  {/* Single Core & Corner Edge Indicator */}
                  <ellipse cx="140" cy="80" rx="16" ry="9" fill="#050e18" stroke="#7BB8D4" strokeWidth="2" />
                  <circle cx="170" cy="135" r="4" fill="#3EABB0" />
                  <text x="85" y="55" fill="#3EABB0" fontSize="11" fontWeight="bold">Bucu 90° Kemas</text>
                  <text x="95" y="210" fill="#7BB8D4" fontSize="11" fontFamily="monospace">400 x 150 x 200 mm</text>
                </svg>
              )}

              {selectedProduct.svgType === 'lintel' && (
                <svg viewBox="0 0 340 220" className="w-full h-full max-h-56 filter drop-shadow-[0_10px_15px_rgba(62,171,176,0.15)]">
                  {/* U-Block Trough for Tie-Beams & Lintels */}
                  <path d="M 50 90 L 170 30 L 290 90 L 290 160 L 170 220 L 50 160 Z" fill="#1b3652" stroke="#7BB8D4" strokeWidth="2" />
                  <path d="M 50 90 L 170 30 L 290 90 L 170 150 Z" fill="#183652" stroke="#7BB8D4" strokeWidth="2" />
                  {/* Trough Cutout */}
                  <path d="M 90 95 L 170 55 L 250 95 L 170 135 Z" fill="#050e18" stroke="#3EABB0" strokeWidth="2.5" />
                  <path d="M 90 95 L 170 135 L 170 185 L 90 145 Z" fill="#091724" stroke="#3EABB0" strokeWidth="1.5" />
                  <path d="M 170 135 L 250 95 L 250 145 L 170 185 Z" fill="#07121c" stroke="#3EABB0" strokeWidth="1.5" />
                  
                  {/* Rebar graphic inside trough */}
                  <line x1="110" y1="125" x2="230" y2="125" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                  <text x="105" y="115" fill="#ef4444" fontSize="10" fontWeight="bold">Laluan Tetulang Besi Y12</text>
                  <text x="110" y="210" fill="#3EABB0" fontSize="11" fontWeight="bold">Palung U Acuan Tetap</text>
                </svg>
              )}

              {selectedProduct.svgType === 'half' && (
                <svg viewBox="0 0 340 220" className="w-full h-full max-h-56 filter drop-shadow-[0_10px_15px_rgba(62,171,176,0.15)]">
                  {/* Half Block 200mm */}
                  <path d="M 100 95 L 170 60 L 240 95 L 240 160 L 170 195 L 100 160 Z" fill="#1b3652" stroke="#7BB8D4" strokeWidth="2.5" />
                  <path d="M 100 95 L 170 60 L 240 95 L 170 130 Z" fill="#244d75" stroke="#7BB8D4" strokeWidth="2" />
                  <path d="M 100 95 L 170 130 L 170 195 L 100 160 Z" fill="#162e45" stroke="#7BB8D4" strokeWidth="2" />
                  <path d="M 170 130 L 240 95 L 240 160 L 170 195 Z" fill="#0f2133" stroke="#7BB8D4" strokeWidth="2" />
                  <ellipse cx="170" cy="95" rx="16" ry="8" fill="#050e18" stroke="#3EABB0" strokeWidth="2" />
                  <text x="135" y="45" fill="#3EABB0" fontSize="12" fontWeight="bold">Modul 200 mm</text>
                  <text x="115" y="215" fill="#7BB8D4" fontSize="11" fontFamily="monospace">Blok Separuh Penamat</text>
                </svg>
              )}
            </div>

            {/* Badge overlay */}
            <div className="absolute top-3 left-3 bg-[#071827]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700 text-[11px] font-mono text-[#3EABB0]">
              {selectedProduct.code}
            </div>
            <div className="absolute bottom-3 right-3 bg-[#071827]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700 text-[11px] text-slate-300">
              Profil Interlocking Flexi-Fit
            </div>
          </div>

          {/* Product switcher tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full mt-4">
            {PRODUCTS_DATA.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setSelectedProductId(prod.id)}
                className={`p-2.5 rounded-xl text-left border transition-all text-xs ${
                  selectedProductId === prod.id
                    ? 'bg-[#245D98]/40 border-[#3EABB0] text-white shadow-md'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <div className="font-bold truncate">{prod.name.split('(')[0]}</div>
                <div className="text-[10px] text-slate-500 font-mono truncate">{prod.dimensions.split(' ')[0]}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Technical Specification & Features */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#245D98]/30 border border-[#3EABB0]/40 text-[#3EABB0] text-xs font-semibold mb-2">
              {selectedProduct.role}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              {selectedProduct.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              {selectedProduct.description}
            </p>
          </div>

          {/* 4 Essential Technical Badges */}
          <div className="grid grid-cols-2 gap-3 py-2">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
              <Ruler className="w-4 h-4 text-[#3EABB0] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Dimensi Rasmi</span>
                <span className="text-xs font-bold text-slate-200">{selectedProduct.dimensions}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
              <Scale className="w-4 h-4 text-[#3EABB0] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Berat & Liputan</span>
                <span className="text-xs font-bold text-slate-200">{selectedProduct.weight} | {selectedProduct.coveragePerM2}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#3EABB0] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Kekuatan Mampatan</span>
                <span className="text-xs font-bold text-slate-200">{selectedProduct.compressiveStrength}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
              <Flame className="w-4 h-4 text-[#ef4444] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Ketahanan Api (SIRIM)</span>
                <span className="text-xs font-bold text-slate-200">{selectedProduct.fireRating}</span>
              </div>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="space-y-2 pt-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Ciri-Ciri Kejuruteraan:</h4>
            <div className="space-y-1.5">
              {selectedProduct.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-[#3EABB0]/20 text-[#3EABB0] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Usage */}
          <div className="p-3 rounded-xl bg-[#245D98]/15 border border-[#3EABB0]/20 text-xs text-slate-300">
            <strong className="text-[#3EABB0]">Cadangan Aplikasi:</strong> {selectedProduct.recommendedUse}
          </div>

        </div>

      </div>
    </div>
  );
}
