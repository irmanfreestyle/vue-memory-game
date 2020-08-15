<template>
	<div class="timer">
		{{minutes <= 9 ? '0' : ''}}{{minutes}}:{{seconds <= 9 ? '0' : ''}}{{seconds}}
	</div>
</template>


<script>
	import { mapMutations } from 'vuex'

	export default {
		methods: {
			...mapMutations(['incrementTimer']),
		},
		data () {
			return {
				trigger: 1
			}
		},
		created () {
			this.$store.state.interval = setInterval(() => {
				this.incrementTimer('s')
				if (this.seconds === 60) {
					this.incrementTimer(null)
					this.incrementTimer('m')
				}
			}, 1000)
		},
		computed: {
			start() {
				return this.$store.state.start
			},
			seconds () {
				return this.$store.state.seconds
			},
			minutes () {
				return this.$store.state.minutes
			}
		}
	}
</script>

<style scoped>
	.timer {
		color: white;
		font-weight: bold;
		font-size: 50px;
		text-align: center;
		padding: 20px 30px;
		background: dodgerblue;
		position: fixed;
		top: 0;
	}
</style>