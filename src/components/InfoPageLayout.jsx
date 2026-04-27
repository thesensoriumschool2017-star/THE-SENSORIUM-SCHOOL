import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import WhatsAppFloat from "./WhatsAppFloat";

function InfoPageLayout({ title, subtitle, body }) {
  return (
    <div className="flex min-h-screen flex-col bg-[linear-gradient(180deg,#fffaf0_0%,#fff6e3_100%)] text-stone-800">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          {subtitle}
        </p>
        <h1 className="mt-2 text-4xl font-bold">{title}</h1>
        <p className="mt-4 max-w-3xl whitespace-pre-line text-sm leading-relaxed text-stone-600">
          {body}
        </p>
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
