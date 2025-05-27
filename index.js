document.addEventListener("DOMContentLoaded", () => {
  const featureData = Array.from({ length: 15 }, (_, i) => ({
    img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg",
    title: `Feature ${i + 1} Title`,
    desc: `Short description about feature ${i + 1}.`,
    link: `feature${i + 1}.html`
  }));

  const carouselInner = document.getElementById("feature-carousel-inner");

  // group 5 items per carousel-item (will wrap naturally)
  for (let i = 0; i < featureData.length; i += 5) {
    const group = featureData.slice(i, i + 5);
    const itemDiv = document.createElement("div");
    itemDiv.className = `carousel-item${i === 0 ? " active" : ""}`;

    const row = document.createElement("div");
    row.className = "row text-center";

    group.forEach((item) => {
      const col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4";
      col.innerHTML = `
        <img src="${item.img}" class="img-fluid mb-3 rounded" alt="${item.title}">
        <h5 class="fw-bold">${item.title}</h5>
        <p class="text-muted">${item.desc}</p>
        <a href="${item.link}" class="btn btn-sm" style="background-color: var(--clr-6); color: white;">Learn More</a>
      `;
      row.appendChild(col);
    });

    itemDiv.appendChild(row);
    carouselInner.appendChild(itemDiv);
  }
});
