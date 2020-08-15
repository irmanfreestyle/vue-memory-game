<template>
	<div class="newhighscore">
		🎉 New High Score 🎉
	</div>
</template>


<script>
	import {mapMutations} from 'vuex'

	export default {
		methods: {
			...mapMutations(['setHighScoreAlert'])
		},
		created () {
			setTimeout(() => {
				this.setHighScoreAlert(false)
			}, 4500)
		}
	}
</script>

<style scoped>
	.newhighscore {
		color: black;
		font-size: 30px;
		text-align: center;
		padding: 20px 30px;
		position: fixed;
		bottom: 0;
		display: flex;
		position: fixed;
		z-index: 99999;
		background: white;
		color: #41B883;
		box-shadow: 2px 4px 10px rgba(0,0,0,0.5);
		border-radius: 5px 5px 0px 0px;
		animation-name: showUp;
  	animation-duration: 4s;
  	animation-fill-mode: forwards;
	}

	@keyframes showUp {
	  0% {
	  	transform: translateY(100px);
	  }
	  50% {
	  	transform: translateY(0px);
	  }
	  60% {
	  	transform: translateY(0px);
	  }
	  70% {
	  	transform: translateY(0px);
	  }
	  80% {
	  	transform: translateY(0px);
	  }
	  90% {
	  	transform: translateY(0px);
	  }
	  100% {
	  	transform: translateY(100px);
	  }
	}
</style>