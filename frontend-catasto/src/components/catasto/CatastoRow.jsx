import React, { forwardRef } from 'react';
import { Briefcase, Layers, Coins, Home, Bookmark, FileText, ChevronDown, ChevronRight, Info, Users, PawPrint, Flag, Hammer } from 'lucide-react';

const CatastoRow = forwardRef(({ row, expanded, onRowClick, loadingParenti, parentiData }, ref) => {
  return (
    <>
      <tr 
        ref={ref}
        onClick={() => onRowClick(row.id)} 
        className={`cursor-pointer transition-colors border-b border-gray-100 ${expanded ? 'bg-[#fffbf5] border-l-4 border-l-[#8b4513]' : 'hover:bg-[#faf7f2]'}`}
      >
        <td className="px-3 py-3 md:px-6 md:py-4">
          <div className="flex flex-col justify-center">
            <div className="text-base md:text-lg font-medium text-[#2c1810] font-serif leading-tight">{row.nome}</div>
            <div className="text-xs text-gray-500 flex items-center gap-1 font-sans mt-1">
              <Briefcase className="h-3 w-3" /> {row.mestiere || "Nessun mestiere"}
            </div>
          </div>
        </td>
        <td className="px-3 py-3 md:px-6 md:py-4">
          <div className="flex flex-col gap-1 text-xs md:text-sm">
            <div className="font-bold text-[#5d2e0c] flex items-center gap-1">
              <Layers className="h-3 w-3" /> {row.serie || "Serie N/D"}
            </div>
            <div className="text-gray-700 ml-2 border-l-2 border-gray-300 pl-2">{row.quartiere}</div>
            <div className="text-gray-600 ml-2 border-l-2 border-gray-300 pl-2 italic text-[10px] md:text-xs">
              {row.piviere} &raquo; {row.popolo}
            </div>
          </div>
        </td>
        <td className="px-3 py-3 md:px-6 md:py-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-[#8b4513] font-bold font-serif text-sm md:text-base">
              <Coins className="h-3 w-3 md:h-4 md:w-4" />
              {row.fortune ? row.fortune.toLocaleString() : 0} 
              <span className="hidden md:inline"> fiorini</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] md:text-xs text-gray-600 font-sans">
              <Home className="h-3 w-3" /> {row.casa || "N/D"}
            </div>
            <div className="md:hidden flex items-center gap-2 text-[10px] text-[#5d2e0c] font-mono bg-[#f4f1ec] px-1 rounded w-fit border border-[#e5e0d8] mt-1">
              <span>Vol. {row.volume}</span><span>c. {row.foglio}</span>
            </div>
          </div>
        </td>
        
        {/* Cella Riferimenti (Desktop only) */}
        <td className="hidden md:table-cell px-6 py-4">
          <div className="flex flex-col gap-1 text-sm text-[#5d2e0c] font-mono bg-[#f4f1ec] p-2 rounded w-fit border border-[#e5e0d8]">
            <div className="flex items-center gap-2"><Bookmark className="h-3 w-3 text-[#8b4513]" /><span className="font-bold">Vol.</span> {row.volume || '?'}</div>
            <div className="flex items-center gap-2"><FileText className="h-3 w-3 text-[#8b4513]" /><span className="font-bold">c.</span> {row.foglio || '?'}</div>
          </div>
        </td>

        <td className="px-2 py-3 md:px-6 md:py-4 text-right">
          {expanded ? <ChevronDown className="h-5 w-5 text-[#8b4513]" /> : <ChevronRight className="h-5 w-5 text-gray-400" />}
        </td>
      </tr>

      {/* DETTAGLI ESPANSI */}
      {expanded && (
        <tr className="bg-[#fffbf5]">
          <td colSpan="5" className="px-4 py-4 md:px-6 md:py-6 border-b-2 border-[#e6c288]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-xs md:text-sm font-bold text-[#5d2e0c] uppercase tracking-wider mb-2 md:mb-3 flex items-center gap-2 border-b border-[#e6c288] pb-1"><Info className="h-4 w-4" /> Dettagli Economici</h3>
                <div className="bg-white p-3 md:p-4 rounded border border-[#d3c4b1] shadow-sm space-y-3 md:space-y-4 text-xs md:text-sm">
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div><span className="text-[10px] md:text-xs text-gray-500 uppercase block">Credito</span><span className="font-bold text-[#2c1810]">{row.credito || 0} fiorini</span></div>
                    <div><span className="text-[10px] md:text-xs text-gray-500 uppercase block">Credito ai Monti</span><span className="font-bold text-[#2c1810]">{row.credito_m || 0} fiorini</span></div>
                    <div><span className="text-[10px] md:text-xs text-gray-500 uppercase block">Fortune</span><span className="font-bold text-[#2c1810]">{row.fortune || 0} fiorini</span></div>
                    <div><span className="text-[10px] md:text-xs text-gray-500 uppercase block">Deduzioni</span><span className="font-bold text-[#2c1810]">{row.deduzioni || 0} fiorini</span></div>
                    <div><span className="text-[10px] md:text-xs text-gray-500 uppercase block">Imponibile Totale</span><span className="font-bold text-[#8b4513] text-base md:text-lg">{row.imponibile || 0} fiorini</span></div>
                  </div>
                  <div className="pt-2 border-t border-dashed border-gray-300 space-y-2">
                    <div className="flex items-start gap-2"><PawPrint className="h-4 w-4 text-[#8b4513] mt-0.5 flex-shrink-0" /><div><span className="text-[10px] md:text-xs text-gray-500 uppercase block">Bestiame</span>{row.bestiame || "Nessun dato"}</div></div>
                    <div className="flex items-start gap-2"><Flag className="h-4 w-4 text-[#8b4513] mt-0.5 flex-shrink-0" /><div><span className="text-[10px] md:text-xs text-gray-500 uppercase block">Immigrazione</span>{row.immigrazione || "Nessun dato"}</div></div>
                    <div className="flex items-start gap-2"><Hammer className="h-4 w-4 text-[#8b4513] mt-0.5 flex-shrink-0" /><div><span className="text-[10px] md:text-xs text-gray-500 uppercase block">Rapporto Mestiere</span>{row.rapporto_mestiere || "Nessun dato"}</div></div>
                  </div>
                  <div className="pt-2 border-t border-dashed border-gray-300"><span className="text-[10px] md:text-xs text-gray-500 uppercase block mb-1">Particolarità Fuoco</span><p className="italic text-gray-700 bg-gray-50 p-2 rounded">{row.particolarita_fuoco || "Nessuna particolarità registrata."}</p></div>
                </div>
              </div>
              <div>
                <h3 className="text-xs md:text-sm font-bold text-[#5d2e0c] uppercase tracking-wider mb-2 md:mb-3 flex items-center gap-2 border-b border-[#e6c288] pb-1"><Users className="h-4 w-4" /> Composizione Familiare</h3>
                {loadingParenti ? (
                  <div className="text-sm text-gray-500 italic">Caricamento...</div>
                ) : parentiData.length > 0 ? (
                  <div className="overflow-hidden border border-[#d3c4b1] rounded-md bg-white">
                    <table className="min-w-full divide-y divide-[#d3c4b1]">
                      <thead className="bg-[#eae0d5]">
                        <tr>
                          <th className="px-2 py-2 text-left text-[10px] md:text-xs font-medium text-[#5d2e0c] uppercase">Parente</th>
                          <th className="px-2 py-2 text-left text-[10px] md:text-xs font-medium text-[#5d2e0c] uppercase">Età</th>
                          <th className="px-2 py-2 text-left text-[10px] md:text-xs font-medium text-[#5d2e0c] uppercase">Stato</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-[#e5e0d8]">
                        {parentiData.map((parente, idx) => (
                          <tr key={idx} className="text-xs md:text-sm text-gray-700">
                            <td className="px-2 py-2 font-medium">
                              {parente.parentela_desc || "Membro"}
                              {parente.sesso && <span className="text-[10px] text-gray-400 ml-1">({parente.sesso})</span>}
                            </td>
                            <td className="px-2 py-2">{parente.eta ? parente.eta : '-'}</td>
                            <td className="px-2 py-2">
                              <div className="flex flex-col">
                                <span>{parente.stato_civile}</span>
                                <span className="text-[10px] italic text-gray-500">{parente.particolarita}</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-xs md:text-sm text-gray-500 italic p-3 border border-dashed border-gray-300 rounded bg-gray-50">Nessun parente registrato.</div>
                )}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
});

export default CatastoRow;
