<script setup lang="ts">
import { defineComponent } from "vue";
import { Prefecture } from "@/Types.ts";
import StartPage from "@/components/StartPage.vue";
import PrefectureSelector from "@/components/PrefectureSelector.vue";
import GraphVis from "@/components/GraphVis.vue";
</script>

<template>
  <div id="startPage" v-if="isSplashScreen(screenName)">
    <StartPage @nextPage="toNextPage" />
  </div>
  <br/>
  <!-- <Transition name="fade"> -->
    <div id="mainPage" v-if="!isSplashScreen(screenName)" v-cloak>
      <div id="prefectureSelect">
        <PrefectureSelector @selectedPrefecture="storeTickedPrefecture" />
      </div>
      <!-- TODO: Some better spacing -->
      <br /> 
      <div id="graphDisplay">
        <GraphVis :selectedPrefecture="tickedPrefecture" />
      </div>
    </div>
  <!-- </Transition> -->
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      screenName: "firstPage" as string,
      tickedPrefecture: {} as Prefecture
    };
  },
  methods: {
    isSplashScreen(name: string) {
      return name === "firstPage";
    },
    toNextPage(page: string) {
      this.screenName = page;
    },
    storeTickedPrefecture(p: Prefecture) {
      this.tickedPrefecture = p;
    }
  },
  components: {
    StartPage,
    PrefectureSelector,
    GraphVis
  },
});
</script>

<style>
</style>
