document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");

  toggleButton.addEventListener("click", function () {
    const mobileMenuItems = document.querySelector(
      ".navbar__mobile-menu-items"
    );

    mobileMenuItems.classList.toggle("active");
  });
});
