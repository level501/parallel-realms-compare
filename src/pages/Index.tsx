import { useState } from "react";
import { WorldType } from "@/types/world";
import { hyruleData } from "@/data/hyruleData";
import { amestrisData } from "@/data/amestrisData";
import WorldSelector from "@/components/WorldSelector";
import WorldDashboard from "@/components/WorldDashboard";

export default function Index() {
  const [selectedWorld, setSelectedWorld] = useState<WorldType | null>(null);

  const handleSelectWorld = (world: WorldType) => {
    setSelectedWorld(world);
  };

  const handleBack = () => {
    setSelectedWorld(null);
  };

  if (selectedWorld) {
    const worldData = selectedWorld === "hyrule" ? hyruleData : amestrisData;
    return <WorldDashboard world={worldData} onBack={handleBack} />;
  }

  return <WorldSelector onSelectWorld={handleSelectWorld} />;
}
