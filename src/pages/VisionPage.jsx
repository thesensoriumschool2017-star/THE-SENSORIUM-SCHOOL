import InfoPageLayout from "../components/InfoPageLayout";
import useContentJson from "../hooks/useContentJson";

function VisionPage() {
  const fallbackVision = {
    title: "Our Vision",
    body: "Our vision is to be a trusted and transformative space where every child is valued, supported, and given the opportunity to thrive beyond limitations.",
  };

  const visionContent = useContentJson("/content/vision.json", fallbackVision);

  return (
    <InfoPageLayout
      title={visionContent.title}
     
      body={visionContent.body}
    />
  );
}

export default VisionPage;
