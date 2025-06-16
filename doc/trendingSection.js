// trendingSection.js

export function createTrendingSection() {
  const trendingData = [
    {
      img: "https://img.freepik.com/premium-photo/alfa-romeo-brera-concept-car_923209-6392.jpg",
      followers: 40,
    },
    {
      img: "https://img.freepik.com/free-photo/view-car-running-high-speed-tunnel_23-2150635427.jpg?t=st=1712832827~exp=1712836427~hmac=288f77e260c5c484118cf533978418b85d73f1bceac3b80ca69afbb4b7507c36&w=1380",
      followers: 40,
    },
    {
      img: "https://img.freepik.com/free-photo/front-wheel-blue-vintage-sedan_114579-6115.jpg?t=st=1712832510~exp=1712836110~hmac=c388c762a3966bec3a41970b7deaf70e5457eab2afe0e4dbea07e53918c39ec8&w=1380",
      followers: 40,
    },
    {
      img: "https://img.freepik.com/free-photo/3d-car-city-street_23-2150796864.jpg?t=st=1712832581~exp=1712836181~hmac=e1f8b9abcc571a887b53adc4b959957aff99cfea8e818ae42b1056a14fc52f45&w=826",
      followers: 40,
    },
  ];

  const trending = document.createElement("div");
  trending.className = "container trending";

  const link = document.createElement("a");
  link.href = "#";
  link.className = "see-all";
  link.textContent = "SEE ALL";

  const h3 = document.createElement("h3");
  h3.textContent = "Currently Trending Games";

  const gamesDiv = document.createElement("div");
  gamesDiv.className = "games";

  trendingData.forEach((item) => {
    const block = document.createElement("div");
    block.className = "block";

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = "";

    const span = document.createElement("span");

    const followerImg = document.createElement("img");
    followerImg.src =
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA163mal?w=16&h=16&q=100&m=6&f=png&u=t";
    followerImg.alt = "";

    span.appendChild(followerImg);
    span.append(` ${item.followers} Followers`);

    block.appendChild(img);
    block.appendChild(span);
    gamesDiv.appendChild(block);
  });

  trending.appendChild(link);
  trending.appendChild(h3);
  trending.appendChild(gamesDiv);

  const placeholder = document.getElementById("trendingPlaceholder");
  if (placeholder) placeholder.appendChild(trending);
}
