import InfoPageLayout from "../components/InfoPageLayout";
import useContentJson from "../hooks/useContentJson";

function AboutUsPage() {
  const fallbackAbout = {
    title: "About Us",
   
    body: "The Sensorium Child And Development Centre, founded in 2017 by Sonika Dubey, is a centre of excellence dedicated to supporting children with diverse developmental, learning, and communication needs. Built on a foundation of compassion, clinical expertise, and individualized care, Sensorium provides a thoughtfully designed environment where children are empowered to explore their abilities and achieve meaningful growth.\n\nWe believe that every child possesses unique strengths and potential. At Sensorium, our focus lies in identifying these strengths and nurturing them through structured, evidence-based interventions. Our programs are tailored to each child's developmental profile, ensuring a personalized pathway toward independence and confidence.",
  };

  const aboutContent = useContentJson("/content/about.json", fallbackAbout);

  return (
    <InfoPageLayout
      title={aboutContent.title}
      body={aboutContent.body}
    />
  );
}

export default AboutUsPage;
