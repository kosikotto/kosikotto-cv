const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("hidden")) {
                entry.target.classList.add("visible");   
            }
        } else {
            entry.target.classList.remove("visible");
        }
    });
},
{
    threshold: 1,  // Mobilon kisebb threshold
    rootMargin: `75px 0px 30px 0px` // Mobilon nagyobb rootMargin
}
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));