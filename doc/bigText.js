// bigTextSection.js
export function createBigTextSection() {
  const section = document.createElement("section");
  section.id = "bigText";

  section.innerHTML = `
      <div class="container big-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          iste voluptatum exercitationem quasi esse quidem perferendis, enim
          quam ipsum, tenetur reprehenderit voluptas consequatur nulla facere
          dignissimos odio excepturi atque voluptatem.
        </p>
      </div>
    `;

  const main = document.querySelector("main");
  if (main) {
    main.appendChild(section);
  }
}
