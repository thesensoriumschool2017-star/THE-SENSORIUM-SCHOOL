import InfoPageLayout from "../components/InfoPageLayout";
import useContentJson from "../hooks/useContentJson";

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
    />
  );
}

export default MissionPage;
