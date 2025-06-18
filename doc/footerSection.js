export function createFooterSection() {
  const footer = document.createElement("footer");

  const blocks = document.createElement("div");
  blocks.className = "blocks container";

  // Перша колонка: логотип + опис
  const col1 = document.createElement("div");
  const logo = document.createElement("span");
  logo.className = "logo";
  logo.textContent = "logo";

  const desc1 = document.createElement("p");
  desc1.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repudiandae unde delectus dolores pariatur, libero harum amet voluptates minima magnam quaerat perspiciatis sapiente, placeat sequi, nesciunt ea alias labore exercitationem.";

  col1.appendChild(logo);
  col1.appendChild(desc1);

  // Друга колонка: About us
  const col2 = document.createElement("div");
  const h4_1 = document.createElement("h4");
  h4_1.textContent = "About us";

  const ul = document.createElement("ul");
  ["Zeux", "Portfolio", "Careers", "Contact us"].forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });

  col2.appendChild(h4_1);
  col2.appendChild(ul);

  // Третя колонка: Contact us
  const col3 = document.createElement("div");
  const h4_2 = document.createElement("h4");
  h4_2.textContent = "Contact us";

  const desc2 = document.createElement("p");
  desc2.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio velit voluptates nostrum ipsum necessitatibus repellat, assumenda amet pariatur itaque facilis, impedit officia ipsa magnam veritatis molestias voluptas debitis quidem?";

  const phone = document.createElement("p");
  phone.textContent = "+908 89097 890";

  col3.appendChild(h4_2);
  col3.appendChild(desc2);
  col3.appendChild(phone);

  // Додаємо всі колонки до блоків
  blocks.appendChild(col1);
  blocks.appendChild(col2);
  blocks.appendChild(col3);

  // Горизонтальна лінія
  const hr = document.createElement("hr");

  // Підпис
  const copyright = document.createElement("p");
  copyright.textContent = "Copyright Lorem ipsum dolor sit amet.";

  // Збираємо футер
  footer.appendChild(blocks);
  footer.appendChild(hr);
  footer.appendChild(copyright);

  // Додаємо футер до <body> або <main> — як потрібно
  document.body.appendChild(footer);
}
