let observer2 = null;

function setupObserver() {
    const linkek = document.querySelectorAll(".links");

    // Ellenőrizzük, hogy mobilon vagy asztali nézetben vagyunk-e
    const isMobile = window.innerWidth <= 768; // 768px szélesség alatt mobilnak tekintjük

    let viewportHeight = window.innerHeight;
    let viewportWidth = window.innerWidth;

    let bottomVisible = 0;

    if (innerHeight >= innerWidth) {
        bottomVisible = innerHeight * 0.7;
    } else {
        bottomVisible = innerHeight * 0.4;
    }

    // Az előző observer-t lekapcsoljuk (ha létezik)
    if (observer2) {
        observer2.disconnect();
    }

    const observerOptions = {
        threshold: 1,  // Mobilon kisebb threshold
        rootMargin: `70px 0px -${bottomVisible}px 0px` // Mobilon nagyobb rootMargin
    };

    // Új IntersectionObserver létrehozása
    observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Csak akkor aktiválódjon, ha az elem legalább a threshold-nak megfelelően látható

                // Ellenőrizzük az egyes section-öket és adunk 'linksActive'-et
                if (entry.target.classList.contains("mainTitle")) {
                    linkek.forEach((entries) => {
                        entries.classList.remove("linksActive");
                    });
                }

                if (entry.target.classList.contains("first")) {
                    linkek.forEach((entries) => {
                        entries.classList.remove("linksActive");
                    });

                    linkek[0].classList.add("linksActive");
                }
                if (entry.target.classList.contains("second")) {
                    linkek.forEach((entries) => {
                        entries.classList.remove("linksActive");
                    });

                    linkek[1].classList.add("linksActive");
                }
                if (entry.target.classList.contains("third")) {
                    linkek.forEach((entries) => {
                        entries.classList.remove("linksActive");
                    });

                    linkek[2].classList.add("linksActive");
                }
                if (entry.target.classList.contains("fourth")) {
                    linkek.forEach((entries) => {
                        entries.classList.remove("linksActive");
                    });

                    linkek[3].classList.add("linksActive");
                }
                if (entry.target.classList.contains("fifth")) {
                    linkek.forEach((entries) => {
                        entries.classList.remove("linksActive");
                    });

                    linkek[4].classList.add("linksActive");
                }
                if (entry.target.classList.contains("sixth")) {
                    linkek.forEach((entries) => {
                        entries.classList.remove("linksActive");
                    });

                    linkek[5].classList.add("linksActive");
                }
                if (entry.target.classList.contains("seventh")) {
                    linkek.forEach((entries) => {
                        entries.classList.remove("linksActive");
                    });

                    linkek[6].classList.add("linksActive");
                }
                if (entry.target.classList.contains("eighth")) {
                    linkek.forEach((entries) => {
                        entries.classList.remove("linksActive");
                    });

                    linkek[7].classList.add("linksActive");
                }
                if (entry.target.classList.contains("ninth")) {
                    linkek.forEach((entries) => {
                        entries.classList.remove("linksActive");
                    });

                    linkek[8].classList.add("linksActive");
                }
            }
        });
    }, observerOptions);

    // Minden section figyelése
    const backgroundDiv = document.querySelectorAll(".subtitle");
    backgroundDiv.forEach((el) => observer2.observe(el));
}

// A funkció meghívása az oldal betöltésekor
window.addEventListener("load", setupObserver);

// Méretváltozás esetén újra futtatjuk, hogy dinamikusan reagáljon
window.addEventListener("resize", setupObserver);
