var Roulette = (function(self){
  self.w = null;
  self.h = null;
  self.w2 = null;
  self.h2 = null;
  self.canvas = null;
  self.ctx = null;
  self.frameID = null;
  self.frameCounter = 0;
  self.parts = null;
  self.fullScreen = function(){
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.w2 = this.w / 2;
    this.h2 = this.h / 2;
    this.canvas.width = this.w;
    this.canvas.height = this.h;
  };
  self.printBackground = function(){
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.ctx.fillStyle = 'hsl(0, 50%, 40%)';
    this.ctx.fillRect(0, 0, this.w, this.h);
  };
  self.addPart = function(){
    this.parts.push(new Part());
  };
  self.moveAll = function(){

  };
  self.drawAll = function(){
    this.parts.forEach(part => part.draw());
  };
  self.init = function(){
    window.onresize = Roulette.fullScreen.bind(this);
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    this.parts = [];
    this.start();
  };
  self.start = function(){
    this.fullScreen();
    this.addPart(new Part());
    this.loop();
  };
  self.loop = function(){
    this.frameCounter++;
    this.frameID = requestAnimationFrame(this.loop.bind(this));
    this.printBackground();
    this.moveAll();
    this.drawAll();
  };
  return self;
})(Roulette || {});