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
    <div id="start_page" v-if="isSplashScreen(screenName) && isGoodResponse">
        <StartPage @nextPage="toNextPage" />
    </div>
    <div id="main_page" v-if="!isSplashScreen(screenName) && isGoodResponse">
        <div id="prefecture_select">
            <PrefectureSelector @isGoodResponse="storeResponseResult" @selectedPrefecture="storeTickedPrefecture" />
        </div>
        <div id="graph_display">
            <GraphVis :selectedPrefecture="tickedPrefecture" />
        </div>
    </div>
    <div id="failed_to_load" v-if="!isGoodResponse">
        Sorry! something went wrong<br />
        View console for what went wrong!<br />
        Wait a few more minutes or visit tomorrow!!
    </div>
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            screenName: "firstPage" as string,
            tickedPrefecture: {} as Prefecture,
            isGoodResponse: true
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
        storeResponseResult(c: boolean) {
            this.isGoodResponse = c;
        }
    },
    components: {
        StartPage,
        PrefectureSelector,
        GraphVis,
    },
});
</script>

<style>
/* mobile~ */
header.page-header {
    position: sticky;
    top: 0;
    background-color: #ffffff !important;
    z-index: 5;
}

h1#page_title {
    text-align: center;
    background-color: aliceblue;
}

div#start_page, div#main_page {
    margin-left: 10%;
    margin-right: 10%;
}

div#start_page {
    position:absolute;
    top: 30vh;
    bottom: 10vh;
}

div#graph_display {
    margin-left: 10%;
    margin-right: 10%;
}

div#prefecture_select {
    margin-bottom: 2rem;
}

div#failed_to_load {
    margin-top: 10%;
    text-align: center;
    font-size: 2vw;
}

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
