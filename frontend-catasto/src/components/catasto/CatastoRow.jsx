import React, { forwardRef } from 'react';
import { Briefcase, Layers, Coins, Home, Bookmark, FileText, ChevronDown, ChevronRight, Info, Users, PawPrint, Flag, Hammer } from 'lucide-react';

const CatastoRow = forwardRef(({ row, expanded, onRowClick, loadingParenti, parentiData }, ref) => {
  return (
    <>
      <tr 
        ref={ref}
        onClick={() => onRowClick(row.id)} 
        className={`cursor-pointer transition-colors border-b border-skin-border-light ${expanded ? 'bg-skin-sidebar border-l-4 border-l-skin-header' : 'hover:bg-skin-table-row-hover'}`}
      >
        <td className="px-3 py-3 md:px-6 md:py-4">
          <div className="flex flex-col justify-center">
            <div className="text-base md:text-lg font-medium text-skin-text font-serif leading-tight">{row.nome}</div>
            <div className="text-xs text-gray-500 flex items-center gap-1 font-sans mt-1">
              <Briefcase className="h-3 w-3" /> {row.mestiere || "Nessun mestiere"}
            </div>
          </div>
        </td>
        <td className="px-3 py-3 md:px-6 md:py-4">
          <div className="flex flex-col gap-1 text-xs md:text-sm">
            <div className="font-bold text-skin-header-border flex items-center gap-1">
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
            <div className="flex items-center gap-1 text-skin-header font-bold font-serif text-sm md:text-base">
              <Coins className="h-3 w-3 md:h-4 md:w-4" />
              {row.fortune ? row.fortune.toLocaleString() : 0} 
              <span className="hidden md:inline"> fiorini</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] md:text-xs text-gray-600 font-sans">
              <Home className="h-3 w-3" /> {row.casa || "N/D"}
            </div>
            <div className="md:hidden flex items-center gap-2 text-[10px] text-skin-header-border font-mono bg-skin-display px-1 rounded w-fit border border-skin-border-light mt-1">
              <span>Vol. {row.volume}</span><span>c. {row.foglio}</span>
            </div>
          </div>
        </td>
        
        {/* Cella Riferimenti (Desktop only) */}
        <td className="hidden md:table-cell px-6 py-4">
          <div className="flex flex-col gap-1 text-sm text-skin-header-border font-mono bg-skin-display p-2 rounded w-fit border border-skin-border-light">
            <div className="flex items-center gap-2"><Bookmark className="h-3 w-3 text-skin-header" /><span className="font-bold">Vol.</span> {row.volume || '?'}</div>
            <div className="flex items-center gap-2"><FileText className="h-3 w-3 text-skin-header" /><span className="font-bold">c.</span> {row.foglio || '?'}</div>
          </div>
        </td>

        <td className="px-2 py-3 md:px-6 md:py-4 text-right">
          {expanded ? <ChevronDown className="h-5 w-5 text-skin-header" /> : <ChevronRight className="h-5 w-5 text-gray-400" />}
        </td>
      </tr>

      {/* DETTAGLI ESPANSI */}
      {expanded && (
        <tr className="bg-skin-sidebar">
          <td colSpan="5" className="px-4 py-4 md:px-6 md:py-6 border-b-2 border-skin-text-accent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-xs md:text-sm font-bold text-skin-header-border uppercase tracking-wider mb-2 md:mb-3 flex items-center gap-2 border-b border-skin-text-accent pb-1"><Info className="h-4 w-4" /> Dettagli Economici</h3>
                <div className="bg-skin-table-row p-3 md:p-4 rounded border border-skin-border shadow-sm space-y-3 md:space-y-4 text-xs md:text-sm">
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div><span className="text-gray-500 uppercase block">Credito</span><span className="font-bold text-skin-text">{row.credito || 0} fiorini</span></div>
                    <div><span className="text-[10px] md:text-xs text-gray-500 uppercase block">Credito ai Monti</span><span className="font-bold text-[#2c1810]">{row.credito_m || 0} fiorini</span></div>
                    <div><span className="text-[10px] md:text-xs text-gray-500 uppercase block">Fortune</span><span className="font-bold text-[#2c1810]">{row.fortune || 0} fiorini</span></div>
                    <div><span className="text-[10px] md:text-xs text-gray-500 uppercase block">Deduzioni</span><span className="font-bold text-[#2c1810]">{row.deduzioni || 0} fiorini</span></div>
                    <div><span className="text-[10px] md:text-xs text-gray-500 uppercase block">Imponibile Totale</span><span className="font-bold text-skin-header text-base md:text-lg">{row.imponibile || 0} fiorini</span></div>
                  </div>
                  <div className="pt-2 border-t border-dashed border-gray-300 space-y-2">
                    <div className="flex items-start gap-2"><PawPrint className="h-4 w-4 text-skin-header mt-0.5 flex-shrink-0" /><div><span className="text-[10px] md:text-xs text-gray-500 uppercase block">Bestiame</span>{row.bestiame || "Nessun dato"}</div></div>
                    <div className="flex items-start gap-2"><Flag className="h-4 w-4 text-skin-header mt-0.5 flex-shrink-0" /><div><span className="text-[10px] md:text-xs text-gray-500 uppercase block">Immigrazione</span>{row.immigrazione || "Nessun dato"}</div></div>
                    <div className="flex items-start gap-2"><Hammer className="h-4 w-4 text-skin-header mt-0.5 flex-shrink-0" /><div><span className="text-[10px] md:text-xs text-gray-500 uppercase block">Rapporto Mestiere</span>{row.rapporto_mestiere || "Nessun dato"}</div></div>
                  </div>
                  <div className="pt-2 border-t border-dashed border-gray-300"><span className="text-[10px] md:text-xs text-gray-500 uppercase block mb-1">Particolarità Fuoco</span><p className="italic text-gray-700 bg-gray-50 p-2 rounded">{row.particolarita_fuoco || "Nessuna particolarità registrata."}</p></div>
                </div>
              </div>
              <div>
                <h3 className="text-xs md:text-sm font-bold text-skin-header-border uppercase tracking-wider mb-2 md:mb-3 flex items-center gap-2 border-b border-skin-text-accent pb-1"><Users className="h-4 w-4" /> Composizione Familiare</h3>
                {loadingParenti ? (
                  <div className="text-sm text-gray-500 italic">Caricamento...</div>
                ) : parentiData.length > 0 ? (
                  <div className="overflow-hidden border border-skin-border rounded-md bg-skin-table-row">
                    <table className="min-w-full divide-y divide-skin-border">
                      <thead className="bg-skin-table-header">
                        <tr>
                          <th className="px-2 py-2 text-left text-[10px] md:text-xs font-medium text-skin-header-border uppercase">Parente</th>
                          <th className="px-2 py-2 text-left text-[10px] md:text-xs font-medium text-skin-header-border uppercase">Età</th>
                          <th className="px-2 py-2 text-left text-[10px] md:text-xs font-medium text-skin-header-border uppercase">Stato</th>
                        </tr>
                      </thead>
                      <tbody className="bg-skin-table-row divide-y divide-skin-border-light">
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

export default React.memo(CatastoRow);
