/* ==============================
🔥 Keyboard Events
 ================================ */
const app = document.querySelector("#app");

document.addEventListener("keydown", (event) => {
	console.log("👉 Key:", event.key);
	console.log("👉 Code:", event.code);
});
