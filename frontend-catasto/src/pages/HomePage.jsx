import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import FilterPanel from '../components/catasto/FilterPanel';
import CatastoTable from '../components/catasto/CatastoTable';

import { useCatastoFilters } from '../hooks/useCatastoFilters';
import { useCatastoData } from '../hooks/useCatastoData';
import { useCatastoSidebar } from '../hooks/useCatastoSidebar';

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => window.innerWidth >= 768);
  const tableRowsRef = useRef({});
  const mainContentRef = useRef(null);
  const [targetScrolledId, setTargetScrolledId] = useState(null);

  // Custom Hooks
  const filters = useCatastoFilters();
  const { 
    data, loading, error, 
    page, setPage, totalPages, totalRecords,
    expandedId, parentiData, loadingParenti,
    handleRowClick, fetchData 
  } = useCatastoData(filters.getFilters()); // Ideally we pass the whole filter object, or the getFilters result.
                                            // Since useCatastoData depends on filters...
                                            // The hook useCatastoFilters returns state values.
                                            // We should pass the individual values or an object composed of them.
                                            // Actually, my implementation of useCatastoData takes 'filters' as an object.
                                            // But useCatastoFilters returns separate states. Let's make sure we pass the object properly.
                                            
  // We need to pass the current values of the filters to useCatastoData, so it reacts to changes.
  // The function filters.getFilters() returns the values at the time of call, but useCatastoData needs to react to state updates.
  // So we should construct the filter object here to pass it, OR update useCatastoData to accept individual props.
  // Passing an object created on every render might cause infinite loops if the hook has it in dependency array without deep comparison.
  // Let's rely on individual props or refactor useCatastoData to take the hook result if possible.
  
  // Simplest fix: Just pass the filter values explicitly object.
  const filterValues = {
      searchPersona: filters.searchPersona,
      searchLocalita: filters.searchLocalita,
      filterMestiere: filters.filterMestiere,
      filterBestiame: filters.filterBestiame,
      filterImmigrazione: filters.filterImmigrazione,
      filterRapporto: filters.filterRapporto,
      filterFortuneMin: filters.filterFortuneMin,
      filterFortuneMax: filters.filterFortuneMax,
      filterCreditoMin: filters.filterCreditoMin,
      filterCreditoMax: filters.filterCreditoMax,
      filterCreditoMMin: filters.filterCreditoMMin,
      filterCreditoMMax: filters.filterCreditoMMax,
      filterImponibileMin: filters.filterImponibileMin,
      filterImponibileMax: filters.filterImponibileMax,
      filterDeduzioniMin: filters.filterDeduzioniMin,
      filterDeduzioniMax: filters.filterDeduzioniMax,
      sortBy: filters.sortBy,
      sortOrder: filters.sortOrder
  };

  // Re-connect data hooks with correct dependencies
  // But wait, useCatastoData has a useEffect that triggers on [filters].
  // If we pass a new object every time, it will trigger endlessly if we are not careful (useEffect compares references).
  // Actually, I implemented useCatastoData using individual fields in dependency array:
  /*
    useEffect(() => { ... }, [filters.searchPersona, ...])
  */
  // So as long as properties are stable primitives, it's fine.

  // Sidebar Hook
  const { sidebarData, sidebarLoading } = useCatastoSidebar(filterValues);

  // Scroll to row logic
  useEffect(() => {
    if (targetScrolledId && !loading && data.length > 0) {
      const rowElement = tableRowsRef.current[targetScrolledId];
      if (rowElement) {
        rowElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        handleRowClick(targetScrolledId);
      }
      setTargetScrolledId(null);
    }
  }, [data, loading, targetScrolledId]); // eslint-disable-line

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage); // This will trigger fetch in useCatastoData
      if (mainContentRef.current) mainContentRef.current.scrollTop = 0;
    }
  };

  const handleSidebarClick = (idFuoco) => {
    // Chiudi la sidebar su mobile quando si clicca un elemento
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }

    const index = sidebarData.findIndex(item => item.id === idFuoco);
    if (index !== -1) {
      const ROWS_PER_PAGE = 50; 
      const targetPage = Math.floor(index / ROWS_PER_PAGE) + 1;
      if (targetPage === page) {
        const rowElement = tableRowsRef.current[idFuoco];
        if (rowElement) rowElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        handleRowClick(idFuoco);
      } else {
        setTargetScrolledId(idFuoco);
        handlePageChange(targetPage);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#f8f5f2] text-slate-800 font-serif overflow-hidden">
      
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex flex-1 overflow-hidden relative">
        
        <Sidebar 
            isSidebarOpen={isSidebarOpen} 
            setIsSidebarOpen={setIsSidebarOpen} 
            sidebarLoading={sidebarLoading}
            sidebarData={sidebarData}
            expandedId={expandedId}
            targetScrolledId={targetScrolledId}
            handleSidebarClick={handleSidebarClick}
        />

        <div ref={mainContentRef} className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-8 relative w-full">
            <FilterPanel 
               {...filters} // Pass all filter states and setters
               loading={loading}
               fetchData={fetchData}
            />

            <CatastoTable 
                data={data}
                totalRecords={totalRecords}
                loading={loading}
                error={error}
                sortBy={filters.sortBy}
                sortOrder={filters.sortOrder}
                handleSort={filters.handleSort}
                tableRowsRef={tableRowsRef}
                handleRowClick={handleRowClick}
                expandedId={expandedId}
                loadingParenti={loadingParenti}
                parentiData={parentiData}
                page={page}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
        </div>
      </div>
    </div>
  );
}
