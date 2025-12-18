import { useState, useEffect } from "react";
import { fetchSidebarData } from "../api/catastoService";

export function useCatastoSidebar(filters) {
  const [sidebarData, setSidebarData] = useState([]);
  const [sidebarLoading, setSidebarLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadSidebar();
    }, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [filters]);

  const loadSidebar = async () => {
    setSidebarLoading(true);
    try {
      const result = await fetchSidebarData(filters);
      setSidebarData(result);
    } catch (err) {
      console.error(err);
    } finally {
      setSidebarLoading(false);
    }
  };

  return { sidebarData, sidebarLoading };
}
