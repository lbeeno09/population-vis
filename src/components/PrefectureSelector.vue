<script setup lang="ts">
import { defineComponent } from "vue";
import type { Prefecture, PrefectureResponse } from "@/Types.ts";
import { displayPrefectures } from "@/components/methods/displayPrefectures.ts";
</script>

<template>
    <div class="prefecture-description">
        <h2 id="prefecture_title">都道府県</h2>
    </div>
    <div id="prefecture_container"></div>
</template>

<script lang="ts">
export default defineComponent({
    emits: ["selectedPrefecture", "isGoodResponse"],
    data: () => {
        return {
            prefectures: [] as Prefecture[],
            isGoodResponse: true
        };
    },
    async mounted() {
        const result: PrefectureResponse = await displayPrefectures();
        this.prefectures = result.data;
        this.isGoodResponse = result.statusCode;
        let vm = this;

        if(this.isGoodResponse) {
            const checkboxQuery = document.querySelectorAll("input[type='checkbox']");
            for (let i = 0; i < checkboxQuery.length; i++) {
                checkboxQuery[i].addEventListener("change", (event) => {
                    const idx: number = event.target.id - 1;
                    const checkedPrefecture: Prefecture = this.prefectures[idx];

                    vm.prefectures[idx].selected = !this.prefectures[idx].selected;
                    vm.$emit("selectedPrefecture", checkedPrefecture);
                });
            }
        } else {
            this.$emit("isGoodResponse", this.isGoodResponse);    
        }
    },
});
</script>

<style>
/* mobile~ */
div#prefecture_container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}

input[type="checkbox"], label {
    cursor: pointer;
}

label {
    margin-left: 1.03vw;
    font-size: 3.5vw;
}

/* tablet~ */
@media screen and (min-width: 426px) {
    label {
        font-size: 2.5vw;
    }
}

/* laptop~ */
@media screen and (min-width: 769px) {
    input[type="checkbox"] {
        transform: scale(1.5);
    }
    
    label {
        font-size: 2vw;
    }

    div#prefecture_container {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
}

/* 4K~ */
@media screen and (min-width: 1441px) {
    label {
        font-size: 1vw;
    }

    div#prefecture_container {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
}
</style>