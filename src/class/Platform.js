export default class Platform{
    constructor(canvas, ctx, gravity){
        this.canvas = canvas
        this.ctx  = ctx
        this.gravity = gravity
        this.width = 300
        this.height = 20
        this.position = {
            x:250,
            y:500
        } 
    }
    draw(){
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}