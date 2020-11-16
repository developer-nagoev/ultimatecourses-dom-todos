/* ==============================
🔥 Removing Event Listeners
 ================================ */
const app = document.querySelector("#app");
app.innerHTML = `<button>Button</button>`;

const button = document.querySelector("button");

// Use Closure
// function callback(event) {
// 	console.log(event.target);
// 	button.removeEventListener("click", callback);
// }

// button.addEventListener("click", callback);

button.addEventListener(
	"click",
	function (event) {
		console.log(event.target);
	},
	{ once: true }
);
