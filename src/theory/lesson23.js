/* ==============================
🔥 Preventing Default Event Actions
 ================================ */
const app = document.querySelector("#app");
app.innerHTML = `
<form>
	<label>
	Enter email
		<input type="email">
	</label>
	<label>
		<input type="checkbox"> I agree
	</label>
</form>
`;

const form = document.querySelector("form");
const email = document.querySelector("[type=email]");
const checkbox = document.querySelector("[type=checkbox]");

function clickHandler(event) {
	if (!checkbox.checked) {
		event.preventDefault();
		console.log("Checkbox not checked");
		return;
	} else {
		console.log("Submitted");
	}
}

form.addEventListener("submit", clickHandler);
