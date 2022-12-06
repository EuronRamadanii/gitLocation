import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { getGeo } from "geoplugin";

// Vue.use(getGeo);
import VueGeolocation from 'vue-browser-geolocation';
Vue.use(VueGeolocation);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
