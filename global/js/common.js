document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    fetch("global/components/navbar.html").then(res => res.text()),
    fetch("global/components/footer.html").then(res => res.text())
  ])
  .then(([navbarHTML, footerHTML]) => {
    document.getElementById("navbar").innerHTML = navbarHTML;
    document.getElementById("footer").innerHTML = footerHTML;

    setTimeout(() => {
      const navElement = document.getElementById("mainNav");
      const hero = document.getElementById("heroCarousel");

      if (navElement && hero) {
        const observer = new IntersectionObserver(([entry]) => {
          navElement.classList.toggle("fixed-top", !entry.isIntersecting);
          navElement.classList.toggle("nav-margin", !entry.isIntersecting);
        }, { threshold: 0 });

        observer.observe(hero);
      }

      new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 70
      });
    }, 300);
  })
  .catch(err => console.error("Component load error:", err));

  // Close navbar on mobile when tapping outside
  const navToggle = document.querySelector(".navbar-toggler");
  const navCollapse = document.querySelector(".navbar-collapse");

  if (navCollapse && navToggle) {
    document.addEventListener("touchstart", (event) => {
      const isInside = navCollapse.contains(event.target) || navToggle.contains(event.target);
      if (!isInside && navCollapse.classList.contains("show")) {
        navToggle.click();
      }
    });
  }
});
