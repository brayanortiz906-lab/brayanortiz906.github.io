/* ═══════════════════════════════════════
   Brayan Ortiz Calle — Filtros de blog
   ═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

    const filterBtns = document.querySelectorAll('.blog-filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    let currentFilter = 'all';

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-category');

            blogCards.forEach(card => {
                const categories = card.getAttribute('data-category');
                const cats = categories.split(' ');
                const matches = currentFilter === 'all' || cats.includes(currentFilter);

                if (matches) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    setTimeout(() => { card.style.opacity = '1'; }, 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => { card.style.display = 'none'; }, 250);
                }
            });
        });
    });

    // Smooth scroll para enlaces de artículos
    document.querySelectorAll('.blog-read-more').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
