/* =========================================================
   PORTFOLIO WEBSITE - MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        // Close menu after clicking a navigation link
        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header = document.querySelector("header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =====================================================
       BACK TO TOP BUTTON
    ===================================================== */

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    const typingElement = document.querySelector(".typing-text");

    if (typingElement) {

        const words = [
            "Digital Marketing Expert",
            "E-Commerce Expert",
            "Social Media Manager",
            "Shopify Store Designer",
            "Graphic Designer",
            "Video Editor"
        ];

        let wordIndex = 0;
        let charIndex = 0;

        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentWord.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1800);

                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length) {
                        wordIndex = 0;
                    }

                }
            }

            const speed = deleting ? 45 : 85;

            setTimeout(typeEffect, speed);
        }

        typeEffect();
    }


    /* =====================================================
       SCROLL REVEAL ANIMATION
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".service-card, .project-card, .graphic-card, .review-card, .skill-box .card, .contact-item, .cert-box"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("reveal-show");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("reveal-show");
        });

    }


    /* =====================================================
       PROJECT IMAGE LIGHTBOX
    ===================================================== */

    const projectImages = document.querySelectorAll(
        ".project-image img, .graphic-card img"
    );

    const lightbox = document.querySelector(".lightbox");

    if (lightbox && projectImages.length > 0) {

        const lightboxImage =
            lightbox.querySelector(".lightbox-image");

        const closeLightbox =
            lightbox.querySelector(".lightbox-close");

        projectImages.forEach(image => {

            image.addEventListener("click", () => {

                if (!lightboxImage) return;

                lightboxImage.src = image.src;

                lightbox.classList.add("active");

                document.body.style.overflow = "hidden";

            });

        });

        if (closeLightbox) {

            closeLightbox.addEventListener("click", () => {

                lightbox.classList.remove("active");

                document.body.style.overflow = "";

            });

        }

        lightbox.addEventListener("click", event => {

            if (event.target === lightbox) {

                lightbox.classList.remove("active");

                document.body.style.overflow = "";

            }

        });

    }


    /* =====================================================
       ESCAPE KEY - CLOSE LIGHTBOX / MENU
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (nav) {
                nav.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.classList.remove("active");
            }

            if (lightbox) {
                lightbox.classList.remove("active");

                document.body.style.overflow = "";
            }
        }

    });


    /* =====================================================
       SMOOTH ANCHOR SCROLL
    ===================================================== */

    const anchorLinks =
        document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                targetId.length < 2
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const headerHeight =
                header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       WHATSAPP SERVICE ORDER
    ===================================================== */

    const whatsappForm =
        document.querySelector("#whatsappForm");

    if (whatsappForm) {

        whatsappForm.addEventListener("submit", event => {

            event.preventDefault();

            const name =
                document.querySelector("#name")?.value.trim() || "";

            const email =
                document.querySelector("#email")?.value.trim() || "";

            const phone =
                document.querySelector("#phone")?.value.trim() || "";

            const service =
                document.querySelector("#service")?.value.trim() || "";

            const message =
                document.querySelector("#message")?.value.trim() || "";

            if (!name || !service) {

                alert(
                    "Please enter your name and select a service."
                );

                return;
            }

            const whatsappNumber =
                "923126038388";

            const whatsappMessage =
                `Hello Ghulam Mustafa,

I want to order your service.

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Project Details:
${message || "Not provided"}

Please contact me regarding this project.`;

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(whatsappMessage);

            window.open(
                whatsappURL,
                "_blank"
            );

        });
    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElements =
        document.querySelectorAll(".current-year");

    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    const allImages =
        document.querySelectorAll("img");

    allImages.forEach(image => {

        image.addEventListener("error", () => {

            image.classList.add("image-error");

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll("nav a[href^='#']");

    if (
        sections.length > 0 &&
        navigationLinks.length > 0
    ) {

        const activeObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            navigationLinks.forEach(link => {
                                link.classList.remove("active");
                            });

                            const activeLink =
                                document.querySelector(
                                    `nav a[href="#${entry.target.id}"]`
                                );

                            if (activeLink) {
                                activeLink.classList.add("active");
                            }

                        }

                    });

                },
                {
                    rootMargin: "-30% 0px -60% 0px"
                }
            );

        sections.forEach(section => {
            activeObserver.observe(section);
        });

    }


    /* =====================================================
       PROJECT CARD HOVER TILT
    ===================================================== */

    const cards =
        document.querySelectorAll(
            ".project-card, .graphic-card"
        );

    cards.forEach(card => {

        card.addEventListener("mousemove", event => {

            if (window.innerWidth < 768) return;

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%cGMM Social Growth Portfolio",
        "font-size:20px;font-weight:bold;color:#9e1f43;"
    );

    console.log(
        "Website loaded successfully."
    );

});