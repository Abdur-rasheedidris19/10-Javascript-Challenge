const menuBtn = document.querySelector('.menu-btn');
const btn = document.querySelector('#btn');
const nav = document.querySelector('.nav');
let openMenu = false;

// Harmburger menu icon

menuBtn.addEventListener('click', ()=> {
    if(!openMenu) {
        menuBtn.classList.add('open');
        openMenu = true;
    } else {
        menuBtn.classList.remove('open');
        openMenu = false;
    }
});

// Collapsible menu 

btn.addEventListener('click', ()=> {
    nav.classList.toggle("active");
    btn.classList.toggle("active")
})