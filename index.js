const inputElement = document.querySelector('.js-name-input');
const todoListEl = document.querySelector('.js-todo-list');
const dateInputElement = document.querySelector('.js-due-date-input');

const todoList = [{
  name: 'make money',
  dueDate: '2022-12-22'
}, {
  name: 'make mulla',
  dueDate: '2022-12-22'
}];

function updateHtml() {
  let todoListHTML = ' ';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `
          <div>${name}</div>
          <div>${dueDate}</div>
          <button onclick="
          todoList.splice(${i}, 1);
          updateHtml();
        " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }

  todoListEl.innerHTML = todoListHTML;
}

updateHtml();

function addTodo() {
  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  todoList.push({
    // Shorthandproperty is below;
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
  });
  console.log(todoList);

  inputElement.value = ' ';
  updateHtml();
}
