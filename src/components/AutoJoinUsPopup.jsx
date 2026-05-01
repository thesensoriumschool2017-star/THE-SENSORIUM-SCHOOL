import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { submitJoinUs } from "../lib/joinUs";

const SESSION_DISMISSED_KEY = "uef_joinus_popup_dismissed_session";
const SESSION_SHOWN_KEY = "uef_joinus_popup_shown_session";

function AutoJoinUsPopup() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  useEffect(() => {
    if (location.pathname === "/join-us") {
      setIsVisible(false);
      return;
    }

    const dismissed = sessionStorage.getItem(SESSION_DISMISSED_KEY) === "1";
    const alreadyShown = sessionStorage.getItem(SESSION_SHOWN_KEY) === "1";
    if (dismissed || alreadyShown) return;

    sessionStorage.setItem(SESSION_SHOWN_KEY, "1");
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const dismiss = () => {
    sessionStorage.setItem(SESSION_DISMISSED_KEY, "1");
    setIsVisible(false);
  };

  const goToJoinUs = () => {
    sessionStorage.setItem(SESSION_DISMISSED_KEY, "1");
    setIsVisible(false);
    navigate("/join-us");
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
      sessionStorage.setItem(SESSION_DISMISSED_KEY, "1");
      setTimeout(() => setIsVisible(false), 900);
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

  if (!isVisible || location.pathname === "/join-us") return null;

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/45 px-4">
      <div className="w-full max-w-lg rounded-2xl border border-amber-200 bg-[linear-gradient(150deg,#fff7ea_0%,#ffe9d6_100%)] p-6 shadow-xl">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Join Us</p>
            <h2 className="mt-1 text-2xl font-bold text-stone-900">Be Part of the Change</h2>
          </div>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-lg border border-stone-200 px-3 py-1 text-sm font-medium text-stone-600 hover:bg-stone-100"
          >
            Cancel
          </button>
        </div>

        <p className="mb-4 text-sm text-stone-600">Share your details and our team will connect with you.</p>

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
            <button
              type="button"
              onClick={goToJoinUs}
              className="rounded-xl border border-amber-300 px-5 py-2.5 text-sm font-semibold text-amber-800 transition hover:bg-amber-100"
            >
              Join Us Page
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AutoJoinUsPopup;
