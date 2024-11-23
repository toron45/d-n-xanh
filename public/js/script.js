console.log('JavaScript đã được liên kết thành công!');
document.addEventListener("DOMContentLoaded", () => {
    ScrollReveal().reveal('.project-card', {
        duration: 1000,
        distance: '50px',
        origin: 'bottom',
        reset: true,
    });
});
ScrollReveal().reveal('.event-card', {
    duration: 1000,
    distance: '50px',
    origin: 'bottom',
    reset: true,
});
ScrollReveal().reveal('.community-form', {
    duration: 1500,
    distance: '50px',
    origin: 'top',
    reset: true,
});
ScrollReveal().reveal('.project-card', {
    duration: 1000,
    distance: '50px',
    origin: 'bottom',
    reset: true,
});
fetch('/api/projects')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('.project-container');
        container.innerHTML = data.map(project => `
            <div class="project-card">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="btn">Tìm hiểu thêm</a>
            </div>
        `).join('');
    });
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('album-gallery');

    // Lấy danh sách ảnh từ backend
    fetch('/api/album')
        .then(response => response.json())
        .then(data => {
            gallery.innerHTML = data
                .map(img => `<img src="${img.path}" alt="Uploaded Image">`)
                .join('');
        });

    // Xử lý tải ảnh
    const uploadForm = document.getElementById('uploadForm');
    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(uploadForm);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                gallery.innerHTML += `<img src="${data.path}" alt="Uploaded Image">`;
            })
            .catch(err => console.error(err));
    });
});
