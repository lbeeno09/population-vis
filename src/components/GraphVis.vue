<script setup lang="ts">
import { defineComponent } from "vue";
import { createOptions, getPopulationYear } from "./displayGraph.ts";
</script>

<template>
    <div id="graphContainer" style="width:100%; height:400px;">
      <highcharts class="chartContainer" :options="options.chartOptions"></highcharts>
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
        handler: async function(newPref, oldPref) {
          let vm = this.options;
          if(newPref.selected) {
            console.log("add ", newPref.prefName);
            const {year: years, population: populations}: {years: number[], populations: number[]} = await getPopulationYear(newPref);
            vm.chartOptions.series.push({name: newPref.prefName, data: populations});
            vm.chartOptions.xAxis.categories = years;
          } else {
            console.log("remove ", newPref.prefName);
            const idx = vm.chartOptions.series.indexOf(newPref.prefName);
            vm.chartOptions.series.splice(idx, 1);
          }
        },
        deep: true
      }
    }
});
</script>

<style>
#graphDisplay h1 {
    text-align: center;
    margin: 1em;
}

.chartContainer {
  overflow: visible !important;
}
</style>
