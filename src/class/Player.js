import spritStandRightImg from './spriteStandRight.png'
import spritStandLeftImg from './spriteStandLeft.png'
import spritRunRightImg from './spriteRunRight.png'
import spritRunLeftImg from './spriteRunLeft.png'



export default class Player{
    constructor(canvas, ctx, gravity){
        this.canvas = canvas
        this.ctx  = ctx
        this.gravity = gravity
        this.width = 66
        this.height = 150
        this.frames = 0
        this.sprite = ''
        this.croopSprite = 177
        this.sprites = {
            stand:{
                right: new Image(),
                left: new Image(),
                croopWidth:177,
                width: 66
            },
            run:{
                right: new Image(),
                left: new Image(),
                croopWidth:340,
                width: 127
            }
        }
        this.position = {
            x:100,
            y:250
        }
        this.velocity = {
            x:0,
            y:1
        }
        this.keys = {
            right:{
                pressed:false
            },
            left:{
                pressed:false
            }
        }
        this.listenKeys()
        this.initSprites()
    }
    initSprites(){
        this.sprites.stand.right.src = spritStandRightImg
        this.sprites.stand.left.src = spritStandLeftImg
        this.sprites.run.right.src = spritRunRightImg
        this.sprites.run.left.src = spritRunLeftImg
        this.sprite = this.sprites.stand.right
    }
    movimentPlayer(){
      if (this.keys.right.pressed && this.position.x < 800) {
        this.velocity.x = 5
      } else if (this.keys.left.pressed && this.position.x > 100) {
        this.velocity.x = -5
      } else {
        this.velocity.x = 0
      }
    }
    draw(){
        //this.ctx.fillStyle = 'red'
        //this.ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
        this.ctx.drawImage(
            this.sprite,
            this.croopSprite * this.frames, 
            0,
            this.croopSprite,
            400,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update(){
        this.frames++
        if(this.frames>28){
            this.frames = 0
        }
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if(this.position.y+this.height+this.velocity.y<=this.canvas.height){
            this.velocity.y += this.gravity
        }else{
            this.velocity.y = 0
        }
    }
    listenKeys(){
        addEventListener('keydown',({keyCode})=>{
            switch(keyCode){
                case 65:
                    if(!this.keys.right.pressed){
                        console.log('left')
                        this.keys.left.pressed = true
                        this.sprite = this.sprites.run.left
                        this.croopSprite = 340
                        this.width = this.sprites.run.width
                    }
                    break
                case 83:
                    console.log('down')
                    break
                case 68:
                    if(!this.keys.left.pressed){
                        console.log('right')
                        this.keys.right.pressed = true
                        this.sprite = this.sprites.run.right
                        this.croopSprite = 340
                        this.width = this.sprites.run.width
                    }
                    break
                case 87:
                    console.log('up')
                    this.velocity.y = -20
                    break
            }
        })
        addEventListener('keyup',({keyCode})=>{
            switch(keyCode){
                case 65:
                    console.log('left')
                    this.keys.left.pressed = false
                    this.sprite = this.sprites.stand.left
                    this.croopSprite = 177
                    this.width = this.sprites.stand.width
                    break
                case 83:
                    console.log('down')
                    break
                case 68:
                    console.log('right')
                    this.keys.right.pressed = false
                    this.sprite = this.sprites.stand.right
                    this.croopSprite = 177
                    this.width = this.sprites.stand.width
                    break
                case 87:
                    console.log('up')
                    this.velocity.y -= 5
                    break
                }
            })
    }
}