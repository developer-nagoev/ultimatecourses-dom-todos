/* ==============================
🔥 Removing DOM elements
 ================================ */
const app = document.querySelector("#app");
const div = document.createElement("div");
div.innerText = "I am text message";

app.append(div);

// new way
setTimeout(() => div.remove(), 3000);

// old way
// setTimeout(() => div.parentNode.removeChild(div), 3000);
