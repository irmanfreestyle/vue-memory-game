<template>
  <div class="card">
    <img :src="require('../assets/images/' + image.name)" width="100%" height="100%" />
    <div class="cover" :class="{clicked:clicked}">
      ?
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'clicked']
};
</script>

<style scoped>
.cover {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  overflow: hidden;
}
.clicked{    
  width: 0%;
  height: 0%;
}
.card:hover {
  cursor: pointer;
}
</style>
