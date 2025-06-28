document.addEventListener('DOMContentLoaded', function() {
    // Course carousel functionality
    const courseCarousel = document.getElementById('course-carousel');
    const courseCards = document.querySelectorAll('.course-card');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    let currentIndex = 0;
    const cardWidth = courseCards[0].offsetWidth + 20; // Including gap
    
    function updateCarousel() {
        const offset = -currentIndex * cardWidth;
        courseCarousel.style.transform = `translateX(${offset}px)`;
    }
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < courseCards.length - 3) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        cardWidth = courseCards[0].offsetWidth + 20;
        updateCarousel();
    });
    
    // Touch support for carousel
    let touchStartX = 0;
    let touchEndX = 0;
    
    courseCarousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    courseCarousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50 && currentIndex < courseCards.length - 3) {
            // Swipe left
            currentIndex++;
            updateCarousel();
        }
        
        if (touchEndX > touchStartX + 50 && currentIndex > 0) {
            // Swipe right
            currentIndex--;
            updateCarousel();
        }
    }
});