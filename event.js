const button = document.querySelector("#button");
const img = document.querySelector("#logo");

button.value = "удалить";

button.addEventListener("click", function () {
  img.remove();
});

button.addEventListener("click", function () {
  console.log("click!");
});

button.addEventListener("click", function () {
  console.log("click 2!");
});

button.addEventListener("click", function () {
  console.log("click! 3");
});

button.onclick = function () {
  console.log("click 1");
};

button.onclick = function () {
  console.log("click 2");
};
