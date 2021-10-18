import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Debian from "../views/Debian.vue"
import Arch from '../views/Arch.vue'
import Ubuntu from '../views/Ubuntu.vue'
import Fedora from '../views/Fedora.vue'
import Linux_mint from '../views/Linux_mint.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/debian",
    name: "Debian",
    component: Debian,
  },
  {
    path: "/arch",
    name: "Arch",
    component: Arch,
  },
  {
    path: "/ubuntu",
    name: "Ubuntu",
    component: Ubuntu,
  },
  {
    path: "/fedora",
    name: "Fedora",
    component: Fedora,
  },
  {
    path: "/linux-mint",
    name: "Linux_mint",
    component: Linux_mint,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
