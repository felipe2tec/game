<template>
  <v-card width="(0.18) * innerWidth" height="innerHeight" class="top">
    <v-card-title class="text-h5 grey lighten-2">
      HackSlash 
    </v-card-title>
    <v-card-title class="text-h5 grey lighten-2">
      Quantidade
    </v-card-title>
    <v-card-title class="text-h5 grey lighten-2">
      Quantidade d
    </v-card-title>
    <v-card-title class="text-h5 grey lighten-2">
      Quantid
    </v-card-title>
    <v-card-title class="text-h5 grey lighten-2">
      Arma corp
    </v-card-title>
    <v-card-title class="text-h5 grey lighten-2">
      Arma a distancia:
    </v-card-title>
    <v-card-title class="text-h5 grey lighten-2">
      Armadura:
    </v-card-title>
    <v-card-title class="text-h5 grey lighten-2">
      Feitiço 1:
    </v-card-title>
    <v-card-title class="text-h5 gre  y lighten-2">
      Feitiço 2:
    </v-card-title>
  </v-card>
</template>

<script>
import Player from './class/Player'
import Platform from './class/Platform'
import GenericObject from './class/GenericObject'
import platImg from './class/platform.png'
import bgImg from './class/background.png'
import hillsImg from './class/hills.png'

/* eslint-disable */
export default {
  name: 'App',
  data(){
    return{
      dialog:true,
      canvas: document.querySelector('#canvas'),
      gravity:2,
      ctx: '',
      player: '',
      platform: [],
      genericObjects:[],
      platImage: new Image(),
      backgroundImg: new Image(),
      hillsImage: new Image(),
      spritStandRightImage: new Image()
    }
  },
  created(){
    document.getElementById('canvasDiv').style.marginLeft = 10
    this.platImage.src = platImg
    this.backgroundImg.src = bgImg
    this.hillsImage.src = hillsImg
    setTimeout(() => {
      this.init()
      console.log(platImg)
    }, 1000)
  },
  methods:{
    init(){
      console.log((0.80) * innerWidth)
      this.ctx = this.canvas.getContext('2d')
      this.canvas.width = (0.80) * innerWidth
      this.canvas.height = 576
      this.player = new Player(this.canvas, this.ctx, this.gravity)
      this.genericObjects.push(new GenericObject(this.canvas, this.ctx, -130, 0, this.backgroundImg))
      this.genericObjects.push(new GenericObject(this.canvas, this.ctx, -130, 0, this.hillsImage))
      this.platform.push(new Platform(this.canvas, this.ctx, this.gravity, 0, 452, this.platImage))
      this.platform.push(new Platform(this.canvas, this.ctx, this.gravity, 300, 150, this.platImage))
      this.platform.push(new Platform(this.canvas, this.ctx, this.gravity, 800, 350, this.platImage))
      this.platform.push(new Platform(this.canvas, this.ctx, this.gravity, 1500, 450, this.platImage))
      this.platform.push(new Platform(this.canvas, this.ctx, this.gravity, 1900, 150, this.platImage))
      this.platform.push(new Platform(this.canvas, this.ctx, this.gravity, 2300, 350, this.platImage))
      console.log(this.player.position.x - this.firstPlat)
      this.animate()
    },
    colisionPLayerWithPlatforms(plat){
      if (this.player.position.y + this.player.height <= plat.position.y && this.player.position.y + this.player.height + this.player.velocity.y >= plat.position.y && this.player.position.x + this.player.width >= plat.position.x && this.player.position.x <= plat.width + plat.position.x){
        this.player.velocity.y = 0
      }
    },
    drawGenericObjects(){
      this.genericObjects.forEach((obj)=>{
        if (this.player.keys.right.pressed && this.player.position.x < 800) {
        } else if (this.player.keys.left.pressed && this.player.position.x > 100) {
        } else {
          if (this.player.keys.right.pressed) {
            obj.position.x -= 3
          } else if (this.player.keys.left.pressed && this.player.position.x - this.firstPlat != -100) {
            obj.position.x += 3
          }
        }
        obj.draw()
      })
    },
    drawPlatforms(){
      this.platform.forEach((plat) => {      
        if (this.player.keys.right.pressed && this.player.position.x < 800) {
        } else if (this.player.keys.left.pressed && this.player.position.x > 100) {
        } else {
          if(this.player.keys.right.pressed){
            plat.position.x -= 5
          } else if (this.player.keys.left.pressed && this.player.position.x - this.firstPlat != -100){
            plat.position.x += 5
          }
        }
        plat.draw()
        this.colisionPLayerWithPlatforms(plat)
      })
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.ctx.fillStyle = 'white'
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
      this.drawGenericObjects()
      this.drawPlatforms()
      this.player.update()
      this.player.movimentPlayer()
    }
  },
  components: {
  },
  computed:{
    firstPlat(){
      return this.platform[0].position.x
    }
  },
};
</script>

<style>
  ::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none;
  }
</style>
