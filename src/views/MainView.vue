<script setup lang="ts">
import { defineComponent } from "vue";
import { Prefecture } from "@/Types.ts";
import StartPage from "@/components/StartPage.vue";
import PrefectureSelector from "@/components/PrefectureSelector.vue";
import GraphVis from "@/components/GraphVis.vue";
</script>

<template>
    <header class="page-header">
        <h1 id="page_title">都道府県別人口推移グラフ</h1>
    </header>
    <div id="start_page" v-if="isSplashScreen(screenName)">
        <StartPage @nextPage="toNextPage" />
    </div>
    <br />
    <!-- TODO: transition from buttom screen to main screen more smoothly -->
    <!-- <Transition name="fade"> -->
    <div id="main_page" v-if="!isSplashScreen(screenName)" v-cloak>
        <div id="prefecture_select">
            <PrefectureSelector @selectedPrefecture="storeTickedPrefecture" />
        </div>
        <!-- TODO: Some better spacing -->
        <br />
        <div id="graph_display">
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
            tickedPrefecture: {} as Prefecture,
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
        },
    },
    components: {
        StartPage,
        PrefectureSelector,
        GraphVis,
    },
});
</script>

<style>
/* mobile */
h1#page_title {
    line-height: 1.5;
    text-align: center;
    background-color: aliceblue;
    font-size: 5.5vw;
}

div#start_page {
      position:absolute;
      top:30vh;
      margin-left: 10%;
      margin-right: 10%;
  }

div#main_page {
  margin-left: 10%;
  margin-right: 10%;
}

#prefecture_select {
  margin-bottom: 2rem;
}

/* tablet */
@media screen and (min-width: 426px) {
h1#page_title {
    font-size: 4vw;
}
}

/* laptop */
@media screen and (min-width: 469px) {
h1#page_title {
    font-size: 4vw;
}
}

/* 4K */
@media screen and (min-width: 1441px) {
h1#page_title {
    font-size: 3vw;
}
}
</style>
