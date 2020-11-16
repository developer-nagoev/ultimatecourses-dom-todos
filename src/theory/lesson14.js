/* ==============================
🔥 Finding Parent Elements
 ================================ */
const app = document.querySelector("#app");
app.innerHTML = `
<div class="parent">
	<div class="child"></div>
</div>
`;

const element = document.querySelector(".child");

console.info("👉 ParentNode");
console.log(element.parentNode);

console.info("👉 parentElement");
console.log(element.parentElement);

console.info("👉 closest");
console.log(element.closest(".parent"));
