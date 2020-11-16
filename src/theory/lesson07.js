/* ==============================
🔥 Inserting DOM a String Templates
 ================================ */
const app = document.querySelector("#app");
app.innerHTML = `
	<ul></ul>
`;

const ul = document.querySelector("ul");

ul.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>"); // Перед началом блока
ul.insertAdjacentHTML("afterbegin", "<li>afterbegin</li>"); // После начала блока
ul.insertAdjacentHTML("beforeend", "<li>beforeend</li>"); // Перед концом блока
ul.insertAdjacentHTML("afterend", "<p>afterend</p>"); // После блока
