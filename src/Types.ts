export type Prefecture = {
    prefCode: number;
    prefName: string;
    selected: boolean;
};

export type PrefectureResponse = {
    data: Prefecture[];
    status: string | undefined | boolean;
};

export type PopulationByYear = {
    year: number;
    value: number;
};

export type PopulationAndYear = {
    years: number[];
    values: number[];
};

export type PopulationResponse = {
    data: PopulationByYear[] | PopulationAndYear;
    status: string | boolean;
};