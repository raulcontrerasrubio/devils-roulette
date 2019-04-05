var Roulette = (function(self){
  self.Part = class Part{
    constructor(){
      this.color = 'black';
      this.w = 30;
      this.h = 75;
      this.parent = Roulette;
    }
    draw(){
      this.parent.ctx.beginPath();
      this.parent.ctx.fillStyle = 'white';
      this.parent.ctx.moveTo(50, 50);
      this.parent.ctx.lineTo(80, 50);
      this.parent.ctx.lineTo(65, 80);
      this.parent.ctx.lineTo(50, 50);
      this.parent.fill();
      this.parent.ctx.closePath();
    }
  };
  return self;
})(Roulette || {});