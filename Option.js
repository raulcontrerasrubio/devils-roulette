DR.Option = class Option{
  constructor(parent, center, size, devilThing){
    this.center = center;
    this.size = size;
    this.parent = parent;
    let colors = ['darkred', 'deeppink', 'mediumvioletred', 'orangered', 'tomato', 'darkorange', 'violet', 'orchid', 'indigo', 'darkslateblue', 'navy', 'dodgerblue', 'darkturquoise', 'darkcyan', 'tan', 'sienna', 'maroon'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.devilThing = devilThing;
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
    DR.ctx.globalAlpha = .8;
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
    DR.ctx.font = `24px Arial`;
    DR.ctx.textBaseline = 'middle';
    DR.ctx.textAlign = 'right';
    DR.ctx.fillStyle = 'white';
    DR.ctx.fillText(this.devilThing.title, this.parent.radius - 30, 0, this.parent.radius - 30);
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