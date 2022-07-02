import axios from "axios";

const API_ENDPOINT: string = "https://opendata.resas-portal.go.jp";
const api_key: string = "pYWuiNRgMhLAOYRHevh3vHkDrn0opRsYMrfWu3ZO";

export async function getPrefecture() {
    var json;
    await axios.get(`${API_ENDPOINT}/api/v1/prefectures`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "X-API-KEY": api_key,
        },
        responseType: "json",
    }).then((response) => {
        json = (response.data.result);
    }).catch((error) => {
        // TODO: better error handling
        console.error(error);
    });

    return json;
}

export async function getPopulation(prefCode: number) {
    var json;
    const params = new URLSearchParams({prefCode: String(prefCode), cityCode: "-"}).toString();
    
    await axios.get(`${API_ENDPOINT}/api/v1/population/composition/perYear?${params}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "X-API-KEY": api_key,
        },
        responseType: "json",
    }).then((response) => {
        json = (response.data.result.data[0].data);

    }).catch((error) => {
        // TODO: better error handling
        console.error(error);
    });

    return json;
}

export class RESAS {
    private api_key: string = "pYWuiNRgMhLAOYRHevh3vHkDrn0opRsYMrfWu3ZO";

    public async getPrefecture() {
        var json;
        await axios.get(`${API_ENDPOINT}/api/v1/prefectures`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "X-API-KEY": api_key,
            },
            responseType: "json",
        }).then((response) => {
            json = (response.data.result);
        }).catch((error) => {
            // TODO: better error handling
            console.error(error);
        });
    
        return json;
    }

    public async getPopulation(prefCode: number) {
        var json;
        const params = new URLSearchParams({prefCode: String(prefCode), cityCode: "-"}).toString();
        
        await axios.get(`${API_ENDPOINT}/api/v1/population/composition/perYear?${params}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "X-API-KEY": api_key,
            },
            responseType: "json",
        }).then((response) => {
            json = (response.data.result.data[0].data);
    
        }).catch((error) => {
            // TODO: better error handling
            console.error(error);
        });
    
        return json;
    }
}