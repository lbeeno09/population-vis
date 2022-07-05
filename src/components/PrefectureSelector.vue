<script setup lang="ts">
import { defineComponent } from "vue";
import { Prefecture } from "@/Types.ts";
import { displayPrefectures } from "./displayPrefectures.ts";
</script>

<template>
    <section @.once="hasStarted()">
        <div id="prefectureContainer"></div>
    </section>
</template>

<script lang="ts">
export default defineComponent({
    emits: ["selectedPrefecture"],
    data: () => {
        return {
            prefectures: [] as Prefecture[],
        }
    },
    methods: {
        async hasStarted() {
            this.prefectures = await displayPrefectures();

            const checkboxQuery = document.querySelectorAll("input[type='checkbox']");
            for(let i = 0; i < checkboxQuery.length; i++) {
                checkboxQuery[i].addEventListener("change", (event) => {
                    const idx = event.target.id - 1;
                    const checkedPrefecture: Prefecture = this.prefectures[idx];

                    this.prefectures[idx].selected = !this.prefectures[idx].selected;
                    this.$emit("selectedPrefecture", checkedPrefecture);
                })
            }
        },
    },
});
</script>

<style>
@media screen and (max-width: 1023px) {
    #prefectureContainer {
        margin: auto;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        grid-gap: 5px;
    }
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
    #prefectureContainer {
        margin: auto;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        grid-gap: 5px;

        font-size: 2.8vh;
    }
}

@media screen and (min-width: 2560) {
    #prefectureContainer {
        margin: auto;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        grid-gap: 5px;

        font-size: 3.5vh;
    }
}

.prefecture input {
    margin-left: 5px;
}
</style>