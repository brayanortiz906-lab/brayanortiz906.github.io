/* ═══════════════════════════════════════
   Brayan Ortiz Calle — Filtros de proyectos
   ═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    let currentFilter = 'all';

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Actualizar estado
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');

            // Animación de filtrado
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const matches = currentFilter === 'all' || category === currentFilter;

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

});
