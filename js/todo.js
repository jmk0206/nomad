const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
	// parentElemnt를 통해 현재 누른 버튼의 부모를 선택하는 것이기 때문에
	// button을 누른 li가 삭제가 된다.
	const li = event.target.parentElement;
	li.remove();
}

function paintToDo(newTodo) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");
	button.innerText = "❌" // 이모티콘 : https://getemoji.com/
	button.addEventListener("click", deleteToDo);
	// li안에 span이 들어간다.(span은 li의 자식요소가 된다.)
	li.appendChild(span);
	li.appendChild(button);
	span.innerText = newTodo;
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	// 위의 이벤트로 기존의 동작을 막아 enter를 해도 아무 반응이 없지만,
	// 아래의 .value를 통해 비워주게 된다.
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);