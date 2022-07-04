<script setup lang="ts">
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";

// import { RESAS } from "../api/resas/apiRequest.ts";
</script>

<template>
  <div id="graphDisplay">
    <div id="container" style="width:100%; height:400px;"></div>
  </div>
</template>

<script lang="ts">
// TODO: Space out the graph and selector
// TODO: Load Selected prefecture to Highcharts
// TODO: Cache already selected prefecture (if possible)
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
        chart: {
            type: "line"
        },
        title: {
            text: "都道府県別総人口推移グラフ"
        },
        xAxis: {
            title: {
              text: "年"
            }
        },
        yAxis: {
            title: {
                text: '人口'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }],
        accessibility: {
          enabled: false
        },
    });
});
</script>

<style>
#graphDisplay h1 {
  text-align: center;
  margin: 1em;
}
</style>
