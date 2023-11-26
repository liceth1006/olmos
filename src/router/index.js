import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("../views/SkillsView.vue"),
    },
    {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
  },
  {
    path: "/cakeXpres",
    name: "cakeXpres",
    component: () => import( "../views/CakeXpress.vue"),
  },
  {
    path: "/reconnect",
    name: "reconnect",
    component: () => import( "../views/reconnect.vue"),
  },
  {
    path: "/AquaMantenimiento",
    name: "AquaMantenimiento",
    component: () => import( "../views/AquaMantenimientos.vue"),
  },
  ],
});

export default router;
