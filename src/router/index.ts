import { createRouter, createWebHistory } from "vue-router";
import GraphView from "../views/GraphView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: GraphView,
    },
  ],
});

export default router;
