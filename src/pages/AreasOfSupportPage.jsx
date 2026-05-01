import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppFloat from "../components/WhatsAppFloat";
import useContentJson from "../hooks/useContentJson";

function AreasOfSupportPage() {
  const fallbackAreas = {
    title: "Areas of Support",
   
    section_heading: "Areas of Support",
    intro: "We work with children experiencing:",
    points: [
      "Speech and language delays",
      "Learning difficulties and academic challenges",
      "Autism Spectrum Disorder (ASD)",
      "Attention Deficit Hyperactivity Disorder (ADHD)",
      "Global developmental delays",
    ],
  };

  const areasContent = useContentJson("/content/areas.json", fallbackAreas);

  return (
    <div className="flex min-h-screen flex-col bg-[linear-gradient(180deg,#fffaf0_0%,#fff6e3_100%)] text-stone-800">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 md:px-6">
      
        <h1 className="mt-2 text-4xl font-bold">{areasContent.title}</h1>

        <section className="mt-8 rounded-3xl border border-amber-200 bg-[linear-gradient(145deg,#fff8ea_0%,#ffe8d6_100%)] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(180,120,20,0.22)]">
          <h2 className="text-2xl font-semibold">{areasContent.section_heading}</h2>
          <p className="mt-3 max-w-3xl text-md leading-relaxed text-stone-600">{areasContent.intro}</p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-md leading-relaxed text-stone-600">
            {(areasContent.points || []).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
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

export default AreasOfSupportPage;
