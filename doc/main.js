import { createHeroSection } from "./heroSection.js";
import { createTrendingSection } from "./trendingSection.js";

// - header
const pages = [
  { text: "Home", file: "heroPlaceholder", active: true },
  { text: "About us", file: "trendingPlaceholder" },
  { text: "Portfolio", file: "portfolio.html" },
  { text: "News", file: "news.html" },
  { text: "Contacts", file: "contacts.html", class: "btn" },
];
function creatHeader() {
  const header = document.getElementById("mainHeader");

  const logo = document.createElement("span");
  logo.className = "logo";
  logo.textContent = "logo";

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  pages.forEach((item) => {
    const li = document.createElement("li");

    if (item.active) li.classList.add("active");
    if (item.class) li.classList.add(item.class);

    const a = document.createElement("a");
    a.href = "#"; // замість item.href
    a.textContent = item.text;

    a.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(item.file);
      setActive(index);
    });

    li.appendChild(a);
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  header.appendChild(logo);
  header.appendChild(nav);
}

document.addEventListener("DOMContentLoaded", creatHeader);

function showSection(id) {
  const allSections = document.querySelectorAll("main > section");
  allSections.forEach((section) => {
    section.style.display = "none";
  });

  const target = document.getElementById(id);
  if (target) target.style.display = "block";
}

function setActive(index) {
  const items = document.querySelectorAll("nav li");
  items.forEach((li) => li.classList.remove("active"));
  if (items[index]) items[index].classList.add("active");
}

// - hero
document.addEventListener("DOMContentLoaded", () => {
  createHeroSection();
});

// function createHeroSection() {
//   const hero = document.createElement("div");
//   hero.className = "hero container";

//   const info = document.createElement("div");
//   info.className = "hero--info";

//   const h2 = document.createElement("h2");
//   h2.textContent = "3D game Dev";

//   const h1 = document.createElement("h1");
//   h1.textContent = "Work that we produce for our clients";

//   const p = document.createElement("p");
//   p.textContent =
//     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ad placeat, officia quidem eum unde, possimus aliquam autem quis fugiat, eveniet non ea dolores vel corporis dolorem quo. Possimus, minus?";

//   const button = document.createElement("button");
//   button.className = "btn";
//   button.textContent = "Get more details";

//   const img = document.createElement("img");
//   img.src =
//     "https://th.bing.com/th?id=ORMS.005227735d3e31cc9004f2d0201892a4&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=1&p=0";
//   img.alt = "";

//   // Додаємо все до .hero--info
//   info.appendChild(h2);
//   info.appendChild(h1);
//   info.appendChild(p);
//   info.appendChild(button);
//   info.appendChild(img);

//   // Додаємо .hero--info до .hero
//   hero.appendChild(info);

//   // Вставляємо в DOM
//   document.getElementById("heroPlaceholder").appendChild(hero);
// }

// document.addEventListener("DOMContentLoaded", createHeroSection);

// - mail
//  Option 1: Using the ternary operator (? :)
// function checkEmail() {
//   const email = document.querySelector("#emailField").value;
//   alert(
//     !email.includes("@")
//       ? "no character @"
//       : !email.includes(".")
//       ? "no character ."
//       : "Ok!"
//   );
// }

document.addEventListener("DOMContentLoaded", () => {
  createTrendingSection();
});

//Option 2: Through return and less nested
// function checkEmail() {
//   const email = document.querySelector("#emailField").value;
//   if (!email.includes("@")) return alert("no character @");
//   if (!email.includes(".")) return alert("no character .");
//   alert("Ok!");
// }

// Option 3: With RegExp checking (a little smarter)
function checkEmail() {
  const email = document.querySelector("#emailField").value;
  const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  alert(pattern.test(email) ? "Ok!" : "Invalid email!");
}

// Original version
// function checkEmail() {
//   let email = document.querySelector("#emailField").value;
//   if (!email.includes("@")) alert("no character @");
//   else if (!email.includes(".")) alert("no character .");
//   else alert("Ok!");
// }
