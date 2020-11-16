/* ==============================
🔥 Finding Child Elements
 ================================ */
const app = document.querySelector("#app");

app.innerHTML = `
<ul>
	<li>A</li>
	<li>B</li>
	<li>C</li>
	<li>D</li>
</ul>`;

const ulFromDOM = document.querySelector("ul");
const queryElements = ulFromDOM.querySelectorAll("li");

console.info("👉 querySelectorAll - NodeList");
console.log(queryElements);

console.info("👉 Children - HTMLCollection");
console.log(ulFromDOM.children);

console.info("👉 ChildNodes - NodeList");
console.log(ulFromDOM.childNodes);

console.info("👉 FirstChild, FirstElementChild");
console.log(ulFromDOM.firstChild, ulFromDOM.firstElementChild);

console.info("👉 LastChild, LastElementChild");
console.log(ulFromDOM.lastChild, ulFromDOM.lastElementChild);
