import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Globe } from "lucide-react";
import { WorldData } from "@/types/world";
import { Button } from "@/components/ui/button";
import RaceDemographics from "./RaceDemographics";
import EconomicTrends from "./EconomicTrends";
import RegionalMap from "./RegionalMap";

interface WorldDashboardProps {
  world: WorldData;
  onBack: () => void;
}

export default function WorldDashboard({ world, onBack }: WorldDashboardProps) {
  const isHyrule = world.id === "hyrule";

  return (
    <div className={`min-h-screen ${isHyrule ? "theme-hyrule" : "theme-amestris"}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 hover-lift"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to World Selection
          </Button>

          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                {world.name}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {world.description}
              </p>
            </div>
            
            <div className="flex gap-3">
              <div className={`px-4 py-2 rounded-lg ${
                isHyrule ? "bg-hyrule-primary/10 text-hyrule-primary" : "bg-amestris-brass/10 text-amestris-brass"
              } flex items-center gap-2`}>
                <Globe size={18} />
                <span className="font-semibold">
                  {world.regions.length} Regions
                </span>
              </div>
              <div className={`px-4 py-2 rounded-lg ${
                isHyrule ? "bg-hyrule-accent/10 text-hyrule-accent" : "bg-amestris-military/10 text-amestris-military"
              } flex items-center gap-2`}>
                <BookOpen size={18} />
                <span className="font-semibold">
                  {world.races.length} {isHyrule ? "Species" : "Groups"}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Sections */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <RaceDemographics world={world} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <EconomicTrends world={world} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <RegionalMap world={world} />
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 rounded-xl bg-muted/30 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <strong>Portfolio Project:</strong> This data visualization compares fictional universes to demonstrate 
            professional skills in data storytelling, UI/UX design, and analytical visualization.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
