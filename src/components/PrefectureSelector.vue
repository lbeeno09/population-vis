<script setup lang="ts">
import { defineComponent } from "vue";
import { Prefecture } from "@/Types.ts";
import { displayPrefectures } from "@/components/methods/displayPrefectures.ts";
</script>

<template>
    <h2 id="prefecture_title">都道府県</h2>
    <!-- <div id="prefecture_container" v-bind="hasStarted()"></div> -->
    <div id="prefecture_container"></div>

</template>

<script lang="ts">
export default defineComponent({
  emits: ["selectedPrefecture"],
  data: () => {
    return {
      prefectures: [] as Prefecture[],
    };
  },
  async mounted() {
      this.prefectures = await displayPrefectures();

      const checkboxQuery = document.querySelectorAll("input[type='checkbox']");
      for (let i = 0; i < checkboxQuery.length; i++) {
          checkboxQuery[i].addEventListener("change", (event) => {
            const idx: number = event.target.id - 1;
            const checkedPrefecture: Prefecture = this.prefectures[idx];

            this.prefectures[idx].selected = !this.prefectures[idx].selected;
            this.$emit("selectedPrefecture", checkedPrefecture);
          });
      }
  }
});
</script>

<style scoped>
label, input[type="checkbox"] {
  cursor: pointer;
}

input[type="checkbox"] {
  -webkit-transform: scale(auto);
}

@media screen and (max-width: 1023px) {
  #prefecture_container {
    margin: auto;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 5px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
  #prefecture_container {
    margin: auto;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 5px;

    font-size: 2.8vh;
  }
}

@media screen and (min-width: 1441px) and (max-width: 2559px) {
  #prefecture_container {
    margin: auto;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 5px;

    font-size: 3.5vh;
  }
}

@media screen and (min-width: 2560px) {
  #prefecture_container {
    margin: auto;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 5px;

    font-size: 3vh;
  }
}

.prefecture input {
    margin-left: 5px;
}
</style>