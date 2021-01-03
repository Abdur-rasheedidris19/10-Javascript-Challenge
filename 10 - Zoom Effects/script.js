const container = document.querySelector('.container');

const img = document.querySelector('img');

container.addEventListener('mousemove', (e)=> {
    const x = e.clientX - e.target.offsetTop
    const y = e.clientY - e.target.offsetLeft

    img.style.transformOrigin = `${x}px ${y}p`;

    img.style.transform = "scale(1.1)";
})

container.addEventListener('mouseleave', ()=> {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
});