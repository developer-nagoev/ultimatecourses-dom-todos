/* ==============================
🔥 Changing Content of DOM Elements
 ================================ */
const app = document.querySelector("#app");

// Using innerHTML
app.innerHTML = "<h1>Hello World - innerHTML</h1>";

// Using innerText
const h1 = document.createElement("h1");
h1.innerText = "Hello World - innerText";
app.append(h1);

// Append using innerHTML
app.innerHTML += "<h2>Headline 2</h2>";

console.log(app.innerHTML);
console.log(app.innerText); // Element
console.log(app.textContent); // Nodes
