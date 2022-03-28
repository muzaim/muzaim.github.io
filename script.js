const preloader = document.querySelector(".preloader");
const bodyLoaded = () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1110);
};

const scrollOnTop = document.querySelector(".scrollOnTop");
window.addEventListener("scroll", () => {
  window.pageYOffset > 400
    ? (scrollOnTop.style.display = "block")
    : (scrollOnTop.style.display = "none");
});

scrollOnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

// const sr = ScrollReveal({
//   origin: "top",
//   distance: "100px",
//   duration: 2000,
//   reset: true,
// });

// sr.reveal(
//   `.starter,
//   .about,
//   .contagion,
//   .symptoms,
//   .solutions, .map,
//   .contact,
//   footer,
//   span`
// );
