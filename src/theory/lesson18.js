/* ==============================
🔥 Setting and Getting Inline Styles
 ================================ */
const app = document.querySelector("#app");
app.innerHTML = `<button>Button</button>`;

const button = document.querySelector("button");

console.info("👉 Get all attributes");
console.dir(button.style);

console.info("👉 Add styles");
button.style.cssText =
	"padding: 20px; font-size: 14px; background-color: #000; color: #fff";
