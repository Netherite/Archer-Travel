document.addEventListener("DOMContentLoaded", () => {
    
    //Select each image
    const apple = document.querySelectorAll("#apple");
    const carrot = document.querySelectorAll("#carrot");
    const lettuce = document.querySelectorAll("#lettuce");
    const broccoli = document.querySelectorAll("#broccoli");
    const apricot = document.querySelectorAll("#apricot");
    const onion = document.querySelectorAll("#onion");
    const farmFresh = document.querySelectorAll("#farmFresh");

    //Get top property from each image. 
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

    //throttle to allow smoother parallax effect
    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    function resetImagePositions() {
        apple.forEach((image) => {
            image.style.top = `${initialTopValues.apple}px`;
        });

        carrot.forEach((image) => {
            image.style.top = `${initialTopValues.carrot}px`;
        });

        lettuce.forEach((image) => {
            image.style.top = `${initialTopValues.lettuce}px`;
        });

        broccoli.forEach((image) => {
            image.style.top = `${initialTopValues.broccoli}px`;
        });

        apricot.forEach((image) => {
            image.style.top = `${initialTopValues.apricot}px`;
        });

        onion.forEach((image) => {
            image.style.top = `${initialTopValues.onion}px`;
        });

        farmFresh.forEach((image) => {
            image.style.top = `${initialTopValues.farmFresh}px`;
        });
    }

    //parallax for each individual image 
    const optimizedScrollHandler = throttle(() => {
        const scrollY = window.scrollY;

        // Calculate the new positions of the images
        apple.forEach((image, index) => {
            const speed = index + 0.1;
            const yPos = initialTopValues.apple + scrollY * speed * -2;
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

        apricot.forEach((image, index) => {
            const speed = index + 0.35;
            const yPos = initialTopValues.apricot + scrollY * speed * -2;
            image.style.top = `${yPos}px`;
        });

        onion.forEach((image, index) => {
            const speed = index + 0.4;
            const yPos = initialTopValues.onion + scrollY * speed * -2;
            image.style.top = `${yPos}px`;
        });
    
        farmFresh.forEach((image, index) => {
            const speed = index -0.1;
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
