<template>
  <div class="container">
    <div class="flex-item" v-for="(image, key) in images" :key="key">
      <div @click="localClicking({ id: image.id, index: key })">
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
    // localClicking(data) {
    //   this.images[data.index].clicked = true
    //   this.clicking(data)
    // },
    localClicking(data) {      
      this.sameClick.push(data.index)   
      if(this.sameClick.length === 2 && this.sameClick[0] === this.sameClick[1]) {
        this.sameClick.length = 1
        return false
      } else if (this.clicked !== 2) {
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
          }, 1500);
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
    }
  },
  created() {    
    this.images.sort(() => Math.random() - 0.5);    
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
</style>
