<template>
	<div class="highscore" v-if="score.length">
		<div style="margin-right: 10px;">High Score</div>
		<b>{{score}}</b>
	</div>
</template>

<script>
	export default {
		computed: {
			score() {
				let score = JSON.parse(localStorage.getItem('vue-game'))

				if (score) {
					return `
						${score.minutes < 10 ? '0' : ''}${score.minutes}:${score.seconds < 10 ? '0' : ''}${score.seconds}`
				} else {
					return ''
				}
			}
		}
	}
</script>

<style scoped>
	.highscore {
		color: black;
		font-size: 30px;
		text-align: center;
		padding: 20px 30px;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-around;
	}
</style>