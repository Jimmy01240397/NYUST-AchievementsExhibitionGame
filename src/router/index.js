import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MenuPage from "../views/MenuPage.vue";
import ScanPage from "../views/ScanPage.vue";
import QuizPage from "../views/QuizPage.vue";
import EndPage from "../views/EndPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuPage,
  },
  {
    path: "/scan",
    name: "scan",
    component: ScanPage,
  },
  {
    path: "/quiz",
    name: "quiz",
    component: QuizPage,
  },
  {
    path: "/end",
    name: "end",
    component: EndPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
