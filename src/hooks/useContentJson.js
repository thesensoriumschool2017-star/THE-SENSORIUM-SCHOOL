import { useEffect, useState } from "react";

function useContentJson(path, fallback, normalize = (data) => data) {
  const [content, setContent] = useState(fallback);

  useEffect(() => {
    let active = true;

    fetch(path)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("Content file not found"))))
      .then((raw) => {
        if (!active) return;
        const normalized = normalize(raw);
        if (normalized) {
          setContent(normalized);
        }
      })
      .catch(() => {
        if (active) {
          setContent(fallback);
        }
      });

    return () => {
      active = false;
    };
  }, [path]);

  return content;
}

export default useContentJson;
