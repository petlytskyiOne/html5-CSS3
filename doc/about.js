export function createHeroAboutSection() {
  const section = document.createElement("section");
  section.id = "about";

  const container = document.createElement("div");
  container.className = "hero-about container";

  // Створення блоку info
  const info = document.createElement("div");
  info.className = "info";

  const h1 = document.createElement("h1");
  h1.textContent = "Lorem ipsum dolor sit amet.";

  const p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quas? Totam, maiores illum inventore nam voluptas reiciendis dolorum qui iusto porro quibusdam dolorem temporibus alias animi facilis! Laborum, enim velit.";

  const button = document.createElement("button");
  button.className = "btn";
  button.textContent = "Get in touch";

  info.appendChild(h1);
  info.appendChild(p);
  info.appendChild(button);

  // Додаємо зображення
  const img = document.createElement("img");
  img.src = "../img/BB1kXB7C.jpeg";
  img.alt = "";

  // Додаємо все до контейнера
  container.appendChild(info);
  container.appendChild(img);
  section.appendChild(container);

  // Додаємо до main або body
  const main = document.querySelector("main") || document.body;
  main.appendChild(section);
}
