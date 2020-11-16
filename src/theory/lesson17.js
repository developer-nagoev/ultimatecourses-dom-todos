/* ==============================
🔥 Setting and Getting HTML Attributes
 ================================ */
const app = document.querySelector("#app");
app.innerHTML = `<button>Button</button>`;

const button = document.querySelector("button");

console.info("👉 Set attributes");
button.setAttribute("aria-label", "I am a button");

console.info("👉 Get attributes");
button.getAttribute("aria-label");
console.log(button.attributes["aria-label"]);

console.info("👉 Get all attributes");
console.log(button.attributes);
