<script setup lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {Chart} from "hihcharts-vue";
    import {RESAS} from "../api/resas/apiRequest.ts";
</script>

<template>
    Graph
    <div>
        <highcharts: options="graph"></highcharts:>
    </div>
</template>

<script lang="ts">
    const api: RESAS = new RESAS();
    const pref = await api.getPrefecture();
    // console.log(pref);
    const pop = await api.getPopulation(0);
    // console.log(pop);
</script>