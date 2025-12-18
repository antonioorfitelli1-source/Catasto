import React from 'react';
import { BookOpen, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import CatastoRow from './CatastoRow';
import Pagination from './Pagination';

export default function CatastoTable({ 
    data, 
    totalRecords, 
    loading, 
    error, 
    sortBy, 
    sortOrder, 
    handleSort, 
    tableRowsRef, 
    handleRowClick, 
    expandedId, 
    loadingParenti, 
    parentiData,
    page,
    totalPages,
    handlePageChange
}) {

  const renderSortIcon = (columnKey) => {
    if (sortBy !== columnKey) return <ArrowUpDown className="h-4 w-4 text-gray-300 ml-1" />;
    return sortOrder === 'ASC' ? <ArrowUp className="h-4 w-4 text-[#8b4513] ml-1" /> : <ArrowDown className="h-4 w-4 text-[#8b4513] ml-1" />;
  };

  return (
    <div className="space-y-4 pb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-[#d3c4b1] pb-2 gap-2">
        <h2 className="text-lg md:text-xl font-bold text-[#5d2e0c] flex items-center gap-2 font-serif">
            <BookOpen className="h-5 w-5 md:h-6 md:w-6" /> Registri Fuochi
        </h2>
        <span className="bg-[#e6c288] text-[#5d2e0c] px-2 py-1 md:px-3 text-xs md:text-sm font-bold rounded-full">
            {totalRecords} Risultati
        </span>
        </div>

        {error ? (
        <div className="bg-red-50 border-l-4 border-red-800 p-4 text-red-900 font-serif">
            <p className="font-bold">Errore Server</p><p>{error}</p>
        </div>
        ) : (
        <div className="bg-white shadow-lg border border-[#d3c4b1]">
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#e5e0d8]">
                <thead className="bg-[#f0ece6]">
                <tr>
                    <th onClick={() => handleSort('nome')} className="px-3 py-3 md:px-6 md:py-4 text-left text-xs font-bold text-[#5d2e0c] uppercase tracking-wider font-sans cursor-pointer hover:bg-[#e6dbcf] group">
                    <div className="flex items-center gap-1">Capofamiglia{renderSortIcon('nome')}</div>
                    </th>
                    <th onClick={() => handleSort('localita')} className="px-3 py-3 md:px-6 md:py-4 text-left text-xs font-bold text-[#5d2e0c] uppercase tracking-wider font-sans cursor-pointer hover:bg-[#e6dbcf] group">
                    <div className="flex items-center gap-1">Località{renderSortIcon('localita')}</div>
                    </th>
                    <th onClick={() => handleSort('fortune')} className="px-3 py-3 md:px-6 md:py-4 text-left text-xs font-bold text-[#5d2e0c] uppercase tracking-wider font-sans cursor-pointer hover:bg-[#e6dbcf] group">
                    <div className="flex items-center gap-1">Dati Sintetici{renderSortIcon('fortune')}</div>
                    </th>
                    <th className="hidden md:table-cell px-6 py-4 text-left text-xs font-bold text-[#5d2e0c] uppercase tracking-wider font-sans">
                    Riferimenti
                    </th>
                    <th className="px-3 py-3 md:px-6 md:py-4 w-8 md:w-10"></th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#e5e0d8]">
                {loading ? (
                    [...Array(5)].map((_, i) => (<tr key={i} className="animate-pulse"><td className="px-6 py-4" colSpan="5"><div className="h-8 bg-gray-200 rounded"></div></td></tr>))
                ) : data.length > 0 ? (
                    data.map((row) => (
                        <CatastoRow 
                            key={row.id}
                            ref={el => tableRowsRef.current[row.id] = el}
                            row={row} 
                            expanded={expandedId === row.id} 
                            onRowClick={handleRowClick}
                            loadingParenti={loadingParenti}
                            parentiData={parentiData} 
                        />
                    ))
                ) : (
                    <tr><td colSpan="5" className="px-6 py-12 text-center text-gray-500">Nessun dato trovato.</td></tr>
                )}
                </tbody>
            </table>
            </div>
            
            <Pagination 
                page={page} 
                totalPages={totalPages} 
                loading={loading} 
                handlePageChange={handlePageChange} 
            />
        </div>
        )}
    </div>
  );
}
