/* ==============================
🔥 Cloning DOM elements
 ================================ */
const app = document.querySelector("#app");
const div = document.createElement("div");
const span = document.createElement("span");

span.innerText = "Can you clone me?";
app.append(div);
div.append(span);

// Клонируем элемент - без дочерних элементов - только узел
const cloneNodeWithoutChildren = div.cloneNode(false);
console.log(cloneNodeWithoutChildren);

// Клонируем элемент - вместе с  дочерними элементами
const cloneNodeWithChildren = div.cloneNode(true);
console.log(cloneNodeWithChildren);
