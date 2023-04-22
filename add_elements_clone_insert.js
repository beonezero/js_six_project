const container = document.querySelector("#elementsContainer");

//создание заголовка
const newHeader = document.createElement("h1");
newHeader.innerText = "New заголовок";
container.append(newHeader);

// клонирование элемента

// const mainHeader = document.querySelector("header");

// const headerCopy = mainHeader.cloneNode(true);
// container.append(headerCopy);

// вставка разметки через строки

// const htmlExample = "<h2>Еще один заголовок</h2>";
// container.insertAdjacentHTML("beforeend", htmlExample);

// Вставка разметки через шаблонные строки

const title = "Текст заголовка";
const htmlExample = `<h2>${title}</h2>`;

container.insertAdjacentHTML("beforeend", htmlExample);
