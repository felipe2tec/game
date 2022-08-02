export default class Player{
    constructor(canvas, ctx, gravity){
        this.canvas = canvas
        this.ctx  = ctx
        this.gravity = gravity
        this.width = 30
        this.height = 30
        this.position = {
            x:100,
            y:innerHeight-this.height
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
    }
    draw(){
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    update(){
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
                    console.log('left')
                    this.keys.left.pressed = true
                    break
                case 83:
                    console.log('down')
                    break
                case 68:
                    console.log('right')
                    this.keys.right.pressed = true
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
                    break
                case 83:
                    console.log('down')
                    break
                case 68:
                    console.log('right')
                    this.keys.right.pressed = false
                    break
                case 87:
                    console.log('up')
                    this.velocity.y -= 5
                    break
                }
            })
    }
}