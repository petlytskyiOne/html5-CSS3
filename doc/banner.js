// banner.js
export function createBanner() {
  const section = document.createElement("section");
  section.id = "banner";

  section.innerHTML = `
  <div class="container banner">
      <h3>Lorem Ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa obcaecati
        laboriosam non, accusantium quos magni omnis tenetur inventore laborum
        corrupti dolorum saepe maxime quibusdam facilis minus. In excepturi
        tempora recusandae.
      </p>
      <img
        src="https://img.freepik.com/premium-photo/alfa-romeo-brera-concept-car_923209-6392.jpg"
        alt=""
      />
    </div>
`;

  const main = document.querySelector("main");
  if (main) {
    main.appendChild(section);
  }
}
