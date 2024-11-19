const paragraphs = document.querySelectorAll("p");

console.log(Array.from(paragraphs).map((p) => p.innerText));

const ps = Array.from(paragraphs);

console.log(ps.map((p) => p.innerText));
