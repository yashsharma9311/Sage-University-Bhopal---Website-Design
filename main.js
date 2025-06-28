document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.navbar ul');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Testimonial slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        testimonialCards[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });
    
    // Auto rotate testimonials
    setInterval(() => {
        let nextTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(nextTestimonial);
    }, 5000);
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.slide-up, .fade-in, .zoom-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.animationPlayState = 'running';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Initialize animations
    animateOnScroll();
});