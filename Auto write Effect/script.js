const text = document.querySelector('.container');
const prog = 'This New Year will bring you alot of fortune (Amen)🎉';
let idx = 1;

setInterval(writeText, 200);

function writeText() {
    text.innerText = prog.slice(0, idx);  

    idx++;

    if(idx> prog.length) {
        idx = 1;
    }
}