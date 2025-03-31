document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');

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

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.meteor-shower');

    function createMeteor() {
        const meteor = document.createElement('div');
        meteor.classList.add('meteor');
        container.appendChild(meteor);

        const size = Math.random() * 2 + 2; // Between 1px and 3px
        meteor.style.width = `${size}px`;
        meteor.style.height = `${size * 30}px`; // Tail length

        // Randomise starting position from left/top
        const startFromTop = Math.random() < 0.5;
        if (startFromTop) {
            meteor.style.top = '-100px';
            meteor.style.left = `${Math.random() * 100}%`;
        } else {
            meteor.style.left = '-100px';
            meteor.style.top = `${Math.random() * 100}%`;
        }

        const endTop = Math.random() * 100 + 100;

        // Define the animation
        meteor.animate([
            { top: startFromTop ? '-100px' : `${Math.random() * 100}%`, left: startFromTop ? `${Math.random() * 100}%` : '-100px', opacity: 1 },
            { top: `${endTop}%`, left: `${endTop}%`, opacity: 0 }
        ], {
            duration: Math.random() * 10000 + 10000, 
            fill: 'forwards' 
        });

        setTimeout(() => {
            meteor.remove();
        }, 10000); 
    }

    
    setInterval(createMeteor, 300); 

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        container.appendChild(star);
    
        const size = Math.random() * 2; 
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
    
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
    
        setTimeout(() => {
            star.remove();
        }, Math.random() * 5000 + 5000); 
    }
    
    setInterval(createStar, 50);
    
});




document.addEventListener('DOMContentLoaded', () => {
    // Typing Animation
    const typewriterElement = document.getElementById('typewriter');
    const texts = ["Who?", "Akhil"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        const displayedText = isDeleting
            ? currentText.substring(0, charIndex--)
            : currentText.substring(0, charIndex++);

        typewriterElement.textContent = displayedText;
        typewriterElement.classList.add('typing');

        if (!isDeleting && charIndex === currentText.length + 1) {
            isDeleting = true;
            setTimeout(type, 3000); // Pause before deleting
        } else if (isDeleting && charIndex === -1) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500); // Pause before typing next word
        } else {
            const typingSpeed = isDeleting ? 50 : 100;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});

function openModal(title, imagePaths) {
    // Set the modal title
    document.getElementById("modal-title").innerText = title;

    // Populate the modal with images
    const modalImagesDiv = document.getElementById("modal-images");
    modalImagesDiv.innerHTML = ""; // Clear existing content
    imagePaths.forEach((path) => {
        const img = document.createElement("img");
        img.src = path;
        img.alt = title + " Screenshot";
        modalImagesDiv.appendChild(img);
    });

    // Display the modal
    document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Optional: Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        closeModal();
    }
};
