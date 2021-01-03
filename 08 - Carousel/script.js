// declarations

const imgs = document.querySelector('#imgs');
const img = document.querySelectorAll('#imgs img')
let idx = 0;

// Function 

function run() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

 imgs.style.transform = `translateX(${- idx * 150}px)`;

}
// Time for reoccuring function to happen

setInterval(run, 1500);