<script setup lang="ts"></script>

<template>
  <!-- TODO: bit more interesting page -->
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

<style scoped>
h3#description_paragraph {
  font-weight: bold;
  margin-bottom: 2em;
}

button#display_button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 50vw;
  height: 5vh;
  font-size: 3.5vw;
  

  cursor: pointer;
}

/* tablet */
@media screen and (min-width: 426px) {
  h3#description_paragraph {
    font-size: 3vw;
  }

  button#display_button {
    height: 8vw;
  }
}

/* laptop */
@media screen and (min-width: 469px) {
  h3#description_paragraph {
    font-size: 3vw;
  }

  button#display_button {
    height: 7.75vw;
  }
}

/* 4K */
@media screen and (min-width: 1441px) {
  h3#description_paragraph {
    font-size: 2.5vw;
  }

  button#display_button {
    height: 7.75vw;
  }
}
</style>
