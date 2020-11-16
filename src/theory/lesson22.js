/* ==============================
🔥 Event Bubbling, Capturing and Propagation
 ================================ */
const app = document.querySelector("#app");
app.innerHTML = `
<div class="one">
	<div class="two">
		<button class="three">Button</button>
	</div>
</div>
`;

const el1 = document.querySelector(".one");
const el2 = document.querySelector(".two");
const el3 = document.querySelector(".three");

function clickHandler(event) {
	// event.stopPropagation();
	event.stopImmediatePropagation();
	console.log(event.target);
}

el1.addEventListener("click", clickHandler);
el2.addEventListener("click", clickHandler);
el3.addEventListener("click", clickHandler);

el3.addEventListener("click", (event) => console.log(event.target));

/* ==============================
📋 event.stopPropagation();
Прекращает дальнейшую передачу текущего события.
 ================================ */
/* ==============================
📋 event.stopImmediatePropagation();
Останавливает цепочку вызова событий для последующих слушателей DOM элемента.
Если несколько слушателей прикреплены к одному и тому же элементу с одинаковым типом события, тогда они будут вызваны в порядке своего добавления. Если один из этих слушателей вызовет event.stopImmediatePropagation() тогда события оставшихся слушателей вызваны не будут.
 ================================ */
