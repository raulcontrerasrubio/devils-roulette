DR.Background = class Background{
  constructor(color){
    this.color = color;
  }
  draw(){
    DR.ctx.fillStyle = this.color;
    DR.ctx.fillRect(0, 0, DR.w, DR.h);
  }
};