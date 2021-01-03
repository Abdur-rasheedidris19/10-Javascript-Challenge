// Declaration 
 const toggle = document.querySelector('#toggle');


// Event listener

toggle.addEventListener('click', (e)=> {
    document.body.classList.toggle('dark', e.target.checked)
})