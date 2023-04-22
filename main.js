const headings = document.querySelectorAll("h2");

for (let item of headings) {
  item.classList.add("red-text");
}

const paragraphs = document.querySelectorAll("p");
// for (let p of paragraphs) {
//   p.classList.add("green-text");
// }

paragraphs.forEach((item) => {
  item.classList.add("red-text");
});
