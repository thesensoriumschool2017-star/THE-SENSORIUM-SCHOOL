import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { useState } from "react";
import { submitJoinUs } from "../lib/joinUs";

function JoinUsPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });

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

  return (
    <div className="flex min-h-screen flex-col bg-[linear-gradient(180deg,#fffaf0_0%,#fff6e3_100%)] text-stone-800">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Get Involved
        </p>
        <h1 className="mt-2 text-4xl font-bold">Join Us</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-600">
          Share your details and our team will contact you soon.
        </p>

        <section className="mt-8 rounded-3xl border border-amber-200 bg-[linear-gradient(145deg,#fff8eb_0%,#ffe8d4_100%)] p-8 shadow-sm">
          <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              className="rounded-xl border border-amber-200 px-4 py-3 outline-none ring-amber-300 focus:ring"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              className="rounded-xl border border-amber-200 px-4 py-3 outline-none ring-amber-300 focus:ring"
            />
            <input
              type="email"
              placeholder="Email (Optional)"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              className="rounded-xl border border-amber-200 px-4 py-3 outline-none ring-amber-300 focus:ring md:col-span-2"
            />

            {status.state !== "idle" ? (
              <p
                className={
                  "md:col-span-2 text-sm " +
                  (status.state === "success" ? "text-green-700" : status.state === "error" ? "text-red-700" : "text-stone-600")
                }
              >
                {status.message || (status.state === "submitting" ? "Submitting..." : "")}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status.state === "submitting"}
              className="rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2 md:w-max"
            >
              {status.state === "submitting" ? "Submitting..." : "Submit"}
            </button>
          </form>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default JoinUsPage;
