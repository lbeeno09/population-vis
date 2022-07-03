<script setup lang="ts">
import StartPage from "@/components/StartPage.vue";
import GraphVis from "@/components/GraphVis.vue";
</script>

<template>
  <!-- TODO: switch isSplashScreen when button is pressed -->
  <!-- NOTE: $emit() -->
  <!-- <div id="startPage" v-show="isSplashScreen"> -->
  <div id="startPage">
    <StartPage />
  </div>
  <Transition name="fade">
    <!-- TODO: Switch component depending on button pressed (prefectureSelect is hidden at fist) -->
    <!-- <div id="mainPart" v-show="!isSplashScreen"> -->
    <div id="mainPart">
      <div id="prefectureSelect"></div>
      <div id="graphDisplay">
        <GraphVis />
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
// export default {
//   data() {
//     return {
//       isSplashScreen: true,
//     };
//   },
// };
</script>

<style>
#prefectureSelect {
  display: grid;
  grid-template-columns: minmax(100px, max-content);
  grid-gap: 1px;
}
</style>
