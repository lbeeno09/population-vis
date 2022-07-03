<script setup lang="ts">
import { RESAS } from "../api/resas/apiRequest.ts";
import type { Prefecture } from "../api/Types.ts";
</script>

<template>
  <div id="buttonShow">
    <button id="displayButton" @click="onButtonClick()">
      RESAS APIを使用する
    </button>
  </div>
</template>

<script lang="ts">
// TODO: change prefecture selection table to a responsive one (current: single column)
// Change the number of columns depending on the size of the window
async function onButtonClick() {
  const api: RESAS = new RESAS();
  const pref: Prefecture[] = await api.getPrefecture();
  console.log(pref);

  const table = document.createElement("table");
  for (let i = 0; i < pref.length; i++) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "prefecture";

    const label = document.createElement("label");
    label.htmlFor = "prefecture";
    label.appendChild(document.createTextNode(pref[i]["prefName"]));

    const tr = document.createElement("tr");
    tr.appendChild(label);
    tr.appendChild(checkbox);

    table.appendChild(tr);
  }
  document.getElementById("prefectureSelect")?.appendChild(table);
}
</script>

<style>
#buttonShow {
  text-align: center;
}
</style>
