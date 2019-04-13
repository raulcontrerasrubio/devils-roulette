DR.SoundManager = {
  database: {
    tick: {
      src: 'sounds/snare.wav',
    },
  },
  loadedSounds: {},
  loadSounds(){
    for(let sound in this.database){
      this.loadedSounds[sound] = {};
      this.loadedSounds[sound].audio = new Audio();
      this.loadedSounds[sound].audio.src = this.database[sound].src;
    }
  },
  playSound(sound){
    this.loadedSounds[sound].audio.play()
      .then(() => this.loadedSounds[sound].audio.currentTime = 0)
      .catch(err => console.error(err));
  }
};