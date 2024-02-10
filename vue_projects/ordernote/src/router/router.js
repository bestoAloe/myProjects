import { createRouter, createWebHashHistory } from "vue-router";
import SideBar from "../components/layout/SideBar.vue";
import HeaderPart from "../components/layout/HeaderPart.vue";
import ContentMid from "../components/layout/ContentMid.vue";

const routes = [
  {
    path: "/",
    component: SideBar 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;