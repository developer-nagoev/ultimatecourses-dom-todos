/* ==============================
🔥 Replacing DOM elements
 ================================ */
const app = document.querySelector("#app");
app.innerHTML = `<div> Replace me! </div>`;

const div = app.querySelector("div");

// new way
const newDiv = document.createElement("div");
newDiv.innerText = "I have been replaced!";
setTimeout(() => {
	div.replaceWith(newDiv);
}, 3000);

// old way
const anotherNewDiv = document.createElement("div");
anotherNewDiv.innerText = "I am replace all!";
setTimeout(() => {
	newDiv.parentNode.replaceChild(anotherNewDiv, newDiv);
}, 5000);
