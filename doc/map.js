export function createHeroContactsSection() {
  const section = document.createElement("section");
  section.id = "map";

  const container = document.createElement("div");
  container.className = "container hero-contacts";

  const h1 = document.createElement("h1");
  h1.textContent = "Lorem ipsum dolor sit amet.";

  const p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad placeat, nam labore modi deserunt earum odio pariatur dicta architecto accusamus quas quod ratione. Rerum reprehenderit, reiciendis dolorem aut enim repellat.";

  const img = document.createElement("img");
  img.src =
    "https://karta-ukrainy.com.ua/content/images/6/800x600l80mc0/86088109097327.webp";
  img.alt = "";

  container.appendChild(h1);
  container.appendChild(p);
  container.appendChild(img);
  section.appendChild(container);

  // Додаємо до main або body
  const main = document.querySelector("main") || document.body;
  main.appendChild(section);
}
