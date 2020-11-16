/* ==============================
🔥 Adding Event Listeners and Event Object
 ================================ */
const app = document.querySelector("#app");
app.innerHTML = `<button>Button</button>`;

const button = document.querySelector("button");

// on(-event) - не поддерживает множественное событие
// button.onclick = () => console.log(1);
// button.onclick = () => console.log(2);

button.addEventListener("click", function (event) {
	console.info("👉 addEventListener with function()");
	console.log("Контекст: ", this, "Событие:", event.target);
});

button.addEventListener("click", (event) => {
	console.info("👉 addEventListener with arrow function()");
	console.log("Контекст: ", this, "Событие:", event.target);
});
