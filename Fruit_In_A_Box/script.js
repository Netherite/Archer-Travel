document.addEventListener("DOMContentLoaded", () => {
    // Select each image
    const apple = document.querySelectorAll("#apple");
    const carrot = document.querySelectorAll("#carrot");
    const lettuce = document.querySelectorAll("#lettuce");
    const broccoli = document.querySelectorAll("#broccoli");
    const apricot = document.querySelectorAll("#apricot");
    const onion = document.querySelectorAll("#onion");
    const farmFresh = document.querySelectorAll("#farmFresh");

    // Get top property from each image.
    const initialTopValues = {
        apple: getTopFromCSS(apple[0]),
        carrot: getTopFromCSS(carrot[0]),
        lettuce: getTopFromCSS(lettuce[0]),
        broccoli: getTopFromCSS(broccoli[0]),
        apricot: getTopFromCSS(apricot[0]),
        onion: getTopFromCSS(onion[0]),
        farmFresh: getTopFromCSS(farmFresh[0]),
    };

    function getTopFromCSS(image) {
        const computedStyle = window.getComputedStyle(image);
        return parseFloat(computedStyle.getPropertyValue("top").replace("px", ""));
    }

    function updateImagePositions() {
        const windowWidth = window.innerWidth;
        let newTopValues = {};

        if (windowWidth >= 860) {
            newTopValues = { onion: 60, apricot: 70, lettuce: 150, broccoli: 190, apple: 230, carrot: 80};
        } else if (windowWidth >= 650) {
            newTopValues = { onion: 110, apricot: 120, lettuce: 200, broccoli: 210, apple: 250, carrot: 130};
        } else if (windowWidth >= 550) {
            newTopValues = { onion: 150, apricot: 140, lettuce: 220, broccoli: 230, apple: 270, carrot: 160 };
        } else {
            newTopValues = { onion: 190, apricot: 190, lettuce: 240, broccoli: 250, apple: 290, carrot: 200 };
        }

        onion.forEach((image) => {
            image.style.top = `${newTopValues.onion}px`;
        });

        apricot.forEach((image) => {
            image.style.top = `${newTopValues.apricot}px`;
        });
        lettuce.forEach((image) => {
            image.style.top = `${newTopValues.lettuce}px`;
        });
        broccoli.forEach((image) => {
            image.style.top = `${newTopValues.broccoli}px`;
        });
        apple.forEach((image) => {
            image.style.top = `${newTopValues.apple}px`;
        });
        carrot.forEach((image) => {
            image.style.top = `${newTopValues.carrot}px`;
        });
    }

    function resetImagePositions() {
        // Reset the top property to its initial value for other images
        apple.forEach((image) => {
            image.style.top = `${initialTopValues.apple}px`;
        });

        carrot.forEach((image) => {
            image.style.top = `${initialTopValues.carrot}px`;
        });

        lettuce.forEach((image) => {
            image.style.top = `${initialTopValues.lettuce}px`;
        });

        // Reset the top property to its initial value for the "onion" image
        onion.forEach((image) => {
            image.style.top = `${initialTopValues.onion}px`;
        });

        farmFresh.forEach((image) => {
            image.style.top = `${initialTopValues.farmFresh}px`;
        });
    }

    // Call the updateImagePositions function on page load
    updateImagePositions();

    // Call the resetImagePositions function when the user scrolls back to the top
    window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            resetImagePositions();
        }
    });

    // Call the updateImagePositions function when the window is resized
    window.addEventListener("resize", updateImagePositions);

    // Throttle function for smoother parallax effect
    const throttle = (func, limit) => {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    };

    // Parallax for each individual image
    const optimizedScrollHandler = throttle(() => {
        const scrollY = window.scrollY;

        // Calculate the new positions of the images
        apple.forEach((image, index) => {
            const speed = index + 0.1;
            const yPos = initialTopValues.apple + scrollY * speed * -2;
            image.style.top = `${yPos}px`;
        });

        onion.forEach((image, index) => {
            const speed = index + 0.4;
            const yPos = initialTopValues.onion + scrollY * speed * -2;
            image.style.top = `${yPos}px`;
        });

        apricot.forEach((image, index) => {
            const speed = index + 0.35;
            const yPos = initialTopValues.apricot + scrollY * speed * -2;
            image.style.top = `${yPos}px`;
        });

        carrot.forEach((image, index) => {
            const speed = index + 0.2;
            const yPos = initialTopValues.carrot + scrollY * speed * -2;
            image.style.top = `${yPos}px`;
        });

        lettuce.forEach((image, index) => {
            const speed = index + 0.2;
            const yPos = initialTopValues.lettuce + scrollY * speed * -2;
            image.style.top = `${yPos}px`;
        });

        broccoli.forEach((image, index) => {
            const speed = index + 0.3;
            const yPos = initialTopValues.broccoli + scrollY * speed * -2;
            image.style.top = `${yPos}px`;
        });

        farmFresh.forEach((image, index) => {
            const speed = index - 0.1;
            const yPos = initialTopValues.farmFresh + scrollY * speed * -2;
            image.style.top = `${yPos}px`;
        });
    }, 16); // Approximately 60 frames per second

    // Reset the image positions when the page loads
    resetImagePositions();

    // Reset the image positions when the user scrolls back to the top
    window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            resetImagePositions();
        }
    });

    // Add the optimized scroll event handler
    window.addEventListener("scroll", optimizedScrollHandler);
});
