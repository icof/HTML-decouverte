console.log('Chargement du script js/menuDeroulantEvolution.js !');

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
        li.style.position = 'relative';

        // Créer l'élément <a> avec la classe "nav-link"
        const a = document.createElement('a');
        a.href = "#" + id;
        a.textContent = texte;
        a.className = 'nav-link';
        a.ariaCurrent = "page";
        // Ajouter l'élément <a> à l'élément <li>
        li.appendChild(a);
        
        // parcours des sous-titres
        const articles = section.querySelectorAll('article');

        // si le nombre de sous-titres est supérieur à 0 alors on ajoute un bouton dropdown-toggle pour le sous-menu déroulant
        if (articles.length > 0) {
            // Créer l'élément <span> pour la flèche du menu déroulant
            const drop = document.createElement('span');
            drop.className = 'dropdown-toggle dropdown-toggle-split';
            drop.id = 'dropdownMenuLink' + id;
            drop.setAttribute('data-bs-toggle', 'dropdown');
            drop.setAttribute('aria-expanded', 'false');

            //enlever à <a> le style display block pour afficher le bouton dropdown-toggle à côté de l'élément <a>
            a.style.display = 'inline-block';

            // Ajouter la flèche <span> à l'élément <li>
            li.appendChild(drop);
        }

        // Ajouter l'élément <li> au menu
        menu.appendChild(li);

        if (articles.length > 0) {
            // Créer l'élément <ul> avec la classe "dropdown-menu"
            const ul = document.createElement('ul');
            ul.className = 'dropdown-menu';
            ul.setAttribute('aria-labelledby', 'dropdownMenuLink'+id);            
            li.appendChild(ul);

            articles.forEach((article) => {
                // récupérer l'id de l'article
                const id = article.getAttribute('id');

                // recupérer le premier sous-titre <h3> de l'article
                const sousTitre = article.querySelector('h3');
                const texteSousTitre = sousTitre.getAttribute('texteMenu');
                const liSousTitre = document.createElement('li');
                const aSousTitre = document.createElement('a');
                aSousTitre.className = 'dropdown-item';
                aSousTitre.href = "#" + id ;
                aSousTitre.textContent = texteSousTitre;
                liSousTitre.appendChild(aSousTitre);
                ul.appendChild(liSousTitre);
            });
        }
    });
});

