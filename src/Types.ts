export type Prefecture = {
  prefCode: number;
  prefName: string;
  selected: boolean;
};

export type PopulationByYear = {
  year: number;
  value: number;
};

export type PopulationAndYear = {
  years: number[];
  values: number[];
};