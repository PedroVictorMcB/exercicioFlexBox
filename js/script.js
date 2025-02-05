function scrollToSection() {
  const target = document.getElementById("features");
  target.scrollIntoView({ behavior: "smooth" });
}

function toggleMobileMenu() {
  const menuHamburger = document.getElementById("mobile-menu-hamburger");
  const itemsTopNav = document.getElementById("items-topnav");
  const itemstopNavHeight = itemsTopNav.offsetHeight;
  if (itemsTopNav.classList.contains("hide")) {
    itemsTopNav.classList.remove("hide");
    menuHamburger.classList.add("close");
  } else {
    itemsTopNav.classList.add("hide");
    menuHamburger.classList.remove("close");
  }
}
