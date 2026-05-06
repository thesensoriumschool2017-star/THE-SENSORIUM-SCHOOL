const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_SUBMITS = 3;
const RATE_LIMIT_STORAGE_KEY = "sensorium_joinus_submit_timestamps";
const FALLBACK_JOINUS_WEBAPP_URL =
  "https://script.google.com/macros/s/AKfycbzFGtcncuPZlE3uCUg5urGh-dgqonkcXF1fRETBWNGGq8O_YNnWkkQ6JeUBT7EjCikC1w/exec";

function assertClientRateLimit() {
  if (typeof window === "undefined") return;
  const now = Date.now();
  const raw = localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
  const parsed = raw ? JSON.parse(raw) : [];
  const recent = Array.isArray(parsed)
    ? parsed.filter((t) => Number.isFinite(t) && now - t < RATE_LIMIT_WINDOW_MS)
    : [];

  if (recent.length >= RATE_LIMIT_MAX_SUBMITS) {
    throw new Error("RATE_LIMITED");
  }

  recent.push(now);
  localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify(recent));
}

export async function submitJoinUs({ name, phone, email, website, form_started_at }) {
  const endpoint = import.meta.env.VITE_JOINUS_WEBAPP_URL || FALLBACK_JOINUS_WEBAPP_URL;
  if (!endpoint) {
    throw new Error("Missing VITE_JOINUS_WEBAPP_URL");
  }

  // Honeypot: bots often fill hidden fields.
  if (String(website || "").trim()) {
    throw new Error("SPAM_DETECTED");
  }

  // Human-speed check: too-fast submissions are likely bot traffic.
  const startedAtMs = Date.parse(String(form_started_at || ""));
  if (Number.isFinite(startedAtMs) && Date.now() - startedAtMs < 2000) {
    throw new Error("SPAM_DETECTED");
  }

  assertClientRateLimit();

  const payload = {
    name: String(name || "").trim(),
    phone: String(phone || "").trim(),
    email: String(email || "").trim(),
    website: String(website || "").trim(),
    form_started_at: String(form_started_at || ""),
    // Useful for filtering in the Sheet
    page_url: typeof window !== "undefined" ? window.location.href : "",
    submitted_at: new Date().toISOString(),
  };

  const body = new URLSearchParams(payload).toString();

  try {
    const resp = await fetch(endpoint, {
      method: "POST",
      // Apps Script doesn't always like JSON content-type; simple form payload is safest.
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body,
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      throw new Error(`Submit failed (${resp.status}). ${text}`.trim());
    }
  } catch (err) {
    // Localhost + Apps Script often fails due to CORS response restrictions
    // even when write succeeds. Retry using no-cors as a fallback.
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body,
    });
  }
}

