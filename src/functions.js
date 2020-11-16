// 📂 Structure
const app = document.querySelector("#app");
app.innerHTML = `
<div class="todos">
	<div class="todos__header">
		<h3 class="todos__title">Todo List</h3>
		<div class="todos__stats todos-stats">
			<p class="todos-stats__text">
				You have <span class="todos-stats__count"></span> items
			</p>
			<button class="todos-stats__clear" style="display:none;">Clear Completed</button>
		</div>
	</div>
	<form class="todos__form todos-form" name="todos">
		<input type="text" name="todo" placeholder="What's next?" class="todos-form__control">
	</form>
	<ul class="todos-list"></ul>
</div>
`;

// 📂 Selectors
const list = document.querySelector(".todos-list"),
  form = document.forms.todos,
  input = form.elements.todo,
  clear = document.querySelector(".todos-stats__clear");
let todos = JSON.parse(localStorage.getItem("todos")) || [],
  todoCount = document.querySelector(".todos-stats__count");

// 👉 Functions
function saveToStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(event) {
  event.preventDefault();
  const label = input.value.trim();
  if (!label.match(/^[a-z0-9 ]+$/i)) {
    alert("Please enter only letters");
  } else {
    const complete = false;
    todos = [
      ...todos,
      {
        label,
        complete
      }
    ];
    renderTodos(todos);
    saveToStorage(todos);
    input.value = "";
  }
}

function renderTodos(todos) {
  let todoStrings = "";
  todos.forEach((todo, index) => {
    todoStrings += `
		<li class="todo-item ${
      todo.complete ? "todo-item--checked" : ""
    }" data-id="${index}" >
			<input type="checkbox" class="todo-item__checkbox" ${
        todo.complete ? " checked" : ""
      }>
			<span class="todo-item__name">${todo.label}</span>
			<button class="todo-item__delete">
				<i class="gg-trash-empty"></i>
			</button>
		</li>
		`;
  });
  list.innerHTML = todoStrings;
  todoCount.innerText = todos.filter((todo) => !todo.complete).length;
  clear.style.display = todos.filter((todo) => todo.complete).length
    ? "block"
    : "none";
}

function updateTodo(event) {
  const todoId = parseInt(
      event.target.parentElement.getAttribute("data-id"),
      10
    ),
    complete = event.target.checked;

  todos = todos.map((todo, index) => {
    if (index === todoId) {
      return {
        ...todo,
        complete
      };
    }
    return todo;
  });
  renderTodos(todos);
  saveToStorage(todos);
}

function editTodo(event) {
  const target = event.target;

  if (target.nodeName.toLowerCase() !== "span") {
    return;
  }

  const todoId = parseInt(target.parentElement.getAttribute("data-id"), 10),
    todoLabel = todos[todoId].label,
    input = document.createElement("input");
  input.classList.add("todo-item__control");
  input.type = "text";
  input.value = todoLabel;

  function handleEdit(event) {
    event.stopPropagation();
    const label = this.value;
    if (label !== todoLabel) {
      todos = todos.map((todo, index) => {
        if (index === todoId) {
          return {
            ...todo,
            label
          };
        }
        return todo;
      });
      renderTodos(todos);
      saveToStorage(todos);
    }
    event.target.style.display = "";
    this.removeEventListener("change", handleEdit);
    this.remove();
  }

  target.style.display = "none";
  target.after(input);
  input.addEventListener("change", handleEdit);
  input.focus();
}

function deleteTodo(event) {
  console.log(event.target.nodeName);
  if (event.target.nodeName.toLowerCase() !== "button") {
    return;
  }

  const todoId = parseInt(
      event.target.parentElement.getAttribute("data-id"),
      10
    ),
    label = event.target.previousElementSibling.innerText;
  if (window.confirm(`Delete ${label}?`)) {
    todos = todos.filter((todo, index) => index !== todoId);
    renderTodos(todos);
    saveToStorage(todos);
  }
}

function clearCompleteTodo(event) {
  // Get completed items count
  const count = todos.filter((todo) => todo.complete).length;
  if (count === 0) {
    return;
  }
  if (window.confirm(`Delete ${count} todos?`)) {
    todos = todos.filter((todo) => !todo.complete);
    renderTodos(todos);
    saveToStorage(todos);
  }
}
// 👉 Init
function init() {
  renderTodos(todos);
  form.addEventListener("submit", addTodo);
  list.addEventListener("change", updateTodo);
  list.addEventListener("dblclick", editTodo);
  list.addEventListener("click", deleteTodo);
  clear.addEventListener("click", clearCompleteTodo);
}

init();
