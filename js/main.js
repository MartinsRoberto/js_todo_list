const todoList = document.querySelector('#todo-list')

const btnAdd = document.querySelector('#form-add button')
const btnSearch = document.querySelector('#form-search button')
const btnClearAll = document.querySelector('#todo-actions .clear-all')
const btnClearDone = document.querySelector('#todo-actions .clear-done')

const inputAdd = document.querySelector('#form-add input')
const inputSearch = document.querySelector('#form-search input')

btnAdd.addEventListener('click', (e) => {
  e.preventDefault()
  todoAdd(inputAdd.value)
})

btnSearch.addEventListener('click', (e) => {
  e.preventDefault()
})

btnClearAll.addEventListener('click', () => {
})

btnClearDone.addEventListener('click', () => {
})

const todoAdd = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("p");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const actions = document.createElement("div");
  actions.classList.add("actions");
  
  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  actions.appendChild(doneBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  actions.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-todo");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  actions.appendChild(deleteBtn);

  todo.appendChild(actions)
  todoList.appendChild(todo);

  inputAdd.value = ''
  inputAdd.focus()
}