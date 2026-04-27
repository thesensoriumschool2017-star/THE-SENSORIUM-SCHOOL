import InfoPageLayout from "../components/InfoPageLayout";
import useContentJson from "../hooks/useContentJson";

function MissionPage() {
  const fallbackMission = {
    title: "Our Mission",
    body: "Our mission is to equip children with the essential skills they need to lead more independent, confident, and fulfilling lives, while supporting families throughout their developmental journey.",
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
