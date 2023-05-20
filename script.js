// const headerBotrow = document.querySelector(".header__botrow__container");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {
//     headerBotrow.classList.add("header__botrow__scrolled");
//   } else {
//     headerBotrow.classList.remove("header__botrow__scrolled");
//   }
// });

// window.addEventListener("scroll", function () {
//   var servicePage = document.querySelector(".serviceWrapperScript");
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   var moveDistance = scrollTop * 0.6;

//   servicePage.style.transform = "translateY(-" + moveDistance + "px)";
// });

// // Get the carousel element
// var carousel = document.getElementById("myCarousel");

// // Get the previous and next buttons
// var prevButton = carousel.querySelector(".carousel-control-prev");
// var nextButton = carousel.querySelector(".carousel-control-next");

// // Get all carousel items
// var slides = carousel.querySelectorAll(".carousel-item");

// // Start with the first slide active
// slides[0].classList.add("active");

// // Attach event listeners to the buttons
// prevButton.addEventListener("click", function () {
//   var currentSlide = carousel.querySelector(".carousel-item.active");
//   var prevSlide =
//     currentSlide.previousElementSibling || slides[slides.length - 1];
//   currentSlide.classList.remove("active");
//   prevSlide.classList.add("active");
// });

// nextButton.addEventListener("click", function () {
//   var currentSlide = carousel.querySelector(".carousel-item.active");
//   var nextSlide = currentSlide.nextElementSibling || slides[0];
//   currentSlide.classList.remove("active");
//   nextSlide.classList.add("active");
// });

const homeLink = document.querySelector(".home-link");
const servicesLink = document.querySelector(".services-link");

// Get references to the fixed elements
const headerContainer = document.querySelector(".header__container");
const headerBotRowContainer = document.querySelector(
  ".header__botrow__container"
);
console.log(headerContainer);
console.log(headerBotRowContainer);

// Add click event listeners to the menu items
homeLink.addEventListener("click", scrollToHome);
servicesLink.addEventListener("click", scrollToServices);

// Scroll to the home page section
function scrollToHome(event) {
  event.preventDefault(); // Prevent the default link behavior
  const homeSection = document.querySelector(".home-page");
  const topOffset =
    homeSection.offsetTop -
    headerContainer.offsetHeight -
    headerBotRowContainer.offsetHeight;
  window.scrollTo({ top: topOffset, behavior: "smooth" });
}

// Scroll to the services page section
function scrollToServices(event) {
  event.preventDefault(); // Prevent the default link behavior
  const servicesSection = document.querySelector(".service-page");
  const topOffset =
    servicesSection.offsetTop -
    headerContainer.offsetHeight -
    headerBotRowContainer.offsetHeight;
  window.scrollTo({ top: topOffset, behavior: "smooth" });
}
