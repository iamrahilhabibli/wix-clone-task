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

var carousel = document.getElementById("myCarousel");
var testimonialItems = carousel.querySelectorAll(".testimonial-item");

testimonialItems[0].classList.add("active");

for (var i = 1; i < testimonialItems.length; i++) {
  testimonialItems[i].style.display = "none";
}

carousel
  .querySelector(".left.carousel-control")
  .addEventListener("click", showPreviousTestimonial);
carousel
  .querySelector(".right.carousel-control")
  .addEventListener("click", showNextTestimonial);

function showPreviousTestimonial(event) {
  event.preventDefault();

  var currentActiveItem = carousel.querySelector(".testimonial-item.active");
  var previousItem =
    currentActiveItem.previousElementSibling ||
    testimonialItems[testimonialItems.length - 1];

  currentActiveItem.classList.remove("active");
  currentActiveItem.style.display = "none";

  previousItem.classList.add("active");
  previousItem.style.display = "block";
}

function showNextTestimonial(event) {
  event.preventDefault();

  var currentActiveItem = carousel.querySelector(".testimonial-item.active");
  var nextItem = currentActiveItem.nextElementSibling || testimonialItems[0];

  currentActiveItem.classList.remove("active");
  currentActiveItem.style.display = "none";

  nextItem.classList.add("active");
  nextItem.style.display = "block";
}

const homeLink = document.querySelector(".home-link");
const servicesLink = document.querySelector(".services-link");

const headerContainer = document.querySelector(".header__container");
const headerBotRowContainer = document.querySelector(
  ".header__botrow__container"
);
console.log(headerContainer);
console.log(headerBotRowContainer);

homeLink.addEventListener("click", scrollToHome);
servicesLink.addEventListener("click", scrollToServices);

function scrollToHome(event) {
  event.preventDefault();
  const homeSection = document.querySelector(".home-page");
  const topOffset =
    homeSection.offsetTop -
    headerContainer.offsetHeight -
    headerBotRowContainer.offsetHeight;
  window.scrollTo({ top: topOffset, behavior: "smooth" });
}

function scrollToServices(event) {
  event.preventDefault();
  const servicesSection = document.querySelector(".service-page");
  const topOffset =
    servicesSection.offsetTop -
    headerContainer.offsetHeight -
    headerBotRowContainer.offsetHeight;
  window.scrollTo({ top: topOffset, behavior: "smooth" });
}

const aboutLink = document.querySelector(".about-link");
aboutLink.addEventListener("click", scrollToAbout);

function scrollToAbout(event) {
  event.preventDefault();
  const aboutSection = document.querySelector(".about-page");
  const topOffset =
    aboutSection.offsetTop -
    headerContainer.offsetHeight -
    headerBotRowContainer.offsetHeight;
  window.scrollTo({ top: topOffset, behavior: "smooth" });
}

const testimonialsLink = document.querySelector(".testimonial-link");
testimonialsLink.addEventListener("click", scrollToTestimonials);

function scrollToTestimonials(event) {
  event.preventDefault();
  const testimonialsSection = document.querySelector(".carousel");
  const topOffset =
    testimonialsSection.offsetTop -
    headerContainer.offsetHeight -
    headerBotRowContainer.offsetHeight;
  window.scrollTo({ top: topOffset, behavior: "smooth" });
}
const clientsLink = document.querySelector(".clients-link");
clientsLink.addEventListener("click", scrollToClients);

function scrollToClients(event) {
  event.preventDefault();
  const clientsSection = document.querySelector(".clients__container");
  const topOffset =
    clientsSection.offsetTop -
    headerContainer.offsetHeight -
    headerBotRowContainer.offsetHeight;
  window.scrollTo({ top: topOffset, behavior: "smooth" });
}

const contactsLink = document.querySelector(".contacts-link");
contactsLink.addEventListener("click", scrollToContacts);

function scrollToContacts(event) {
  event.preventDefault();
  const contactsSection = document.querySelector(".contact-page");
  const topOffset =
    contactsSection.offsetTop -
    headerContainer.offsetHeight -
    headerBotRowContainer.offsetHeight;
  window.scrollTo({ top: topOffset, behavior: "smooth" });
}
