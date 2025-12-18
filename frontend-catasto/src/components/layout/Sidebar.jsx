import React from 'react';
import { List, ChevronLeft } from 'lucide-react';

export default function Sidebar({ 
    isSidebarOpen, 
    setIsSidebarOpen, 
    sidebarLoading, 
    sidebarData, 
    expandedId, 
    targetScrolledId, 
    handleSidebarClick 
}) {
  return (
    <>
      {/* BACKDROP PER MOBILE */}
      {isSidebarOpen && (
        <div 
          className="absolute inset-0 bg-black/30 z-30 md:hidden backdrop-blur-[2px] transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR RESPONSIVE */}
      <aside 
        className={`
          bg-[#fffbf5] border-r border-[#d3c4b1] flex flex-col 
          transition-all duration-300 ease-in-out 
          absolute top-0 left-0 bottom-0 z-40 shadow-2xl md:shadow-none md:static
          ${isSidebarOpen ? 'w-[80%] sm:w-72 translate-x-0' : 'w-0 -translate-x-full opacity-0 md:w-0'}
        `}
      >
        <div className="p-4 bg-[#eae0d5] border-b border-[#d3c4b1] flex items-center justify-between whitespace-nowrap overflow-hidden">
          <h3 className="font-bold text-[#5d2e0c] uppercase text-xs tracking-wider flex items-center gap-2">
            <List className="h-4 w-4 flex-shrink-0" /> Indice
          </h3>
          <button onClick={() => setIsSidebarOpen(false)} className="text-[#8b4513] hover:text-[#5d2e0c] p-1">
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {sidebarLoading ? (
            <div className="p-4 text-center text-sm text-gray-500 italic">Caricamento indice...</div>
          ) : sidebarData.length > 0 ? (
            sidebarData.map((row) => (
              <button 
                key={`idx-${row.id}`} 
                onClick={() => handleSidebarClick(row.id)} 
                className={`
                  w-full text-left p-2 rounded text-sm transition-colors border border-transparent
                  ${expandedId === row.id || targetScrolledId === row.id 
                    ? 'bg-[#8b4513] text-white border-[#5d2e0c] shadow-sm' 
                    : 'hover:bg-[#e6dbcf] text-[#2c1810] border-b-gray-100'}
                `}
              >
                <div className="font-bold truncate font-serif">{row.nome}</div>
                <div className={`text-xs truncate ${expandedId === row.id || targetScrolledId === row.id ? 'text-[#e6c288]' : 'text-gray-500'}`}>
                  {row.mestiere || "Nessun mestiere"}
                </div>
              </button>
            ))
          ) : (
            <div className="p-4 text-center text-sm text-gray-400">Nessun risultato.</div>
          )}
        </div>
      </aside>
    </>
  );
}
