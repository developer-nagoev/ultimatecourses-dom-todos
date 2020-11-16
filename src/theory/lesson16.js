/* ==============================
🔥 Element Properties versus HTML Attributes
 ================================ */
const app = document.querySelector("#app");
app.innerHTML = `<input type="text">`;

const input = document.querySelector("input");

console.info("👉 Getting all properties");
console.dir(input);

console.info("👉 Get type by example");
console.dir(input.type);
console.dir(input.getAttribute("type"));
