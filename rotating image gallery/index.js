

const imageContainer = document.querySelector('.image-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let angle = 0;

// Rotate the gallery on button click
prevButton.addEventListener('click', () => {
    angle -= 45; // Rotate left by 45 degrees
    imageContainer.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
});

nextButton.addEventListener('click', () => {
    angle += 45; // Rotate right by 45 degrees
    imageContainer.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
});
 