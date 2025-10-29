import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { WorldData } from "@/types/world";
import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Package, Zap } from "lucide-react";

interface EconomicTrendsProps {
  world: WorldData;
}

export default function EconomicTrends({ world }: EconomicTrendsProps) {
  const isHyrule = world.id === "hyrule";
  const latestData = world.economicHistory[world.economicHistory.length - 1];

  const metrics = [
    {
      icon: DollarSign,
      label: "GDP Equivalent",
      value: latestData.gdp.toLocaleString(),
      color: isHyrule ? "text-hyrule-accent" : "text-amestris-brass"
    },
    {
      icon: Package,
      label: "Trade Volume",
      value: latestData.tradeVolume.toLocaleString(),
      color: isHyrule ? "text-hyrule-sky" : "text-amestris-steel"
    },
    {
      icon: TrendingUp,
      label: "Resource Output",
      value: latestData.resourceOutput.toLocaleString(),
      color: isHyrule ? "text-hyrule-forest" : "text-amestris-military"
    },
    {
      icon: Zap,
      label: "Tech Index",
      value: latestData.technologyIndex,
      color: isHyrule ? "text-hyrule-primary-light" : "text-amestris-brass"
    }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-6">Economic Trends (10-Year Period)</h3>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, i) => (
          <div key={i} className="p-4 rounded-lg bg-muted/50 hover-lift">
            <metric.icon className={`${metric.color} mb-2`} size={24} />
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="text-xs text-muted-foreground">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Line Chart */}
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={world.economicHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="year"
              label={{ value: "Year", position: "insideBottom", offset: -5 }}
              stroke="hsl(var(--foreground))"
            />
            <YAxis
              stroke="hsl(var(--foreground))"
              label={{ value: "Value", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="gdp"
              stroke={isHyrule ? "hsl(150 45% 35%)" : "hsl(0 0% 20%)"}
              strokeWidth={3}
              name="GDP"
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="tradeVolume"
              stroke={isHyrule ? "hsl(45 90% 55%)" : "hsl(40 65% 45%)"}
              strokeWidth={3}
              name="Trade Volume"
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="resourceOutput"
              stroke={isHyrule ? "hsl(200 70% 60%)" : "hsl(0 65% 35%)"}
              strokeWidth={3}
              name="Resource Output"
              dot={{ r: 4 }}
            />
            {isHyrule && (
              <Line
                type="monotone"
                dataKey="magicUsage"
                stroke="hsl(150 40% 55%)"
                strokeWidth={2}
                name="Magic Usage"
                strokeDasharray="5 5"
                dot={{ r: 3 }}
              />
            )}
            {!isHyrule && (
              <>
                <Line
                  type="monotone"
                  dataKey="militarySpending"
                  stroke="hsl(0 65% 35%)"
                  strokeWidth={2}
                  name="Military Spending"
                  strokeDasharray="5 5"
                  dot={{ r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="alchemyResearch"
                  stroke="hsl(210 20% 50%)"
                  strokeWidth={2}
                  name="Alchemy Research"
                  strokeDasharray="5 5"
                  dot={{ r: 3 }}
                />
              </>
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Growth Summary */}
      <div className="mt-6 p-4 rounded-lg bg-muted/30">
        <h4 className="font-semibold mb-2">10-Year Growth Summary</h4>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">GDP Growth: </span>
            <span className="font-bold">
              {((latestData.gdp / world.economicHistory[0].gdp - 1) * 100).toFixed(1)}%
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Trade Expansion: </span>
            <span className="font-bold">
              {((latestData.tradeVolume / world.economicHistory[0].tradeVolume - 1) * 100).toFixed(1)}%
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Tech Progress: </span>
            <span className="font-bold">
              +{latestData.technologyIndex - world.economicHistory[0].technologyIndex} points
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
