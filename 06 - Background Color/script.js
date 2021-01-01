const btnBg = document.querySelector('.button');

btnBg.addEventListener('click', ()=> {
    randomBg();
})

function randomBg(){
    document.body.style.background = `hsl(${Math.floor(Math.random() * 360)}, 60%, 30%)`

    btnBg.innerHTML = `hsl(${Math.floor(Math.random() * 360)}, 30%, 10%)`
}