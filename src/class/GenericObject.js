export default class GenericObject{
    constructor(canvas,ctx,positionX,positionY,image){
        this.canvas = canvas
        this.ctx  = ctx
        this.image = image
        this.width = image.width
        this.height = image.height
        this.position = {
            x:positionX,
            y:positionY
        } 
    }
    draw(){
        this.ctx.drawImage(this.image,this.position.x, this.position.y)
        //this.ctx.fillStyle = 'blue'
        //this.ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}