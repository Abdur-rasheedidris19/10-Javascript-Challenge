// Declarations

const text = document.querySelector('.container');
const prog = 'This New Year will bring you alot of fortune (Amen)🎉';
let idx = 1;


setInterval(writeText, 200);

// Function to write the auto text
function writeText() {

    // Inserting the text to show 

    text.innerText = prog.slice(0, idx);  

    // increasing the text
    idx++;

    if(idx> prog.length) {
        idx = 1;
    }
}