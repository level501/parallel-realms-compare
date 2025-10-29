import { motion } from "framer-motion";
import { WorldData, Region } from "@/types/world";
import { Card } from "@/components/ui/card";
import { MapPin, Users, DollarSign } from "lucide-react";
import { useState } from "react";

interface RegionalMapProps {
  world: WorldData;
}

export default function RegionalMap({ world }: RegionalMapProps) {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const isHyrule = world.id === "hyrule";

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-6">Regional Overview</h3>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Interactive Map */}
        <div className="lg:col-span-2 relative bg-muted/30 rounded-xl p-8 h-[500px]">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary to-accent rounded-xl" />
          
          {/* Map Regions */}
          <div className="relative h-full">
            {world.regions.map((region) => (
              <motion.div
                key={region.id}
                className="absolute cursor-pointer"
                style={{
                  left: `${region.coordinates.x}%`,
                  top: `${region.coordinates.y}%`,
                  transform: "translate(-50%, -50%)"
                }}
                whileHover={{ scale: 1.2 }}
                onClick={() => setSelectedRegion(region)}
              >
                <div className={`relative group ${
                  selectedRegion?.id === region.id ? "animate-pulse-glow" : ""
                }`}>
                  <MapPin
                    size={32}
                    className={`${
                      isHyrule ? "text-hyrule-primary" : "text-amestris-brass"
                    } drop-shadow-lg transition-colors ${
                      selectedRegion?.id === region.id ? "fill-current" : ""
                    }`}
                  />
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap 
                    bg-card px-2 py-1 rounded shadow-lg text-xs font-medium
                    opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {region.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
            <div className="text-xs font-semibold mb-2">Click regions to explore</div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin size={16} className={isHyrule ? "text-hyrule-primary" : "text-amestris-brass"} />
              <span>{world.regions.length} Regions</span>
            </div>
          </div>
        </div>

        {/* Region Details */}
        <div className="space-y-4">
          {selectedRegion ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <h4 className="text-xl font-bold mb-3">{selectedRegion.name}</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Users size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Population</div>
                      <div className="font-semibold">{selectedRegion.population.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <DollarSign size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">GDP Equivalent</div>
                      <div className="font-semibold">{selectedRegion.gdpEquivalent.toLocaleString()}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Primary Race</div>
                    <div className="font-semibold">{selectedRegion.primaryRace}</div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Specialization</div>
                    <div className="text-sm">{selectedRegion.specialization}</div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Key Resources</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedRegion.resources.map((resource) => (
                        <span
                          key={resource}
                          className="px-2 py-1 bg-muted text-xs rounded-full"
                        >
                          {resource}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex items-center justify-center text-center p-8">
              <div>
                <MapPin size={48} className="mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">
                  Select a region on the map to view detailed information
                </p>
              </div>
            </div>
          )}

          {/* Region List */}
          <div className="space-y-2 max-h-[300px] overflow-y-auto">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              All Regions
            </div>
            {world.regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                  selectedRegion?.id === region.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 hover:bg-muted"
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
