/* =========================================================
   GMM SOCIAL GROWTH — PREMIUM PORTFOLIO
   script.js
   ========================================================= */


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       ELEMENTS
    ----------------------------------------------------- */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    const backToTop = document.querySelector(".back-to-top");

    const lightbox = document.querySelector(".lightbox");
    const lightboxClose = document.querySelector(".lightbox-close");

    const lightboxTitle =
        document.querySelector(".lightbox-content h2");

    const lightboxGallery =
        document.querySelector(".lightbox-gallery");

    const navLinks =
        document.querySelectorAll("nav a");

    const projectCards =
        document.querySelectorAll(".project-card");

    const graphicCards =
        document.querySelectorAll(".graphic-card");



    /* =====================================================
       MOBILE MENU
       ===================================================== */

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("active");

            const isOpen =
                nav.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* Close menu after clicking a link */

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }



    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const header =
                document.querySelector("header");

            const headerHeight =
                header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight +
                5;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });



    /* =====================================================
       PROJECT IMAGE GALLERY
       
       IMPORTANT:
       Project card can contain:
       
       data-project="fashion"
       data-title="Fashion Store"

       Gallery images can use:
       
       data-gallery="fashion"
       data-image="projects/fashion-1.png"

       If images are uploaded separately on GitHub,
       this system can use the exact filenames.
       ===================================================== */


    const projectGalleryData = {

        fashion: [
            "fashion-1.png",
            "fashion-2.png",
            "fashion-3.png"
        ],

        bags: [
            "bags-1.png",
            "bags-2.png",
            "bags-3.png"
        ],

        beauty: [
            "beauty-1.png",
            "beauty-2.png",
            "beauty-3.png"
        ],

        ecommerce: [
            "ecommerce-1.png",
            "ecommerce-2.png",
            "ecommerce-3.png"
        ],

        "uae-ecommerce": [
            "uae-ecommerce-1.png",
            "uae-ecommerce-2.png",
            "uae-ecommerce-3.png"
        ]

    };



    /* =====================================================
       OPEN PROJECT
       ===================================================== */

    function openProjectGallery(
        projectName,
        projectTitle
    ) {

        if (!lightbox || !lightboxGallery) {
            return;
        }


        const images =
            projectGalleryData[projectName];


        if (!images || images.length === 0) {

            lightboxGallery.innerHTML = `
                <div style="
                    grid-column:1/-1;
                    text-align:center;
                    padding:50px 20px;
                    color:#aaa;
                ">
                    Project images will be added soon.
                </div>
            `;

        } else {

            lightboxGallery.innerHTML = "";

            images.forEach((imageName, index) => {

                const img =
                    document.createElement("img");

                img.src =
                    imageName;

                img.alt =
                    `${projectTitle} screenshot ${index + 1}`;

                img.loading = "lazy";

                img.onerror = function () {

                    this.style.display = "none";

                };

                lightboxGallery.appendChild(img);

            });

        }


        if (lightboxTitle) {

            lightboxTitle.textContent =
                projectTitle || "Project";

        }


        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    }



    /* =====================================================
       PROJECT BUTTONS
       ===================================================== */

    projectCards.forEach(card => {

        const button =
            card.querySelector(".view-project");

        if (!button) {
            return;
        }


        button.addEventListener("click", () => {

            const projectName =
                card.dataset.project;

            const projectTitle =
                card.dataset.title ||
                card.querySelector("h3")?.textContent ||
                "Project";

            openProjectGallery(
                projectName,
                projectTitle
            );

        });

    });



    /* =====================================================
       GRAPHIC DESIGN GALLERY
       
       Graphic cards normally show ONE thumbnail.
       Clicking it opens the image.
       ===================================================== */

    graphicCards.forEach(card => {

        card.addEventListener("click", () => {

            const image =
                card.querySelector("img");

            if (!image) {
                return;
            }


            if (!lightbox || !lightboxGallery) {
                return;
            }


            lightboxGallery.innerHTML = "";


            const img =
                document.createElement("img");

            img.src =
                image.src;

            img.alt =
                image.alt ||
                "Graphic Design";

            img.style.gridColumn =
                "1 / -1";

            lightboxGallery.appendChild(img);


            if (lightboxTitle) {

                lightboxTitle.textContent =
                    card.dataset.title ||
                    "Graphic Design";

            }


            lightbox.classList.add("active");

            document.body.style.overflow =
                "hidden";

        });

    });



    /* =====================================================
       CLOSE LIGHTBOX
       ===================================================== */

    function closeLightbox() {

        if (!lightbox) {
            return;
        }

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }


    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }


    /* Close by clicking outside */

    if (lightbox) {

        lightbox.addEventListener(
            "click",
            event => {

                if (
                    event.target === lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }


    /* Close with ESC */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeLightbox();

            }

        }
    );



    /* =====================================================
       BACK TO TOP
       ===================================================== */

    function handleBackToTop() {

        if (!backToTop) {
            return;
        }


        if (window.scrollY > 600) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }


    window.addEventListener(
        "scroll",
        handleBackToTop,
        { passive: true }
    );


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }



    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");


            if (
                currentSection &&
                href === `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );



    /* =====================================================
       SCROLL REVEAL ANIMATION
       ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".service-card, " +
            ".project-card, " +
            ".graphic-card, " +
            ".skill-card, " +
            ".certificate-card, " +
            ".contact-item, " +
            ".stat-card"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach(
            element => {

                element.style.opacity = "0";

                element.style.transform =
                    "translateY(25px)";

                element.style.transition =
                    "opacity 0.65s ease, transform 0.65s ease";

                observer.observe(element);

            }
        );

    }



    /* =====================================================
       ADD VISIBLE CLASS STYLE
       ===================================================== */

    const revealStyle =
        document.createElement("style");


    revealStyle.textContent = `

        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

        nav a.active {
            color: #ffffff !important;
        }

        nav a.active::after {
            width: 100% !important;
        }

    `;


    document.head.appendChild(
        revealStyle
    );



    /* =====================================================
       WHATSAPP BUTTON
       
       IMPORTANT:
       Replace the number below with your actual
       WhatsApp number if it is not already in HTML.
       
       Pakistan format:
       923XXXXXXXXX
       ===================================================== */

    const whatsappNumber =
        "923XXXXXXXXX";


    document.querySelectorAll(
        "[data-whatsapp]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const service =
                    button.dataset.whatsapp ||
                    "Website Inquiry";


                const message =
                    `Hello GMM Social Growth,%0A%0A` +
                    `I am interested in: ${service}%0A%0A` +
                    `Please share more details.`;


                window.open(
                    `https://wa.me/${whatsappNumber}?text=${message}`,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    });



    /* =====================================================
       SERVICE ORDER BUTTONS
       
       Example HTML:
       
       <button data-service="Social Media Marketing">
          Order Service
       </button>
       ===================================================== */

    document.querySelectorAll(
        "[data-service]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();


                const service =
                    button.dataset.service;


                const message =
                    `Hello GMM Social Growth,%0A%0A` +
                    `I want to order this service:%0A` +
                    `${service}%0A%0A` +
                    `Please contact me with the details.`;


                window.open(
                    `https://wa.me/${whatsappNumber}?text=${message}`,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    });



    /* =====================================================
       IMAGE ERROR HANDLING
       
       Prevents broken images from destroying layout.
       ===================================================== */

    document.querySelectorAll("img")
        .forEach(img => {

            img.addEventListener(
                "error",
                () => {

                    img.classList.add(
                        "image-error"
                    );

                }
            );

        });



    /* =====================================================
       LAZY LOADING
       ===================================================== */

    document.querySelectorAll(
        "img:not([loading])"
    ).forEach(img => {

        img.setAttribute(
            "loading",
            "lazy"
        );

    });



    /* =====================================================
       PAGE LOADED
       ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );


    updateActiveNavigation();

    handleBackToTop();

});
