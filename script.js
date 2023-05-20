const headerBotrow = document.querySelector(".header__botrow__container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    headerBotrow.classList.add("header__botrow__scrolled");
  } else {
    headerBotrow.classList.remove("header__botrow__scrolled");
  }
});

window.addEventListener("scroll", function () {
  var servicePage = document.querySelector(".serviceWrapperScript");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  var moveDistance = scrollTop * 0.6;

  servicePage.style.transform = "translateY(-" + moveDistance + "px)";
});

// Get the carousel element
var carousel = document.getElementById("myCarousel");

// Get the previous and next buttons
var prevButton = carousel.querySelector(".carousel-control-prev");
var nextButton = carousel.querySelector(".carousel-control-next");

// Get all carousel items
var slides = carousel.querySelectorAll(".carousel-item");

// Start with the first slide active
slides[0].classList.add("active");

// Attach event listeners to the buttons
prevButton.addEventListener("click", function () {
  var currentSlide = carousel.querySelector(".carousel-item.active");
  var prevSlide =
    currentSlide.previousElementSibling || slides[slides.length - 1];
  currentSlide.classList.remove("active");
  prevSlide.classList.add("active");
});

nextButton.addEventListener("click", function () {
  var currentSlide = carousel.querySelector(".carousel-item.active");
  var nextSlide = currentSlide.nextElementSibling || slides[0];
  currentSlide.classList.remove("active");
  nextSlide.classList.add("active");
});
