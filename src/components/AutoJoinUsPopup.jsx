import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function AutoJoinUsPopup() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);

    if (location.pathname === "/join-us") {
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

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
            onClick={() => setIsVisible(false)}
            className="rounded-lg border border-stone-200 px-3 py-1 text-sm font-medium text-stone-600 hover:bg-stone-100"
          >
            Cancel
          </button>
        </div>

        <p className="mb-4 text-sm text-stone-600">
          Share your details and our team will connect with you.
        </p>

        <form className="grid gap-3 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-xl border border-amber-200 px-4 py-3 text-sm outline-none ring-amber-300 focus:ring"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="rounded-xl border border-amber-200 px-4 py-3 text-sm outline-none ring-amber-300 focus:ring"
          />
          <input
            type="email"
            placeholder="Email (Optional)"
            className="rounded-xl border border-amber-200 px-4 py-3 text-sm outline-none ring-amber-300 focus:ring md:col-span-2"
          />
          <div className="flex flex-wrap gap-2 md:col-span-2">
            <button
              type="submit"
              className="rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-600"
            >
              Submit
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default AutoJoinUsPopup;
