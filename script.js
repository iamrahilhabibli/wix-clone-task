const headerBotrow = document.querySelector(".header__botrow__container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    headerBotrow.classList.add("header__botrow__scrolled");
  } else {
    headerBotrow.classList.remove("header__botrow__scrolled");
  }
});

window.addEventListener("scroll", function () {
  var servicePage = document.querySelector(".service-page");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  var moveDistance = scrollTop * 1;

  servicePage.style.transform = "translateY(-" + moveDistance + "px)";
});
