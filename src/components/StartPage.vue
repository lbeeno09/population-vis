<script setup lang="ts"></script>

<template>
    <div class="page-description">
        <h3 id="description_paragraph">
            このページは各都道府県の人口推移を可視化したページです。データはRESAS（地域経済分析システム）APIを使用しています。下のボタンでデータ可視化のページへ移動します。
        </h3>
    </div>
    <div class="start-button">
        <button id="display_button" @click.once="clicked()">
            開始する
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
/* mobile */
h3#description_paragraph {
    margin-top: 0.35vw;
    margin-bottom: 2em;
}

button#display_button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    cursor: pointer;
}

/* tablet */
@media screen and (min-width: 426px) {
}

/* laptop~ */
@media screen and (min-width: 769px) {
}

/* 4K~ */
@media screen and (min-width: 1441px) {
}

</style>
