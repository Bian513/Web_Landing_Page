//Toggle class active
const navbarNav = document.querySelectorAll("navbar-nav");
//ketika hamburger menu di klik
document.querySelectorAll("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
