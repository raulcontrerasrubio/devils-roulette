DR.Option = class Option{
  constructor(parent, center, size){
    this.center = center;
    this.size = size;
    this.parent = parent;
    let colors = ['red', 'blue', 'green', 'pink', 'lime', 'salmon'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  move(speed){
    this.center += speed;
    if(this.center >= 360){
      this.center = 0;
    }
  }
  draw(){
    DR.ctx.save();
    DR.ctx.strokeStyle = 'black';
    DR.ctx.lineWidth = 3;
    DR.ctx.translate(DR.w2, DR.h2);
    this.fillColor();
    this.showCenter();
    DR.ctx.restore();
  }
  fillColor(){
    DR.ctx.save();
    DR.ctx.fillStyle = this.color;
    DR.ctx.beginPath();
    DR.ctx.rotate(DR.Helpers.radians(this.center));
    DR.ctx.moveTo(0, 0);
    DR.ctx.arc(0, 0, this.parent.radius, 0, DR.Helpers.radians(this.size));
    DR.ctx.lineTo(0, 0);
    DR.ctx.fill();
    DR.ctx.stroke();
    DR.ctx.closePath();
    DR.ctx.restore();
  }
  showCenter(){
    DR.ctx.save();
    DR.ctx.beginPath();
    DR.ctx.rotate(DR.Helpers.radians(this.center));
    DR.ctx.fillStyle = 'pink';
    DR.ctx.arc(0, this.parent.radius, 10, 0, Math.PI*2);
    DR.ctx.fill();
    DR.ctx.closePath();
    DR.ctx.restore();
  }
};