<template>
  <div id="app">
    <Timer v-if="timer"></Timer>
    <CountDown v-if="count"></CountDown>
    <NewHighScore v-if="highScore"></NewHighScore>
    <router-view />
  </div>
</template>

<script>
  import Timer from '@/components/Timer'
  import CountDown from '@/components/Countdown'
  import NewHighScore from '@/components/NewHighScore'

  import { mapMutations } from 'vuex'

  export default {
    components: {
      Timer,
      CountDown,
      NewHighScore
    },
    computed: {
      timer () {
        return this.$store.state.timer
      },
      count () {
        return this.$store.state.countDown
      },
      highScore () {
        return this.$store.state.highScoreAlert
      }
    }
  }
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #41B883;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
