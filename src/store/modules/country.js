import axios from "axios";
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const state = {
  country: {},
};
const getters = {
  getCountry: (state) => {
    console.log("getters", state.country);
    return state.country;
  },
};
const mutations = {
  GET_COUNTRY(state, payload) {
    console.log("mutacion", payload);
    state.country = payload;
  },
};
const actions = {
  async getCountries({ commit }) {
    const response = await axios.get(
      `https://api.geoapify.com/v1/ipinfo?apiKey=aaa92ff4b5aa451ca2924e913fa0552f`
    );
    commit("GET_COUNTRY", response.data);
    console.log("json", response.data);

    // await fetch(
    //   "https://api.geoapify.com/v1/ipinfo?apiKey=aaa92ff4b5aa451ca2924e913fa0552f",
    //   {
    //     method: "GET",
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     commit("GET_COUNTRY", json);
    //     // this.myIp = json;
    //   });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
