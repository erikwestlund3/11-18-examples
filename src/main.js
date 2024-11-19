// const paragraphs = document.querySelectorAll("p");

// console.log(Array.from(paragraphs).map((p) => p.innerText));

// const ps = Array.from(paragraphs);

// console.log(ps.map((p) => p.innerText));

// const heading = document.createElement("h1");
// const headingText = document.createTextNode("Big Head");
// heading.appendChild(headingText);
// document.body.appendChild(heading);

// document.body.appendChild(document.createElement("h2")).textContent =
//   "Hello World";
// One way to do it but it's too much code

import H2 from "./components/h2";

const app = document.getElementById("app");

app.innerHTML = H2("Hello World!");
