export async function submitJoinUs({ name, phone, email }) {
  const endpoint = import.meta.env.VITE_JOINUS_WEBAPP_URL;
  if (!endpoint) {
    throw new Error("Missing VITE_JOINUS_WEBAPP_URL");
  }

  const payload = {
    name: String(name || "").trim(),
    phone: String(phone || "").trim(),
    email: String(email || "").trim(),
    // Useful for filtering in the Sheet
    page_url: typeof window !== "undefined" ? window.location.href : "",
    submitted_at: new Date().toISOString(),
  };

  const resp = await fetch(endpoint, {
    method: "POST",
    // Apps Script doesn't always like JSON content-type; simple form payload is safest.
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body: new URLSearchParams(payload).toString(),
  });

  if (!resp.ok) {
    const text = await resp.text().catch(() => "");
    throw new Error(`Submit failed (${resp.status}). ${text}`.trim());
  }
}

