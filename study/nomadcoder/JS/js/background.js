const images = ["img1.jpg","img2.jpg","img3.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];



const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImage}`;


document.querySelector('.bg').appendChild(bgImg)