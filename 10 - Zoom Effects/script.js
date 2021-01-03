// Declaration 
const container = document.querySelector('.container');

const img = document.querySelector('img');

// add an event listenr

container.addEventListener('mousemove', (e)=> {
    const x = e.clientX - e.target.offsetTop
    const y = e.clientY - e.target.offsetLeft

    // Increase the zoom effect of the image

    img.style.transformOrigin = `${x}px ${y}p`;

    img.style.transform = "scale(1.1)";
})
 
    // Add an event listner to remove the zoom effect
    
container.addEventListener('mouseleave', ()=> {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
});