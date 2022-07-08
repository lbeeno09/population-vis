<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
    <RouterView />
</template>

<script lang="ts"></script>

<style>
@import "@/assets/base.css";

/* mobile~ */ 
#app {
    margin: auto;
    font-weight: normal;
}

body {
    background-color: #fafafa;
}

h1 {
    font-size: 5vw;
}

h2 {
    font-size: 4.5vw;
    font-weight: bold;
}

h3 {
    font-size: 1.8vw;
}

button {
    width: 40vw;
    height: 7vw;
    font-size: 3.5vw;
    
}

input {
    transition-delay: 78ms;
}

/* table~ */
@media screen and (min-width: 426px) {
    h1 {
        font-size: 4vw;
    }

    h2 {
        font-size: 3.5vw;
    }

    button {
        height: 6vw;
    }
}

/* laptop~ */
@media screen and (min-width: 769px) {
    h1 {
        font-size: 3.5vw;
    }

    h2 {
        font-size: 3vw;
    }

    button {
        height: 5.5vw;
    }
}

/* 4K~ */
@media screen and (min-width: 1441px) {
    h1 {
        font-size: 2.5vw;
    }
    
    h2 {
        font-size: 2vw;
    }

    button {
        height: 4.5vw;
    }
}
</style>
