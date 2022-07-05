import axios from "axios";
import type { Prefecture, PopulationByYear } from "@/Types.ts";

const API_ENDPOINT: string = "https://opendata.resas-portal.go.jp";

export class RESAS {
  // how can i hide this
  private API_KEY: string = "pYWuiNRgMhLAOYRHevh3vHkDrn0opRsYMrfWu3ZO";

  public async getPrefecture() {
    let json: Prefecture[];
    await axios
      .get(`${API_ENDPOINT}/api/v1/prefectures`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "X-API-KEY": this.API_KEY,
        },
        responseType: "json",
      })
      .then(async (response) => {
        json = response.data.result;
      })
      .catch(async (error) => {
        // TODO: better error handling
        console.error(error);
      });

    for(let i = 0; i < json.length; i++) {
      json[i].selected = false;
    }
    return json;
  }

  public async getPopulation(prefecture: Prefecture) {
    let json: Population[];
    const params = new URLSearchParams({
      prefCode: String(prefecture.prefCode),
      cityCode: "-",
    }).toString();

    await axios
      .get(`${API_ENDPOINT}/api/v1/population/composition/perYear?${params}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "X-API-KEY": this.API_KEY,
        },
        responseType: "json",
      })
      .then(async (response) => {
        json = response.data.result.data[0].data as Population[];
      })
      .catch(async (error) => {
        // TODO: better error handling
        console.error(error);
      });

    return json;
  }
}
