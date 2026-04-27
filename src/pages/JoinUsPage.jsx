import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppFloat from "../components/WhatsAppFloat";

function JoinUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[linear-gradient(180deg,#fffaf0_0%,#fff6e3_100%)] text-stone-800">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Get Involved
        </p>
        <h1 className="mt-2 text-4xl font-bold">Join Us</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600">
          Share your details and our team will contact you soon.
        </p>

        <section className="mt-8 rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
          <form className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-xl border border-amber-200 px-4 py-3 outline-none ring-amber-300 focus:ring"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-xl border border-amber-200 px-4 py-3 outline-none ring-amber-300 focus:ring"
            />
            <input
              type="email"
              placeholder="Email (Optional)"
              className="rounded-xl border border-amber-200 px-4 py-3 outline-none ring-amber-300 focus:ring md:col-span-2"
            />
            <button
              type="submit"
              className="rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600 md:col-span-2 md:w-max"
            >
              Submit
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
