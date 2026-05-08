import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppFloat from "../components/WhatsAppFloat";
import useCmsContent from "../hooks/useCmsContent";
import mainImage from "../assets/main.jpeg";
import bannerImage from "../assets/banner.webp";
import founderCardBgMain from "../assets/founder-card-bg-main.webp";

function HomePage() {
  const [isPageReady, setIsPageReady] = useState(false);
  const founderDeskParagraphs = [
    "Since 2017, the organization has been committed to creating meaningful and sustainable impact within the social and developmental sector. With experience in Parent and Child Coaching and Empowering Minds with Empathy at THE SENSORIUM, the approach is centered on fostering supportive, inclusive, and emotionally enriching environments for individuals and families.",
    "Through continued engagement as a Social Worker with Universal Empowerment Foundation and as a Pre-Vocational Trainer, the focus remains on empowering children - particularly those with special needs by equipping them with essential life skills and vocational competencies that enable independence and confidence.",
    "The core mission is to promote inclusivity, champion empathy-driven practices, and create sustainable opportunities that uplift both children and women. By strengthening community support systems and encouraging holistic development, the vision is to contribute meaningfully toward building a more inclusive, equitable, and empowered society.",
  ];
  const fallbackHomeContent = {
    hero_title: "From the Founder's Desk",
    intro_paragraphs: founderDeskParagraphs,
    impact_title: "Leadership and Impact",
    impact_points: [
      "Founder of The Sensorium School, focused on advancing women's representation and contributing to policy engagement at the governance level.",
      "Leads inclusive initiatives for children with special needs, enabling independence, capability-building, and meaningful societal participation.",
      "Provides structured counselling and guidance for parents and children to support emotional well-being and holistic development.",
      "Builds inclusive systems where equity, dignity, and opportunity form the foundation of progress.",
    ],
    closing_paragraph:
      "At her core, Sonika stands for a society where every child, every woman, every voice is valued, and where inclusion is not an after-thought but the very foundation of progress. Her journey is one of heart, purpose and relentless pursuit of a more inclusive Bharat.",
    follow_line: "Follow her journey to explore stories of empowerment, education, impact and change.",
    founder_image:
      "",
   
  };

  const { content: homeContent } = useCmsContent({
    query:
      '*[_type == "homePage"][0]{hero_title, intro_paragraphs, impact_title, impact_points, closing_paragraph, follow_line, meet_title, meet_paragraph, founder_image_note, "founder_image": founder_image.asset->url}',
    fallbackPath: "/content/home.json",
    fallbackData: fallbackHomeContent,
    normalize: (data) => ({
      ...fallbackHomeContent,
      ...(data || {}),
      // Keep founder intro fixed to the exact approved text.
      intro_paragraphs: founderDeskParagraphs,
    }),
  });

  useEffect(() => {
    let active = true;

    const preloadImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
      });

    Promise.race([
      Promise.all([preloadImage(bannerImage), preloadImage(mainImage)]),
      new Promise((resolve) => setTimeout(resolve, 2500)),
    ]).then(() => {
      if (active) setIsPageReady(true);
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!isPageReady) return;
    window.dispatchEvent(new Event("sensorium:home-ready"));
  }, [isPageReady]);

  if (!isPageReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#fffaf0_0%,#fff4db_45%,#fffdf7_100%)] text-stone-800">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">The Sensorium School</p>
          <h2 className="mt-3 text-2xl font-bold">Loading Experience...</h2>
          <div className="mx-auto mt-5 h-2 w-44 overflow-x-hidden rounded-full bg-amber-100">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-amber-500" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="home"
      className="home-bg relative isolate flex min-h-screen flex-col overflow-x-hidden bg-[linear-gradient(180deg,#fffaf0_0%,#fff4db_45%,#fffdf7_100%)] text-stone-800"
    >
      <Navbar />

      <main className="relative z-10 flex-1">
        <section className="mx-auto w-full max-w-6xl px-4 pb-8 pt-10 md:px-6">
          <div className="group overflow-hidden rounded-3xl border border-amber-300 bg-[#fff7e8] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(180,120,20,0.22)]">
            <img
              src={bannerImage}
              alt="Foundation banner"
              className="block w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-20 md:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-[#f0c46b] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(180,120,20,0.22)] md:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${founderCardBgMain})` }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(255,248,236,0.72)_0%,rgba(255,244,230,0.66)_45%,rgba(255,239,219,0.72)_100%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.12)_45%,transparent_70%),radial-gradient(circle_at_78%_20%,rgba(255,255,255,0.20)_0%,transparent_52%)]"
            />
            <div className="relative z-10 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-8 space-y-4">
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">
                {homeContent.hero_title}
              </h1>

              {founderDeskParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-md leading-relaxed text-stone-700">
                  {paragraph}
                </p>
              ))}

              <h2 className="pt-2 text-lg font-semibold text-stone-900">{homeContent.impact_title}</h2>
              <ul className="list-disc space-y-2 pl-6 text-md leading-relaxed text-stone-700">
                {homeContent.impact_points?.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <p className="text-md leading-relaxed text-stone-700">
                {homeContent.closing_paragraph}
              </p>
            </div>

            <div className="md:col-span-4">
              <div className="overflow-x-hidden rounded-2xl border border-amber-100 bg-amber-50">
                <img
                  src={homeContent.founder_image || mainImage}
                  alt="Founder profile placeholder"
                  className="h-[340px] w-full object-cover md:h-[420px]"
                  onError={(e) => {
                    if (e.currentTarget.src !== mainImage) {
                      e.currentTarget.src = mainImage;
                    }
                  }}
                />
                
              </div>
            </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default HomePage;





