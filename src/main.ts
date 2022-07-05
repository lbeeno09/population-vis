import { createApp } from "vue";
import HighchartsVue from "highcharts-vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(HighchartsVue);

app.mount("#app");