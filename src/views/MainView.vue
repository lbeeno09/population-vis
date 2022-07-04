<script setup lang="ts">
import StartPage from "@/components/StartPage.vue";
import PrefectureSelector from "@/components/PrefectureSelector.vue";
import GraphVis from "@/components/GraphVis.vue";
</script>

<template>
  <!-- TODO: switch isSplashScreen when button is pressed -->
  <!-- NOTE: $emit() -->
  <div id="startPage" v-show="isSplashScreen">
    <Child @stateName="isSplashScreen = $event">
      <StartPage />
    </Child>
  </div>
  <br/>
  <Transition name="fade">
    <!-- TODO: Switch component depending on button pressed (prefectureSelect is hidden at fist) -->
    <div id="mainPage" v-show="!isSplashScreen" v-cloak>
      <div id="prefectureSelect">
        <PrefectureSelector />
      </div>
      <!-- TODO: Some better spacing -->
      <br /> 
      <div id="graphDisplay">
        <GraphVis />
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import Child from "@/components/StartPage.vue";
export default {
  data() {
    return {
      isSplashScreen: "splashPage",
    };
  },
  components: {
    Child,
  },
};
</script>

<style>
</style>
