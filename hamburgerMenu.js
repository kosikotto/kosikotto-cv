const header = document.querySelector(".header");

const hamburgerNav = document.querySelector(".hamburgerNav");
const subtitleSections = document.querySelector(".subtitleSections");
const links = document.querySelectorAll(".links");

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

let open = 0;

hamburgerNav.addEventListener("click", ()=> {

    if (open == 1) {
        subtitleSections.classList.remove("subtitleSectionsVisible");

        line1.classList.remove("line1Rotate45");
        line3.classList.remove("line3Rotate45");

        setTimeout(() => {
            line1.classList.remove("line1Width35");
            line3.classList.remove("line3Width35");
            setTimeout(() => {
                line1.classList.remove("line1Transform0");
                line3.classList.remove("line3Transform0");
                setTimeout(() => {
                    line2.classList.remove("line2Transform0");
                }, 150);
            }, 150);
        }, 150);

        open = 0;
    }

    else if (open == 0) {
        line2.classList.add("line2Transform0");
        setTimeout(() => {
            line1.classList.add("line1Transform0");
            line3.classList.add("line3Transform0");
            setTimeout(() => {
                line1.classList.add("line1Width35");
                line3.classList.add("line3Width35");
                setTimeout(() => {
                    line1.classList.add("line1Rotate45");
                    line3.classList.add("line3Rotate45");

                    subtitleSections.classList.add("subtitleSectionsVisible");

                }, 150);
            }, 150);
        }, 150);

        open = 1; 
    }
});

window.addEventListener("scroll", ()=>{
    if (open == 1) {
        subtitleSections.classList.remove("subtitleSectionsVisible");

        line1.classList.remove("line1Rotate45");
        line3.classList.remove("line3Rotate45");

        setTimeout(() => {
            line1.classList.remove("line1Width35");
            line3.classList.remove("line3Width35");
            setTimeout(() => {
                line1.classList.remove("line1Transform0");
                line3.classList.remove("line3Transform0");
                setTimeout(() => {
                    line2.classList.remove("line2Transform0");
                }, 150);
            }, 150);
        }, 150);

        open = 0;
    }
});

links.forEach((elements) => {
    elements.addEventListener("click", ()=>{
        subtitleSections.classList.remove("subtitleSectionsVisible");
    
            line1.classList.remove("line1Rotate45");
            line3.classList.remove("line3Rotate45");
    
            setTimeout(() => {
                line1.classList.remove("line1Width35");
                line3.classList.remove("line3Width35");
                setTimeout(() => {
                    line1.classList.remove("line1Transform0");
                    line3.classList.remove("line3Transform0");
                    setTimeout(() => {
                        line2.classList.remove("line2Transform0");
                    }, 150);
                }, 150);
            }, 150);
    
            open = 0;
    });
});