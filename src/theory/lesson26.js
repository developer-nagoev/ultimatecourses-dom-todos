/* ==============================
🔥 Accessing Forms and Elements
 ================================ */
const app = document.querySelector("#app");
app.innerHTML = `
<form name="order">
	<label>
		Enter your name
		<input type="text" name="fullname">
	</label></br>
	<label>
		Enter your surename
		<input type="text" name="surename">
	</label>
</form>
`;

console.info("👉 Get forms");
console.log(document.forms);

const form = document.forms.order;

console.info("👉 Get form elements");
console.log(form.elements);

console.info("👉 Use destructuring");
// const fullname = form.fullname;
const { fullname, surename } = form.elements;
console.log(fullname, surename);

fullname.addEventListener("input", (event) => console.log(event.target.value));
