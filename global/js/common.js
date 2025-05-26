document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    fetch("global/components/navbar.html").then(res => res.text()),
    fetch("global/components/footer.html").then(res => res.text())
  ])
  .then(([navbarHTML, footerHTML]) => {
    document.getElementById("navbar").innerHTML = navbarHTML;
    document.getElementById("footer").innerHTML = footerHTML;

    // Now wait for injected DOM to register
    setTimeout(() => {
      const navElement = document.getElementById("mainNav");
      const hero = document.getElementById("heroCarousel");

      // Setup sticky nav on scroll
      if (navElement && hero) {
        const observer = new IntersectionObserver(([entry]) => {
          navElement.classList.toggle("fixed-top", !entry.isIntersecting);
          navElement.classList.toggle("mx-3", !entry.isIntersecting);
        }, { threshold: 0 });

        observer.observe(hero);
      }

      // 👇 Force Bootstrap ScrollSpy to reinitialize
      new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 70
      });
    }, 300); // wait just a bit after injection
  })
  .catch(err => console.error("Component load error:", err));
});
