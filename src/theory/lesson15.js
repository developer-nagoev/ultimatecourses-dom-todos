/* ==============================
🔥 Finding Sibling Elements
 ================================ */
const app = document.querySelector("#app");
app.innerHTML = `
<div class="parent">
	<div class="prev"></div>
	<div class="current"></div>
	<div class="next"></div>
</div>
`;

const element = document.querySelector(".current");

console.info("👉 nextSibling - NodeElement");
console.log(element.nextSibling);

console.info("👉 nextElementSibling - Element");
console.log(element.nextElementSibling);

console.info("👉 previousSibling - NodeElement");
console.log(element.previousSibling);

console.info("👉 previousElementSibling - Element");
console.log(element.previousElementSibling);
