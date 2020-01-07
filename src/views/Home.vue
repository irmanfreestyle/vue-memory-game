<template>      
    <div class="container">    
      <div class="start-time" v-if="startTime > 0">{{startTime}}</div>
      <div class="start-time" v-if="startTime === 0">
        {{minutes}}:{{seconds}}:{{miliseconds}}
      </div>
      <div class="flex-item" v-for="(image, key) in images" :key="key">
        <div @click="clicking({ id: image.id, index: key })">
          <Card :image="image" :clicked="image.clicked" />
        </div>
      </div>
    </div>  
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  components: { Card },
  data() {
    return {
      clicked: 0,
      match: [],
      sameClick: [],
      finish: false,
      startTime: 3,
      seconds: 0,
      minutes: 0,
      miliseconds: 0,
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
  methods: {        
    clicking(data) {      
      this.sameClick.push(data.index)   
      if (this.clicked !== 2 && !this.images[data.index].clicked) {
        this.images[data.index].clicked = true
        let self = this
        this.match.push(data.id);
        this.clicked++;        
        if (this.clicked === 2) {          
          setTimeout(() => {
            if (self.match[0] === self.match[1]) {
              console.log("Correct");              
            } else {
              console.log("Wrong");              
              self.removeCover(self.match)
            }
            console.log("state was restarted");
            self.match = [];
            self.sameClick = []
            self.clicked = 0;     
            this.checkFinish()       
          }, 1000);
        }        
      }        
    },
    removeCover(match) {
      match.forEach(m => {
        this.images.forEach((image, index) => {
          if(m === image.id) {
            this.images[index].clicked = false
          }
        })
      })
    },
    checkFinish() {
      
    },
    starting() {
      let self = this
      let timer = setInterval(() => {
        console.log('timer')
        this.startTime--
        if(self.startTime === 0) {
          clearInterval(timer)
          self.startTimer()
          self.toggleOpen()
        }
      }, 1500)
    },    
    toggleOpen() {
      this.images.forEach(image => image.clicked = !image.clicked)
    },
    startTimer() {      
      let self = this      
      setInterval(() => {
        self.seconds++
        if(self.seconds >= 61) {
          self.seconds = 0
          self.minutes++
        }        
      }, 1000)      
      setInterval(() => {
        self.miliseconds++
        if(self.miliseconds >= 60) {
          self.miliseconds = 0
        }
        if(self.miliseconds < 10) self.miliseconds = 0 + '' + self.miliseconds        
      }, 15)
    }
  },  
  created() {    
    this.images.sort(() => Math.random() - 0.5);
    this.toggleOpen()    
    this.starting()    
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
