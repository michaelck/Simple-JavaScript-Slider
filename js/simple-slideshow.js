"use strict";

function toggleSlides(btn, direction) {

    var slideshowId = document.getElementById(btn.getAttribute('data-slideshow'));
    var slides = slideshowId.getElementsByClassName("slide");
    var totalSlides = slides.length - 1;
    var activeSlide;
    
    //Loop through slides and identify the active slide
    for (var i = 0; i < slides.length; i++) {

        if (slides[i].className === "slide active") {
            activeSlide = i;
            break;
        }
    }
    //Determine which direction to slide
    if (direction === "left") {
        if (activeSlide === 0) {
            slides[activeSlide].className = "slide dn";
            slides[totalSlides].className = "slide active";
        } else {
            var nextSlideL = activeSlide - 1;
            slides[activeSlide].className = "slide dn";
            slides[nextSlideL].className = "slide active";
        }
    } else if (direction === "right") {
        if (activeSlide === totalSlides) {
            slides[activeSlide].className = "slide dn";
            slides[0].className = "slide active";
        } else {
            var nextSlideL = activeSlide + 1;
            slides[activeSlide].className = "slide dn";
            slides[nextSlideL].className = "slide active";
        }
    }
}
