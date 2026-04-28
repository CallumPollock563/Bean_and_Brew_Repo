document.addEventListener("DOMContentLoaded", () => {
    const ease = "power4.inOut";

    function animateTransition() {
        return new Promise((resolve) => {
            gsap.set(".block", { visibility: "visible", scaleY: 0 });

            gsap.to(".block", {
                scaleY: 1.02,
                duration: 0.5,
                stagger: {
                    each: 0.1,
                    from: "start",
                    grid: [2, 5],
                    axis: "x",
                },
                ease: ease,
                onComplete: resolve
            });
        });
    }

    function revealTransition() {
        return new Promise((resolve) => {
            gsap.set(".block", { scaleY: 1.02 });

            gsap.to(".block", {
                scaleY: 0,
                duration: 0.5,
                stagger: {
                    each: 0.1,
                    from: "start",
                    grid: "auto",
                    axis: "x",
                },
                ease: ease,
                onComplete: resolve,
            });
        });
    }

    document.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");

            if (href && !href.startsWith("#") && href !== window.location.pathname) {
                event.preventDefault();

                animateTransition().then(() => {
                    window.location.href = href;
                });
            }
        });
    });

    revealTransition().then(() => {
        gsap.set(".block", { visibility: "hidden" });
        
        
    });
});