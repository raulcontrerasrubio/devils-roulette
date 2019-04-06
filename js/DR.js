const DR = {
  canvas: null,
  ctx: null,
  w: null,
  w2: null,
  h: null,
  h2: null,
  frameCounter: null,
  frameID: null,
  roulettes: null,
  currentRoulette: null,
  setFullScreen(){
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.w2 = this.w/2;
    this.h2 = this.h/2;
    this.canvas.width = this.w;
    this.canvas.height = this.h;
    if(this.roulettes){
      this.roulettes.forEach(roulette => roulette.radius = this.h2/2);
    }
  },
  move(){
    this.roulettes[this.currentRoulette].move();
  },
  draw(){
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.roulettes[this.currentRoulette].draw();
  },
  animationLoop(){
    this.frameID = requestAnimationFrame(this.animationLoop.bind(this));
    this.frameCounter++;
    this.move();
    this.draw();
  },
  init(){
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    this.setFullScreen();
    window.onresize = this.setFullScreen.bind(this);
    this.roulettes = [new this.Roulette([1, 2, 3, 4, 5])];
    this.currentRoulette = 0;
    this.Interaction.init();
    this.animationLoop();
  },

};