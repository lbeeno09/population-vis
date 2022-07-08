/* see
* https://api.highcharts.com/highcharts/?_ga=2.95159000.574348775.1656909826-1062473739.1656470176
* for more info */

export const createOptions = (): object => {
    // returns the settings for customizing the graph
    const options = {
        chartOptions: {
            // general settings
            chart: {
                type: "line",
                backgroundColor: "#fafafa",
                borderColor: "#230cad",
                borderWidth: 0.3
            },
            title: {
                text: "都道府県別人口推移",
                style: {
                    "fontSize": "2.5em"
                }
            },
            xAxis: {
                cateories: [],
                title: {
                    text: "年度",
                },
                labels: {
                    style: {
                        fontSize: "1em"
                    }
                }
            },
            yAxis: {
                title: {
                    text: "人口数",
                    
                },
                labels: {
                    style: {
                        fontSize: "1.5em"
                    }
                }
            },
            // settings regarding plotting
            plotOptions: {
                series: {
                    floor: 1960,
                    ceiling: 2045,
                },
            },
            // the place to store data
            series: [],
            // settings for people with disabilities
            accessibility: {
                enabled: false,
            },
            // text to show on the bottom right of the graph
            credits: {
                text: "出典：RESAS（地域経済分析システム）",
                href: "https://opendata.resas-portal.go.jp/"
            }
        },
    };
    
    return options;
};