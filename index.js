document.addEventListener("DOMContentLoaded", () => {
  const featureData = Array.from({ length: 15 }, (_, i) => ({
    img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg",
    title: `Feature ${i + 1} Title`,
    desc: `Short description about feature ${i + 1}.`,
    link: `feature${i + 1}.html`
  }));

  const carouselInner = document.getElementById("feature-carousel-inner");

  const getGroupSize = () => {
    const w = window.innerWidth;
    if (w >= 1200) return 5;
    if (w >= 992) return 4;
    if (w >= 768) return 3;
    if (w >= 576) return 2;
    return 1;
  };

  const groupSize = getGroupSize();

  for (let i = 0; i < featureData.length; i += groupSize) {
    const group = featureData.slice(i, i + groupSize);
    const itemDiv = document.createElement("div");
    itemDiv.className = `carousel-item${i === 0 ? " active" : ""}`;

    const container = document.createElement("div");
    container.className = "d-flex justify-content-between align-items-stretch w-100 px-4 gap-3";

    group.forEach((item) => {
      const card = document.createElement("div");
      card.className = "text-center";
      card.style.flex = `0 0 ${100 / groupSize}%`;
      card.innerHTML = `
        <img src="${item.img}" class="img-fluid mb-3 rounded" alt="${item.title}">
        <h5 class="fw-bold">${item.title}</h5>
        <p class="text-muted">${item.desc}</p>
        <a href="${item.link}" class="btn btn-sm" style="background-color: var(--clr-6); color: white;">Learn More</a>
      `;
      container.appendChild(card);
    });

    itemDiv.appendChild(container);
    carouselInner.appendChild(itemDiv);
  }
});

// Reload to re-group items on screen size change
let initialWidth = window.innerWidth;

window.addEventListener("resize", () => {
  const newWidth = window.innerWidth;

  // Only reload if width has truly changed (not height, scroll, etc.)
  if (newWidth !== initialWidth) {
    location.reload();
  }
});

