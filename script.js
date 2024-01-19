const typeInField = document.getElementById("typeinfield");
const addBtn = document.getElementById("btn-add");
const listSection = document.getElementById("list-section");
let list = [];

addBtn.addEventListener("click", handleSubmit);
listSection.addEventListener("click", handleRemove);

function handleSubmit() {
	//push value to typeinfield
	list.push(typeInField.value);
	//clear the listSection
	listSection.innerHTML = "";
	//for each item from the list array
	list.forEach((item, index) => {
		console.log(item);
		listSection.insertAdjacentHTML(
			"beforeend",
			`
       <li id="${index}" class="flex justify-between">
				<p class="text-white font-bold">- ${item}</p>
				<button
					class="btn-remove text-white border-2 px-2 hover:bg-red-600 hover:text-white">
					X
				</button>
			</li>
      `
		);
	});
	typeInField.value = "";
}

function handleRemove(e) {
	const clickedElement = e.target;
	if (clickedElement.classList.contains("btn-remove")) {
		const listItem = clickedElement.closest("li");
		let index = Number(listItem.id);
		list.splice(index);
		listItem.remove();
	}
}
