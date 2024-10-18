console.log('Chargement du script js/menuDeroulant.js !');

document.addEventListener("DOMContentLoaded", function() {
    // Récupérer l'élément avec l'id "navbarNav"
    const navbar = document.getElementById('navbarNav');
    // Récupérer le premier élément <ul> de l'élément navbar
    const menu = navbar.querySelector('ul');
    // Récupérer tous les éléments <section> de la page
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {

        // Récupérer l'id de la section
        const id = section.getAttribute('id');
        
        // Récupérer le premier titre <h2> de la section
        const titreh2 = section.querySelector('h2');

        // Recupérer le contenu de l'attribut "menu" du titre <h2>
        const texte = titreh2.getAttribute('texteMenu');

        // Créer l'élément <li> avec la classe "nav-item"
        const li = document.createElement('li');
        li.className = 'nav-item';

        // Créer l'élément <a> avec les classes "nav-link" et "active"
        const a = document.createElement('a');
        a.className = 'nav-link';
        a.href = "#" + id;
        a.textContent = texte;
        a.ariaCurrent = "page";

        // Ajouter l'élément <a> à l'élément <li>
        li.appendChild(a);

        // Ajouter l'élément <li> au menu
        menu.appendChild(li);
    });
});
