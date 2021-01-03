// Array declarations

const sounds = ["applause", "gasp", "tada"];

// High order array method of forEach

sounds.forEach(sound => {
    
    // Create an element 

    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerHTML = sound

    // Add an event listner to the high order array method

    btn.addEventListener('click', ()=> {
        stopSongs()
        document.getElementById(sound).play()
    })

    // Append the child created to the body to show

    document.body.appendChild(btn)
    });

    // Function to make two music play one after the other 
    
function stopSongs() {
   sounds.forEach(sound => {
    document.getElementById(sound).pause()
   });
}
