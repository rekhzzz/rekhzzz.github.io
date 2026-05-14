// Particles.js Config
if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00f2ff" },
            shape: { type: "circle" },
            opacity: { value: 0.2, random: false },
            size: { value: 2, random: true },
            line_linked: { enable: true, distance: 150, color: "#00f2ff", opacity: 0.1, width: 1 },
            move: { enable: true, speed: 1.5, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
}

// Typing Effect
const typingText = document.querySelector('.typing-text');
const roles = ['Full-Stack Engineer', 'Security Analyst', 'Pakar Algoritma', 'Arsitek Sistem'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Custom Cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5}px, 0)`;
});

function animateCursor() {
    posX += (mouseX - posX) / 8;
    posY += (mouseY - posY) / 8;
    follower.style.transform = `translate3d(${posX - 15}px, ${posY - 15}px, 0)`;
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Reveal
gsap.from('.hero-content > *', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});

gsap.from('.hero-visual', {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    ease: 'expo.out',
    delay: 0.5
});

// Section Titles Reveal
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    const title = section.querySelector('.section-title');
    if (title) {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
            },
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    }
});

// Project Cards Reveal
const projectCards = document.querySelectorAll('.project-card');
if (projectCards.length > 0) {
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 90%', // Trigger earlier
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        clearProps: 'all' // Clear styles after animation
    });
}

// Start Typing
document.addEventListener('DOMContentLoaded', () => {
    type();
});
