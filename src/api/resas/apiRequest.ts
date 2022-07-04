import axios from "axios";
import type { Prefecture, PrefectureChecker, PopulationByYear } from "@/Types.ts";
import type {  } from "@/Types";

const API_ENDPOINT = "https://opendata.resas-portal.go.jp";

type PrefectureResponse = {
  result: Prefecture[];
};

type PrefectureCheckerResponse = {
  result: PrefectureChecker[];
}

type PopulationResponse = {
  result: PopulationByYear[];
};

export class RESAS {
  private API_KEY = "pYWuiNRgMhLAOYRHevh3vHkDrn0opRsYMrfWu3ZO";

  public async getPrefecture(needsChecker?: boolean=false) {
    let json: PrefectureResponse | PrefectureCheckerResponse;
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

    if(needsChecker) {
      for(let i = 0; i < json.length; i++) {
            json[i].selected = false;
      }
      return json;
    } else {
      return json;
    }
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
