/* ==============================
🔥 Event Delegation and Dynamic Events
 ================================ */
const app = document.querySelector("#app");
app.innerHTML = `
	<button>Add item</button>
	<ul>
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>
`;

const button = document.querySelector("button");
const ul = document.querySelector("ul");

function clickedHandler(event) {
	if (event.target.nodeName.toLowerCase() !== "li") {
		return;
	}
	console.log(event.target.innerText);
}
function createElement() {
	const items = document.querySelectorAll("ul li");
	const li = document.createElement("li");
	li.innerText = `Item ${items.length + 1}`;
	ul.append(li);
}

button.addEventListener("click", createElement);
ul.addEventListener("click", clickedHandler);
