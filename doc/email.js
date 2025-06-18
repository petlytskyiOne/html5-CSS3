export function createEmailSection() {
  const section = document.createElement("section");
  section.id = "emailSection";

  const container = document.createElement("div");
  container.className = "container email";

  const h3 = document.createElement("h3");
  h3.textContent = "Lorem, ipsum.";

  const p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, sunt.";

  const block = document.createElement("div");
  block.className = "block";

  const leftDiv = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = "Stay in the loop";

  const leftP = document.createElement("p");
  leftP.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
  ratione, velit porro non labore doloribus quae repudiandae eaque
  magnam cupiditate repellendus aspernatur veniam commodi tenetur at,
  quis laboriosam repellat obcaecati?`;

  leftDiv.appendChild(h4);
  leftDiv.appendChild(leftP);

  const rightDiv = document.createElement("div");

  const input = document.createElement("input");
  input.type = "email";
  input.id = "emailField";
  input.placeholder = "example@gmail.com";

  const button = document.createElement("button");
  button.textContent = "Continue";
  button.addEventListener("click", checkEmail);

  rightDiv.appendChild(input);
  rightDiv.appendChild(button);

  block.appendChild(leftDiv);
  block.appendChild(rightDiv);

  container.appendChild(h3);
  container.appendChild(p);
  container.appendChild(block);
  section.appendChild(container);

  // Додаємо до <main> або іншого елемента
  const main = document.querySelector("main");
  if (main) main.appendChild(section);
}

function checkEmail() {
  const email = document.querySelector("#emailField").value;
  const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  alert(pattern.test(email) ? "Ok!" : "Invalid email!");
}
