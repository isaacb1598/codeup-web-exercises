const addToDo = document.querySelector('button.add');

const unorderedList = document.querySelector('.list-group')

addToDo.addEventListener('click', event => {
    event.preventDefault();

    const newToDoP = document.querySelector('.to-do-text').value;

    const newToDoLiEl = document.createElement("li");
    newToDoLiEl.innerText = newToDoP;
    unorderedList.appendChild(newToDoP);

});
