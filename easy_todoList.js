const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

todoForm.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();

  //получаем значение из поля ввода
  const taskText = todoInput.value;
  //создаем новый лег li через разметку
  const li = `<li>${taskText}</li>`;
  //добавляем эту разметку на страницу
  todoList.insertAdjacentHTML("beforeend", li);
  //очищаем поле ввода
  todoInput.value = "";
  // перенос фокуса на полле ввода при нажатии на кнопку
  todoInput.focus();
}
