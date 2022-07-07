import axios from "axios";
import "@/Types.ts";
import type { PopulationByYear, PopulationResponse, PrefectureResponse } from "@/Types";

class RESAS {
    private errorCodes: object = {
        "400": "Bad Request",
        "403": "Forbidden",
        "404": "Not Found",
        "429": "Too Many Requests"
    };
    private API_ENDPOINT = "https://opendata.resas-portal.go.jp";
    private API_KEY = "pYWuiNRgMhLAOYRHevh3vHkDrn0opRsYMrfWu3ZO";

    public async getPrefecture(): PrefectureResponse {
        const result: PrefectureResponse = {};
      
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
            result.statusCode = response.data.statusCode;
        })
        .catch((error) => {
            console.error(error);
            result.data = {} as Prefecture[];
            result.statusCode = "400";
        });
        
        if(result.statusCode === undefined) {
            for(let i = 0; i < result.data.length; i++) {
                result.data[i].selected = false;
            }
            result.statusCode = "200";

            return result;
        } else {
            console.error("statusCode:", result.statusCode, this.errorCodes[result.statusCode]);

            return result;
        }
    }

    public async getPopulation(prefecture: Prefecture): PopulationResponse {
        const result: PopulationResponse = {}
        let json: PopulationByYear[], responseCode: string;
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
            result.statusCode = response.data.statusCode;
        })
        .catch((error) => {
            result.data = {} as PopulationByYear[];
            result.statusCode = "400";
        });

        if(result.statusCode === undefined) {
            for(let i = 0; i < result.data.length; i++) {
                result.data[i].selected = false;
            }
    
            return result;
        } else {
            console.error("statusCode: ", result.statusCode, this.errorCodes[result.responseCode]);

            return result;
        }
    }
};

export const loadPrefectures = async (): PrefectureResponse => {
    const api: RESAS = new RESAS();
    const {data: pref, statusCode: status}: PrefectureResponse = await api.getPrefecture();

    return { data: pref, statusCode: status === "200" };
};

export const loadPopulation = async (prefecture: Prefecture): PopulationResponse => {
    const api: RESAS = new RESAS();
    const {data: popByYear, statusCode: status}: PopulationResponse = await api.getPopulation(prefecture);

    const popAndYear: PopulationAndYear = { years: [], values: []}
    for (let i = 0; i < popByYear.length; i++) {
        popAndYear.years.push(popByYear[i].year);
        popAndYear.values.push(popByYear[i].value);
    }

    return { data: popAndYear, statusCode: status === "200" } as PopulationResponse;
};
