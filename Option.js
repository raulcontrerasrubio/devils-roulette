DR.Option = class Option{
  constructor(parent, center, size){
    this.center = center;
    this.size = size;
    this.parent = parent;
    let colors = ['red', 'blue', 'green'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  draw(){
    DR.ctx.save();
    DR.ctx.strokeStyle = 'black';
    DR.ctx.lineWidth = 3;
    DR.ctx.translate(DR.w2, DR.h2);
    this.fillColor();
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
};