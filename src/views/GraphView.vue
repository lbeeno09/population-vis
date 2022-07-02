<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
import Graph from "@/components/Graph.vue";
import { RESAS } from "@/api/resas/apiRequest.ts";
import Chart from "@/graph/Charts.ts";
</script>

<template>
  <button v-on:click="onButtonClick()">RESAS APIを使用する</button>
  <table id="table"></table>
  <main>
    <Graph />
    <TheWelcome />
  </main>
</template>

<script lang="ts">
  async function onButtonClick() {
    const api: RESAS = new RESAS();

    const pref = await api.getPrefecture();
    console.log(pref);

    let table = document.createElement("table");
    let tr = document.createElement("tr");
    for(let key in pref[0]) {
      let th = document.createElement("th");
      th.textContent = key;
      tr.appendChild(th);
    }
    table.appendChild(tr);

    for(let i = 0; i < pref.length; i++) {
      let tr = document.createElement("tr");
      for(let key in pref[0]) {
        let td = document.createElement("td");
        td.textContent = pref[i][key];
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    document.getElementById("table")?.appendChild(table);
  }
</script>