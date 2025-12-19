import React, { useState } from 'react';
import { Search, MapPin, RefreshCw, Filter, ChevronUp, ChevronDown, Briefcase, Hammer, PawPrint, Flag, Calculator } from 'lucide-react';
import { rapportoOptions, bestiameOptions, immigrazioneOptions } from '../../utils/constants';

export default function FilterPanel({ 
    searchPersona, setSearchPersona,
    searchLocalita, setSearchLocalita,
    loading, fetchData,
    
    // Filter State & Setters
    filterMestiere, setFilterMestiere,
    filterRapporto, setFilterRapporto,
    filterBestiame, setFilterBestiame,
    filterImmigrazione, setFilterImmigrazione,
    
    filterFortuneMin, setFilterFortuneMin,
    filterFortuneMax, setFilterFortuneMax,
    filterCreditoMin, setFilterCreditoMin,
    filterCreditoMax, setFilterCreditoMax,
    filterCreditoMMin, setFilterCreditoMMin,
    filterCreditoMMax, setFilterCreditoMMax,
    filterImponibileMin, setFilterImponibileMin,
    filterImponibileMax, setFilterImponibileMax,
    filterDeduzioniMin, setFilterDeduzioniMin,
    filterDeduzioniMax, setFilterDeduzioniMax
}) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="bg-skin-table-row rounded-sm shadow-lg border border-skin-border mb-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-skin-header to-skin-header-accent"></div>
        <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-end mb-4">
            <div className="flex-1 w-full">
            <label className="block text-xs md:text-sm font-semibold text-skin-header-border mb-1 md:mb-2 uppercase tracking-wider">Cerca Persona</label>
            <div className="relative">
                <Search className="absolute left-3 top-3 md:top-3.5 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                <input type="text" className="block w-full pl-9 md:pl-10 pr-3 py-2 md:py-3 border border-skin-border bg-skin-display text-slate-900 focus:outline-none focus:ring-2 focus:ring-skin-header font-serif text-base md:text-lg" placeholder="Nome capofamiglia..." value={searchPersona} onChange={(e) => setSearchPersona(e.target.value)} />
            </div>
            </div>
            <div className="flex-1 w-full">
            <label className="block text-xs md:text-sm font-semibold text-skin-header-border mb-1 md:mb-2 uppercase tracking-wider">Cerca Località</label>
            <div className="relative">
                <MapPin className="absolute left-3 top-3 md:top-3.5 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                <input type="text" className="block w-full pl-9 md:pl-10 pr-3 py-2 md:py-3 border border-skin-border bg-skin-display text-slate-900 focus:outline-none focus:ring-2 focus:ring-skin-header font-serif text-base md:text-lg" placeholder="Quartiere, Popolo..." value={searchLocalita} onChange={(e) => setSearchLocalita(e.target.value)} />
            </div>
            </div>
            <button onClick={() => fetchData(1)} className="w-full md:w-auto p-2 md:p-3 border border-skin-header bg-skin-header text-white hover:bg-skin-header-accent transition-all shadow-sm flex justify-center" title="Aggiorna Ricerca"><RefreshCw className={`h-5 w-5 md:h-6 md:w-6 ${loading ? 'animate-spin' : ''}`} /></button>
        </div>

        <div className="flex justify-start mb-2">
            <button onClick={() => setIsFiltersOpen(!isFiltersOpen)} className="flex items-center gap-2 text-skin-header font-bold text-xs md:text-sm uppercase tracking-wider hover:underline focus:outline-none">
            <Filter className="h-4 w-4" />{isFiltersOpen ? "Nascondi Filtri" : "Mostra Filtri Avanzati"}
            {isFiltersOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
        </div>

        {isFiltersOpen && (
            <div className="bg-skin-sidebar border border-skin-border-light rounded p-3 md:p-4 mt-2 transition-all duration-300 animate-in slide-in-from-top-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="col-span-1"><label className="block text-xs font-semibold text-gray-600 mb-1">Mestiere</label><div className="relative"><Briefcase className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" /><input type="text" className="block w-full pl-8 pr-2 py-2 border border-skin-border bg-skin-table-row focus:outline-none focus:ring-1 focus:ring-skin-header text-sm" placeholder="Es. Fabbro" value={filterMestiere} onChange={(e) => setFilterMestiere(e.target.value)} /></div></div>
                <div className="col-span-1"><label className="block text-xs font-semibold text-gray-600 mb-1">Rapporto Mestiere</label><div className="relative"><Hammer className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" /><select value={filterRapporto} onChange={(e) => setFilterRapporto(e.target.value)} className="block w-full pl-8 pr-2 py-2 border border-[#d3c4b1] bg-white focus:outline-none focus:ring-1 focus:ring-[#8b4513] text-sm appearance-none"><option value="">Tutti</option>{rapportoOptions.map(opt => (<option key={opt.id} value={opt.id}>{opt.label}</option>))}</select></div></div>
                <div className="col-span-1"><label className="block text-xs font-semibold text-gray-600 mb-1">Bestiame</label><div className="relative"><PawPrint className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" /><select value={filterBestiame} onChange={(e) => setFilterBestiame(e.target.value)} className="block w-full pl-8 pr-2 py-2 border border-[#d3c4b1] bg-white focus:outline-none focus:ring-1 focus:ring-[#8b4513] text-sm appearance-none"><option value="">Tutti</option>{bestiameOptions.map(opt => (<option key={opt.id} value={opt.id}>{opt.label}</option>))}</select></div></div>
                <div className="col-span-1"><label className="block text-xs font-semibold text-gray-600 mb-1">Immigrazione</label><div className="relative"><Flag className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" /><select value={filterImmigrazione} onChange={(e) => setFilterImmigrazione(e.target.value)} className="block w-full pl-8 pr-2 py-2 border border-[#d3c4b1] bg-white focus:outline-none focus:ring-1 focus:ring-[#8b4513] text-sm appearance-none"><option value="">Tutti</option>{immigrazioneOptions.map(opt => (<option key={opt.id} value={opt.id}>{opt.label}</option>))}</select></div></div>
            </div>
            <div className="border-t border-skin-border-light pt-4">
                <div className="text-skin-header font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-2"><Calculator className="h-4 w-4"/> Dati Economici (Range in Fiorini)</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div><label className="block text-xs font-semibold text-gray-600 mb-1">Fortune</label><div className="flex items-center gap-2"><input type="number" placeholder="Min" className="w-full px-2 py-2 border border-skin-border bg-skin-table-row text-sm" value={filterFortuneMin} onChange={(e) => setFilterFortuneMin(e.target.value)} /><span className="text-gray-400">-</span><input type="number" placeholder="Max" className="w-full px-2 py-2 border border-skin-border bg-skin-table-row text-sm" value={filterFortuneMax} onChange={(e) => setFilterFortuneMax(e.target.value)} /></div></div>
                <div><label className="block text-xs font-semibold text-gray-600 mb-1">Credito</label><div className="flex items-center gap-2"><input type="number" placeholder="Min" className="w-full px-2 py-2 border border-skin-border bg-skin-table-row text-sm" value={filterCreditoMin} onChange={(e) => setFilterCreditoMin(e.target.value)} /><span className="text-gray-400">-</span><input type="number" placeholder="Max" className="w-full px-2 py-2 border border-skin-border bg-skin-table-row text-sm" value={filterCreditoMax} onChange={(e) => setFilterCreditoMax(e.target.value)} /></div></div>
                <div><label className="block text-xs font-semibold text-gray-600 mb-1">Credito ai Monti</label><div className="flex items-center gap-2"><input type="number" placeholder="Min" className="w-full px-2 py-2 border border-skin-border bg-skin-table-row text-sm" value={filterCreditoMMin} onChange={(e) => setFilterCreditoMMin(e.target.value)} /><span className="text-gray-400">-</span><input type="number" placeholder="Max" className="w-full px-2 py-2 border border-skin-border bg-skin-table-row text-sm" value={filterCreditoMMax} onChange={(e) => setFilterCreditoMMax(e.target.value)} /></div></div>
                <div><label className="block text-xs font-semibold text-gray-600 mb-1">Imponibile</label><div className="flex items-center gap-2"><input type="number" placeholder="Min" className="w-full px-2 py-2 border border-skin-border bg-skin-table-row text-sm" value={filterImponibileMin} onChange={(e) => setFilterImponibileMin(e.target.value)} /><span className="text-gray-400">-</span><input type="number" placeholder="Max" className="w-full px-2 py-2 border border-skin-border bg-skin-table-row text-sm" value={filterImponibileMax} onChange={(e) => setFilterImponibileMax(e.target.value)} /></div></div>
                <div><label className="block text-xs font-semibold text-gray-600 mb-1">Deduzioni</label><div className="flex items-center gap-2"><input type="number" placeholder="Min" className="w-full px-2 py-2 border border-skin-border bg-skin-table-row text-sm" value={filterDeduzioniMin} onChange={(e) => setFilterDeduzioniMin(e.target.value)} /><span className="text-gray-400">-</span><input type="number" placeholder="Max" className="w-full px-2 py-2 border border-skin-border bg-skin-table-row text-sm" value={filterDeduzioniMax} onChange={(e) => setFilterDeduzioniMax(e.target.value)} /></div></div>
                </div>
            </div>
            </div>
        )}
        </div>
    </div>
  );
}
