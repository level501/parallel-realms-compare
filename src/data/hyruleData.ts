import { WorldData } from "@/types/world";

export const hyruleData: WorldData = {
  id: "hyrule",
  name: "Kingdom of Hyrule",
  description: "A magical realm blessed by the goddesses, where diverse races coexist in harmony under the Triforce's protection.",
  totalPopulation: 2450000,
  theme: {
    primary: "hsl(150 45% 35%)",
    accent: "hsl(45 90% 55%)",
    gradient: "var(--gradient-hyrule)"
  },
  races: [
    {
      name: "Hylians",
      population: 1200000,
      percentage: 49,
      primaryRegions: ["Hyrule Castle Town", "Hateno Village", "Kakariko Village"]
    },
    {
      name: "Gorons",
      population: 350000,
      percentage: 14.3,
      primaryRegions: ["Death Mountain", "Goron City"]
    },
    {
      name: "Zoras",
      population: 420000,
      percentage: 17.1,
      primaryRegions: ["Zora's Domain", "Lanayru Region"]
    },
    {
      name: "Gerudo",
      population: 180000,
      percentage: 7.3,
      primaryRegions: ["Gerudo Town", "Gerudo Desert"]
    },
    {
      name: "Rito",
      population: 220000,
      percentage: 9,
      primaryRegions: ["Rito Village", "Tabantha Region"]
    },
    {
      name: "Sheikah",
      population: 60000,
      percentage: 2.4,
      primaryRegions: ["Kakariko Village"]
    },
    {
      name: "Kokiri",
      population: 20000,
      percentage: 0.8,
      primaryRegions: ["Kokiri Forest"]
    }
  ],
  regions: [
    {
      id: "castle-town",
      name: "Hyrule Castle Town",
      population: 450000,
      gdpEquivalent: 12500,
      primaryRace: "Hylian",
      coordinates: { x: 50, y: 45 },
      resources: ["Rupees", "Agriculture", "Trade Hub"],
      specialization: "Commerce & Governance"
    },
    {
      id: "kakariko",
      name: "Kakariko Village",
      population: 85000,
      gdpEquivalent: 2200,
      primaryRace: "Hylian/Sheikah",
      coordinates: { x: 65, y: 38 },
      resources: ["Ancient Tech", "Herbs", "Crafts"],
      specialization: "Research & Tradition"
    },
    {
      id: "goron-city",
      name: "Goron City",
      population: 280000,
      gdpEquivalent: 8900,
      primaryRace: "Goron",
      coordinates: { x: 72, y: 25 },
      resources: ["Ore", "Gems", "Metalwork"],
      specialization: "Mining & Smithing"
    },
    {
      id: "zoras-domain",
      name: "Zora's Domain",
      population: 350000,
      gdpEquivalent: 7800,
      primaryRace: "Zora",
      coordinates: { x: 78, y: 52 },
      resources: ["Fish", "Pearls", "Water Magic"],
      specialization: "Aquaculture & Diplomacy"
    },
    {
      id: "rito-village",
      name: "Rito Village",
      population: 180000,
      gdpEquivalent: 4500,
      primaryRace: "Rito",
      coordinates: { x: 25, y: 30 },
      resources: ["Flight Mastery", "Archery", "Trade Routes"],
      specialization: "Aerial Trade & Defense"
    },
    {
      id: "gerudo-town",
      name: "Gerudo Town",
      population: 140000,
      gdpEquivalent: 5200,
      primaryRace: "Gerudo",
      coordinates: { x: 18, y: 72 },
      resources: ["Precious Stones", "Textiles", "Desert Goods"],
      specialization: "Jewelry & Warrior Training"
    },
    {
      id: "hateno",
      name: "Hateno Village",
      population: 120000,
      gdpEquivalent: 3100,
      primaryRace: "Hylian",
      coordinates: { x: 82, y: 65 },
      resources: ["Agriculture", "Livestock", "Innovation"],
      specialization: "Farming & Ancient Tech Research"
    },
    {
      id: "kokiri-forest",
      name: "Kokiri Forest",
      population: 18000,
      gdpEquivalent: 450,
      primaryRace: "Kokiri",
      coordinates: { x: 42, y: 58 },
      resources: ["Forest Magic", "Fairy Fountains"],
      specialization: "Natural Magic & Forest Protection"
    }
  ],
  economicHistory: [
    {
      year: 1,
      gdp: 32000,
      tradeVolume: 8500,
      resourceOutput: 15000,
      technologyIndex: 45,
      magicUsage: 62
    },
    {
      year: 2,
      gdp: 34200,
      tradeVolume: 9100,
      resourceOutput: 15800,
      technologyIndex: 48,
      magicUsage: 64
    },
    {
      year: 3,
      gdp: 35800,
      tradeVolume: 9400,
      resourceOutput: 16200,
      technologyIndex: 51,
      magicUsage: 65
    },
    {
      year: 4,
      gdp: 38500,
      tradeVolume: 10200,
      resourceOutput: 17500,
      technologyIndex: 55,
      magicUsage: 67
    },
    {
      year: 5,
      gdp: 41200,
      tradeVolume: 11800,
      resourceOutput: 18900,
      technologyIndex: 58,
      magicUsage: 70
    },
    {
      year: 6,
      gdp: 43800,
      tradeVolume: 12500,
      resourceOutput: 19800,
      technologyIndex: 62,
      magicUsage: 72
    },
    {
      year: 7,
      gdp: 46500,
      tradeVolume: 13200,
      resourceOutput: 21000,
      technologyIndex: 65,
      magicUsage: 74
    },
    {
      year: 8,
      gdp: 48900,
      tradeVolume: 14100,
      resourceOutput: 22500,
      technologyIndex: 68,
      magicUsage: 76
    },
    {
      year: 9,
      gdp: 51800,
      tradeVolume: 15400,
      resourceOutput: 24200,
      technologyIndex: 72,
      magicUsage: 78
    },
    {
      year: 10,
      gdp: 55200,
      tradeVolume: 16800,
      resourceOutput: 26000,
      technologyIndex: 75,
      magicUsage: 80
    }
  ]
};
