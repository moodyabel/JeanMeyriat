/* filter.js
 * 
 * Filter  items
 * V1: Only one category can be selected at a time
 */

//  Configure Isotope
var grid = document.querySelector('.gallery');
if (grid) {
    var iso = new Isotope(grid, {
        itemSelector: '.gallery-item',
        layoutMode: 'fitRows',
    });

    // Gestion des boutons de filtre
    var filters = document.querySelectorAll('.filters button');

    filters.forEach(function (button) {
        button.addEventListener('click', function () {
            var filterValue = button.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });

            // Mise à jour de l'état actif
            filters.forEach(function (btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });
}