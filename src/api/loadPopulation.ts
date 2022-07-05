import { RESAS } from "@/api/resas/apiRequest.ts";
import type { Prefecture, PopulationByYear } from "@/Types.ts";

export const loadPopulation = async (prefecture: Prefecture) => {
    const api: RESAS = new RESAS();
    const population: PopulationByYear[] = await api.getPopulation(prefecture);

    return population;
};