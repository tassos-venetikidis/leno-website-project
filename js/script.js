document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");

  toggleButton.addEventListener("click", function () {
    const mobileMenuItems = document.querySelector(
      ".navbar__mobile-menu-items"
    );

    mobileMenuItems.classList.toggle("active");
  });

  // Video Modal
  const modal = document.getElementById("videoModal");
  const videoButton = document.querySelector(".preview__video-button");
  const closeButton = document.querySelector(".modal__close-button");
  const videoPlayer = document.getElementById("videoPlayer");

  // Open Modal When Clicked
  videoButton.addEventListener("click", function () {
    // Show Modal
    modal.setAttribute("style", "display: block;");

    // Replace the src attribute with the video URL
    videoPlayer.src =
      "https://www.youtube.com/embed/TcLps_Ja51w?si=qyucWwbE9eZQU3WQ";

    // Close Modal on Close Button Click
    closeButton.addEventListener("click", function () {
      modal.setAttribute("style", "display: none;");
      videoPlayer.src = "";
    });

    // Close Modal on Outter Click
    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.setAttribute("style", "display: none;");
        videoPlayer.src = "";
      }
    });
  });
});

// Navigation background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});
