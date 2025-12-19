import React from 'react';
import { Menu, X, Scroll } from 'lucide-react';

export default function Header({ isSidebarOpen, setIsSidebarOpen, darkMode, toggleDarkMode }) {
  return (
    <header className="bg-skin-header text-skin-text-inverted shadow-md border-b-4 border-skin-header-border flex-shrink-0 z-20 h-16 md:h-20 transition-all">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          {/* Tasto Menu Mobile */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 bg-skin-header-accent rounded hover:bg-skin-header-border transition-colors mr-1 md:mr-2 focus:outline-none focus:ring-2 focus:ring-skin-text-accent"
            title={isSidebarOpen ? "Chiudi Indice" : "Apri Indice"}
          >
            {isSidebarOpen ? <X className="h-5 w-5 md:h-6 md:w-6 text-skin-text-accent" /> : <Menu className="h-5 w-5 md:h-6 md:w-6 text-skin-text-accent" />}
          </button>

          <Scroll className="h-6 w-6 md:h-8 md:w-8 text-skin-text-accent" />
          <div>
            <h1 className="text-lg md:text-2xl font-bold tracking-wide font-serif leading-tight">Catasto Fiorentino del 1427/30</h1>
            <p className="text-[10px] md:text-xs text-skin-text-accent uppercase tracking-wider hidden sm:block">Sistema di Consultazione</p>
          </div>
        </div>
    <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 text-[10px] md:text-xs bg-skin-header-border px-2 py-1 md:px-3 rounded text-skin-text-accent whitespace-nowrap">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="hidden sm:inline">Server</span> Live
        </div>
        <label className="relative inline-flex items-center cursor-pointer group flex-shrink-0">
            <input 
              type="checkbox" 
              checked={darkMode} 
              onChange={() => toggleDarkMode(!darkMode)}
              className="sr-only peer" 
            />
          <span className="slider">
    <div className="star star_1"></div>
    <div className="star star_2"></div>
    <div className="star star_3"></div>
    <svg viewBox="0 0 16 16" className="cloud_1 cloud">
      <path
        transform="matrix(.77976 0 0 .78395-299.99-418.63)"
        fill="#fff"
        d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
      ></path>
    </svg>
  </span>
    </div>
      </div>   
    </label>      
    </header>
  );
}
