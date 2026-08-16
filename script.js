/* =========================================================
   GMM SOCIAL GROWTH
   PREMIUM PORTFOLIO — FINAL JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PROJECT DATA
       Exact filenames provided by you
       ===================================================== */

    const projects = [

        {
            name: "Bags",
            category: "Fashion / E-Commerce",
            thumbnail: "bags-thumbnail.png",
            screenshots: [
                "bags-1.png",
                "bags-2.png",
                "bags-3.png",
                "bags-4.png",
                "bags-5.png"
            ]
        },

        {
            name: "Beauty",
            category: "Beauty / E-Commerce",
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

        {
            name: "Clothing",
            category: "Fashion / E-Commerce",
            thumbnail: "clothing-thumbnail.png",
            screenshots: [
                "clothing-1.png",
                "clothing-2.png",
                "clothing-3.png",
                "clothing-4.png",
                "clothing-5.png"
            ]
        },

        {
            name: "Glow",
            category: "Beauty / E-Commerce",
            thumbnail: "glow-thumbnail.png",
            screenshots: [
                "glow-1.png",
                "glow-2.png",
                "glow-3.png",
                "glow-4.png",
                "glow-5.png"
            ]
        },

        {
            name: "Jewellery",
            category: "Jewellery / E-Commerce",
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

        {
            name: "Mobile Electronics",
            category: "Electronics / E-Commerce",
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

        {
            name: "Shoes",
            category: "Fashion / E-Commerce",
            thumbnail: "shoes-thumbnail.png",
            screenshots: [
                "shoes-1.png",
                "shoes-2.png",
                "shoes-3.png",
                "shoes-4.png"
            ]
        },

        {
            name: "Skincare",
            category: "Beauty / E-Commerce",
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

        {
            name: "Watches",
            category: "Fashion / E-Commerce",
            thumbnail: "watches-thumbnail.png",
            screenshots: [
                "watches-1.png",
                "watches-2.png",
                "watches-3.png",
                "watches-4.png"
            ]
        },

        {
            name: "Fashion",
            category: "Fashion / E-Commerce",
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

        {
            name: "E-Commerce",
            category: "E-Commerce Website",
            thumbnail: "ecommerce-thumbnail.png",
            screenshots: [
                "ecommerce-1.png",
                "ecommerce-2.png",
                "ecommerce-3.png",
                "ecommerce-4.png",
                "ecommerce-5.png"
            ]
        },

        {
            name: "UAE E-Commerce",
            category: "E-Commerce Website",
            thumbnail: "uae-ecommerce-thumbnail.png",
            screenshots: [
                "uae-ecommerce-1.png",
                "uae-ecommerce-2.png",
                "uae-ecommerce-3.png",
                "uae-ecommerce-4.png",
                "uae-ecommerce-5.png"
            ]
        }

    ];


    /* =====================================================
       FIND PROJECT CONTAINER
       ===================================================== */

    const projectGrid =
        document.querySelector(".project-grid");


    /* =====================================================
       CREATE PROJECT CARDS
       ===================================================== */

    if (projectGrid) {

        projectGrid.innerHTML = "";

        projects.forEach((project, index) => {

            const card =
                document.createElement("article");

            card.className =
                "project-card";

            card.dataset.project =
                index;


            card.innerHTML = `

                <div class="project-image">

                    <img
                        src="${project.thumbnail}"
                        alt="${project.name} Project"
                        loading="lazy"
                    >

                </div>


                <div class="project-info">

                    <span class="project-category">
                        ${project.category}
                    </span>

                    <h3>
                        ${project.name}
                    </h3>

                    <p>
                        Professional project design
                        and digital experience.
                    </p>

                    <button
                        class="view-project"
                        type="button"
                        data-project-index="${index}"
                    >

                        View Project

                        <span aria-hidden="true">
                            →
                        </span>

                    </button>

                </div>


                <div
                    class="project-screenshots"
                    aria-label="${project.name} screenshots"
                >

                    ${project.screenshots.map(
                        (image, imageIndex) => `

                        <img
                            src="${image}"
                            alt="${project.name} Screenshot ${imageIndex + 1}"
                            loading="lazy"
                            data-project-index="${index}"
                            data-image-index="${imageIndex}"
                        >

                    `
                    ).join("")}

                </div>

            `;


            projectGrid.appendChild(card);

        });

    }


    /* =====================================================
       LIGHTBOX ELEMENTS
       ===================================================== */

    let lightbox =
        document.querySelector(".lightbox");


    /*
       اگر HTML میں lightbox پہلے سے نہیں ہے
       تو JS خود بنا دے گی۔
    */

    if (!lightbox) {

        lightbox =
            document.createElement("div");

        lightbox.className =
            "lightbox";

        lightbox.innerHTML = `

            <button
                class="lightbox-close"
                type="button"
                aria-label="Close project"
            >
                ×
            </button>

            <div class="lightbox-content">

                <h2 class="lightbox-title">
                    Project
                </h2>

                <div class="lightbox-gallery"></div>

            </div>

        `;

        document.body.appendChild(lightbox);

    }


    const closeButton =
        lightbox.querySelector(".lightbox-close");

    const lightboxTitle =
        lightbox.querySelector(".lightbox-title");

    const lightboxGallery =
        lightbox.querySelector(".lightbox-gallery");


    /* =====================================================
       OPEN PROJECT LIGHTBOX
       ===================================================== */

    function openProject(index) {

        const project =
            projects[index];

        if (!project) return;


        lightboxTitle.textContent =
            project.name;


        lightboxGallery.innerHTML = "";


        project.screenshots.forEach(
            (image, imageIndex) => {

                const img =
                    document.createElement("img");

                img.src =
                    image;

                img.alt =
                    `${project.name} Screenshot ${imageIndex + 1}`;

                img.loading =
                    "lazy";

                lightboxGallery.appendChild(img);

            }
        );


        lightbox.classList.add("active");

        document.body.style.overflow =
            "hidden";

    }


    /* =====================================================
       CLOSE LIGHTBOX
       ===================================================== */

    function closeProject() {

        lightbox.classList.remove(
            "active"
        );

        document.body.style.overflow =
            "";

    }


    /* =====================================================
       PROJECT CLICK
       ===================================================== */

    document.addEventListener(
        "click",
        (event) => {

            const button =
                event.target.closest(
                    ".view-project"
                );


            if (button) {

                const index =
                    Number(
                        button.dataset.projectIndex
                    );

                openProject(index);

                return;

            }


            const screenshot =
                event.target.closest(
                    ".project-screenshots img"
                );


            if (screenshot) {

                const index =
                    Number(
                        screenshot.dataset.projectIndex
                    );

                openProject(index);

            }

        }
    );


    /* =====================================================
       CLOSE BUTTON
       ===================================================== */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeProject
        );

    }


    /* =====================================================
       CLICK OUTSIDE LIGHTBOX
       ===================================================== */

    lightbox.addEventListener(
        "click",
        (event) => {

            if (
                event.target === lightbox
            ) {

                closeProject();

            }

        }
    );


    /* =====================================================
       ESC KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                closeProject();

            }

        }
    );


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuToggle =
        document.querySelector(
            ".menu-toggle"
        );

    const navigation =
        document.querySelector("nav");


    if (
        menuToggle &&
        navigation
    ) {

        menuToggle.addEventListener(
            "click",
            () => {

                navigation.classList.toggle(
                    "active"
                );

                menuToggle.classList.toggle(
                    "active"
                );

            }
        );


        navigation
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navigation.classList.remove(
                            "active"
                        );

                        menuToggle.classList.remove(
                            "active"
                        );

                    }
                );

            });

    }


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            'nav a[href^="#"]'
        );


    function updateActiveNav() {

        let current =
            "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 160;

            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            const href =
                link.getAttribute("href");


            if (
                href === `#${current}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav,
        {
            passive: true
        }
    );


    updateActiveNav();


    /* =====================================================
       BACK TO TOP
       ===================================================== */

    let backToTop =
        document.querySelector(
            ".back-to-top"
        );


    if (!backToTop) {

        backToTop =
            document.createElement(
                "button"
            );

        backToTop.className =
            "back-to-top";

        backToTop.type =
            "button";

        backToTop.innerHTML =
            "↑";

        backToTop.setAttribute(
            "aria-label",
            "Back to top"
        );

        document.body.appendChild(
            backToTop
        );

    }


    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 600
            ) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        },
        {
            passive: true
        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =====================================================
       SMOOTH ANCHOR SCROLL
       ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function(event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });


    /* =====================================================
       IMAGE ERROR HANDLING
       ===================================================== */

    document.addEventListener(
        "error",
        (event) => {

            if (
                event.target.tagName ===
                "IMG"
            ) {

                event.target.classList.add(
                    "image-error"
                );

                console.warn(
                    "Image not found:",
                    event.target.src
                );

            }

        },
        true
    );


    /* =====================================================
       PROJECT IMAGE PRELOAD
       ===================================================== */

    /*
       Screenshots کو background میں preload
       کیا جاتا ہے تاکہ lightbox کھولنے پر
       loading کم ہو۔
    */

    projects.forEach(project => {

        project.screenshots.forEach(
            image => {

                const preload =
                    new Image();

                preload.src =
                    image;

            }
        );

    });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const year =
        document.querySelector(
            "#currentYear"
        );

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "GMM Social Growth Portfolio loaded successfully."
    );

    console.log(
        `${projects.length} projects loaded.`
    );

});
