import { API_URL, buildParams } from "./client";

export const fetchCatastoData = async (filters, page, limit) => {
  const params = buildParams(filters);
  params.append("page", page);
  params.append("limit", limit);

  const response = await fetch(`${API_URL}/api/catasto?${params.toString()}`);
  if (!response.ok) throw new Error("Errore server");
  return await response.json();
};

export const fetchSidebarData = async (filters) => {
  const params = buildParams(filters);
  const response = await fetch(
    `${API_URL}/api/catasto/sidebar?${params.toString()}`
  );
  if (!response.ok) throw new Error("Errore sidebar");
  return await response.json();
};

export const fetchParentiData = async (idFuoco) => {
  const response = await fetch(`${API_URL}/api/parenti/${idFuoco}`);
  if (!response.ok) throw new Error("Errore parenti");
  return await response.json();
};
