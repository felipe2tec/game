<template>
  <div>
  </div>
</template>

<script>
import Player from './class/Player'
import Platform from './class/Platform'
/* eslint-disable */
export default {
  name: 'App',
  data(){
    return{
      canvas: document.querySelector('#canvas'),
      gravity:2,
      ctx: '',
      player: '',
      platform: []
    }
  },
  created(){
    setTimeout(() => {
      this.init()
    }, 1000)
  },
  methods:{
    init(){
      this.ctx = this.canvas.getContext('2d')
      this.canvas.width = innerWidth
      this.canvas.height = innerHeight
      this.player = new Player(this.canvas,this.ctx,this.gravity)
      this.platform.push(new Platform(this.canvas, this.ctx, this.gravity))
      this.animate()
    },
    colisionPLayerWithPlatforms(plat){
      if (this.player.position.y + this.player.height <= plat.position.y && this.player.position.y + this.player.height + this.player.velocity.y >= plat.position.y && this.player.position.x + this.player.width >= plat.position.x && this.player.position.x <= plat.width + plat.position.x){
        this.player.velocity.y = 0
      }
    },
    movimentPlayer(){
      if (this.player.keys.right.pressed) {
        this.player.velocity.x = 5
      } else if (this.player.keys.left.pressed) {
        this.player.velocity.x = -5
      } else {
        this.player.velocity.x = 0
      }
    },
    drawPlatforms(){
      this.platform.forEach((plat) => {
        plat.draw()
        this.colisionPLayerWithPlatforms(plat)
      })
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.player.update()
      this.drawPlatforms()
      this.movimentPlayer()
    }
  },
  components: {
  },
  computed:{
  },
};
</script>

<style>
  ::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none;
  }
</style>
