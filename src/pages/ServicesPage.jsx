import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import WhatsAppFloat from "../components/WhatsAppFloat";
import useCmsContent from "../hooks/useCmsContent";

function ServicesPage() {
  const fallbackServicesPage = {
    title: "Our Services",
    intro: "We offer an integrated range of therapeutic and educational services, including:",
  };

  const { content: pageContent } = useCmsContent({
    query: '*[_type == "servicesPage"] | order(_updatedAt desc)[0]{title, subtitle, intro}',
    fallbackPath: "/content/services-page.json",
    fallbackData: fallbackServicesPage,
    normalize: (data) => {
      const title = String(data?.title || "").trim();
      const intro = String(data?.intro || "").trim();
      return {
        ...fallbackServicesPage,
        ...(data || {}),
        title: title || fallbackServicesPage.title,
        intro: intro || fallbackServicesPage.intro,
      };
    },
  });

  return (
    <div className="flex min-h-screen flex-col bg-[linear-gradient(180deg,#fffaf0_0%,#fff6e3_100%)] text-stone-800">
      <Navbar />
      <main className="flex-1 py-14">
        <section className="mx-auto w-full max-w-6xl px-4 pb-10 md:px-6">
        
          <h1 className="mt-2 text-4xl font-bold">{pageContent.title}</h1>
          <p className="mt-3 max-w-2xl  text-md leading-relaxed text-stone-600">{pageContent.intro}</p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-full border border-amber-300 px-5 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
          >
            Back to Home
          </Link>
        </section>

        <ServicesSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default ServicesPage;
