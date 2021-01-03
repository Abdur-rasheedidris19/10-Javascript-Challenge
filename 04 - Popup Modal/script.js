// Declarations 

const openBtn = document.querySelector('.open');
const modalBtn = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

// Event listener for a click sound to bring the modal  

openBtn.addEventListener('click', ()=> {
    modalBtn.classList.add('show')
})

// Event listner for a click sound to remove the modal 
closeBtn.addEventListener('click', ()=> {
    modalBtn.classList.remove('show')
})