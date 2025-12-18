import { useState } from "react";

export function useCatastoFilters() {
  // Search
  const [searchPersona, setSearchPersona] = useState("");
  const [searchLocalita, setSearchLocalita] = useState("");

  // Dropdown Filters
  const [filterMestiere, setFilterMestiere] = useState("");
  const [filterBestiame, setFilterBestiame] = useState("");
  const [filterImmigrazione, setFilterImmigrazione] = useState("");
  const [filterRapporto, setFilterRapporto] = useState("");

  // Range Filters
  const [filterFortuneMin, setFilterFortuneMin] = useState("");
  const [filterFortuneMax, setFilterFortuneMax] = useState("");
  const [filterCreditoMin, setFilterCreditoMin] = useState("");
  const [filterCreditoMax, setFilterCreditoMax] = useState("");
  const [filterCreditoMMin, setFilterCreditoMMin] = useState("");
  const [filterCreditoMMax, setFilterCreditoMMax] = useState("");
  const [filterImponibileMin, setFilterImponibileMin] = useState("");
  const [filterImponibileMax, setFilterImponibileMax] = useState("");
  const [filterDeduzioniMin, setFilterDeduzioniMin] = useState("");
  const [filterDeduzioniMax, setFilterDeduzioniMax] = useState("");

  // Sorting
  const [sortBy, setSortBy] = useState("nome");
  const [sortOrder, setSortOrder] = useState("ASC");

  const handleSort = (columnKey) => {
    if (sortBy === columnKey) {
      setSortOrder((prev) => (prev === "ASC" ? "DESC" : "ASC"));
    } else {
      setSortBy(columnKey);
      setSortOrder("ASC");
    }
  };

  const getFilters = () => ({
    searchPersona,
    searchLocalita,
    filterMestiere,
    filterBestiame,
    filterImmigrazione,
    filterRapporto,
    filterFortuneMin,
    filterFortuneMax,
    filterCreditoMin,
    filterCreditoMax,
    filterCreditoMMin,
    filterCreditoMMax,
    filterImponibileMin,
    filterImponibileMax,
    filterDeduzioniMin,
    filterDeduzioniMax,
    sortBy,
    sortOrder,
  });

  return {
    // States
    searchPersona,
    setSearchPersona,
    searchLocalita,
    setSearchLocalita,
    filterMestiere,
    setFilterMestiere,
    filterBestiame,
    setFilterBestiame,
    filterImmigrazione,
    setFilterImmigrazione,
    filterRapporto,
    setFilterRapporto,
    filterFortuneMin,
    setFilterFortuneMin,
    filterFortuneMax,
    setFilterFortuneMax,
    filterCreditoMin,
    setFilterCreditoMin,
    filterCreditoMax,
    setFilterCreditoMax,
    filterCreditoMMin,
    setFilterCreditoMMin,
    filterCreditoMMax,
    setFilterCreditoMMax,
    filterImponibileMin,
    setFilterImponibileMin,
    filterImponibileMax,
    setFilterImponibileMax,
    filterDeduzioniMin,
    setFilterDeduzioniMin,
    filterDeduzioniMax,
    setFilterDeduzioniMax,
    sortBy,
    sortOrder,

    // Actions
    handleSort,
    getFilters,
  };
}
