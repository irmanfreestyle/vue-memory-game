import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clicked: 0,
    match: [],
    sameClick: [],
    start: false,
    finishTime: null
  },
  mutations: {
    toggleStart(state) {
      state.start = !state.start
    },
    setFinishTime(state, payload) {
      state.finishTime = payload
    }
  },
  actions: {},
  modules: {}
});
