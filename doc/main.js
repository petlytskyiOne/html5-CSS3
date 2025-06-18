import { createHeroSection } from "./placeholder.js";
import { createHeroAboutSection } from "./about.js";
import { createWorkSection } from "./workSection.js";
import { createTrendingSection } from "./trending.js";
import { createBigTextSection } from "./bigText.js";
import { createFeaturesSection } from "./features.js";
import { createBanner } from "./banner.js";
import { createProjectsSection } from "./projects.js";

import { createEmailSection } from "./email.js";
import { createFooterSection } from "./footerSection.js";

import { createHeroContactsSection } from "./map.js";
import { createFeedbackSection } from "./feedback.js";

// - header
const pages = [
  { text: "Placeholder", file: "placeholder", active: true },
  { text: "About", file: "about" },
  { text: "Work Section", file: "workSection" },
  { text: "Trending", file: "trending" },
  { text: "Big Text", file: "bigText" },
  { text: "Features", file: "features" },
  { text: "Banner", file: "banner" },
  { text: "Projects", file: "projects" },
  { text: "Email", file: "email" },
  { text: "Map", file: "map" },
  { text: "Feedback", file: "feedback", class: "btn" },
];
function creatHeader() {
  const header = document.getElementById("mainHeader");

  const logo = document.createElement("span");
  logo.className = "logo";
  logo.textContent = "logo";

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  pages.forEach((item, index) => {
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

document.addEventListener("DOMContentLoaded", () => {
  creatHeader();

  // Спочатку створюємо секції
  createHeroSection();
  createTrendingSection();
  createBigTextSection();
  createBanner();
  createFeaturesSection();
  createProjectsSection();
  createEmailSection();
  createFooterSection();
  createHeroAboutSection();
  createWorkSection();
  createHeroContactsSection();
  createFeedbackSection();

  // Показуємо активну секцію при завантаженні
  const activePage = pages.find((page) => page.active);
  if (activePage) {
    showSection(activePage.file);
  }
});

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

// Original version
// function checkEmail() {
//   let email = document.querySelector("#emailField").value;
//   if (!email.includes("@")) alert("no character @");
//   else if (!email.includes(".")) alert("no character .");
//   else alert("Ok!");
// }
