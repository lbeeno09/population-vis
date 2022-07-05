<script setup lang="ts">
</script>

<template>
<!-- add a bit more interesting stuff here -->
  <div class="startButton">
    <button id="displayButton" @click.once="clicked();">
      RESAS APIを使用する
    </button>
  </div>
</template>

<script lang="ts">
export default {
    emits: ["nextPage"],
    data() {
        return {
            nextPage: "mainPage",
        };
    },
    methods: {
        clicked() {
            this.$emit("nextPage", this.nextPage);
        },
    },
};
</script>

<style>
/* TODO: Fluid font-size */
label, input[type="checkbox"] {
    cursor: pointer;
}

.startButton {
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
}

@media screen and (max-width: 1023px) {
    .startButton {
        margin: auto;
        text-align: center;

        font-size: auto;
    }
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
    .startButton {
        margin: auto;
        text-align: center;

        font-size: auto;
    }
}

/* TODO: scalability for 4K */
/* @media screen and (min-width: 2560) {
    .startButton {
        margin: 0 auto;
        text-align: center;

        font-size: 16rem;
    }
} */
</style>