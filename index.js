document.addEventListener("DOMContentLoaded", function () {
  const featureData = [
    { img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg", title: "Feature 1 Title", desc: "Short description about feature 1.", link: "feature1.html" },
    { img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg", title: "Feature 2 Title", desc: "Short description about feature 2.", link: "feature2.html" },
    { img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg", title: "Feature 3 Title", desc: "Short description about feature 3.", link: "feature3.html" },
    { img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg", title: "Feature 4 Title", desc: "Short description about feature 4.", link: "feature4.html" },
    { img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg", title: "Feature 5 Title", desc: "Short description about feature 5.", link: "feature5.html" },
    { img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg", title: "Feature 6 Title", desc: "Short description about feature 6.", link: "feature6.html" },
    { img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg", title: "Feature 7 Title", desc: "Short description about feature 7.", link: "feature7.html" },
    { img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg", title: "Feature 8 Title", desc: "Short description about feature 8.", link: "feature8.html" },
    { img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg", title: "Feature 9 Title", desc: "Short description about feature 9.", link: "feature9.html" },
    { img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg", title: "Feature 10 Title", desc: "Short description about feature 10.", link: "feature10.html" },
    { img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg", title: "Feature 11 Title", desc: "Short description about feature 11.", link: "feature11.html" },
    { img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg", title: "Feature 12 Title", desc: "Short description about feature 12.", link: "feature12.html" },
    { img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg", title: "Feature 13 Title", desc: "Short description about feature 13.", link: "feature13.html" },
    { img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg", title: "Feature 14 Title", desc: "Short description about feature 14.", link: "feature14.html" },
    { img: "assets/images/Apple_ios14-app-library-screen_06222020.jpg", title: "Feature 15 Title", desc: "Short description about feature 15.", link: "feature15.html" }
  ];

  const slider = document.getElementById("feature-slider");
  if (slider) {
    featureData.forEach(item => {
      const div = document.createElement("div");
      div.className = "feature-item text-center px-3";
      div.innerHTML = `
        <img src="${item.img}" class="img-fluid mb-3 rounded" alt="${item.title}">
        <h5 class="fw-bold">${item.title}</h5>
        <p class="text-muted">${item.desc}</p>
        <a href="${item.link}" class="btn btn-sm" style="background-color: var(--clr-6); color: white;">Learn More</a>
      `;
      slider.appendChild(div);
    });

    window.scrollFeature = function (direction) {
      const item = slider.querySelector(".feature-item");
      if (!item) return;
      const scrollAmount = item.offsetWidth + 24;
      slider.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    };

    setInterval(() => {
      const item = slider.querySelector(".feature-item");
      if (!item) return;
      const scrollAmount = item.offsetWidth + 24;
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft < maxScroll) {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 5000);
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".navbar-toggler");
  const navCollapse = document.querySelector(".navbar-collapse");

  if (navCollapse && navToggle) {
    let collapseTimeout;

    navCollapse.addEventListener("mouseleave", () => {
      // Set a short delay before collapsing
      collapseTimeout = setTimeout(() => {
        if (navCollapse.classList.contains("show")) {
          navToggle.click(); // programmatically toggle it closed
        }
      }, 300); // delay (optional)
    });

    navCollapse.addEventListener("mouseenter", () => {
      clearTimeout(collapseTimeout); // cancel collapse if they return
    });
  }
});
