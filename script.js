/* =========================================================
   GMM SOCIAL GROWTH — PREMIUM PORTFOLIO JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. MOBILE MENU
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            const opened = navLinks.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                opened ? "true" : "false"
            );

            menuToggle.innerHTML = opened ? "✕" : "☰";
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.innerHTML = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =====================================================
       2. CHANGING DIGITAL MARKETING SKILLS
       ===================================================== */

    const changingSkill =
        document.querySelector(".skill-changing") ||
        document.querySelector("#changingSkill") ||
        document.querySelector(".changing-skill");

    const skills = [
        "Social Media Marketing",
        "SEO",
        "Google Ads",
        "Facebook Ads",
        "Instagram Marketing",
        "YouTube Marketing",
        "Content Marketing",
        "Email Marketing",
        "Lead Generation",
        "E-Commerce Marketing",
        "Shopify",
        "Branding",
        "Graphic Design",
        "Video Editing",
        "AI-Powered Marketing"
    ];

    if (changingSkill) {

        let skillIndex = 0;

        changingSkill.textContent = skills[0];

        setInterval(() => {

            changingSkill.style.opacity = "0";
            changingSkill.style.transform = "translateY(8px)";

            setTimeout(() => {

                skillIndex =
                    (skillIndex + 1) % skills.length;

                changingSkill.textContent =
                    skills[skillIndex];

                changingSkill.style.opacity = "1";
                changingSkill.style.transform =
                    "translateY(0)";

            }, 300);

        }, 2200);
    }


    /* =====================================================
       3. SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal, .service-card, .skill-card, .project-card, .graphic-card, .document-card"
        );

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observerInstance.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(element => {

            if (!element.classList.contains("reveal")) {
                element.classList.add("reveal");
            }

            observer.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });
    }


    /* =====================================================
       4. PROJECT GALLERY
       ===================================================== */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        const thumbnail =
            card.querySelector(".project-thumbnail");

        const gallery =
            card.querySelector(".project-gallery");

        if (!thumbnail || !gallery) return;

        /*
         * Click thumbnail to open/close screenshots
         */

        thumbnail.addEventListener("click", () => {

            document
                .querySelectorAll(".project-card.active")
                .forEach(otherCard => {

                    if (otherCard !== card) {
                        otherCard.classList.remove("active");
                    }

                });

            card.classList.toggle("active");

        });


        /*
         * Keyboard support
         */

        thumbnail.setAttribute(
            "tabindex",
            "0"
        );

        thumbnail.setAttribute(
            "role",
            "button"
        );

        thumbnail.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    thumbnail.click();
                }

            }
        );

    });


    /* =====================================================
       5. PROJECT DATA
       ===================================================== */

    /*
     * IMPORTANT:
     * Images are NOT assumed to be inside category folders.
     *
     * All filenames are read directly from the images
     * directory.
     */

    const projects = {

        bags: [
            "bags-1.png",
            "bags-2.png",
            "bags-3.png",
            "bags-4.png",
            "bags-5.png"
        ],

        beauty: [
            "beauty-1.png",
            "beauty-2.png",
            "beauty-3.png",
            "beauty-4.png",
            "beauty-5.png",
            "beauty-6.png"
        ],

        clothing: [
            "clothing-1.png",
            "clothing-2.png",
            "clothing-3.png",
            "clothing-4.png",
            "clothing-5.png"
        ],

        glow: [
            "glow-1.png",
            "glow-2.png",
            "glow-3.png",
            "glow-4.png",
            "glow-5.png"
        ],

        jewellery: [
            "jewellery-1.png",
            "jewellery-2.png",
            "jewellery-3.png",
            "jewellery-4.png",
            "jewellery-5.png",
            "jewellery-6.png"
        ],

        mobileElectronics: [
            "mobile-electronics-1.png",
            "mobile-electronics-2.png",
            "mobile-electronics-3.png",
            "mobile-electronics-4.png",
            "mobile-electronics-5.png",
            "mobile-electronics-6.png"
        ],

        shoes: [
            "shoes-1.png",
            "shoes-2.png",
            "shoes-3.png",
            "shoes-4.png"
        ],

        skincare: [
            "skincare-1.png",
            "skincare-2.png",
            "skincare-3.png",
            "skincare-4.png",
            "skincare-5.png",
            "skincare-6.png"
        ],

        watches: [
            "watches-1.png",
            "watches-2.png",
            "watches-3.png",
            "watches-4.png"
        ],

        fashion: [
            "fashion-1.png",
            "fashion-2.png",
            "fashion-3.png",
            "fashion-4.png",
            "fashion-5.png",
            "fashion-6.png",
            "fashion-7.png"
        ],

        ecommerce: [
            "ecommerce-1.png",
            "ecommerce-2.png",
            "ecommerce-3.png",
            "ecommerce-4.png",
            "ecommerce-5.png"
        ],

        uaeEcommerce: [
            "uae-ecommerce-1.png",
            "uae-ecommerce-2.png",
            "uae-ecommerce-3.png",
            "uae-ecommerce-4.png",
            "uae-ecommerce-5.png"
        ]

    };


    /* =====================================================
       6. AUTOMATICALLY LOAD PROJECT SCREENSHOTS
       ===================================================== */

    const imageFolder =
        "images/";

    function loadProjectGallery(
        projectCard,
        imageNames
    ) {

        const gallery =
            projectCard.querySelector(
                ".project-gallery"
            );

        if (!gallery) return;

        gallery.innerHTML = "";

        imageNames.forEach(
            (imageName, index) => {

                const image =
                    document.createElement("img");

                image.src =
                    imageFolder + imageName;

                image.alt =
                    `Project screenshot ${index + 1}`;

                image.loading = "lazy";

                image.addEventListener(
                    "error",
                    () => {
                        image.remove();
                    }
                );

                gallery.appendChild(image);
            }
        );
    }


    /* =====================================================
       7. MATCH PROJECT CARDS WITH PROJECT DATA
       ===================================================== */

    projectCards.forEach(card => {

        const projectName =
            (
                card.dataset.project ||
                card.dataset.category ||
                card
                    .querySelector("h3")
                    ?.textContent
                    ?.toLowerCase()
            );

        if (!projectName) return;

        const cleanName =
            projectName
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, "");

        let matchedProject = null;

        Object.keys(projects).forEach(key => {

            const cleanKey =
                key
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "");

            if (cleanKey === cleanName) {
                matchedProject = projects[key];
            }

        });

        if (matchedProject) {

            loadProjectGallery(
                card,
                matchedProject
            );
        }

    });


    /* =====================================================
       8. GRAPHIC DESIGN THUMBNAILS
       ===================================================== */

    const graphicImages = [
        "thumbnail-1.png",
        "thumbnail-2.png",
        "thumbnail-3.png",
        "thumbnail-4.png",
        "thumbnail-5.png",
        "thumbnail-6.png",
        "thumbnail-7.png",
        "thumbnail-8.png",
        "thumbnail-9.png"
    ];

    const graphicCards =
        document.querySelectorAll(
            ".graphic-card"
        );

    graphicCards.forEach(
        (card, index) => {

            const image =
                card.querySelector("img");

            if (!image) return;

            if (graphicImages[index]) {

                image.src =
                    imageFolder +
                    graphicImages[index];

                image.alt =
                    `Graphic Design Thumbnail ${index + 1}`;

                image.loading = "lazy";
            }

        }
    );


    /* =====================================================
       9. IMAGE FALLBACK
       ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(image => {

            image.addEventListener(
                "error",
                () => {

                    image.classList.add(
                        "image-error"
                    );

                }
            );

        });


    /* =====================================================
       10. SMOOTH INTERNAL LINKS
       ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link
                            .getAttribute("href");

                    if (
                        !targetId ||
                        targetId === "#"
                    ) return;

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) return;

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       11. HEADER SCROLL EFFECT
       ===================================================== */

    const header =
        document.querySelector(
            "header"
        );

    if (header) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 40) {

                    header.style.boxShadow =
                        "0 10px 35px rgba(0,0,0,.35)";

                } else {

                    header.style.boxShadow =
                        "none";

                }

            },
            { passive: true }
        );

    }


    /* =====================================================
       12. WHATSAPP SERVICE ORDER
       ===================================================== */

    const whatsappButtons =
        document.querySelectorAll(
            ".whatsapp-btn, [data-whatsapp]"
        );

    whatsappButtons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                /*
                 * If a normal WhatsApp link is already
                 * provided in HTML, don't replace it.
                 */

                const existingHref =
                    button.getAttribute("href");

                if (
                    existingHref &&
                    existingHref.includes("wa.me")
                ) {
                    return;
                }

                const phone =
                    button.dataset.whatsapp;

                if (!phone) return;

                event.preventDefault();

                const message =
                    encodeURIComponent(
                        "Hello GMM Social Growth, I am interested in your services."
                    );

                window.open(
                    `https://wa.me/${phone}?text=${message}`,
                    "_blank"
                );

            }
        );

    });


    /* =====================================================
       13. PROJECT HOVER GLOW
       ===================================================== */

    projectCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                card.style.setProperty(
                    "--mouse-x",
                    `${x}px`
                );

                card.style.setProperty(
                    "--mouse-y",
                    `${y}px`
                );

            }
        );

    });


    /* =====================================================
       14. PREVENT IMAGE DRAGGING
       ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(image => {

            image.addEventListener(
                "dragstart",
                event => {
                    event.preventDefault();
                }
            );

        });


    /* =====================================================
       15. CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "#currentYear, .current-year"
        );

    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       16. PAGE LOADED
       ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );

});
