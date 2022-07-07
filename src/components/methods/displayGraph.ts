export const createOptions = (): object => {
    const options = {
        chartOptions: {
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
            plotOptions: {
                series: {
                    floor: 1960,
                    ceiling: 2045,
                },
            },
            series: [],
            accessibility: {
                enabled: false,
            },
            credits: {
                text: "出典：RESAS（地域経済分析システム）",
                href: "https://opendata.resas-portal.go.jp/"
            }
        },
    };
    
    return options;
};