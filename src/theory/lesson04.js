/* ==============================
🔥 innerHTML vs createElement
 ================================ */
const app = document.querySelector("#app");

// Using document.createElement()
function createInputDOM({ label, type = text }) {
	const labelEl = document.createElement("label");
	const inputEl = document.createElement("input");
	inputEl.type = type;
	labelEl.innerText = label;
	labelEl.append(inputEl);
	return labelEl;
}

const inputFromDOM = createInputDOM({ label: "Name", type: "text" });
app.append(inputFromDOM);

// Using innerHTML
function createInputTemplate({ label, type = text }) {
	return `
	<label>
		${label}
		<input type="${type}">
	</label>
	`;
}

const inputFromTemplate = createInputTemplate({
	label: "Email",
	type: "email",
});
app.innerHTML += inputFromTemplate;
