import axios from "axios";
import "@/Types.ts";

class RESAS {
  private API_ENDPOINT = "https://opendata.resas-portal.go.jp";
  private API_KEY = "pYWuiNRgMhLAOYRHevh3vHkDrn0opRsYMrfWu3ZO";

  public async getPrefecture() {
    let json: Prefecture[];
    await axios
      .get(`${this.API_ENDPOINT}/api/v1/prefectures`, {
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

    for (let i = 0; i < json.length; i++) {
      json[i].selected = false;
    }
    return json;
  }

  public async getPopulation(prefecture: Prefecture) {
    let json: PopulationByYear[];
    const params = new URLSearchParams({
      prefCode: String(prefecture.prefCode),
      cityCode: "-",
    }).toString();

    await axios
      .get(`${this.API_ENDPOINT}/api/v1/population/composition/perYear?${params}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "X-API-KEY": this.API_KEY,
        },
        responseType: "json",
      })
      .then(async (response) => {
        json = response.data.result.data[0].data as PopulationByYear[];
      })
      .catch(async (error) => {
        // TODO: better error handling
        console.error(error);
      });

    return json;
  }
}

export const loadPrefectures = async () => {
  const api: RESAS = new RESAS();
  const pref: Prefecture[] = await api.getPrefecture();

  return pref;
};

export const loadPopulation = async (prefecture: Prefecture) => {
  const api: RESAS = new RESAS();
  const popByYear: PopulationByYear[] = await api.getPopulation(prefecture);

  const popAndYear: PopulationAndYear = { years: [], values: []}
  for (let i = 0; i < popByYear.length; i++) {
    popAndYear.years.push(popByYear[i].year);
    popAndYear.values.push(popByYear[i].value);
  }

  return popAndYear;
};
