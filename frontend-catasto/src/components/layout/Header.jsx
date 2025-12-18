import React from 'react';
import { Menu, X, Scroll } from 'lucide-react';

export default function Header({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <header className="bg-[#8b4513] text-[#f8f5f2] shadow-md border-b-4 border-[#5d2e0c] flex-shrink-0 z-20 h-16 md:h-20 transition-all">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          {/* Tasto Menu Mobile */}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 bg-[#6e360f] rounded hover:bg-[#5d2e0c] transition-colors mr-1 md:mr-2 focus:outline-none focus:ring-2 focus:ring-[#e6c288]"
            title={isSidebarOpen ? "Chiudi Indice" : "Apri Indice"}
          >
            {isSidebarOpen ? <X className="h-5 w-5 md:h-6 md:w-6 text-[#e6c288]" /> : <Menu className="h-5 w-5 md:h-6 md:w-6 text-[#e6c288]" />}
          </button>
          
          <Scroll className="h-6 w-6 md:h-8 md:w-8 text-[#e6c288]" />
          <div>
            <h1 className="text-lg md:text-2xl font-bold tracking-wide font-serif leading-tight">Catasto Fiorentino del 1427/30</h1>
            <p className="text-[10px] md:text-xs text-[#e6c288] uppercase tracking-wider hidden sm:block">Sistema di Consultazione</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px] md:text-xs bg-[#5d2e0c] px-2 py-1 md:px-3 rounded text-[#e6c288] whitespace-nowrap">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="hidden sm:inline">Server</span> Live
        </div>
      </div>
    </header>
  );
}
