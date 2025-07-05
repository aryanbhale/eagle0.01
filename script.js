
    var video = document.getElementById('img-div-sl');
    video.currentTime = 0.1; // Starts the video at 30 seconds
    video.play(); // Play the video after setting the time
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>


    let currentSlide = 0;
    const slides = document.querySelectorAll(".text-slide");
    const dots = document.querySelectorAll(".dot");
    let slideInterval;

    function changeSlide(index) {
        slides[currentSlide].classList.remove("active");
        dots[currentSlide].classList.remove("active");

        slides[index].classList.add("active");
        dots[index].classList.add("active");

        currentSlide = index;

        // Restart auto-slide when manually changed
        resetAutoSlide();
    }

    function autoSlide() {
        let nextSlide = (currentSlide + 1) % slides.length;
        changeSlide(nextSlide);
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(autoSlide, 2000);
    }

    // Start auto-slide
    resetAutoSlide();
