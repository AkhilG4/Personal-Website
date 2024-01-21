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

// document.addEventListener("DOMContentLoaded", () => {
//     const container = document.querySelector('.meteor-shower');

//     function createMeteor() {
//         const meteor = document.createElement('div');
//         meteor.classList.add('meteor');
//         container.appendChild(meteor);

//         const startFromTop = Math.random() < 0.5;
//         if (startFromTop) {
//             meteor.style.top = '-100px';
//             meteor.style.left = `${Math.random() * 100}%`;
//         } else {
//             meteor.style.left = '-100px';
//             meteor.style.top = `${Math.random() * 100}%`;
//         }

//         const endTop = Math.random() * 100 + 100;
//         const endLeft = endTop

//         meteor.style.animation = `shoot ${Math.random() * 2 + 2}s linear`;

//         // Define the animation
//         meteor.animate([
//             { top: startFromTop ? '-100px' : `${Math.random() * 100}%`, left: startFromTop ? `${Math.random() * 100}%` : '-100px', opacity: 1 },
//             { top: `${endTop}%`, left: `${endTop}%`, opacity: 0 }
//         ], {
//             duration: Math.random() * 1000 + 2000, // 2 to 4 seconds
//             fill: 'forwards' // Keep the final state after animation
//         });

//         // Remove meteor after animation
//         setTimeout(() => {
//             meteor.remove();
//         }, 5000); // Ensure duration is longer than the animation
//     }

//     // Create meteors at intervals
//     setInterval(createMeteor, 200); // Adjust interval for meteor frequency
// });



