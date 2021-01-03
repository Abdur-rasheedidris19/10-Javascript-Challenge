// Function to make raining heart 


function createHeart() {

    // Creating a heart element 

    const heart = document.createElement('div');

    // Adding a heart with a class of 'heart'
    heart.classList.add('heart')

    // Inserting a ❤ to the tag  
    heart.innerText = '❤'

    // arranging the heart to the left 

    heart.style.left = Math.random() * 100 + "vw";

    // Heart animation 
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    // Evaluating the time heart stop
    setTimeout(() => {
        heart.remove()   
    }, 4000);
}

// crating the occuring time heart re-appear
setInterval(createHeart, 300);