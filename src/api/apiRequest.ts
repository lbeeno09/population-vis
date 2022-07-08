import axios from "axios";
import type { Prefecture, PrefectureResponse, PopulationByYear, PopulationAndYear, PopulationResponse } from "@/Types.ts";

class RESAS {
    /* Class to retrieve prefectures and population of prefectures
    Methods:
        getPrefecture: () => PrefectureResponse
            returns:
                1. array of objects with:
                    a. prefecture code as prefCode: number
                    b. prefecture name as prefName: string
                    c. flag if it is selected: boolean
                2 status code as status: string | undefined | boolean
        getPopulation: Prefecture => Population
            returns an:
                1. (array of) object(s) with:
                    a. a year and a value as an object as each element
                    or
                    b. object with arrays of years and values of each year
                2. status code as status: string
    Attributes:
        errorCodes: object
            pairs of status code and what they mean
        API_ENDPOINT: string
            url of the API
        API_KEY: string
            access key for getting the API data
            access key will be stored in .env.local file
    */
    private errorCodes: object = {
        "400": "Bad Request",
        "403": "Forbidden",
        "404": "Not Found",
        "429": "Too Many Requests"
    };
    private  API_ENDPOINT = "https://opendata.resas-portal.go.jp";
    private API_KEY = import.meta.env.VITE_API_KEY;

    public async getPrefecture(): Promise<PrefectureResponse> {
        const result: PrefectureResponse = {
            data: [] as Prefecture[],
            status: ""
        };
      
        await axios.get(`${this.API_ENDPOINT}/api/v1/prefectures`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "X-API-KEY": this.API_KEY,
            },
            responseType: "json"
        })
        .then(async (response) => {
            result.data = response.data.result as Prefecture[];
            result.status = response.data.statusCode as string;
        })
        .catch((error) => {
            console.error(error);
            result.data = [] as Prefecture[];
            result.status = "400";
        });
        
        if(result.status === undefined) {
            for(let i = 0; i < result.data.length; i++) {
                result.data[i].selected = false;
            }
            result.status = "200";
        } else {
            console.error("statusCode:", result.status, this.errorCodes[result.status as string]);
        }

        return result;
    }

    public async getPopulation(prefecture: Prefecture): Promise<PopulationResponse> {
        const result: PopulationResponse = {
            data: [] as PopulationByYear[],
            status: ""
        };
        const params = new URLSearchParams({
            prefCode: String(prefecture.prefCode),
            cityCode: "-",
        }).toString();

        await axios.get(`${this.API_ENDPOINT}/api/v1/population/composition/perYear?${params}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "X-API-KEY": this.API_KEY,
            },
            responseType: "json"
        })
        .then(async (response) => {
            result.data = response.data.result.data[0].data as PopulationByYear[];
            result.status = response.data.statusCode as string;
        })
        .catch((error) => {
            console.error(error);
            result.data = [] as PopulationByYear[];
            result.status = "400";
        });

        if(result.status === undefined) {
            for(let i = 0; i < result.data.length; i++) {
                result.data[i].selected = false;
            }
        } else {
            console.error("statusCode: ", result.status, this.errorCodes[result.status]);
        }

        return result;
    }
};

export const loadPrefectures = async (): Promise<PrefectureResponse> => {
    // acquire prefecture data and the flag if we properly got it
    const api: RESAS = new RESAS();
    const {data: pref, status: statusCode}: PrefectureResponse = await api.getPrefecture();

    return { data: pref, status: (statusCode === "200") as boolean };
};

export const loadPopulation = async (prefecture: Prefecture): Promise<PopulationResponse> => {
    // acuire population data of a specified prefecture and the flag if we properly got it
    const api: RESAS = new RESAS();
    const {data: popByYear, status: statusCode}: PopulationResponse = await api.getPopulation(prefecture);

    const popAndYear: PopulationAndYear = {years: [], values: []}
    for (let i = 0; i < popByYear.length; i++) {
        popAndYear.years.push(popByYear[i].year);
        popAndYear.values.push(popByYear[i].value);
    }

    return { data: popAndYear, status: (statusCode === "200") as boolean };
};
