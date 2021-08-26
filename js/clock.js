<<<<<<< HEAD
const clock	= document.querySelector("h2#clock");

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	clock.innerText = `${hours}:${minutes}:${seconds}`; // 백틱
}

getClock()
=======
const clock	= document.querySelector("h2#clock");

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	clock.innerText = `${hours}:${minutes}:${seconds}`; // 백틱
}

getClock()
>>>>>>> 307de8bea3b99fad733c92dee496279326700175
setInterval(getClock, 1000);