import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
/* Layout */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
const routes = [
  { path: "/", component: () => import("@/views/home.vue") },
  { path: "/about", component: () => import("@/views/about.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
