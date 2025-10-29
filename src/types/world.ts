export type WorldType = "hyrule" | "amestris";

export interface Race {
  name: string;
  population: number;
  percentage: number;
  primaryRegions: string[];
}

export interface Region {
  id: string;
  name: string;
  population: number;
  gdpEquivalent: number;
  primaryRace: string;
  coordinates: { x: number; y: number };
  resources: string[];
  specialization: string;
}

export interface EconomicData {
  year: number;
  gdp: number;
  tradeVolume: number;
  resourceOutput: number;
  technologyIndex: number;
  militarySpending?: number;
  alchemyResearch?: number;
  magicUsage?: number;
}

export interface WorldData {
  id: WorldType;
  name: string;
  description: string;
  totalPopulation: number;
  races: Race[];
  regions: Region[];
  economicHistory: EconomicData[];
  theme: {
    primary: string;
    accent: string;
    gradient: string;
  };
}
