DR.Roulette = class Roulette{
  constructor(devilThings){
    this.numOfOptions = devilThings.length;
    this.devilThings = devilThings.map(id => DR.Data.getThingById(id));
    this.radius = DR.h2 - 150;
    this.options = [];
    this.createOptions();
    this.speed = 0;
    this.isActive = false;
  }
  move(){
    this.options.forEach(option => option.move(this.speed));
    this.changeSpeed();
    this.checkOption();
  }
  draw(){
    DR.ctx.save();
    DR.ctx.translate(this.radius + 100, DR.h2);
    //this.printRouletteBackground();
    this.options.forEach(option => option.draw());
    this.printSelector();
    DR.ctx.restore();
  }
  printRouletteBackground(){
    DR.ctx.beginPath();
    DR.ctx.fillStyle = 'white';
    DR.ctx.strokeStyle = 'red';
    DR.ctx.lineWidth = 2.5;
    DR.ctx.arc(0, 0, this.radius, 0, Math.PI*2);
    DR.ctx.fill();
    DR.ctx.stroke();
    DR.ctx.closePath();
  }
  printSelector(){
    DR.ctx.beginPath();
    DR.ctx.lineWidth = 2.5;
    DR.ctx.fillStyle = 'hsl(0, 0%, 50%)';
    DR.ctx.strokeStyle = 'black';
    DR.ctx.moveTo(0, -this.radius + 30);
    DR.ctx.lineTo(-15, -this.radius - 30);
    DR.ctx.lineTo(15, -this.radius - 30);
    DR.ctx.lineTo(0, -this.radius + 30);
    DR.ctx.fill();
    DR.ctx.stroke();
    DR.ctx.closePath();
  }
  createOptions(){
    let degrees = 360/this.numOfOptions;
    for(let i = 0; i < this.numOfOptions; i++){
      this.options.push(new DR.Option(this, i*degrees, degrees, this.devilThings[i]));
    }
  }
  checkOption(){
    let previusOption = this.selectedOption;
    this.selectedOption = this.options.filter(opt => {
      let leftLimit = opt.center - opt.size/2 < 0 ? 360 - Math.abs(opt.center - opt.size/2) : opt.center - opt.size/2;
      let rightLimit = opt.center + opt.size/2 >= 360 ? opt.center + opt.size/2 - 360 : opt.center + opt.size/2;
      return 240 >= leftLimit && 240 <= rightLimit;
    })[0];
    if(this.isActive && this.selectedOption !== previusOption){
      // Make sound
    }
  }
  changeSpeed(){
    this.speed *= .9975**2;
    if(this.isActive && this.speed <= .025){
      this.speed = 0;
      this.isActive = false;
      this.communicateResults();
    }
  }
  turnRoulette(){
    this.speed = Math.random() * (12.5 - 6.5) + 6.5;
    this.isActive = true;
  }
  communicateResults(){
    DR.Interaction.showResultModal(this.selectedOption.devilThing.title, this.selectedOption.devilThing.description);
  }
};