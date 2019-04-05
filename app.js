const Roulette = {
  w: null,
  h: null,
  w2: null,
  h2: null,
  canvas: null,
  ctx: null,
  frameID: null,
  frameCounter: 0,
  fullScreen: function(){
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.w2 = this.w / 2;
    this.h2 = this.h / 2;
    this.canvas.width = this.w;
    this.canvas.height = this.h;
  },
  init: function(){
    window.onresize = Roulette.fullScreen.bind(this);
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    this.fullScreen();
    this.loop();
  },
  loop: function(){
    this.frameCounter++;
    this.frameID = requestAnimationFrame(this.loop.bind(this));
    // this.ctx.clearRect()
  },
};

window.onload = Roulette.init.bind(Roulette);