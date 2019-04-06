DR.Interaction = {
  init(){
    document.querySelector('#start-turning').onclick = DR.roulettes[DR.currentRoulette].turnRoulette.bind(DR.roulettes[DR.currentRoulette]);
  }
};