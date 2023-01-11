const todoList = document.querySelector('#todo-list')
const todo = document.querySelectorAll('#todo-list .todo')

const btnAdd = document.querySelector('#form-add button')

const btnClearAll = document.querySelector('#todo-actions .clear-all')
const btnClearDone = document.querySelector('#todo-actions .clear-done')

const finishTodo = document.querySelector('#todo-list .finish-todo')
const editTodo = document.querySelector('#todo-list .edit-todo')
const removeTodo = document.querySelector('#todo-list .remove-todo')

const inputAdd = document.querySelector('#form-add input')
const inputSearch = document.querySelector('#form-search input')

btnAdd.addEventListener('click', (e) => {
  e.preventDefault()
  if(inputAdd.value){
    todoAdd(inputAdd.value)
  }
})

inputSearch.addEventListener('input', () =>{
  todoSearch(inputSearch.value)
})

btnClearAll.addEventListener('click', () => todoClearAll())

btnClearDone.addEventListener('click', () => todoClearDone())


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

const todoClearAll = () => {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
}

const todoClearDone = () => {
  const todo = document.querySelectorAll('#todo-list .todo')
  todo.forEach((el) => {
    if(el.classList.contains('done')) el.remove()
  })
}

const todoSearch = (value) => {
  console.log(value)
  const todo = document.querySelectorAll('#todo-list .todo')

  todo.forEach((el) => {
    const text = el.querySelector('p').innerText.toLocaleLowerCase()
    if(!text.includes(value)){
      el.style.display = 'none'
    }
    else{
      el.style.display = 'flex'
    }
  })
}


document.addEventListener('click', (e) => {
  const targetEl = e.target
  const parentEl = targetEl.parentNode

  if (parentEl.classList.contains("finish-todo")) {
    parentEl.closest('.todo').classList.toggle('done')
  }

  if (parentEl.classList.contains("remove-todo")) {
    parentEl.closest('.todo').remove()
  }
})