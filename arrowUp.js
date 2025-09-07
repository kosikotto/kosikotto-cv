const topArrow = document.querySelector(".topArrow");

window.addEventListener("scroll", (event) => {
   event.preventDefault();

   if (window.scrollY == 0) {
      topArrow.classList.remove("topArrowVisible");
   } else {
      topArrow.classList.add("topArrowVisible");
   }
});