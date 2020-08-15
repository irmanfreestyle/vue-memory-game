<template>
    <div class="cover" ref="cover" :class="{open:start}">
        <button @click="startGame()">START GAME</button>
        <HighScore v-if="!start" />
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import HighScore from '@/components/HighScore'

export default {
    components: {HighScore},
    methods: {
        ...mapMutations(['toggleStart']),
        startGame() {
            this.toggleStart()
        }
    },
    computed: {
        start() {
            return this.$store.state.start
        }
    }
}
</script>

<style scoped>
    @keyframes openCover {
        from { height: 0%; }
        to { height: 100% }
    }

    .open {
        height: 0%!important;
    }
    .cover {
        overflow: hidden!important;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: #41B883;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 0.3s;
    }
    button {
        background: yellow;
        color: grey;
        text-shadow: 1px 2px 4px rgba(0,0,0,0.3);
        font-size: 20px;
        padding: 10px 15px;
        border-radius: 5px;
        border: 0px;
        box-shadow: 1px 3px 10px rgba(0,0,0,0.3);
        transition: 0.3s;
        outline: none;
    }
    button:hover {
        cursor: pointer;
    }
    button:active {
        box-shadow: none;
    }
</style>