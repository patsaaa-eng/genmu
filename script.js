// Navigasi Mobile (Hamburger Menu)
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animasi tombol hamburger sederhana
    menuToggle.classList.toggle('is-active');
});

// Tutup menu saat link diklik (untuk mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Penanganan Gambar Gagal Dimuat
document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
        this.style.display = 'none'; // Sembunyikan gambar asli
        const fallback = document.createElement('div');
        fallback.className = 'img-fallback';
        fallback.innerHTML = '<span>Gambar belum ditambahkan</span>';
        fallback.style.background = '#ddd';
        fallback.style.height = '200px';
        fallback.style.display = 'flex';
        fallback.style.alignItems = 'center';
        fallback.style.justifyContent = 'center';
        fallback.style.borderRadius = '10px';
        this.parentNode.insertBefore(fallback, this);
    };
});

// Efek Muncul Saat Scroll (Scroll Reveal Sederhana)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;
        if (top >= offset) {
            sec.style.opacity = '1';
            sec.style.transform = 'translateY(0)';
        }
    });
});

// Atur gaya awal untuk animasi scroll
document.querySelectorAll('section').forEach(sec => {
    sec.style.opacity = '0';
    sec.style.transform = 'translateY(20px)';
    sec.style.transition = 'all 0.8s ease-out';
});