import axios from "axios";
import type { Prefecture, PopulationByYear } from "../Types.ts";

const API_ENDPOINT = "https://opendata.resas-portal.go.jp";

type PrefectureResponse = {
  result: Prefecture[];
};

type PopulationResponse = {
  result: PopulationByYear[];
};

export class RESAS {
  private API_KEY = "pYWuiNRgMhLAOYRHevh3vHkDrn0opRsYMrfWu3ZO";

  public async getPrefecture() {
    let json;
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
        json = response.data.result as PrefectureResponse;
      })
      .catch(async (error) => {
        // TODO: better error handling
        console.error(error);
      });

    return json;
  }

  public async getPopulation(prefCode: number) {
    let json;
    const params = new URLSearchParams({
      prefCode: String(prefCode),
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
        json = response.data.result.data[0].data as PopulationResponse;
      })
      .catch(async (error) => {
        // TODO: better error handling
        console.error(error);
      });

    return json;
  }
}
