// heroSection.js

export function createHeroSection() {
  const hero = document.createElement("div");
  hero.className = "hero container";

  const info = document.createElement("div");
  info.className = "hero--info";

  const h2 = document.createElement("h2");
  h2.textContent = "3D game Dev";

  const h1 = document.createElement("h1");
  h1.textContent = "Work that we produce for our clients";

  const p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ad placeat, officia quidem eum unde, possimus aliquam autem quis fugiat, eveniet non ea dolores vel corporis dolorem quo. Possimus, minus?";

  const button = document.createElement("button");
  button.className = "btn";
  button.textContent = "Get more details";

  const img = document.createElement("img");
  img.src =
    "https://th.bing.com/th?id=ORMS.005227735d3e31cc9004f2d0201892a4&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=1&p=0";
  img.alt = "";

  info.appendChild(h2);
  info.appendChild(h1);
  info.appendChild(p);
  info.appendChild(button);
  info.appendChild(img);
  hero.appendChild(info);

  const placeholder = document.getElementById("heroPlaceholder");
  if (placeholder) placeholder.appendChild(hero);
}
