const sounds = ["applause", "gasp", "tada"];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerHTML = sound

    btn.addEventListener('click', ()=> {
        stopSongs()
        document.getElementById(sound).play()
    })
    document.body.appendChild(btn)
});

function stopSongs() {
   sounds.forEach(sound => {
    document.getElementById(sound).pause()
   });
}
