<script setup lang="ts">
import { defineComponent } from "vue";
import type { Prefecture, PopulationAndYear, PopulationResponse } from "@/Types.ts";
import { loadPopulation } from "@/api/apiRequest.ts";
import { createOptions } from "@/components/methods/GraphVisMethods.ts";
</script>

<template>
    <h2 id="graph_title">人口数</h2>
    <div id="graph_container" style="width: 100%; height: 400px">
          <highcharts class="chart-container" :options="options.chartOptions" />
    </div>
</template>

<script lang="ts">
export default defineComponent({
    // which prefecture to (add/delete) from graph
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
                    const result: PopulationResponse = await loadPopulation(newPref);
                    const {years: years, values: populations}: PopulationAndYear
                        = result.data;
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
            deep: true
        }
    }
});
</script>

<style>
/* mobile */

/* tablet */
@media screen and (min-width: 426px) {
}

/* laptop~ */
@media screen and (min-width: 769px) {
}

/* 4K~ */
@media screen and (min-width: 1441px) {
}
</style>