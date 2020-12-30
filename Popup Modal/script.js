const openBtn = document.querySelector('.open');
const modalBtn = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', ()=> {
    modalBtn.classList.add('show')
})

closeBtn.addEventListener('click', ()=> {
    modalBtn.classList.remove('show')
})