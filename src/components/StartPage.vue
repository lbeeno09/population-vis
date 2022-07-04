<script setup lang="ts">
import { RESAS } from "../api/resas/apiRequest.ts";
import type { Prefecture } from "../api/Types.ts";
</script>

<template>
  <div class="buttonShow">
    <button id="displayButton" @click.once="onButtonClick(); send();">
      RESAS APIを使用する
    </button>
  </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            transitionFlag: false,
        };
    },
    methods: {
        send() {
            this.$emit("stateName", this.transitionFlag);
        },
    },
};

// TODO: change prefecture selection table to a responsive one (current: single column)
// Change the number of columns depending on the size of the window
async function onButtonClick() {
  const api: RESAS = new RESAS();
  const pref: Prefecture[] = await api.getPrefecture();
  console.log(pref);

    
    const table = document.createElement("div");
    table.id = "container";
    document.getElementById("prefectureSelect")?.appendChild(table);
    for(let i = 0; i < pref.length; i++) {
        const tr = document.createElement("div");
        tr.classList.add("prefecture");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = pref[i].prefCode;

        const label = document.createElement("label");
        label.appendChild(document.createTextNode(pref[i].prefName));

        tr.appendChild(label);
        tr.appendChild(checkbox);

        document.getElementById("container")?.appendChild(tr);
    }
}

</script>

<style>
@media screen and (max-width: 1023px) {
    .buttonShow {
        margin: auto;
        text-align: center;

        font-size: auto;
    }
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
    .buttonShow {
        margin: auto;
        text-align: center;

        font-size: auto;
    }
}

/* TODO: scalability for 4K */
/* @media screen and (min-width: 2560) {
    .buttonShow {
        margin: 0 auto;
        text-align: center;

        font-size: 16rem;
    }
} */

</style>
