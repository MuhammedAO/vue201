import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pricing from "../components/Pricing";
import Forms from "../views/Forms";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/forms",
    name: "forms",
    component: Forms
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/pricing",
    name: "pricing",
    component: Pricing
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
