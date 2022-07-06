export const createOptions = () => {
  const options = {
    chartOptions: {
      chart: {
        type: "line",
        backgroundColor: "#fafafa",
        borderColor: "#230cad",
        borderWidth: 0.3
      },
      title: {
        text: "都道府県別人口推移"
      },
      xAxis: {
        cateories: [],
        title: "年度",
      },
      yAxis: {
        title: {
          text: "人口数",
        },
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
      reponsive: {
        rules: {},
      },
      credits: {
        text: "出典：RESAS（地域経済分析システム）",
        href: "https://opendata.resas-portal.go.jp/"
      }
    },
  };
  return options;
};