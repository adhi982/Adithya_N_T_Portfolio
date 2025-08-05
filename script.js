document.addEventListener('DOMContentLoaded', function() {

    // --- Theme Toggler ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme from local storage
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
    }

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        // Save theme preference
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- Smooth Scrolling & Active Nav Link ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    // Intersection Observer for nav links and section fade-in
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Fade in sections
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }

            // Highlight active nav link
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                navLinks.forEach(link => link.classList.remove('active'));
                if(navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }, {
        rootMargin: '-70px 0px 0px 0px', // Adjust for fixed nav
        threshold: [0.1, 0.5]
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});
