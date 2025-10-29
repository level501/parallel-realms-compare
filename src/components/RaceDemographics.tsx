import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { WorldData } from "@/types/world";
import { Card } from "@/components/ui/card";

interface RaceDemographicsProps {
  world: WorldData;
}

const HYRULE_COLORS = [
  "hsl(150 45% 35%)",
  "hsl(150 40% 55%)",
  "hsl(45 90% 55%)",
  "hsl(200 70% 60%)",
  "hsl(135 50% 25%)",
  "hsl(40 35% 70%)",
  "hsl(150 30% 45%)"
];

const AMESTRIS_COLORS = [
  "hsl(0 0% 20%)",
  "hsl(40 65% 45%)",
  "hsl(0 65% 35%)",
  "hsl(210 20% 50%)",
  "hsl(210 35% 15%)"
];

export default function RaceDemographics({ world }: RaceDemographicsProps) {
  const colors = world.id === "hyrule" ? HYRULE_COLORS : AMESTRIS_COLORS;
  
  const chartData = world.races.map((race) => ({
    name: race.name,
    value: race.population,
    percentage: race.percentage
  }));

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-6">
        {world.id === "hyrule" ? "Species" : "Ethnic"} Distribution
      </h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name} (${percentage}%)`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => value.toLocaleString()}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Race Details */}
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground mb-4">
            Total Population: <span className="font-bold text-foreground">
              {world.totalPopulation.toLocaleString()}
            </span>
          </div>
          
          {world.races.map((race, index) => (
            <div
              key={race.name}
              className="p-4 rounded-lg bg-muted/50 hover-lift"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  />
                  <span className="font-semibold text-lg">{race.name}</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {race.percentage}%
                </span>
              </div>
              <div className="text-sm text-muted-foreground ml-7">
                Population: {race.population.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground ml-7 mt-1">
                Primary regions: {race.primaryRegions.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
