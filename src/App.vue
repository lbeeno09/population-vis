<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
    <RouterView />
</template>

<script lang="ts"></script>

<style>
@import "@/assets/base.css";

html {
    font-size: calc(15px + 0.390625vw);
}
 
#app {
    margin: auto;

    font-weight: normal;
}

body {
    background-color: #fafafa;
}

h1 {
  text-align: center;
  font-size: 1.8rem;
}

h2 {
    font-size: 1.5rem;
}



/* @media (min-width: 1024px) {
    body {
        display: flex;
        place-items: center;
    }

    #app {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 2rem;
        margin: auto;
    }
} */
</style>
