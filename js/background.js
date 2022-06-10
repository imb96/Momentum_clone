const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const bg = 'background'
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
bgImage.className = bg;
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);