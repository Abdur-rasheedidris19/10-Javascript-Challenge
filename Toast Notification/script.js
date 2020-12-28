
// Declarations
const button = document.querySelector('.button');
const pop = document.querySelector('.pop');

// Event Listner

button.addEventListener("click", ()=> {
    button.disabled - true;
   pop.classList.toggle('open');
   setTimeout(() => {
       toast.classList.toggle("open")
       button.disabled = false;
   }, 3000);
});
