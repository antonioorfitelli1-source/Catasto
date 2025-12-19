import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Pagination({ page, totalPages, loading, handlePageChange }) {
  if (totalPages <= 0) return null;

  return (
    <div className="bg-skin-table-header px-4 py-3 md:px-6 md:py-4 border-t border-skin-border flex items-center justify-between">
      <button 
        onClick={() => handlePageChange(page - 1)} 
        disabled={page === 1 || loading} 
        className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded text-xs md:text-sm font-bold transition-colors ${page === 1 ? 'text-gray-400 cursor-not-allowed bg-transparent' : 'text-skin-header hover:bg-skin-text-accent bg-skin-table-row border border-skin-border'}`}
      >
        <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" /> <span className="hidden sm:inline">Precedente</span>
      </button>
      <div className="flex items-center gap-2">
        <span className="text-xs md:text-sm font-serif text-skin-header-border">Pagina</span>
        <select 
          value={page} 
          onChange={(e) => handlePageChange(Number(e.target.value))} 
          className="border border-skin-border rounded px-1 md:px-2 py-1 bg-skin-table-row text-skin-header font-bold text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-skin-header"
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <option key={pageNum} value={pageNum}>{pageNum}</option>
          ))}
        </select>
        <span className="text-xs md:text-sm font-serif text-skin-header-border">di <b>{totalPages}</b></span>
      </div>
      <button 
        onClick={() => handlePageChange(page + 1)} 
        disabled={page === totalPages || loading} 
        className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded text-xs md:text-sm font-bold transition-colors ${page === totalPages ? 'text-gray-400 cursor-not-allowed bg-transparent' : 'text-skin-header hover:bg-skin-text-accent bg-skin-table-row border border-skin-border'}`}
      >
        <span className="hidden sm:inline">Successivo</span> <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
      </button>
    </div>
  );
}
