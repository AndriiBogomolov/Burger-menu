// Nav burger-menu selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// document.addEventListener("DOMContentLoaded", function () {
//   const scrollUp = document.querySelector("#scroll-up");

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 0) {
//       scrollUp.style.display = "block";
//     } else {
//       scrollUp.style.display = "none";
//     }
//     // below console returns the number of pixels by which the document is scrolled in the vertical direction
//     // console.log("Window Scroll Y:", window.scrollY);
//   });

//   scrollUp.addEventListener("click", () => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//     // console.log("Scroll to top button clicked!");
//   });
// });

// scroll to top functionaluty
// const scrollUp = document.querySelector("#scroll-up");

// scrollUp.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// });
