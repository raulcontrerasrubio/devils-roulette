DR.Roulette = class Roulette{
  constructor(numOfOptions){
    this.numOfOptions = numOfOptions;
    this.radius = DR.w2/2;
    this.options = [];
    this.createOptions();
    this.speed = 0;
  }
  move(){
    this.options.forEach(option => option.center += this.speed);
  }
  draw(){
    this.printRouletteBackground();
    this.options.forEach(option => option.draw());
  }
  printRouletteBackground(){
    DR.ctx.beginPath();
    DR.ctx.fillStyle = 'white';
    DR.ctx.strokeStyle = 'red';
    DR.ctx.lineWidth = 2.5;
    DR.ctx.arc(DR.w2, DR.h2, this.radius, 0, Math.PI*2);
    DR.ctx.fill();
    DR.ctx.stroke();
    DR.ctx.closePath();
  }
  createOptions(){
    let degrees = 360/this.numOfOptions;
    for(let i = 0; i < this.numOfOptions; i++){
      this.options.push(new DR.Option(this, i*degrees, degrees));
    }
  }
};