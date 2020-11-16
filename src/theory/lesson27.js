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
	<button type="submit">Send</button>
</form>
`;

const form = document.forms.order;

function clickHandler(event) {
	event.preventDefault();
	console.log("Form Submit Event: ", [...new FormData(event.target)]);
}

function clickFormDataHandler(event) {
	console.log("FormData Event: ", [...event.formData]);
	console.log("FormData Values: ", [...event.formData.values()]);
	const entries = event.formData.entries();
	for (const entry of entries) {
		console.log("Entry : ", entry);
	}
}

form.addEventListener("submit", clickHandler);
form.addEventListener("formdata", clickFormDataHandler);
