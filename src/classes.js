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
/* ==============================
👉 Todo class
 ================================ */
export default class Todo {
  constructor(list, form, input, clear, todoCount) {
    this.list = document.querySelector(list);
    this.form = document.querySelector(form);
    this.input = document.querySelector(input);
    this.clear = document.querySelector(clear);
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.todoCount = document.querySelector(todoCount);
  }
  // 👉 Save to localStorage function
  saveToStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // 👉 Render markup function
  renderTodos(todos) {
    let todoStrings = ""; // Create string for store markup

    // Loop todo array and create markup
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

    // We write the created element inside the list
    this.list.innerHTML = todoStrings;
    // Сount the number of outstanding tasks and write it inside the counter
    this.todoCount.innerText = this.todos.filter(
      (todo) => !todo.complete
    ).length;
    // Count the number of completed tasks and show the button
    this.clear.style.display = this.todos.filter((todo) => todo.complete).length
      ? "block"
      : "none";
  }

  // 👉 Add todo function
  addTodo(event) {
    event.preventDefault(); // Prevent default event
    const label = this.input.value.trim(), // Store input value
      complete = false; // Comple trigger

    // Check condition
    if (!label.match(/^[a-zA-Z0-9А-Яа-я_ ]+$/)) {
      alert("Please enter only letters");
    } else {
      // Recreate todo array and put object
      this.todos = [
        ...this.todos,
        {
          label,
          complete
        }
      ];
      // Render markup
      this.renderTodos(this.todos);
      // Save to local storage
      this.saveToStorage(this.todos);
      // Clear input value
      this.input.value = "";
    }
  }

  // 👉 Update todo function
  updateTodo(event) {
    const target = event.target; // Store target element
    const todoId = parseInt(target.parentElement.getAttribute("data-id"), 10), // Store target element id
      complete = target.checked; // Store target element checked value

    // Loop todo array and update
    this.todos = this.todos.map((todo, index) => {
      if (index === todoId) {
        return {
          ...todo,
          complete
        };
      }
      return todo;
    });

    // Render markup
    this.renderTodos(this.todos);
    // Save to local storage
    this.saveToStorage(this.todos);
  }

  // 👉 Edit todo function
  editTodo(event) {
    const target = event.target; // Store target element
    // Check condition
    if (target.nodeName.toLowerCase() !== "span") {
      return;
    }

    const todoId = parseInt(target.parentElement.getAttribute("data-id"), 10), // Store target element id
      todoLabel = this.todos[todoId].label, // Store target element text
      input = document.createElement("input"); // Create DOM element

    input.classList.add("todo-item__control"); // Add class name
    input.type = "text"; // Add type attribute
    // Add value
    input.value = todoLabel;

    function handleEdit(event) {
      event.stopPropagation();
      const contextGlobal = this[0],
        contextLocal = this[1],
        label = contextLocal.value;

      // Check condition
      if (label !== todoLabel) {
        // Loop todo array and update
        contextGlobal.todos = contextGlobal.todos.map((todo, index) => {
          if (index === todoId) {
            return {
              ...todo,
              label
            };
          }
          return todo;
        });
        // Render markup
        contextGlobal.renderTodos(contextGlobal.todos);
        // Save to local storage
        contextGlobal.saveToStorage(contextGlobal.todos);
      }
      // Add style to element
      event.target.style.display = "";
      // Remove event listener
      contextLocal.removeEventListener("change", handleEdit);
      // Remove element on DOM
      contextLocal.remove();
    }
    // Delete target element
    target.style.display = "none";
    // Add created DOM element after target element
    target.after(input);
    // Add event listener
    input.addEventListener("change", handleEdit.bind([this, input]));
    // Add focus on created DOM element
    input.focus();
  }

  // 👉 Delete todo function
  deleteTodo(event) {
    const target = event.target; // Store target element
    // Check condition
    if (target.nodeName.toLowerCase() !== "button") {
      return;
    }
    const todoId = parseInt(target.parentElement.getAttribute("data-id"), 10), // Store target element id
      label = target.previousElementSibling.innerText; // Store target element text

    // Show modal for user
    if (window.confirm(`Delete ${label}?`)) {
      // Filter todo array and update
      this.todos = this.todos.filter((todo, index) => index !== todoId);
      // Render markup
      this.renderTodos(this.todos);
      // Save to local storage
      this.saveToStorage(this.todos);
    }
  }
  // 👉 Clear all todo function
  clearCompleteTodos() {
    // Get completed items count
    const count = this.todos.filter((todo) => todo.complete).length;
    // Check condition
    if (count === 0) {
      return;
    }
    // Show modal for user
    if (window.confirm(`Delete ${count} todos?`)) {
      // Filter todo array and update
      this.todos = this.todos.filter((todo) => !todo.complete);
      // Render markup
      this.renderTodos(this.todos);
      // Save to local storage
      this.saveToStorage(this.todos);
    }
  }

  init() {
    this.renderTodos(this.todos);
    this.form.addEventListener("submit", this.addTodo.bind(this));
    this.list.addEventListener("change", this.updateTodo.bind(this));
    this.list.addEventListener("dblclick", this.editTodo.bind(this));
    this.list.addEventListener("click", this.deleteTodo.bind(this));
    this.clear.addEventListener("click", this.clearCompleteTodos.bind(this));
  }
}

// Call
new Todo(
  ".todos-list",
  ".todos-form",
  ".todos-form__control",
  ".todos-stats__clear",
  ".todos-stats__count"
).init();
