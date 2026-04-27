import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppFloat from "../components/WhatsAppFloat";
import useContentJson from "../hooks/useContentJson";

function OurApproachPage() {
  const fallbackApproach = {
    title: "Our Approach",
    intro:
      "Our approach is rooted in a multidisciplinary and child-centric framework, where therapy is delivered as a coordinated effort toward holistic development.",
    points_heading: "We Emphasize",
    points: [
      "Individualized intervention plans aligned with each child's needs",
      "Ongoing assessment and data-driven progress tracking",
      "A structured, engaging, and sensory-friendly environment",
      "Strong collaboration with families to ensure continuity of care",
    ],
  };

  const approachContent = useContentJson("/content/approach.json", fallbackApproach);

  return (
    <div className="flex min-h-screen flex-col bg-[linear-gradient(180deg,#fffaf0_0%,#fff6e3_100%)] text-stone-800">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 md:px-6">
       
        <h1 className="mt-2 text-4xl font-bold">{approachContent.title}</h1>

        <section className="mt-8 rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600">{approachContent.intro}</p>
          <h2 className="mt-6 text-lg font-semibold text-stone-900">{approachContent.points_heading}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-stone-600">
            {(approachContent.points || []).map((point) => (
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

export default OurApproachPage;
