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
