
    const projets = [
        [
            {"imgSrc": "src/assets/emploie.png", "titre": "Emploi du temps", "openfenetre": "Emploi_du_temps", "description": "Projet réalisé en master - Création d'une application web de gestion et visualisation d'emploi du temps sous différentes formes techno:"},
            {"imgSrc": "src/assets/oie.png", "titre": "Jeu de l'oie", "openfenetre": "jeu-de-loie", "description": "Projet réalisé en master (hackathon) - Création d'une application web de gestion de voitures électriques sous forme de jeu de l'oie"},
            {"imgSrc": "src/assets/dame.png", "titre": "Jeu de dames", "openfenetre": "Jeu_de_dames", "description": "Projet réalisé en master - Création d'une application web type jeu de dames utilisant l'IA"},
        ],
        [
            {"imgSrc": "src/assets/camping.png", "titre": "Gestion de camping", "openfenetre": "Gestion_de_camping", "description": "Projet réalisé en licence - Création d'une application web de gestion d'un camping totalement connecté"},
            {"imgSrc": "src/assets/angular.png", "titre": "Application universitaire (Vue.js & Angular)", "openfenetre": "Application_universitaire_Vuejs_&_angular", "description": "Projet réalisé en master - Création d'une application web de gestion d'emploi du temps et d'un environnement universitaire (notes, inscriptions, etc.)"},
            {"imgSrc": "src/assets/oxi.png", "titre": "Application pour OXI", "openfenetre": "Application_pour_OXI", "description": "Projet réalisé en master (concours innovation) - Création d'une application web et mobile de visualisation de plusieurs paramètres"},
        ],
        [
            {"imgSrc": "src/assets/L3chemin.png", "titre": "Jeu de chenilles", "openfenetre": "Jeu_de_chenilles", "description": "Projet réalisé en licence - Création d'un jeu sous OpenGL et Tkinter liant la théorie des graphes et l'infographie"},
            {"imgSrc": "src/assets/handtracking.png", "titre": "Handtracking", "openfenetre": "Handtracking", "description": "Projet réalisé en loisirs - Création d'une application Python de handtracking"},
        ],
    ];

    function createProjetFrame(projet) {
        const frame = document.createElement("div");
        frame.classList.add("projet-frame");

        const img = document.createElement("img");
        img.src = projet.imgSrc;
        frame.appendChild(img);

        const title = document.createElement("h3");
        title.textContent = projet.titre;
        frame.appendChild(title);

        const description = document.createElement("p");
        description.textContent = projet.description;
        frame.appendChild(description);

        return frame;
    }

    function main() {
        const container = document.getElementById("projets-container");

        projets.forEach(row => {
            row.forEach(projet => {
                const frame = createProjetFrame(projet);
                container.appendChild(frame);
            });
        });
    }

    main();
</script>

</body>
</html>
