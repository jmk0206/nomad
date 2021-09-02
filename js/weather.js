const API_KEY = "a9412c66cf3df1313ec94f391f6e8627";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
			city.innerText = data.name;
		}); // URL을 fetch하고 그 다음으로 response를 받는다.
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);