// const input = document.querySelector("#input-text");
// const text = document.querySelector(".text-block");

// text.innerText = input.value;

const inputText = document.querySelector("#input-text");
const textBlock = document.querySelector("#text-block");

inputText.addEventListener("input", inputHandler);

function inputHandler() {
  inputText.addEventListener("input", () => {
    textBlock.innerText = inputText.value;
  });
}
