import { defineStore } from "pinia";

export const usePrefecturesStore = defineStore({
  id: "prefs",
  state: () => ({
    /* @type {{ prefecture: Prefecture, isSelected: boolean }[]} */
    prefs: [],
    /* @type {"all" | "selected" | "unselected"} */
    filter: "all",
  }),

  getters: {
    selectedPrefs() {
      return this.prefs.filter((pref) => pref.isSelected);
    },
  },

  actions: {
    addPref(pref) {
      this.prefs.push({
        prefecture: { prefCode: pref.prefCode, prefName: pref.prefName },
        isSelected: false,
      });
    },
    selectPref(pref) {
      this.prefs.find((p) => p.prefecture === pref).isSelected = true;
    },
    deselectPref(pref) {
      this.prefs.find((p) => p.prefecture === pref).isSelected = false;
    },
  },
});
