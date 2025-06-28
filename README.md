# Sites de démo HTML/CSS/JS
Modules d'apprentissage des langages

## Environnement technique
Ce dépot est configuré pour être ouvert dans un Codespace de base Ubuntu.

## Sites de démo

Ce projet contient plusieurs dossiers, chacun représentant un aspect différent de la découverte de HTML, CSS et JavaScript. Voici une description de la structure du projet :

### HTML-CSS-decouverte/
Ce dossier contient des exemples et des démonstrations de l'utilisation de HTML et CSS.

- **css/** : Contient les fichiers CSS pour le style des pages.
  - `styles.css` : Le fichier CSS principal pour les styles.
- **images/** : Contient les images utilisées dans les pages HTML.
- **js/** : Contient les scripts JavaScript.
  - `script.js` : Un script JavaScript pour les interactions de base.
- `erreurs.html` : Une page démontrant la gestion des erreurs sur un code HTML mal formé.
- `formulaires.html` : Une page contenant des exemples de formulaires HTML.
- `index-DOM.txt` : Un fichier texte décrivant la structure DOM.
- `index.html` : La page d'accueil du projet HTML-CSS.
- `listes.html` : Une page contenant des exemples de listes HTML.
- `medias.html` : Une page démontrant l'intégration de médias en HTML.
- `structures.html` : Une page décrivant les structures de base en HTML.
- `stylesTexte.html` : Une page démontrant les styles de texte en CSS.
- `tableaux.html` : Une page contenant des exemples de tableaux HTML.
- `textes.html` : Une page démontrant la manipulation de texte en HTML.

### Bootstrap-JS-decouverte/
Ce dossier contient des exemples et des démonstrations de l'utilisation de Bootstrap et JavaScript.

- **css/** : Contient les fichiers CSS pour le style des pages.
  - `style-alternatif.css` : Un fichier CSS alternatif pour les styles.
  - `styles.css` : Le fichier CSS principal pour les styles.
- **images/** : Contient les images utilisées dans les pages HTML.
- **js/** : Contient les scripts JavaScript.
  - `menuDeroulant.js` : Un script pour un menu déroulant basique.
  - `menuDeroulantEvolution.js` : Une version évoluée du menu déroulant.
- `index.html` : La page d'accueil du projet Bootstrap-JS.
- `temperatures.html` : Une page interrogeant une API et construisant un résultat graphique.

### API-JS-decouverte/
Ce dossier contient des exemples et des démonstrations de l'utilisation des APIs avec JavaScript.

- **css/** : Contient les fichiers CSS pour le style des pages.
  - `styles.css` : Le fichier CSS principal pour les styles.
- **exemples/** : Contient des exemples d'interaction avec des APIs.
  - `randomUser.html` : Une page affichant une fiche d'identité générée aléatoirement en utilisant l'API randomuser.me.
  - `pokedex.html` : Une page affichant un tombinoscope de Pokémon en utilisant une API Pokémon.
  - `temperatures.html` : Une page un graphe des températures prévues sur 5 jours à Lyon.
- `index.html` : La page d'accueil du projet API-JS.

### projet-CV/
Ce dossier contiendra les fichiers pour les activitées de prise en main qui vous sont demandées en TP.


## Lancement du serveur web et exposition du site sur le port 8080

Dans le terminal de VSCode : 
1. Tapez la commande suivante pour installer le service http-server :
    ```sh
    npm i -g http-server
    ```
2. Tapez la commande suivante pour démarrer le service :
    ```sh
    http-server
    ```
Aux prochaines ouvertures du codespace vous n'aurez que la seconde étape à réaliser.
    
Ensuite, si une fenêtre de prompt vous le propose, cliquez sur "Ouvrir dans un navigateur" pour afficher le site web exposé.
Sinon, retrouvez dans l'onglet ports le service http exposé sur le port 8080 du codespace et ouvrez-le dans le navigateur.


