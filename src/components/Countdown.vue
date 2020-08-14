<template>
	<div class="countdown">
		{{count}}
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'

	export default {
		data () {
			return {
				count: 3
			}
		},
		methods: {
			...mapMutations(['countDown'])
		},
		created () {
			setInterval(() => {
				this.count--
				if (this.count === 0) this.countDown(false)
			}, 1000)
		}
	}
</script>


<style scoped>
	.countdown {
		color: #41B883;
		font-weight: bold;
		font-size: 50px;
		text-align: center;
		padding: 20px 30px;
		background: yellow;
		position: fixed;
		top: 0;
	}
</style>