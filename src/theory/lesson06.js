/* ==============================
🔥 Inserting DOM elements
 ================================ */
const app = document.querySelector("#app");

const div = document.createElement("div");
const span = document.createElement("span");
const p = document.createElement("p");
const a = document.createElement("a");
const i = document.createElement("i");

app.append(div); // Добавить в конец блока
app.prepend(span); // Добавить в начало блока
span.after(a); // Добавить после блока
span.before(p); // Добавить до  блока

// old way using insertBefore()
app.append(i);

i.parentNode.insertBefore(a, i); // // Добавить до  блока
i.parentNode.insertBefore(a, i.nextSibling); // // Добавить после  блока

console.log(app);
