/* ==============================
🔥 Quering DOM Nodes (HTMLCollection)
 ================================ */
const app = document.querySelector("#app");

app.innerHTML = `<ul id="list"></ul>`;

// Get element by ID
const ulFromId = document.getElementById("list");

const data = ["A", "B", "C", "D", "E"];
const fragment = document.createDocumentFragment();

data.forEach((dataItem) => {
	const li = document.createElement("li");
	li.innerText = dataItem;
	li.classList.add("list-item");
	fragment.append(li);
});

ulFromId.append(fragment);

console.info("👉 Get element by ID - document.getElementById()");
console.log(document.getElementById("list"));
console.info("👉 Get element by ClassName - document.getElementsByClassName()");
console.log(document.getElementsByClassName("list-item"));
console.info("👉 Get element by TagName - document.getElementsByTagName()");
console.log(document.getElementsByTagName("li"));
console.info("👉 Get element by QuerySelector - document.querySelector()");
console.log(document.querySelector("ul"));
console.info(
	"👉 Get element by QuerySelectorAll - document.querySelectorAll()"
);
console.log(document.querySelectorAll("li"));
