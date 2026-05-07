import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import WhatsAppFloat from "./WhatsAppFloat";
import founderCardBgMain from "../assets/founder-card-bg-main.webp";

function InfoPageLayout({ title, subtitle, body, backgroundImage }) {
  const cardBackground = backgroundImage || founderCardBgMain;

  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-x-hidden bg-[linear-gradient(180deg,#fffaf0_0%,#fff6e3_100%)] text-stone-800">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 md:px-6">
        <section className="relative overflow-hidden rounded-3xl border border-amber-300 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(180,120,20,0.22)] md:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${cardBackground})` }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(255,248,236,0.74)_0%,rgba(255,244,230,0.68)_45%,rgba(255,239,219,0.74)_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.12)_45%,transparent_70%),radial-gradient(circle_at_78%_20%,rgba(255,255,255,0.20)_0%,transparent_52%)]"
          />
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
              {subtitle}
            </p>
            <h1 className="mt-2 text-4xl font-bold">{title}</h1>
            <p className="mt-4 max-w-4xl whitespace-pre-line text-md leading-relaxed text-stone-700">
              {body}
            </p>
          </div>
        </section>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full border border-amber-300 px-5 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default InfoPageLayout;



