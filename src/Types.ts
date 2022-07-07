export type Prefecture = {
    prefCode: number;
    prefName: string;
    selected: boolean;
};

export type PrefectureResponse = {
    data: Prefecture[];
    statusCode: string | undefined | boolean;
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
    statusCode: string;
};