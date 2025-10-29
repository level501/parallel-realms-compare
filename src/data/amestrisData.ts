import { WorldData } from "@/types/world";

export const amestrisData: WorldData = {
  id: "amestris",
  name: "Nation of Amestris",
  description: "A powerful military state built on alchemical science and industrial might, where progress comes at the cost of conflict.",
  totalPopulation: 3850000,
  theme: {
    primary: "hsl(0 0% 20%)",
    accent: "hsl(40 65% 45%)",
    gradient: "var(--gradient-amestris)"
  },
  races: [
    {
      name: "Amestrians",
      population: 2850000,
      percentage: 74,
      primaryRegions: ["Central City", "East City", "Resembool", "Rush Valley"]
    },
    {
      name: "Ishvalans",
      population: 420000,
      percentage: 10.9,
      primaryRegions: ["Ishval (Ruins)", "East City Slums"]
    },
    {
      name: "Xingese",
      population: 320000,
      percentage: 8.3,
      primaryRegions: ["East City", "Trade Districts"]
    },
    {
      name: "Drachmans",
      population: 180000,
      percentage: 4.7,
      primaryRegions: ["Northern Border", "Briggs"]
    },
    {
      name: "Cretians",
      population: 80000,
      percentage: 2.1,
      primaryRegions: ["Western Territories"]
    }
  ],
  regions: [
    {
      id: "central-city",
      name: "Central City",
      population: 1200000,
      gdpEquivalent: 28500,
      primaryRace: "Amestrian",
      coordinates: { x: 50, y: 50 },
      resources: ["Military HQ", "Alchemy Research", "Government"],
      specialization: "Military Command & Alchemical Research"
    },
    {
      id: "east-city",
      name: "East City",
      population: 680000,
      gdpEquivalent: 14200,
      primaryRace: "Amestrian",
      coordinates: { x: 75, y: 48 },
      resources: ["Trade Hub", "Manufacturing", "Cultural Exchange"],
      specialization: "International Trade & Industry"
    },
    {
      id: "resembool",
      name: "Resembool",
      population: 45000,
      gdpEquivalent: 1200,
      primaryRace: "Amestrian",
      coordinates: { x: 68, y: 62 },
      resources: ["Agriculture", "Livestock", "Rural Life"],
      specialization: "Agriculture & Small Industry"
    },
    {
      id: "briggs",
      name: "Fort Briggs",
      population: 85000,
      gdpEquivalent: 3800,
      primaryRace: "Amestrian/Drachman",
      coordinates: { x: 50, y: 15 },
      resources: ["Military Fortress", "Mountain Resources"],
      specialization: "Northern Defense & Military"
    },
    {
      id: "ishval",
      name: "Ishval Region",
      population: 280000,
      gdpEquivalent: 4500,
      primaryRace: "Ishvalan",
      coordinates: { x: 72, y: 70 },
      resources: ["Reconstruction", "Religious Sites"],
      specialization: "Rebuilding & Cultural Preservation"
    },
    {
      id: "rush-valley",
      name: "Rush Valley",
      population: 95000,
      gdpEquivalent: 5600,
      primaryRace: "Amestrian",
      coordinates: { x: 42, y: 58 },
      resources: ["Automail", "Engineering", "Innovation"],
      specialization: "Automail Engineering & Prosthetics"
    },
    {
      id: "dublith",
      name: "Dublith",
      population: 320000,
      gdpEquivalent: 8900,
      primaryRace: "Amestrian",
      coordinates: { x: 38, y: 65 },
      resources: ["Port City", "Trade", "Alchemy Schools"],
      specialization: "Maritime Trade & Education"
    },
    {
      id: "liore",
      name: "Liore",
      population: 110000,
      gdpEquivalent: 2800,
      primaryRace: "Amestrian",
      coordinates: { x: 28, y: 48 },
      resources: ["Mining", "Religious Center"],
      specialization: "Mining & Religious Tourism"
    }
  ],
  economicHistory: [
    {
      year: 1,
      gdp: 58000,
      tradeVolume: 14500,
      resourceOutput: 24000,
      technologyIndex: 68,
      militarySpending: 18500,
      alchemyResearch: 4200
    },
    {
      year: 2,
      gdp: 61200,
      tradeVolume: 15200,
      resourceOutput: 25500,
      technologyIndex: 71,
      militarySpending: 19800,
      alchemyResearch: 4500
    },
    {
      year: 3,
      gdp: 64800,
      tradeVolume: 16100,
      resourceOutput: 27200,
      technologyIndex: 74,
      militarySpending: 21200,
      alchemyResearch: 4900
    },
    {
      year: 4,
      gdp: 68500,
      tradeVolume: 17400,
      resourceOutput: 29000,
      technologyIndex: 77,
      militarySpending: 22800,
      alchemyResearch: 5400
    },
    {
      year: 5,
      gdp: 72800,
      tradeVolume: 18900,
      resourceOutput: 31200,
      technologyIndex: 80,
      militarySpending: 24500,
      alchemyResearch: 5900
    },
    {
      year: 6,
      gdp: 76500,
      tradeVolume: 19800,
      resourceOutput: 32800,
      technologyIndex: 82,
      militarySpending: 25800,
      alchemyResearch: 6200
    },
    {
      year: 7,
      gdp: 80200,
      tradeVolume: 21200,
      resourceOutput: 34500,
      technologyIndex: 84,
      militarySpending: 27200,
      alchemyResearch: 6800
    },
    {
      year: 8,
      gdp: 84800,
      tradeVolume: 22800,
      resourceOutput: 36800,
      technologyIndex: 86,
      militarySpending: 28900,
      alchemyResearch: 7400
    },
    {
      year: 9,
      gdp: 89200,
      tradeVolume: 24500,
      resourceOutput: 39200,
      technologyIndex: 88,
      militarySpending: 30800,
      alchemyResearch: 8100
    },
    {
      year: 10,
      gdp: 94500,
      tradeVolume: 26800,
      resourceOutput: 42000,
      technologyIndex: 90,
      militarySpending: 32500,
      alchemyResearch: 8900
    }
  ]
};
