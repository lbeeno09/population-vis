import { RESAS } from "@/api/resas/apiRequest";
import type { PopulationByYear, Prefecture } from "@/Types";

// TODO: put GraphVis script into here
export const createOptions = () => {
    const options = {
        chartOptions: {
            chart: {
            type: "line"
            },
            title: {
            text: "都道府県別総人口推移グラフ"
            },
            xAxis: {
                cateories: [],
                title: "年度",
            },
            yAxis: {
                title: {
                    text: "人口数"
                },
            },
            plotOptions: {
                series: {
                    floor: 1960,
                    ceiling: 2045
                }
            },
            series: [],
            accessibility: {
                enabled: false
            },
            reponsive: {
                rules: {

                }
            }
        }
    }
    return options;
}

export const getPopulationYear = async (prefecture: Prefecture) => {
    const api: RESAS = new RESAS();
    const popYear: PopulationByYear[] = await api.getPopulation(prefecture);
    const populations: number[] = [], years: number[] = [];
    
    for(let i = 0; i < popYear.length; i++) {
        years.push(popYear[i].year);
        populations.push(popYear[i].value);
    }
    
    return {year: years, population: populations};
}