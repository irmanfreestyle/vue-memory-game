import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clicked: 0,
    match: [],
    sameClick: [],
    start: false,
  },
  mutations: {
    toggleStart(state) {
      state.start = !state.start
    },
  },
  actions: {},
  modules: {}
});
