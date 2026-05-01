import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppFloat from "../components/WhatsAppFloat";
import useContentJson from "../hooks/useContentJson";
import mainImage from "../assets/main.jpeg";
import bannerImage from "../assets/banner.png";

function HomePage() {
  const fallbackHomeContent = {

    impact_title: "Leadership & Impact",
    impact_points: [
      "Founder of the Universal Empowerment Foundation, focused on advancing women’s representation and contributing to policy engagement at the governance level.",
"Leads inclusive initiatives for children with special needs, enabling independence, capability-building, and meaningful societal participation.",
"Provides structured counselling and guidance for parents and children to support emotional well-being and holistic development.",
"Sonika is committed to building inclusive systems where equity, dignity, and opportunity form the foundation of . ",
    ],
    closing_paragraph:
      "At her core, Sonika stands for a society where every child, every woman, every voice is valued, and where inclusion is not an after-thought but the very foundation of progress. Her journey is one of heart, purpose and relentless pursuit of a more inclusive Bharat.",
    follow_line: "Follow her journey to explore stories of empowerment, education, impact and change.",
    founder_image:
      "",
   
  };

  const homeContent = useContentJson("/content/home.json", fallbackHomeContent);

  return (
    <div
      id="home"
      className="flex min-h-screen flex-col bg-[linear-gradient(180deg,#fffaf0_0%,#fff4db_45%,#fffdf7_100%)] text-stone-800"
    >
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-4 pb-8 pt-10 md:px-6">
          <div className="group overflow-hidden rounded-3xl border border-amber-200 bg-[linear-gradient(145deg,#fff7e8_0%,#ffe9d1_100%)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(180,120,20,0.22)]">
            <img
              src={bannerImage}
              alt="Foundation banner"
              className="w-full bg-[#fff4df] object-contain transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-20 md:px-6">
          <div className="grid gap-6 rounded-3xl border border-amber-200 bg-[linear-gradient(150deg,#fff7e9_0%,#ffe8d3_100%)] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(180,120,20,0.22)] md:grid-cols-12 md:p-8">
            <div className="md:col-span-8 space-y-4">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                {homeContent.hero_title}
              </h2>

              {homeContent.intro_paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-md leading-relaxed text-stone-700">
                  {paragraph}
                </p>
              ))}

              <h3 className="pt-2 text-lg font-semibold text-stone-900">{homeContent.impact_title}</h3>
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
              <div className="overflow-hidden rounded-2xl border border-amber-100 bg-amber-50">
                <img
                  src={mainImage}
                  alt="Founder profile placeholder"
                  className="h-90 w-full object-cover"
                />
                
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
