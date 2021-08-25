const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";


function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add("hidden")
	const username = loginInput.value;
	// greeting.innerText ="Hello " + username;
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
	event.preventDefault();
	console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);

