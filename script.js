const card = document.getElementById('hero-card');
const bg = document.getElementById('parallax-bg');

// Mouse hover tilt effect
document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Scroll parallax effect
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    bg.style.transform = `translateY(${value * 0.4}px)`;
});

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(card => {
    const video = card.querySelector('video');

    card.addEventListener('mouseenter', () => {
        video.play();
    });

    card.addEventListener('mouseleave', () => {
        video.pause();
        // Optional: Reset to start when mouse leaves
        // video.currentTime = 0; 
    });
});
