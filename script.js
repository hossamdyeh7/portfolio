document.addEventListener('DOMContentLoaded', () => {

    // ==== Intersection Observer for Scroll Animations ====
    
    // Select all elements to be animated
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                // Add the 'show' class to trigger the CSS transition
                entry.target.classList.add('show');
                
                // Stop observing the element so the animation doesn't re-run
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each animated element
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    
    // ==== Navbar Shrink on Scroll (Optional but nice) ====
    const navbar = document.getElementById('mainNavbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // ==== كود "Read More" الجديد ====
    const collapseElement = document.getElementById('projectDetails');
    const collapseButton = document.querySelector('a[href="#projectDetails"]');

    if (collapseElement && collapseButton) {
        
        // عند فتح النص
        collapseElement.addEventListener('show.bs.collapse', () => {
            collapseButton.textContent = 'Read Less';
            const ellipsis = collapseElement.parentElement.querySelector('.ellipsis');
            if (ellipsis) {
                ellipsis.style.display = 'none';
            }
        });

        // عند إغلاق النص
        collapseElement.addEventListener('hide.bs.collapse', () => {
            collapseButton.textContent = 'Read More';
            const ellipsis = collapseElement.parentElement.querySelector('.ellipsis');
            if (ellipsis) {
                ellipsis.style.display = 'inline';
            }
        });
    }

});

// Add this small bit to your style.css for the navbar shrink effect
/*
.navbar-scrolled {
    background-color: rgba(0, 0, 0, 0.9) !important;
    backdrop-filter: blur(10px);
    transition: background-color 0.3s ease-in-out;
}
*/
