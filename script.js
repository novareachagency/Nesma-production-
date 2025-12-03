// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate service cards when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.2s';
            entry.target.classList.add('animate-card');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
    }
});

// Button hover effect enhancement
document.querySelector('.cta-btn')?.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
});

document.querySelector('.cta-btn')?.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});