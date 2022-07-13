const $ = item => document.querySelector(item);

const toggleNavbar = () => {
  const toggler = $("#navbar-toggler");
  const navbarMenu = $(".app_header-mobile-menu");
  const navbarBack = $(".app_header-mobile-black");

  toggler.addEventListener("click", () => {
    for (let i = 0; i < toggler.children.length; i++) {
      toggler.children[i].classList.toggle("opened");
    }

    navbarMenu.classList.toggle("opened");
    navbarBack.classList.toggle("opened");
    document.body.classList.toggle("navbar-opened");
  });
}

const scrollToTop = () => {
  const scrollToTopEl = $(".scroll-to-top");

  scrollToTopEl.addEventListener("click", () => {
    window.scrollTo(0, 0);
  })
}

window.addEventListener("scroll", () => {
  const desktopNav = $(".app_navbar");
  const mobileNav = $(".app_header-mobile-nav");
  const scrollToTopEl = $(".scroll-to-top");

  if (window.scrollY > 165.8000030517578) {
    desktopNav.classList.add("fixed");
    scrollToTopEl.style.display = "block"
  }
  else {
    desktopNav.classList.remove("fixed");
    scrollToTopEl.style.display = "none"
  }

  if (window.scrollY > 39.20000076293945)
    mobileNav.classList.add("fixed");
  else
    mobileNav.classList.remove("fixed");
});

window.addEventListener('DOMContentLoaded', () => {
  toggleNavbar();
  scrollToTop();
});
