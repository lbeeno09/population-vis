export type Prefecture = {
  prefCode: number;
  prefName: string;
  selected: boolean;
};

export type PopulationByYear = {
  year: number;
  value: number;
};

export type Dates = {
  year: number
};

export type PopulationOfPrefecture = {
  prefName: string
  value: number[];
};
