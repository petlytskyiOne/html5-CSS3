export function createProjectsSection() {
  const section = document.createElement("section");
  section.id = "projects";

  const container = document.createElement("div");
  container.className = "container projects";

  const h3 = document.createElement("h3");
  h3.textContent = "Our Recent Projects";

  const p = document.createElement("p");
  p.textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nisi deleniti sint unde temporibus ipsum debitis, rem, labore, magni dolorum distinctio? Deleniti voluptatum quas hic id pariatur illo accusamus corrupti?";

  // Створюємо 2 блоки зображень
  const imageUrls = [
    [
      "https://th.bing.com/th?id=ORMS.6f6ff8a31b281492d2ba1ffbda097d1b&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0",
      "https://th.bing.com/th?id=ORMS.6f6ff8a31b281492d2ba1ffbda097d1b&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0",
      "https://th.bing.com/th?id=ORMS.6f6ff8a31b281492d2ba1ffbda097d1b&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0",
    ],
    [
      "https://th.bing.com/th?id=ORMS.6f6ff8a31b281492d2ba1ffbda097d1b&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0",
      "https://th.bing.com/th?id=ORMS.6f6ff8a31b281492d2ba1ffbda097d1b&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0",
      "https://th.bing.com/th?id=ORMS.6f6ff8a31b281492d2ba1ffbda097d1b&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0",
    ],
  ];

  imageUrls.forEach((row) => {
    const imagesDiv = document.createElement("div");
    imagesDiv.className = "images";

    row.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      imagesDiv.appendChild(img);
    });

    container.appendChild(imagesDiv);
  });

  const seeAll = document.createElement("a");
  seeAll.href = "";
  seeAll.className = "see-all";
  seeAll.textContent = "SEE ALL";

  // Додаємо елементи до контейнера
  container.appendChild(h3);
  container.appendChild(p);
  container.appendChild(seeAll);
  section.appendChild(container);

  // Додаємо контейнер до <main>
  const main = document.querySelector("main");
  if (main) main.appendChild(section);
}
