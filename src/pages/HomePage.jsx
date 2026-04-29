import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppFloat from "../components/WhatsAppFloat";
import useContentJson from "../hooks/useContentJson";
import mainImage from "../assets/main.jpeg";
import bannerImage from "../assets/banner.png";

function HomePage() {
  const fallbackHomeContent = {
    hero_title: "From the Founder's Desk",
    intro_paragraphs: [
      "Sonika Dubey is aspiring to be a game changer in Education and well-being sector of Children with Special needs in India. Bringing women's issues and avenues to empower them and helping to nurture, creating an environment of Empowered Women.",
      "She is a Postgraduate in English Language as well as Mass Communication from Kanpur University and Makhnalal University of Journalism, Bhopal. M.P. respectively. Sonika is a recipient of many awards for her contribution in Social Sector.",
      "She is working on her first book focussing on Avenues for Empowering Society. By creating a platform like Universal Empowerment Foundation, Sonika is trying to change the working populace of India and by putting women's voices on the policy tables of governance.",
      "Sonika is currently building a new initiative that puts Children with special needs in sustainable and empowered position and help them lead their life independently and contribute to the nation building processes.",
    ],
    meet_title: "Meet Sonika Dubey",
    meet_paragraph:
      "With dual postgraduate degrees in English Language (Kanpur University) and Mass Communication (Makhanlal Chaturvedi University, Bhopal), Sonika brings both insight and compassion to the social-sector landscape.",
    impact_title: "Leadership & Impact",
    impact_points: [
      "Founded Universal Empowerment Foundation, her platform for empowering women's voices and influencing policy at the governance table.",
      "Championing inclusion for children with special needs, Sonika is building an initiative that positions them for independence and contribution to nation-building.",
      "Recipient of multiple social-sector awards in recognition of her tireless work in education, well-being and women's empowerment.",
      "Currently authoring her first book: Avenues for Empowering Society, a book set to explore pathways to inclusive growth and transformation.",
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
          <div className="overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm">
            <img
              src={bannerImage}
              alt="Foundation banner"
              className="w-full bg-white object-contain"
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-20 md:px-6">
          <div className="grid gap-6 rounded-3xl border border-amber-100 bg-white p-6 shadow-sm md:grid-cols-12 md:p-8">
            <div className="md:col-span-8 space-y-4">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                {homeContent.hero_title}
              </h2>

              {homeContent.intro_paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-stone-700">
                  {paragraph}
                </p>
              ))}

              <h2 className="pt-2 text-2xl font-bold">{homeContent.meet_title}</h2>
              <p className="text-sm leading-relaxed text-stone-700">
                {homeContent.meet_paragraph}
              </p>

              <h3 className="pt-2 text-lg font-semibold text-stone-900">{homeContent.impact_title}</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed text-stone-700">
                {homeContent.impact_points?.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <p className="text-sm leading-relaxed text-stone-700">
                {homeContent.closing_paragraph}
              </p>
              <p className="text-sm font-medium text-amber-800">
                {homeContent.follow_line}
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
