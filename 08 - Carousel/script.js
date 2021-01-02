const toggle = document.querySelector('#toggle');

toggle.addEventListener('click', (e)=> {
    document.body.classList.toggle('dark', e.target.checked)
})