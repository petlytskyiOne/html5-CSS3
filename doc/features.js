// featuresSection.js

export function createFeaturesSection() {
  const section = document.createElement("section");
  section.id = "features";

  const icon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJtMzIxLTgwLTcxLTcxIDMyOS0zMjktMzI5LTMyOSA3MS03MSA0MDAgNDAwTDMyMS04MFoiLz48L3N2Zz4=";

  const featuresData = [
    {
      img: "https://img.freepik.com/premium-photo/classic-black-cars-headlights-glowing-foggy-city-alley_124507-263716.jpg",
      name: "Mobile #1",
    },
    {
      img: "https://img.freepik.com/premium-photo/classic-black-cars-headlights-glowing-foggy-city-alley_124507-263716.jpg",
      name: "Mobile #2",
    },
    {
      img: "https://img.freepik.com/premium-photo/classic-black-cars-headlights-glowing-foggy-city-alley_124507-263716.jpg",
      name: "Mobile #3",
    },
    {
      img: "https://img.freepik.com/premium-photo/classic-black-cars-headlights-glowing-foggy-city-alley_124507-263716.jpg",
      name: "Mobile #4",
    },
  ];

  const features = document.createElement("div");
  features.className = "features";

  const container = document.createElement("div");
  container.className = "container";

  const h3 = document.createElement("h3");
  h3.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet deleniti dignissimos.";

  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur molestiae, sequi tempora magnam reprehenderit atque accusamus ducimus explicabo porro, aperiam, totam aliquam perspiciatis vitae dolores in et animi autem amet.";

  const info = document.createElement("div");
  info.className = "info";

  featuresData.forEach((item) => {
    const block = document.createElement("div");
    block.className = "block";

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = "";

    const text = document.createElement("p");
    text.textContent = item.name;

    const iconImg = document.createElement("img");
    iconImg.src = icon;
    iconImg.alt = "icon";

    block.appendChild(img);
    block.appendChild(text);
    block.appendChild(iconImg);
    info.appendChild(block);
  });

  container.appendChild(h3);
  container.appendChild(description);
  container.appendChild(info);
  features.appendChild(container);
  section.appendChild(features);

  const main = document.querySelector("main");
  if (main) main.appendChild(section);
}
