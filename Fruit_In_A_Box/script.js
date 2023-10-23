document.addEventListener("DOMContentLoaded", () => {

const apple = document.querySelectorAll("#apple");
const carrot = document.querySelectorAll("#carrot");
const lettuce = document.querySelectorAll("#lettuce");
const broccoli = document.querySelectorAll("#broccoli");
const apricot = document.querySelectorAll("#apricot");
const onion = document.querySelectorAll("#onion");
const farmFresh = document.querySelectorAll("#farmFresh");

window.addEventListener("scroll", () => {
const scrollY = window.scrollY;

//APPLE
apple.forEach((image, index) => {
    const speed = index + .1; // Adjust speed as needed
    const initialTop = parseFloat(image.getAttribute("data-initial-top")); // Get the initial top position from CSS
    const yPos = initialTop + scrollY * speed * -2; // Adjust the factor for desired parallax effect

    // Apply the position adjustment to the image
    image.style.top = `${yPos}px`;
});

//CARROT
carrot.forEach((image, index) => {
    const speed = index + .2; // Adjust speed as needed
    const initialTop = parseFloat(image.getAttribute("data-initial-top")); // Get the initial top position from CSS
    const yPos = initialTop + scrollY * speed * -2; // Adjust the factor for desired parallax effect

    // Apply the position adjustment to the image
    image.style.top = `${yPos}px`;
});

//LETTUCE
lettuce.forEach((image, index) => {
    const speed = index + .2; // Adjust speed as needed
    const initialTop = parseFloat(image.getAttribute("data-initial-top")); // Get the initial top position from CSS
    const yPos = initialTop + scrollY * speed * -2; // Adjust the factor for desired parallax effect

    // Apply the position adjustment to the image
    image.style.top = `${yPos}px`;
});

//BROCCOLI 
broccoli.forEach((image, index) => {
    const speed = index + .3; // Adjust speed as needed
    const initialTop = parseFloat(image.getAttribute("data-initial-top")); // Get the initial top position from CSS
    const yPos = initialTop + scrollY * speed * -2; // Adjust the factor for desired parallax effect

    // Apply the position adjustment to the image
    image.style.top = `${yPos}px`;
});

//ONION
onion.forEach((image, index) => {
    const speed = index + .4; // Adjust speed as needed
    const initialTop = parseFloat(image.getAttribute("data-initial-top")); // Get the initial top position from CSS
    const yPos = initialTop + scrollY * speed * -2; // Adjust the factor for desired parallax effect

    // Apply the position adjustment to the image
    image.style.top = `${yPos}px`;
});

//apricot
apricot.forEach((image, index) => {
    const speed = index + .35; // Adjust speed as needed
    const initialTop = parseFloat(image.getAttribute("data-initial-top")); // Get the initial top position from CSS
    const yPos = initialTop + scrollY * speed * -2; // Adjust the factor for desired parallax effect

    // Apply the position adjustment to the image
    image.style.top = `${yPos}px`;
});
onion.forEach((image, index) => {
    const speed = index + .4; // Adjust speed as needed
    const initialTop = parseFloat(image.getAttribute("data-initial-top")); // Get the initial top position from CSS
    const yPos = initialTop + scrollY * speed * -2; // Adjust the factor for desired parallax effect

    // Apply the position adjustment to the image
    image.style.top = `${yPos}px`;
});

onion.forEach((image, index) => {
    const speed = index + .4; // Adjust speed as needed
    const initialTop = parseFloat(image.getAttribute("data-initial-top")); // Get the initial top position from CSS
    const yPos = initialTop + scrollY * speed * -2; // Adjust the factor for desired parallax effect

    // Apply the position adjustment to the image
    image.style.top = `${yPos}px`;
});

farmFresh.forEach((image, index) => {
    const speed = index + -.3; // Adjust speed as needed
    const initialTop = parseFloat(image.getAttribute("data-initial-top")); // Get the initial top position from CSS
    const yPos = initialTop + scrollY * speed * -2; // Adjust the factor for desired parallax effect
    
    // Apply the position adjustment to the image
    image.style.top = `${yPos}px`;
    });

});
});


//SVG text