import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from '../views/HomeView.vue'
import companyCH from "../views/Company_CH";
import companyFR from "../views/Company_FR";

Vue.use(VueRouter);

const routes = [
  {
    path: "/companyCH",
    name: "Company CH",
    component: companyCH,
  },
  {
    path: "/companyfr",
    name: "Company CH",
    component: companyFR,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
