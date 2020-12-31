
// Declarations
const button = document.querySelector('.button');
const pop = document.querySelector('.pop');

// Event Listner

button.addEventListener("click", ()=> {
   pop.classList.toggle('open');
   setTimeout(() => {
       toast.classList.toggle("open")
       button.disabled = false;
   }, 50);
});
