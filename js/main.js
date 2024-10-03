document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-mune");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-btn");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("activeBtn");
  });
});
