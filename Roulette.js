DR.Roulette = class Roulette{
  constructor(numOfOptions){
    this.numOfOptions = numOfOptions;
    this.options = [];
    this.options.push(new DR.Option(0));
  }
  move(){

  }
  draw(){
    this.printRouletteBackground();
    this.options.forEach(option => option.draw());
  }
  printRouletteBackground(){
    DR.ctx.beginPath();
    DR.ctx.fillStyle = 'white';
    DR.ctx.strokeStyle = 'red';
    DR.ctx.lineWidth = 5;
    DR.ctx.arc(DR.w2, DR.h2, DR.w2/2, 0, Math.PI*2);
    DR.ctx.fill();
    DR.ctx.stroke();
    DR.ctx.closePath();
  }
};