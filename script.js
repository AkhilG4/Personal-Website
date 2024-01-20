// document.addEventListener("DOMContentLoaded", () => {
//     const sections = document.querySelectorAll('section');

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('show');
//             } else {
//                 entry.target.classList.remove('show');
//             }
//         });
//     }, { threshold: 0});

//     sections.forEach(section => observer.observe(section));
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const sections = document.querySelectorAll('section');

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('show');
//             }
//         });
//     }, { threshold: 0});

//     sections.forEach(section => observer.observe(section));
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const sections = document.querySelectorAll('section');
//     const techSection = document.querySelector('.technologies'); // Select the technologies section

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('show');
//                 // Add a timeout to delay the animation of the technologies section
//                 setTimeout(() => {
//                     techSection.classList.add('show-tech');
//                 }, 5000); // 10000ms = 10 seconds delay
//             } else {
//                 entry.target.classList.remove('show');
//                 techSection.classList.remove('show-tech');
//             }
//         });
//     }, { threshold: 0});

//     sections.forEach(section => observer.observe(section));
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const sections = document.querySelectorAll('section');
//     const techItems = document.querySelectorAll('.technologies .tech-item'); // Select all technology items

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('show');
//                 // Add staggered animation to each technology item, starting with the first item
//                 techItems.forEach((item, index) => {
//                     setTimeout(() => {
//                         item.classList.add('show-tech');
//                     }, (index + 1) * 2000); // Start delay from the first item
//                 });
//             } else {
//                 entry.target.classList.remove('show');
//                 techItems.forEach((item) => {
//                     item.classList.remove('show-tech');
//                 });
//             }
//         });
//     }, { threshold: 0 });

//     sections.forEach(section => observer.observe(section));
// });

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
    const techItems = document.querySelectorAll('.technologies .tech-item'); // Select all technology items

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                const baseDelay = 4000; // Base delay (in milliseconds) before starting the tech items animation

                // Add staggered animation to each technology item, starting with the first item
                techItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show-tech');
                    }, baseDelay + (index * 500)); // Additional delay for each item
                });
            } else {
                // entry.target.classList.remove('show');
                // techItems.forEach((item) => {
                //     item.classList.remove('show-tech');
                // });
            }
        });
    }, { threshold: 0 });

    sections.forEach(section => observer.observe(section));
});


