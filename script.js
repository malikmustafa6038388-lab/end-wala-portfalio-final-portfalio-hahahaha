/* =========================================================
   GMM SOCIAL GROWTH — PREMIUM PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            const expanded = navLinks.classList.contains("active");
            menuBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuBtn.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       ACTIVE NAV LINK
       ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    if (sections.length && navigationLinks.length) {

        const updateActiveLink = () => {

            let currentSection = "";

            const scrollPosition = window.scrollY + 150;

            sections.forEach(section => {

                const top = section.offsetTop;
                const height = section.offsetHeight;

                if (
                    scrollPosition >= top &&
                    scrollPosition < top + height
                ) {
                    currentSection = section.id;
                }

            });

            navigationLinks.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") === "#" + currentSection
                ) {
                    link.classList.add("active");
                }

            });

        };

        window.addEventListener("scroll", updateActiveLink, {
            passive: true
        });

        updateActiveLink();
    }


    /* =====================================================
       HEADER SCROLL EFFECT
       ===================================================== */

    const header = document.querySelector("header");

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        };

        window.addEventListener("scroll", updateHeader, {
            passive: true
        });

        updateHeader();
    }


    /* =====================================================
       REVEAL ANIMATIONS
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".project-card, .graphic-card, .skill-card, .service-card, .document-card, .social-card"
    );

    if (revealElements.length) {

        revealElements.forEach(element => {
            element.style.opacity = "0";
            element.style.transform = "translateY(25px)";
            element.style.transition =
                "opacity .65s ease, transform .65s ease";
        });

        const revealObserver = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    revealObserver.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }


    /* =====================================================
       PROJECT / GRAPHIC IMAGE GALLERY
       ===================================================== */

    const modal = document.querySelector(".modal");

    const modalImage = modal
        ? modal.querySelector("img")
        : null;

    const modalClose = modal
        ? modal.querySelector(".modal-close")
        : null;


    const openModal = imageSource => {

        if (!modal || !modalImage) return;

        modalImage.src = imageSource;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    };


    const closeModal = () => {

        if (!modal) return;

        modal.classList.remove("active");

        document.body.style.overflow = "";

    };


    document.querySelectorAll(
        ".project-card img, .graphic-card img, .document-card img"
    ).forEach(image => {

        image.style.cursor = "zoom-in";

        image.addEventListener("click", () => {

            openModal(image.currentSrc || image.src);

        });

    });


    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }


    if (modal) {

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                closeModal();
            }

        });

    }


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeModal();
        }

    });


    /* =====================================================
       IMAGE ERROR HANDLING
       ===================================================== */

    document.querySelectorAll("img").forEach(image => {

        image.addEventListener("error", () => {

            image.classList.add("image-error");

            console.warn(
                "Image could not be loaded:",
                image.getAttribute("src")
            );

        });

    });


    /* =====================================================
       SOCIAL LINKS — OPEN EXTERNAL ACCOUNTS
       ===================================================== */

    document.querySelectorAll(".social-card").forEach(card => {

        card.setAttribute("target", "_blank");
        card.setAttribute("rel", "noopener noreferrer");

    });


    /* =====================================================
       TYPING EFFECT
       ===================================================== */

    const typingElement = document.querySelector(
        "[data-typing], .typing-text, .typed-text"
    );

    if (typingElement) {

        const words =
            typingElement.dataset.typing
                ? typingElement.dataset.typing
                    .split(",")
                    .map(word => word.trim())
                    .filter(Boolean)
                : [
                    "Digital Marketing",
                    "Shopify Store Design",
                    "SEO",
                    "Social Media Marketing",
                    "Graphic Design",
                    "Video Editing"
                ];

        let wordIndex = 0;
        let characterIndex = 0;
        let deleting = false;

        const typeSpeed = 90;
        const deleteSpeed = 55;
        const pauseAfterWord = 1500;

        const typeLoop = () => {

            if (!words.length) return;

            const currentWord = words[wordIndex];

            if (!deleting) {

                characterIndex++;

                typingElement.textContent =
                    currentWord.slice(0, characterIndex);

                if (characterIndex >= currentWord.length) {

                    deleting = true;

                    setTimeout(typeLoop, pauseAfterWord);

                    return;
                }

            } else {

                characterIndex--;

                typingElement.textContent =
                    currentWord.slice(0, characterIndex);

                if (characterIndex <= 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) % words.length;

                }

            }

            setTimeout(
                typeLoop,
                deleting ? deleteSpeed : typeSpeed
            );

        };

        typeLoop();
    }


    /* =====================================================
       COUNTER ANIMATION
       ===================================================== */

    const counters = document.querySelectorAll(
        "[data-counter], .counter"
    );

    if (counters.length) {

        const counterObserver = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    const element = entry.target;

                    const target = parseInt(
                        element.dataset.counter ||
                        element.textContent.replace(/\D/g, ""),
                        10
                    );

                    if (Number.isNaN(target)) return;

                    const suffix =
                        element.dataset.suffix || "";

                    let start = 0;

                    const duration = 1300;

                    const startTime = performance.now();

                    const animateCounter = currentTime => {

                        const progress = Math.min(
                            (currentTime - startTime) / duration,
                            1
                        );

                        const eased =
                            1 - Math.pow(1 - progress, 3);

                        start = Math.floor(target * eased);

                        element.textContent =
                            start + suffix;

                        if (progress < 1) {
                            requestAnimationFrame(animateCounter);
                        }

                    };

                    requestAnimationFrame(animateCounter);

                    counterObserver.unobserve(element);

                });

            },
            {
                threshold: 0.7
            }
        );

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }


    /* =====================================================
       TILT EFFECT — PREMIUM CARDS
       ===================================================== */

    const tiltCards = document.querySelectorAll(
        ".project-card, .graphic-card, .social-card"
    );

    tiltCards.forEach(card => {

        card.addEventListener("mousemove", event => {

            if (window.innerWidth < 900) return;

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -4;

            const rotateY =
                ((x / rect.width) - 0.5) * 4;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-6px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* =====================================================
       BACK TO TOP
       ===================================================== */

    let backToTop = document.querySelector(".back-to-top");

    if (!backToTop) {

        backToTop = document.createElement("button");

        backToTop.className = "back-to-top";

        backToTop.type = "button";

        backToTop.setAttribute(
            "aria-label",
            "Back to top"
        );

        backToTop.innerHTML = "↑";

        Object.assign(backToTop.style, {
            position: "fixed",
            right: "24px",
            bottom: "24px",
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,.10)",
            background: "linear-gradient(135deg,#f5c451,#ffe08a)",
            color: "#111827",
            fontSize: "20px",
            fontWeight: "900",
            zIndex: "900",
            opacity: "0",
            visibility: "hidden",
            transform: "translateY(10px)",
            transition: ".3s ease",
            boxShadow: "0 10px 30px rgba(0,0,0,.25)"
        });

        document.body.appendChild(backToTop);

    }


    const updateBackToTop = () => {

        if (window.scrollY > 500) {

            backToTop.style.opacity = "1";
            backToTop.style.visibility = "visible";
            backToTop.style.transform = "translateY(0)";

        } else {

            backToTop.style.opacity = "0";
            backToTop.style.visibility = "hidden";
            backToTop.style.transform = "translateY(10px)";

        }

    };


    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    document.querySelectorAll("[data-year]").forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


    const yearElement = document.querySelector(
        "#year, .current-year"
    );

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       EXTERNAL LINKS SAFETY
       ===================================================== */

    document.querySelectorAll(
        'a[href^="http://"], a[href^="https://"]'
    ).forEach(link => {

        link.setAttribute("target", "_blank");
        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* =====================================================
       PREVENT BROKEN # LINKS
       ===================================================== */

    document.querySelectorAll('a[href="#"]').forEach(link => {

        link.addEventListener("click", event => {
            event.preventDefault();
        });

    });


    /* =====================================================
       PAGE LOADED
       ===================================================== */

    document.documentElement.classList.add("js-ready");

    console.log(
        "GMM Social Growth Portfolio loaded successfully."
    );

});
