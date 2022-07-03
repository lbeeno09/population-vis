export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PrefectureChecker = Prefecture & {
  selected: boolean;
};

export type PopulationByYear = {
  year: number;
  value: number;
};

export type PopulationOfPrefecture = Prefecture & {
  population: PopulationByYear[];
};
