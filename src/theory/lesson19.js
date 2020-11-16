/* ==============================
🔥 Setting and Getting Classes
 ================================ */
const app = document.querySelector("#app");
app.innerHTML = `
<button>Button 1</button>
<button>Button 2</button>
`;

const button1 = document.querySelector("button:nth-child(1)");
const button2 = document.querySelector("button:nth-child(2)");

console.info("👉 ClassName - old way");
button1.className = "className";
button1.className += " anotherClassName";
console.log(button1);

console.info("👉 ClassList - add");
button2.classList.add("one", "two", "three");
console.log(button2);

console.info("👉 ClassList - remove");
button2.classList.remove("three");
console.log(button2);

console.info("👉 ClassList - contains");
console.log(button2.classList.contains("one"));

console.info("👉 ClassList - replace");
button2.classList.replace("one", "four");
console.log(button2);
