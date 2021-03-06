import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clicked: 0,
    match: [],
    sameClick: [],
    start: false,
    timer: false,
    countDown: false,
    minutes: 0,
    seconds: 0,
    highScoreAlert: false,
    interval: null
  },
  mutations: {
    stopInterval(state) {
      clearInterval(state.interval)
      state.minutes = 0
      state.seconds = 0
    },
    setHighScoreAlert(state, payload) {
      state.highScoreAlert = payload
    },
    toggleStart(state) {
      state.start = !state.start
    },
    showTimer(state, payload) {
      state.timer = payload
    },
    countDown(state, payload) {
      state.countDown = payload
    },
    incrementTimer (state, type) {
      if (type === 's') state.seconds ++
      if (type === 'm') state.minutes ++
      if (type === null) state.seconds = 0
    }
  },
  actions: {},
  modules: {}
});
