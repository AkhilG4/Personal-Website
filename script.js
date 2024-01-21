document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
    const techItems = document.querySelectorAll('.technologies .tech-item');

    // Function to add staggered animation to each technology item
    const animateTechItems = (baseDelay) => {
        techItems.forEach((item, index) => {
            const delayTime = baseDelay + (index * 500); 
            setTimeout(() => item.classList.add('show-tech'), delayTime);
        });
    };

    const observerOptions = { threshold: 0.0 }; 
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                animateTechItems(4000); 
            }
            // else {
            //     entry.target.classList.remove('show');
            //     techItems.forEach(item => item.classList.remove('show-tech'));
            // }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
});
