"use strict";
var slides = document.getElementsByClassName("slide");
var totalSlides = slides.length - 1;
var activeSlide;

function toggleSlides(direction) {
    var i;
    //Loop through slides and identify the active slide
    for (i = 0; i < slides.length; i++) {

        if (slides[i].className === "slide active") {
            activeSlide = i;
            break;
        }
    }
    //Determine which direction to slide
    if (direction === "left") {
        slideLeft();
    } else if (direction === "right") {
        slideRight();
    }
}

function slideLeft() {
    if (activeSlide === 0) {
        slides[activeSlide].className = "slide dn";
        slides[totalSlides].className = "slide active";
    } else {
        var nextSlideL = activeSlide - 1;
        slides[activeSlide].className = "slide dn";
        slides[nextSlideL].className = "slide active";
    }
}

function slideRight() {
    if (activeSlide === totalSlides) {
        slides[activeSlide].className = "slide dn";
        slides[0].className = "slide active";
    } else {
        var nextSlideL = activeSlide + 1;
        slides[activeSlide].className = "slide dn";
        slides[nextSlideL].className = "slide active";
    }
}
