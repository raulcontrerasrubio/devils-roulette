DR.Option = class Option{
  constructor(parent, center, size){
    this.center = center;
    this.size = size;
    this.parent = parent;
    let colors = ['red', 'blue', 'green', 'pink', 'lime', 'salmon'];
    let text = ['Hola mundo', 'Ey que pasa', 'JaJA'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.text = text[Math.floor(Math.random() * text.length)];
  }
  move(speed){
    this.center += speed;
    if(this.center > 360){
      this.center = this.center % 360;
    }
  }
  draw(){
    DR.ctx.strokeStyle = 'black';
    DR.ctx.lineWidth = 3;
    this.fillColor();
    this.drawText();
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
  drawText(){
    DR.ctx.save();
    DR.ctx.rotate(DR.Helpers.radians(this.center+this.size/2));
    DR.ctx.font = `16px Arial`;
    DR.ctx.textBaseline = 'middle';
    DR.ctx.textAlign = 'right';
    DR.ctx.fillStyle = 'white';
    DR.ctx.fillText(this.text, this.parent.radius - 30, 0, this.parent.radius - 30);
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