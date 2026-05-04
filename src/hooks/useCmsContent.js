import { useEffect, useState } from "react";
import { isSanityConfigured, sanityFetch } from "../lib/sanityFetch";

function useCmsContent({
  query,
  fallbackPath,
  fallbackData,
  normalize = (data) => data,
  startWithFallback = true,
}) {
  const [content, setContent] = useState(startWithFallback ? fallbackData : null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        if (isSanityConfigured() && query) {
          const result = await sanityFetch(query);
          const normalized = normalize(result);
          if (active && normalized) {
            setContent(normalized);
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        if (import.meta.env.DEV) {
          console.warn("[CMS] Sanity fetch failed, using fallback:", err?.message || err);
        }
      }

      try {
        const res = await fetch(fallbackPath, { cache: "no-store" });
        if (!res.ok) {
          throw new Error("Fallback file missing");
        }
        const raw = await res.json();
        const normalized = normalize(raw);
        if (active && normalized) {
          setContent(normalized);
          setIsLoading(false);
          return;
        }
      } catch (err) {
        if (import.meta.env.DEV) {
          console.warn("[CMS] Fallback JSON fetch failed:", err?.message || err);
        }
        if (active) {
          setContent(fallbackData);
          setIsLoading(false);
        }
      }
    }

    load();

    return () => {
      active = false;
    };
  }, [query, fallbackPath]);

  return { content, isLoading };
}

export default useCmsContent;
