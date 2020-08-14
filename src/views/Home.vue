<template>
    <div class="container">
      <div class="flex-item" v-for="(image, key) in images" :key="key">
        <div @click="clicking({ id: image.id, index: key })">
          <Card :image="image" :clicked="image.clicked" />
        </div>
      </div>
      <Cover />
    </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Cover from '@/components/Cover.vue'
import { mapMutations } from 'vuex'

export default {
  components: { Card, Cover },
  data() {
    return {
      clicked: 0,
      match: [],
      sameClick: [],
      startTime: 3,
      images: [
        {
          id: 1,
          name: "football.png",
          clicked: false
        },
        {
          id: 2,
          name: "basketball.png",
          clicked: false
        },
        {
          id: 3,
          name: "laptop.png",
          clicked: false
        },
        {
          id: 4,
          name: "phone.png",
          clicked: false
        },
        {
          id: 5,
          name: "motor.png",
          clicked: false
        },
        {
          id: 6,
          name: "chair.png",
          clicked: false
        },
        {
          id: 1,
          name: "football.png",
          clicked: false
        },
        {
          id: 2,
          name: "basketball.png",
          clicked: false
        },
        {
          id: 3,
          name: "laptop.png",
          clicked: false
        },
        {
          id: 4,
          name: "phone.png",
          clicked: false
        },
        {
          id: 5,
          name: "motor.png",
          clicked: false
        },
        {
          id: 6,
          name: "chair.png",
          clicked: false
        }
      ]
    };
  },
  watch: {
    start(val) {
      if(val) {
        this.starting()
        this.countDown(true)
      }
    }
  },
  methods: {
    ...mapMutations(['toggleStart', 'showTimer', 'countDown']),
    clicking(data) {
      this.sameClick.push(data.index);
      if (this.clicked !== 2 && !this.images[data.index].clicked) {
        this.images[data.index].clicked = true;
        let self = this;
        this.match.push(data.id);
        this.clicked++;
        if (this.clicked === 2) {
          setTimeout(() => {
            if (self.match[0] === self.match[1]) {
              self.checkFinish()
            } else {
              self.removeCover(self.match);
            }
            self.match = [];
            self.sameClick = [];
            self.clicked = 0;
          }, 500);
        }
      }
    },
    checkFinish() {
      let finish = true
      this.images.forEach(image => {
        if(image.clicked === false) finish = false
      })
      if(finish) {
        console.log(this.minutes + ' Minutes ' + this.seconds + ' Seconds')
        console.log('Save the timer to localstorage and show this as highest score')
        this.showTimer(false)
        this.toggleStart()
      }
    },
    removeCover(match) {
      match.forEach(m => {
        this.images.forEach((image, index) => {
          if(m === image.id) {
            this.images[index].clicked = false;
          }
        })
      });
    },
    starting() {
      let self = this;
      let timer = setInterval(() => {  //STOP THIS INTERVAL LATER...PLEASE!!!
        this.startTime--;
        if(self.startTime === 0) {
          clearInterval(timer);
          self.toggleOpen();
        }
      }, 1500);
    },
    toggleOpen() {
      this.images.forEach(image => image.clicked = !image.clicked);
      if (this.startTime === 0) this.showTimer(true)
    },
  },
  computed: {
    start() {
      return this.$store.state.start;
    },
    minutes() {
      return this.$store.state.minutes
    },
    seconds() {
      return this.$store.state.seconds
    }
  },
  created() {
    this.images.sort(() => Math.random() - 0.5);
    this.toggleOpen();
  }
};
</script>
<style scoped>
.flex-item {
  border-radius: 7px;
  background: #fff;
  margin: 3px;
  width: 100%;
  height: auto;
  max-height: 120px;
  padding: 4px;
  flex: 1 0 20%;
  overflow: hidden;
  position: relative;
}
.container {
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.start-time {
  color: white;
  position: absolute;
  top: 0;
  font-size: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  left: 0;
}
</style>
