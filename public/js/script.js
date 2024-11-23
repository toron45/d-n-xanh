console.log('JavaScript đã được liên kết thành công!');
document.addEventListener("DOMContentLoaded", () => {
    ScrollReveal().reveal('.project-card', {
        duration: 1000,
        distance: '50px',
        origin: 'bottom',
        reset: true,
    });
});
