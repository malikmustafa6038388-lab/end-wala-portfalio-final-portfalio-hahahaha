/* =========================================================
   GMM SOCIAL GROWTH — PREMIUM PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. MOBILE NAVIGATION
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =====================================================
       2. NAVBAR SCROLL EFFECT
       ===================================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.style.background = "rgba(5, 8, 22, 0.92)";
            navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,0.25)";
        } else {
            navbar.style.background = "rgba(5, 8, 22, 0.72)";
            navbar.style.boxShadow = "none";
        }
    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();


    /* =====================================================
       3. DYNAMIC GALAXY STARS
       ===================================================== */

    const galaxyContainer = document.createElement("div");

    galaxyContainer.className = "galaxy-stars";

    galaxyContainer.style.position = "fixed";
    galaxyContainer.style.inset = "0";
    galaxyContainer.style.pointerEvents = "none";
    galaxyContainer.style.zIndex = "-4";
    galaxyContainer.style.overflow = "hidden";

    document.body.appendChild(galaxyContainer);

    const starCount = 90;

    for (let i = 0; i < starCount; i++) {

        const star = document.createElement("span");

        star.style.position = "absolute";

        const size = Math.random() * 2.5 + 0.5;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.borderRadius = "50%";

        star.style.background = "rgba(255,255,255,0.75)";

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        star.style.opacity = `${Math.random() * 0.7 + 0.2}`;

        star.style.animation = `
            starFloat ${Math.random() * 8 + 6}s
            ease-in-out
            infinite
        `;

        star.style.animationDelay = `${Math.random() * 5}s`;

        galaxyContainer.appendChild(star);
    }

    const starAnimationStyle = document.createElement("style");

    starAnimationStyle.innerHTML = `
        @keyframes starFloat {
            0%,100% {
                transform: translate(0,0);
                opacity: .25;
            }

            50% {
                transform: translate(
                    ${Math.random() * 20 - 10}px,
                    ${Math.random() * 20 - 10}px
                );
                opacity: 1;
            }
        }
    `;

    document.head.appendChild(starAnimationStyle);


    /* =====================================================
       4. DIGITAL MARKETING SKILL ROTATION
       ===================================================== */

    const skillText =
        document.querySelector(
            ".changing-skill, #changing-skill, .skill-changing"
        );

    if (skillText) {

        const skills = [
            "SEO",
            "Social Media Marketing",
            "Meta Ads",
            "TikTok Ads",
            "Google Ads",
            "Shopify Store Design",
            "E-Commerce Marketing",
            "Graphic Design",
            "Video Editing",
            "UGC Ads",
            "Content Creation",
            "Lead Generation",
            "Brand Strategy"
        ];

        let skillIndex = 0;

        skillText.textContent = skills[skillIndex];

        setInterval(() => {

            skillText.style.opacity = "0";
            skillText.style.transform = "translateY(10px)";

            setTimeout(() => {

                skillIndex =
                    (skillIndex + 1) % skills.length;

                skillText.textContent =
                    skills[skillIndex];

                skillText.style.opacity = "1";
                skillText.style.transform = "translateY(0)";

            }, 300);

        }, 2200);

        skillText.style.transition =
            "opacity .3s ease, transform .3s ease";
    }


    /* =====================================================
       5. SHOPIFY PROJECT DATA
       ===================================================== */

    const shopifyProjects = {

        bags: {
            name: "Bags Store",
            thumbnail: "bags-thumbnail.png",
            screenshots: [
                "bags-1.png",
                "bags-2.png",
                "bags-3.png",
                "bags-4.png",
                "bags-5.png"
            ]
        },

        beauty: {
            name: "Beauty Store",
            thumbnail: "beauty-thumbnail.png",
            screenshots: [
                "beauty-1.png",
                "beauty-2.png",
                "beauty-3.png",
                "beauty-4.png",
                "beauty-5.png",
                "beauty-6.png"
            ]
        },

        clothing: {
            name: "Clothing Store",
            thumbnail: "clothing-thumbnail.png",
            screenshots: [
                "clothing-1.png",
                "clothing-2.png",
                "clothing-3.png",
                "clothing-4.png",
                "clothing-5.png"
            ]
        },

        glow: {
            name: "Glow Store",
            thumbnail: "glow-thumbnail.png",
            screenshots: [
                "glow-1.png",
                "glow-2.png",
                "glow-3.png",
                "glow-4.png",
                "glow-5.png"
            ]
        },

        jewellery: {
            name: "Jewellery Store",
            thumbnail: "jewellery-thumbnail.png",
            screenshots: [
                "jewellery-1.png",
                "jewellery-2.png",
                "jewellery-3.png",
                "jewellery-4.png",
                "jewellery-5.png",
                "jewellery-6.png"
            ]
        },

        mobileElectronics: {
            name: "Mobile Electronics Store",
            thumbnail: "mobile-electronics-thumbnail.png",
            screenshots: [
                "mobile-electronics-1.png",
                "mobile-electronics-2.png",
                "mobile-electronics-3.png",
                "mobile-electronics-4.png",
                "mobile-electronics-5.png",
                "mobile-electronics-6.png"
            ]
        },

        shoes: {
            name: "Shoes Store",
            thumbnail: "shoes-thumbnail.png",
            screenshots: [
                "shoes-1.png",
                "shoes-2.png",
                "shoes-3.png",
                "shoes-4.png"
            ]
        },

        skincare: {
            name: "Skincare Store",
            thumbnail: "skincare-thumbnail.png",
            screenshots: [
                "skincare-1.png",
                "skincare-2.png",
                "skincare-3.png",
                "skincare-4.png",
                "skincare-5.png",
                "skincare-6.png"
            ]
        },

        watches: {
            name: "Watches Store",
            thumbnail: "watches-thumbnail.png",
            screenshots: [
                "watches-1.png",
                "watches-2.png",
                "watches-3.png",
                "watches-4.png"
            ]
        },

        fashion: {
            name: "Fashion Store",
            thumbnail: "fashion-thumbnail.png",
            screenshots: [
                "fashion-1.png",
                "fashion-2.png",
                "fashion-3.png",
                "fashion-4.png",
                "fashion-5.png",
                "fashion-6.png",
                "fashion-7.png"
            ]
        },

        ecommerce: {
            name: "E-Commerce Store",
            thumbnail: "ecommerce-thumbnail.png",
            screenshots: [
                "ecommerce-1.png",
                "ecommerce-2.png",
                "ecommerce-3.png",
                "ecommerce-4.png",
                "ecommerce-5.png"
            ]
        },

        uaeEcommerce: {
            name: "UAE E-Commerce Store",
            thumbnail: "uae-ecommerce-thumbnail.png",
            screenshots: [
                "uae-ecommerce-1.png",
                "uae-ecommerce-2.png",
                "uae-ecommerce-3.png",
                "uae-ecommerce-4.png",
                "uae-ecommerce-5.png"
            ]
        }
    };


    /* =====================================================
       6. GENERATE SHOPIFY PROJECTS
       ===================================================== */

    const storeContainer =
        document.querySelector(
            "#store-projects, .store-projects"
        );

    if (storeContainer) {

        storeContainer.innerHTML = "";

        Object.entries(shopifyProjects)
            .forEach(([key, project]) => {

                const card =
                    document.createElement("article");

                card.className =
                    "store-card reveal";

                card.dataset.category = key;

                card.innerHTML = `

                    <div class="store-thumbnail">

                        <img
                            src="${project.thumbnail}"
                            alt="${project.name}"
                            loading="lazy"
                            class="clickable-image"
                        >

                    </div>

                    <div class="store-info">

                        <span class="badge">
                            Shopify Store
                        </span>

                        <h3>
                            ${project.name}
                        </h3>

                        <p>
                            Premium Shopify store design
                            and e-commerce experience.
                        </p>

                    </div>

                    <div class="store-gallery">

                        ${project.screenshots.map(
                            image => `
                                <img
                                    src="${image}"
                                    alt="${project.name} screenshot"
                                    loading="lazy"
                                    class="clickable-image"
                                >
                            `
                        ).join("")}

                    </div>

                `;

                storeContainer.appendChild(card);
            });
    }


    /* =====================================================
       7. GRAPHIC DESIGN PROJECTS
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

    const graphicContainer =
        document.querySelector(
            "#graphics-grid, .graphics-grid"
        );

    if (graphicContainer) {

        graphicContainer.innerHTML = "";

        graphicImages.forEach(
            (image, index) => {

                const card =
                    document.createElement("article");

                card.className =
                    "graphic-card reveal";

                card.dataset.category =
                    "graphic-design";

                card.innerHTML = `

                    <img
                        src="${image}"
                        alt="Graphic Design Project ${index + 1}"
                        loading="lazy"
                        class="clickable-image"
                    >

                    <div class="graphic-info">

                        <h3>
                            Graphic Design Project
                            ${index + 1}
                        </h3>

                    </div>

                `;

                graphicContainer.appendChild(card);
            }
        );
    }


    /* =====================================================
       8. PROJECT FILTER
       ===================================================== */

    const filterButtons =
        document.querySelectorAll(
            ".filter-btn"
        );

    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(btn => {
                    btn.classList.remove("active");
                });

                button.classList.add("active");

                const filter =
                    button.dataset.filter ||
                    button.getAttribute("data-filter");

                const projects =
                    document.querySelectorAll(
                        ".project-card, .store-card, .graphic-card"
                    );

                projects.forEach(project => {

                    const category =
                        project.dataset.category;

                    if (
                        filter === "all" ||
                        filter === "*" ||
                        !filter
                    ) {

                        project.style.display =
                            "";

                        setTimeout(() => {
                            project.style.opacity = "1";
                            project.style.transform =
                                "translateY(0)";
                        }, 20);

                    }

                    else if (
                        category === filter
                    ) {

                        project.style.display =
                            "";

                        setTimeout(() => {
                            project.style.opacity = "1";
                            project.style.transform =
                                "translateY(0)";
                        }, 20);

                    }

                    else {

                        project.style.opacity = "0";
                        project.style.transform =
                            "translateY(15px)";

                        setTimeout(() => {
                            project.style.display =
                                "none";
                        }, 300);
                    }

                });

            }
        );
    });


    /* =====================================================
       9. IMAGE MODAL
       ===================================================== */

    let modal =
        document.querySelector(".image-modal");

    if (!modal) {

        modal =
            document.createElement("div");

        modal.className =
            "image-modal";

        modal.innerHTML = `

            <button
                class="modal-close"
                aria-label="Close image"
            >
                ×
            </button>

            <img
                src=""
                alt="Preview"
            >

        `;

        document.body.appendChild(modal);
    }

    const modalImage =
        modal.querySelector("img");

    const modalClose =
        modal.querySelector(".modal-close");


    function openImageModal(src, alt = "Image Preview") {

        if (!modalImage) return;

        modalImage.src = src;
        modalImage.alt = alt;

        modal.classList.add("active");

        document.body.style.overflow =
            "hidden";
    }


    function closeImageModal() {

        modal.classList.remove("active");

        document.body.style.overflow = "";

        setTimeout(() => {

            if (modalImage) {
                modalImage.src = "";
            }

        }, 300);
    }


    document.addEventListener(
        "click",
        event => {

            const image =
                event.target.closest(
                    ".clickable-image, .project-gallery img, .store-gallery img, .graphic-card img"
                );

            if (!image) return;

            openImageModal(
                image.src,
                image.alt
            );
        }
    );


    if (modalClose) {
        modalClose.addEventListener(
            "click",
            closeImageModal
        );
    }


    modal.addEventListener(
        "click",
        event => {

            if (event.target === modal) {
                closeImageModal();
            }
        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                closeImageModal();
            }

        }
    );


    /* =====================================================
       10. SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.10
            }
        );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =====================================================
       11. RE-INITIALIZE REVEAL FOR DYNAMIC ITEMS
       ===================================================== */

    setTimeout(() => {

        document
            .querySelectorAll(".reveal")
            .forEach(element => {

                if (
                    !element.classList.contains("active")
                ) {
                    revealObserver.observe(element);
                }

            });

    }, 500);


    /* =====================================================
       12. PROFILE PARALLAX / FLOAT EFFECT
       ===================================================== */

    const profile =
        document.querySelector(
            ".profile-image"
        );

    if (profile) {

        document.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth < 768
                ) return;

                const x =
                    (window.innerWidth / 2 -
                        event.clientX) / 40;

                const y =
                    (window.innerHeight / 2 -
                        event.clientY) / 40;

                profile.style.transform =
                    `translate(${x}px, ${y}px)`;
            }
        );
    }


    /* =====================================================
       13. BACK TO TOP
       ===================================================== */

    let backTop =
        document.querySelector(
            ".back-to-top"
        );

    if (!backTop) {

        backTop =
            document.createElement("a");

        backTop.href = "#";

        backTop.className =
            "back-to-top";

        backTop.innerHTML = "↑";

        backTop.setAttribute(
            "aria-label",
            "Back to top"
        );

        document.body.appendChild(
            backTop
        );
    }


    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 500
            ) {

                backTop.classList.add(
                    "show"
                );

            } else {

                backTop.classList.remove(
                    "show"
                );
            }

        }
    );


    backTop.addEventListener(
        "click",
        event => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =====================================================
       14. SMOOTH ANCHOR LINKS
       ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetID =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !targetID ||
                        targetID === "#"
                    ) return;

                    const target =
                        document.querySelector(
                            targetID
                        );

                    if (!target) return;

                    event.preventDefault();

                    const navbarHeight =
                        navbar
                            ? navbar.offsetHeight
                            : 0;

                    const position =
                        target.offsetTop -
                        navbarHeight;

                    window.scrollTo({
                        top: position,
                        behavior: "smooth"
                    });

                }
            );

        });


    /* =====================================================
       15. ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navAnchors =
        document.querySelectorAll(
            '.nav-links a[href^="#"]'
        );

    function updateActiveNav() {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop -
                150;

            if (
                window.scrollY >=
                sectionTop
            ) {
                current =
                    section.getAttribute("id");
            }

        });

        navAnchors.forEach(anchor => {

            anchor.classList.remove(
                "active"
            );

            if (
                anchor.getAttribute(
                    "href"
                ) === `#${current}`
            ) {
                anchor.classList.add(
                    "active"
                );
            }

        });
    }

    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    updateActiveNav();


    /* =====================================================
       16. COUNTER ANIMATION
       ===================================================== */

    const counters =
        document.querySelectorAll(
            "[data-counter]"
        );

    const counterObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) return;

                    const counter =
                        entry.target;

                    const target =
                        parseInt(
                            counter.dataset.counter
                        );

                    let current = 0;

                    const duration = 1600;

                    const step =
                        target /
                        (duration / 16);

                    function updateCounter() {

                        current += step;

                        if (
                            current >= target
                        ) {

                            counter.textContent =
                                target;

                            return;
                        }

                        counter.textContent =
                            Math.floor(current);

                        requestAnimationFrame(
                            updateCounter
                        );
                    }

                    updateCounter();

                    counterObserver.unobserve(
                        counter
                    );

                });

            },
            {
                threshold: 0.5
            }
        );

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });


    /* =====================================================
       17. CONTACT EMAIL BUTTON
       ===================================================== */

    const emailLinks =
        document.querySelectorAll(
            '[data-contact="email"]'
        );

    emailLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                window.location.href =
                    "mailto:gmmsocialgrowth@gmail.com";

            }
        );
    });


    /* =====================================================
       18. WHATSAPP BUTTON
       ===================================================== */

    const whatsappLinks =
        document.querySelectorAll(
            '[data-contact="whatsapp"]'
        );

    whatsappLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const message =
                    encodeURIComponent(
                        "Hello GMM Social Growth, I would like to discuss a project."
                    );

                window.open(
                    `https://wa.me/923126038388?text=${message}`,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );
    });


    /* =====================================================
       19. CONTACT FORM
       ===================================================== */

    const contactForm =
        document.querySelector(
            ".contact-form"
        );

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const name =
                    contactForm.querySelector(
                        '[name="name"]'
                    )?.value.trim() || "";

                const email =
                    contactForm.querySelector(
                        '[name="email"]'
                    )?.value.trim() || "";

                const message =
                    contactForm.querySelector(
                        '[name="message"]'
                    )?.value.trim() || "";

                const subject =
                    encodeURIComponent(
                        `Portfolio Inquiry from ${name}`
                    );

                const body =
                    encodeURIComponent(
                        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                    );

                window.location.href =
                    `mailto:gmmsocialgrowth@gmail.com?subject=${subject}&body=${body}`;
            }
        );
    }


    /* =====================================================
       20. IMAGE ERROR HANDLING
       ===================================================== */

    document.addEventListener(
        "error",
        event => {

            if (
                event.target.tagName ===
                "IMG"
            ) {

                event.target.classList.add(
                    "image-error"
                );

                event.target.alt =
                    "Image unavailable";

            }

        },
        true
    );


    /* =====================================================
       21. TILT EFFECT FOR CARDS
       ===================================================== */

    const tiltCards =
        document.querySelectorAll(
            ".project-card, .store-card, .skill-card, .service-card"
        );

    tiltCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth < 900
                ) return;

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -2;

                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    2;

                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-6px)`;
            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );
    });


    /* =====================================================
       22. DOCUMENT IMAGE CHECK
       ===================================================== */

    const documentImages =
        document.querySelectorAll(
            ".document-card img"
        );

    documentImages.forEach(image => {

        image.addEventListener(
            "click",
            () => {

                openImageModal(
                    image.src,
                    image.alt
                );

            }
        );

        image.style.cursor =
            "pointer";
    });


    /* =====================================================
       23. PAGE LOADER
       ===================================================== */

    const loader =
        document.querySelector(
            ".loader"
        );

    if (loader) {

        window.addEventListener(
            "load",
            () => {

                setTimeout(() => {

                    loader.classList.add(
                        "hide"
                    );

                }, 500);

            }
        );

    }


    /* =====================================================
       24. YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-year], #current-year"
        );

    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       25. CONSOLE BRAND MESSAGE
       ===================================================== */

    console.log(
        "%c GMM SOCIAL GROWTH ",
        "background:#6c63ff;color:#fff;font-size:18px;font-weight:bold;padding:8px 15px;border-radius:8px;"
    );

    console.log(
        "%c Premium Digital Marketing Portfolio",
        "color:#00d4ff;font-size:13px;font-weight:bold;"
    );

});
