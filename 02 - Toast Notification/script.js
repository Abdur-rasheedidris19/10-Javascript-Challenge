
// Declarations
const button = document.querySelector('.button');
const pop = document.querySelector('.pop');

// Event Listner for button

button.addEventListener("click", ()=> {
   pop.classList.toggle('open');

   // Funtion to close the button 

   setTimeout(() => {
       toast.classList.toggle("open")
       button.disabled = false;
   }, 50);
});
