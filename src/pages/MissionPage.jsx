import InfoPageLayout from "../components/InfoPageLayout";
import useContentJson from "../hooks/useContentJson";
import missionCardBg from "../assets/mission-card-bg.png";

function MissionPage() {
  const fallbackMission = {
    title: "Our Mission",
    body: "",
  };

  const missionContent = useContentJson("/content/mission.json", fallbackMission);

  return (
    <InfoPageLayout
      title={missionContent.title}
     
      body={missionContent.body}
      backgroundImage={missionCardBg}
    />
  );
}

export default MissionPage;
