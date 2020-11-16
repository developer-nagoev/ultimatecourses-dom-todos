/* ==============================
🔥 Looping over DOM Elements
 ================================ */
const app = document.querySelector("#app");

app.innerHTML = `
<ul>
	<li>A</li>
	<li>B</li>
	<li>C</li>
	<li>D</li>
</ul>`;

const items = document.querySelectorAll("li");
console.log(items);

console.info("👉 For Loop");
for (let i = 0; i < items.length; i++) {
	console.log(items[i]);
}
console.info("👉 ForOf Loop");
for (const item of items) {
	console.log(item);
}

console.info("👉 forEach Loop Using spread operator");
[...items].forEach((item) => console.log(item));

console.info("👉 forEach Loop Using Array.from() method");
Array.from(items).forEach((item) => console.log(item));
