<script setup lang="ts">
import { defineComponent } from "vue";
import type { Prefecture, PopulationAndYear } from "@/Types.ts";
import { loadPopulation } from "@/api/apiRequest.ts";
import { createOptions } from "@/components/methods/displayGraph.ts";
</script>

<template>
  <h2 id="graph_title">人口数</h2>
  <div id="graph_container" style="width: 100%; height: 400px">
    <highcharts
      class="chart-container"
      :options="options.chartOptions"
    ></highcharts>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: ["selectedPrefecture"],
  data() {
    const options = createOptions();

    return {
      options
    };
  },
  watch: {
    selectedPrefecture: {
      handler: async function(newPref: Prefecture) {
        const vm = this.options;
        if (newPref.selected) {
          const {
            years: years,
            values: populations,
          }: PopulationAndYear =
            await loadPopulation(newPref);
          vm.chartOptions.series.push({
            name: newPref.prefName,
            data: populations,
          });
          vm.chartOptions.xAxis.categories = years;
        } else {
          const idx: number = vm.chartOptions.series.indexOf(newPref.prefName);
          vm.chartOptions.series.splice(idx, 1);
        }
      },
      deep: true,
    },
  },
});
</script>

<style scoped>
#graph_display h1 {
  text-align: center;
  margin: 1em;
}

.chart-container {
  overflow: visible !important;
}
</style>
