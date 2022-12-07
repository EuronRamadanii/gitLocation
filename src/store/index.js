import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";

// Modules

import country from "./modules/country";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    // createPersistedState({
    //   paths: ["authentication"],
    //   storage: window.localStorage,
    // }),
  ],
  modules: {
    country,
  },
  strict: process.env.DEV,
});
