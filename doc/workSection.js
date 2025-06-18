export function createWorkSection() {
  const section = document.createElement("section");
  section.id = "workSection";

  const container = document.createElement("div");
  container.className = "container work";

  const h2 = document.createElement("h2");
  h2.textContent = "Why work with us";

  const blocks = document.createElement("div");
  blocks.className = "blocks";

  const blockData = [
    { color: "purple", text: "Lorem ipsum" },
    { color: "brown", text: "Lorem ipsum" },
    { color: "green", text: "Lorem ipsum" },
  ];

  blockData.forEach((data) => {
    const block = document.createElement("div");
    block.className = "block";

    const badge = document.createElement("span");
    badge.className = `badge ${data.color}`;
    badge.textContent = data.text;

    const h3 = document.createElement("h3");
    h3.textContent = "Lorem, ipsum.";

    const p = document.createElement("p");
    p.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit tenetur nam ex qui ut tempore omnis quos esse! Minima corporis sed animi, accusantium veniam ex ipsam consectetur tempora consequatur?";

    block.appendChild(badge);
    block.appendChild(h3);
    block.appendChild(p);
    blocks.appendChild(block);
  });

  container.appendChild(h2);
  container.appendChild(blocks);
  section.appendChild(container);

  // Додаємо до main або body
  const main = document.querySelector("main") || document.body;
  main.appendChild(section);
}
