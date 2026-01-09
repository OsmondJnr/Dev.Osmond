// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scroll reveal effect for cards
const cards = document.querySelectorAll('.skill-card, .project-card, .highlight');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "0.6s ease-out";
    observer.observe(card);
});

// Active navigation link highlighting
const navLinksElements = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksElements.forEach(link => {
        link.style.color = 'var(--gray-text)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

//email type shii
const contactForm = document.getElementById('contact-form');
const statusText = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // make the button sending when sending (linessss.....)
    submitBtn.innerText = "Sending...";
    submitBtn.style.opacity = "0.7";
    submitBtn.disabled = true;

    // These IDs come from your EmailJS Dashboard
    const serviceID = 'service_wbkeg69';
    const templateID = 'template_bwb06vo';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            statusText.innerText = "Message sent successfully! ✅";
            statusText.style.color = "var(--primary-color)";
            contactForm.reset();
        }, (err) => {
            statusText.innerText = "Failed to send message. Please try again. ❌";
            statusText.style.color = "#ff4444";
            console.log(JSON.stringify(err));
        })
        .finally(() => {
            submitBtn.innerText = "Send Message";
            submitBtn.style.opacity = "1";
            submitBtn.disabled = false;
        });
});