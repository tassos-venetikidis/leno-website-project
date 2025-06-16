document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");

  toggleButton.addEventListener("click", function () {
    const mobileMenuItems = document.querySelector(
      ".navbar__mobile-menu-items"
    );

    mobileMenuItems.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});
