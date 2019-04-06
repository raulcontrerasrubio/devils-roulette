DR.Interaction = {
  init(){
    document.querySelector('#start-turning').onclick = DR.roulettes[DR.currentRoulette].turnRoulette.bind(DR.roulettes[DR.currentRoulette]);
    document.querySelector('#result').onclick = this.hideResultModal.bind(this);
    document.querySelector('#selected-option-header').onclick = null;
    document.querySelector('#selected-option-body').onclick = null;

  },
  hideResultModal(){
    document.querySelector('#result').style.display = `none`;
  },
  showResultModal(title, description){
    document.querySelector('#result').style.display = `flex`;
    document.querySelector('#selected-option-header').innerText = title;
    document.querySelector('#selected-option-body').innerText = description;
  }


};