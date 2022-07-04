<script setup lang="ts">
import { RESAS } from "../api/resas/apiRequest.ts";
import type { Prefecture } from "../api/Types.ts";
</script>

<template>
</template>

<script lang="ts">
</script>

<style>
#prefectureDisplay {
    margin-bottom: 100px;
}


@media screen and (max-width: 1023px) {
    #container {
        margin: auto;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        grid-gap: 5px;
    }
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
    #container {
        margin: auto;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        grid-gap: 5px;

        font-size: 2.8vh;
    }
}

@media screen and (min-width: 2560) {
    #container {
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