import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { submitJoinUs } from "../lib/joinUs";

const STORAGE_KEY = "uef_join_us_popup_dismissed";

function AutoJoinUsPopup() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  useEffect(() => {
    // Show only once on first entry to the site (initial mount).
    // If user cancels, never auto-show again (persisted in localStorage).
    const dismissed = localStorage.getItem(STORAGE_KEY) === "1";
    if (dismissed) return;

    // If user entered directly on the Join Us page, don't auto-show.
    if (location.pathname === "/join-us") return;

    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
    // Intentionally run only once (initial mount).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setIsVisible(false);
  };

  async function onSubmit(e) {
    e.preventDefault();
    if (status.state === "submitting") return;

    if (!form.name.trim() || !form.phone.trim()) {
      setStatus({ state: "error", message: "Please enter your name and phone number." });
      return;
    }

    try {
      setStatus({ state: "submitting", message: "" });
      await submitJoinUs(form);
      setStatus({ state: "success", message: "Thanks! We received your details." });
      setForm({ name: "", phone: "", email: "" });
      // After a successful submit, don't auto-show again.
      localStorage.setItem(STORAGE_KEY, "1");
    } catch (err) {
      setStatus({
        state: "error",
        message:
          err?.message === "Missing VITE_JOINUS_WEBAPP_URL"
            ? "Join Us storage is not configured yet."
            : "Something went wrong. Please try again.",
      });
    }
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/45 px-4">
      <div className="w-full max-w-lg rounded-2xl border border-amber-100 bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
              Join Us
            </p>
            <h2 className="mt-1 text-2xl font-bold text-stone-900">
              Be Part of the Change
            </h2>
          </div>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-lg border border-stone-200 px-3 py-1 text-sm font-medium text-stone-600 hover:bg-stone-100"
          >
            Cancel
          </button>
        </div>

        <p className="mb-4 text-sm text-stone-600">
          Share your details and our team will connect with you.
        </p>

        <form className="grid gap-3 md:grid-cols-2" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            className="rounded-xl border border-amber-200 px-4 py-3 text-sm outline-none ring-amber-300 focus:ring"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            className="rounded-xl border border-amber-200 px-4 py-3 text-sm outline-none ring-amber-300 focus:ring"
          />
          <input
            type="email"
            placeholder="Email (Optional)"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className="rounded-xl border border-amber-200 px-4 py-3 text-sm outline-none ring-amber-300 focus:ring md:col-span-2"
          />

          {status.state !== "idle" ? (
            <p
              className={
                "md:col-span-2 text-sm " +
                (status.state === "success"
                  ? "text-green-700"
                  : status.state === "error"
                    ? "text-red-700"
                    : "text-stone-600")
              }
            >
              {status.message || (status.state === "submitting" ? "Submitting..." : "")}
            </p>
          ) : null}
          <div className="flex flex-wrap gap-2 md:col-span-2">
            <button
              type="submit"
              disabled={status.state === "submitting"}
              className="rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.state === "submitting" ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AutoJoinUsPopup;
