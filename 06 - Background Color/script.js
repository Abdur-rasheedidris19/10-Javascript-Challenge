// Declarations 
const btnBg = document.querySelector('.button');

// Adding an event listener for a click to change the background

btnBg.addEventListener('click', ()=> {
   // creating a function that will run the change BG
    randomBg();
})

// function that change the background color

function randomBg(){
    // DOM element that change the bg styles

    document.body.style.background = `hsl(${Math.floor(Math.random() * 360)}, 60%, 30%)`

    // Inserting the value of the Changed BG
    
    btnBg.innerHTML = `hsl(${Math.floor(Math.random() * 360)}, 60%, 30%)`
}