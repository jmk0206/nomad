const images = [ "city.jpg", "ocean.jpg", "winter.jpg" ];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimages = document.createElement("img");

bgimages.src = `./image/${chosenImage}`;

document.body.appendChild(bgimages);