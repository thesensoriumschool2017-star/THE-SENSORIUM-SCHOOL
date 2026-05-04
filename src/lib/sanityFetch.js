const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2026-05-01";

export function isSanityConfigured() {
  return Boolean(projectId && dataset);
}

export async function sanityFetch(query, params = {}) {
  if (!isSanityConfigured()) {
    throw new Error("Sanity is not configured");
  }

  const searchParams = new URLSearchParams({
    query,
    perspective: "raw",
    ...(Object.keys(params).length ? { params: JSON.stringify(params) } : {}),
  });

  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?${searchParams.toString()}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch Sanity content");
  }
  const json = await res.json();
  return json?.result;
}
