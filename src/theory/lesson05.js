/* ==============================
🔥 DocumentFragment
 ================================ */
const app = document.querySelector("#app");

const data = ["A", "B", "C", "D", "E"];

/* ==============================
👉 Браузеру приходится каждый
раз перерисовывать вывод страницы.
Чем больше будет элементов, тем больше это
повлияет на работу страницы
 ================================ */
// data.forEach((dataItem) => {
// 	const li = document.createElement("li");
// 	li.innerText = dataItem;
// 	app.append(li);
// });

/* ==============================
👉 DocumentFragment() позволяет создавать
в памяти временное хранилищеи заполнять его
нашими данными. После он добавляется на страницу одним
запросом. В итоге никак не затрагивается производительность
страницы
 ================================ */
// const fragment = new DocumentFragment(); // 1 Вариант создания
const fragment = document.createDocumentFragment(); // 2 Вариант создания

data.forEach((dataItem) => {
	const li = document.createElement("li");
	li.innerText = dataItem;
	fragment.append(li);
});

// console.dir(fragment);

app.append(fragment);
