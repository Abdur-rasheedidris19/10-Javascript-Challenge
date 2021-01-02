const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const container = document.querySelector('.container')

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn')

  btn.innerHTML = sound

  btn.addEventListener('click', ()=> {
      stopSongs();
      document.getElementById(sound).play()
  })
  document.body.appendChild(btn)
  
});

function stopSongs() {
    sounds.forEach((sound)=> {
        const song = 
        document.getElementById(sound);
        
        song.pause(sound);
        song.currentTime = 0;
    })
}