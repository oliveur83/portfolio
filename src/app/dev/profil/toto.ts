export const javacript_profil =`
java pro
let prenom = 'Tom';
let nom = 'Olivier';
let mail = 'tomolivierpro@gmail.com';
let ville = 'Lyon';
let langages = false;
<
console.log('Formation');
if (ville === 'Toulon') {<
    console.log('DUT GEII , 2017-2019');
    console.log('Licence informatique , 2019 - 2022');
} else if (ville === 'Corse') {<
    console.log('Master informatique, 2022 - 2024');
}<
<
console.log('Expérience professionnelle');<
if (ville === 'Toulon') {<
    console.log('Stage fin de DUT GEII , 2019, 8 semaines');
    console.log('Hopital Saint Anne');
    console.log('Techno principaux : PHP, MySQL');
} else if (ville === 'Corse') {<
    console.log('Stage fin de master , 2024 , 6 mois à');
    console.log('Alteca');
    console.log('Techno principaux: PHP (Symfony), Vue.js');
}<
<
function switch_case_annee(annee) {<
    switch (annee) {<
        case 2019:<
            console.log('Stage à l'Hôpital d'Instruction des Armées Sainte-Anne de Toulon, création d'une application web de type QCM destinée aux apprentis Docteurs en transfusion sanguine. Récupération de données pour analyse par le directeur.\n\nConcours entrepreneuriat \'Les Entrep' Var\', création de \'Handicap Indépendance\', une application connectée à différents modules qui permettront à n'importe quelle personne handicapée d'être autonome chez elle.');
            break;
        case 2022:<
            console.log('Hackathon, développement d'une application web de type jeu de loi avec des voitures électriques comme pions pour que l'utilisateur comprenne l'importance de la gestion de l'énergie. Réalisé en collaboration avec EDF Corse.');
            break;
        case 2023:<
            console.log('Concours entrepreneuriat \'Challenge Innovation\', création d'un boîtier connecté relié à une application intelligente. OXI (nom de l’entreprise) vous permet d'arrêter de fumer en gérant à votre place votre consommation de tabac.');
            break;
        case 2024:<
            console.log('2024');
            break;
        default:<
            console.log('L'année n'est pas 2019, 2022, 2023, 2024 ou 2029.');
    }<
}<
<
// Exemple d'utilisation<
let annee = 2023;
switch_case_annee(annee);

console.log('Compétence');
if (langages) {<
    let top_langage_decroissante = { 1: 'Python', 2: 'JavaScript', 3: 'PHP', 4: 'HTML/CSS', 5: 'TypeScript', 6: 'Flutter', 7: 'SQL' };
    for (let cle in top_langage_decroissante) {<
        if (top_langage_decroissante.hasOwnProperty(cle)) {<
            console.log('Clé : {cle}, Valeur : {top_langage_decroissante[cle]}');
        }<
    }<
} else {<
    let top_framework = ['Angular', 'Vue.js', 'React'];
    let logiciel = ['GitHub', 'VSCode'];
}<
<
console.log('Loisir');
function myloisir() {<
    console.log('Pratique du street workout et du triathlon, ce qui m'apporte rigueur et discipline. Voyages autour du monde (Japon, États-Unis, Irlande, Londres, Thaïlande), grâce à quoi j'ai acquis une adaptabilité aux imprévus et une ouverture d'esprit.');
    console.log('Les projets 3D JavaScript et les projets Python handtracking qui satisfont ma curiosité et mon envie de réaliser des projets.');
}<
<
myloisir();
` 

export const javascript_projet =`
java pro 
const projets = [<
        [<
            {"imgSrc": "src/assets/emploie.png", "titre": "Emploi du temps", "openfenetre": "Emploi_du_temps", "description": "Projet réalisé en master - Création d'une application web de gestion et visualisation d'emploi du temps sous différentes formes techno:"},<
            {"imgSrc": "src/assets/oie.png", "titre": "Jeu de l'oie", "openfenetre": "jeu-de-loie", "description": "Projet réalisé en master (hackathon) - Création d'une application web de gestion de voitures électriques sous forme de jeu de l'oie"},<
            {"imgSrc": "src/assets/dame.png", "titre": "Jeu de dames", "openfenetre": "Jeu_de_dames", "description": "Projet réalisé en master - Création d'une application web type jeu de dames utilisant l'IA"},<
        ],<
        [<
            {"imgSrc": "src/assets/camping.png", "titre": "Gestion de camping", "openfenetre": "Gestion_de_camping", "description": "Projet réalisé en licence - Création d'une application web de gestion d'un camping totalement connecté"},<
            {"imgSrc": "src/assets/angular.png", "titre": "Application universitaire (Vue.js & Angular)", "openfenetre": "Application_universitaire_Vuejs_&_angular", "description": "Projet réalisé en master - Création d'une application web de gestion d'emploi du temps et d'un environnement universitaire (notes, inscriptions, etc.)"},<
            {"imgSrc": "src/assets/oxi.png", "titre": "Application pour OXI", "openfenetre": "Application_pour_OXI", "description": "Projet réalisé en master (concours innovation) - Création d'une application web et mobile de visualisation de plusieurs paramètres"},<
        ],<
        [<
            {"imgSrc": "src/assets/L3chemin.png", "titre": "Jeu de chenilles", "openfenetre": "Jeu_de_chenilles", "description": "Projet réalisé en licence - Création d'un jeu sous OpenGL et Tkinter liant la théorie des graphes et l'infographie"},<
            {"imgSrc": "src/assets/handtracking.png", "titre": "Handtracking", "openfenetre": "Handtracking", "description": "Projet réalisé en loisirs - Création d'une application Python de handtracking"},<
        ],<
    ];<
<
    function createProjetFrame(projet) {<
        const frame = document.createElement("div");
        frame.classList.add("projet-frame");
<
        const img = document.createElement("img");
        img.src = projet.imgSrc;
        frame.appendChild(img);
<
        const title = document.createElement("h3");
        title.textContent = projet.titre;
        frame.appendChild(title);
<
        const description = document.createElement("p");
        description.textContent = projet.description;
        frame.appendChild(description);
<
        return frame;
 <   }
<
 <   function main() {
        const container = document.getElementById("projets-container");
<
        projets.forEach(row => {
 <           row.forEach(projet => {
 <               const frame = createProjetFrame(projet);
  <              container.appendChild(frame);
  <          });
   <     });
   < }
<
    main();
` 
export const javascript_contact =`
java con
    function afficherContact() {
<        const contactInfo = {
 <           "Nom": "Votre Nom",
  <          "Email": "votre.email@example.com",
   <         "Téléphone": "+33 6 12 34 56 78",
    <        "LinkedIn": "https://www.linkedin.com/in/votreprofil",
     <       "Portfolio": "https://votreportfolio.com"
      <  };
<
        const contactDiv = document.getElementById("contact-info");

        for (const [key, value] of Object.entries(contactInfo)) {
<            const p = document.createElement("p");
 <           p.innerHTML = "<strong>{key} :</strong> {value}";
  <          contactDiv.appendChild(p);
   <     }
   < }
<
<    afficherContact();

` 
export const python_profil =`
pyth pro
# Informations personnelles
nom = "Olivier"
prenom = "Tom"
mail = "tomolivierpro@gmail.com"
ville = "Lyon"
langages = False

print("Formation")
if ville == "Toulon":
    print("DUT GEII, 2017-2019")
    print("Licence informatique, 2019 - 2022")
elif ville == "Corse":
    print("Master informatique, 2022 - 2024")

print("\nExpérience professionnelle")
if ville == "Toulon":
    print("Stage fin de DUT GEII, 2019, 8 semaines")
    print("Hôpital Saint Anne")
    print("Techno principaux : PHP, MySQL")
elif ville == "Corse":
    print("Stage fin de master, 2024, 6 mois à")
    print("Alteca")
    print("Techno principaux : PHP (Symfony), Vue.js")

def switch_case_annee(annee):
    match annee:
        case 2019:
            print("Stage à l'Hôpital d'Instruction des Armées Sainte-Anne de Toulon, création d'une application web de type QCM destinée aux apprentis Docteurs en transfusion sanguine. Récupération de données pour analyse par le directeur.\n")
            print("Concours entrepreneuriat \"Les Entrep' Var\", création de \"Handicap Indépendance\", une application connectée à différents modules qui permettront à n'importe quelle personne handicapée d'être autonome chez elle.\n")
        case 2022:
            print("Hackathon, développement d'une application web de type jeu de loi avec des voitures électriques comme pions pour que l'utilisateur comprenne l'importance de la gestion de l'énergie. Réalisé en collaboration avec EDF Corse.\n")
        case 2023:
            print("Concours entrepreneuriat \"Challenge Innovation\", création d'un boîtier connecté relié à une application intelligente. OXI (nom de l’entreprise) vous permet d'arrêter de fumer en gérant à votre place votre consommation de tabac.\n")
        case 2024:
            print("2024\n")
        case _:
            print("L'année n'est pas 2019, 2022, 2023, 2024 ou 2029.\n")

# Exemple d'utilisation
annee = 2023
switch_case_annee(annee)

print("Compétence")
if langages:
    top_langage_decroissante = {1: 'Python', 2: 'JavaScript', 3: 'PHP', 4: 'HTML/CSS', 5: 'TypeScript', 6: 'Flutter', 7: 'SQL'}
    for cle, valeur in top_langage_decroissante.items():
        print(f"Clé : {cle}, Valeur : {valeur}")
else:
    top_framework = ["Angular", 'Vue.js', 'React']
    logiciel = ['GitHub', 'VSCode']
    print(f"Frameworks principaux : {', '.join(top_framework)}")
    print(f"Logiciels utilisés : {', '.join(logiciel)}")

print("\nLoisir")
def myloisir():
    print("Pratique du street workout et du triathlon, ce qui m'apporte rigueur et discipline.")
    print("Voyages autour du monde (Japon, États-Unis, Irlande, Londres, Thaïlande), grâce à quoi j'ai acquis une adaptabilité aux imprévus et une ouverture d'esprit.")
    print("Les projets 3D JavaScript et les projets Python handtracking qui satisfont ma curiosité et mon envie de réaliser des projets.")

myloisir()
` 
export const python_projet =`
pyth pro
toto import tkinter as tk
from tkinter import PhotoImage

def afficher_image ():
    
    fenetre = tk.Tk()
    fenetre.title("Affichage d'une image")

    chemin_image = "chemin/vers/votre/image.png"
    img =PhotoImage (file=chemin_image )

    label_image = tk.label(fenetre, image=img)
    label_image.pack()
    fenetre.mainloop()
# veulliez executer le code pour voir le resultat
afficher_image()    
projets = [
    [
        {"imgSrc": "src/assets/emploie.png", "titre": "Emploi du temps", "openfenetre": "Emploi_du_temps", "description": "Projet réalisé en master - Création d'une application web de gestion et visualisation \nd'emploi du temps sous différentes formes techno:"},
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
]

class ProjetFrame(tk.Frame):
    def __init__(self, master, projet):
        super().__init__(master)
        self.projet = projet
        self.create_widgets()

    def create_widgets(self):
        img = PhotoImage(file=self.projet["imgSrc"]).subsample(10)  # Réduire la taille à 10%
        image_label = tk.Label(self, image=img)
        image_label.image = img
        image_label.pack()

        title_label = tk.Label(self, text=self.projet["titre"], font=("Helvetica", 12, "bold"))
        title_label.pack()

        description_label = tk.Label(self, text=self.projet["description"])
        description_label.pack()

def main():
    root = tk.Tk()
    root.title("Projets")

    for row_idx, projet_row in enumerate(projets):
        for col_idx, projet in enumerate(projet_row):
            frame = ProjetFrame(root, projet)
            frame.grid(row=row_idx, column=col_idx, padx=10, pady=10)

    root.mainloop()

if __name__ == "__main__":
    main()
` 
export const python_contact =`
pyth con
 import time

def reveal_contact_info():
    contact_info = {
        "Nom": "Votre Nom",
        "Email": "votre.email@example.com",
        "Téléphone": "+33 6 12 34 56 78",
        "LinkedIn": "linkedin.com/in/votreprofil",
        "Portfolio": "votreportfolio.com"
    }
    
    print("Découvrons mes contacts !")
    for key, value in contact_info.items():
        print(f"{key}: ", end="", flush=True)
        time.sleep(1)  # Attendre 1 seconde avant de révéler chaque info
        print(value)
        
reveal_contact_info()

`
export const php_profil =`
php pro 
<?php £
$nom = "Olivier";
$prenom = "Tom";
$mail = "tomolivierpro@gmail.com";
$ville = "Lyon";
$langages = false;

echo "Formation\n";
if ($ville == "Toulon") {
    echo "DUT GEII , 2017-2019\n";
    echo "Licence informatique , 2019 - 2022\n";
} elseif ($ville == "Corse") {
    echo "Master informatique, 2022 - 2024\n";
}

echo "Expérience professionnelle\n";
if ($ville == "Toulon") {
    echo "Stage fin de DUT GEII , 2019, 8 semaines\n";
    echo "Hopital Saint Anne\n";
    echo "Techno principaux : PHP, MySQL\n";
} elseif ($ville == "Corse") {
    echo "Stage fin de master , 2024 , 6 mois à\n";
    echo "Alteca\n";
    echo "Techno principaux: PHP (Symfony), Vue.js\n";
}

function switch_case_annee($annee) {
    switch ($annee) {
        case 2019:
            echo "Stage à l'Hôpital d'Instruction des Armées Sainte-Anne de Toulon, création d'une application web de type QCM destinée aux apprentis Docteurs en transfusion sanguine. Récupération de données pour analyse par le directeur.\n\nConcours entrepreneuriat \"Les Entrep' Var\", création de \"Handicap Indépendance\", une application connectée à différents modules qui permettront à n'importe quelle personne handicapée d'être autonome chez elle.\n";
            break;
        case 2022:
            echo "Hackathon, développement d'une application web de type jeu de loi avec des voitures électriques comme pions pour que l'utilisateur comprenne l'importance de la gestion de l'énergie. Réalisé en collaboration avec EDF Corse.\n";
            break;
        case 2023:
            echo "Concours entrepreneuriat \"Challenge Innovation\", création d'un boîtier connecté relié à une application intelligente. OXI (nom de l’entreprise) vous permet d'arrêter de fumer en gérant à votre place votre consommation de tabac.\n";
            break;
        case 2024:
            echo "2024\n";
            break;
        default:
            echo "L'année n'est pas 2019, 2022, 2023, 2024 ou 2029.\n";
    }
}

// Exemple d'utilisation
$annee = 2023;
switch_case_annee($annee);

echo "Compétence\n";
if ($langages) {
    $top_langage_decroissante = [1 => 'Python', 2 => 'JavaScript', 3 => 'PHP', 4 => 'HTML/CSS', 5 => 'TypeScript', 6 => 'Flutter', 7 => 'SQL'];
    foreach ($top_langage_decroissante as $cle => $valeur) {
        echo "Clé : $cle, Valeur : $valeur\n";
    }
} else {
    $top_framework = ["Angular", 'Vue.js', 'React'];
    $logiciel = ['GitHub', 'VSCode'];
}

echo "Loisir\n";
function myloisir() {
    echo "Pratique du street workout et du triathlon, ce qui m'apporte rigueur et discipline. Voyages autour du monde (Japon, États-Unis, Irlande, Londres, Thaïlande), grâce à quoi j'ai acquis une adaptabilité aux imprévus et une ouverture d'esprit.\nLes projets 3D JavaScript et les projets Python handtracking qui satisfont ma curiosité et mon envie de réaliser des projets.\n";
}

myloisir();
?>


` 
export const php_projet =`
   php proj    <?php
    $projets = [
        [
            ["imgSrc" => "src/assets/emploie.png", "titre" => "Emploi du temps", "openfenetre" => "Emploi_du_temps", "description" => "Projet réalisé en master - Création d'une application web de gestion et visualisation d'emploi du temps sous différentes formes techno:"],
            ["imgSrc" => "src/assets/oie.png", "titre" => "Jeu de l'oie", "openfenetre" => "jeu-de-loie", "description" => "Projet réalisé en master (hackathon) - Création d'une application web de gestion de voitures électriques sous forme de jeu de l'oie"],
            ["imgSrc" => "src/assets/dame.png", "titre" => "Jeu de dames", "openfenetre" => "Jeu_de_dames", "description" => "Projet réalisé en master - Création d'une application web type jeu de dames utilisant l'IA"],
        ],
        [
            ["imgSrc" => "src/assets/camping.png", "titre" => "Gestion de camping", "openfenetre" => "Gestion_de_camping", "description" => "Projet réalisé en licence - Création d'une application web de gestion d'un camping totalement connecté"],
            ["imgSrc" => "src/assets/angular.png", "titre" => "Application universitaire (Vue.js & Angular)", "openfenetre" => "Application_universitaire_Vuejs_&_angular", "description" => "Projet réalisé en master - Création d'une application web de gestion d'emploi du temps et d'un environnement universitaire (notes, inscriptions, etc.)"],
            ["imgSrc" => "src/assets/oxi.png", "titre" => "Application pour OXI", "openfenetre" => "Application_pour_OXI", "description" => "Projet réalisé en master (concours innovation) - Création d'une application web et mobile de visualisation de plusieurs paramètres"],
        ],
        [
            ["imgSrc" => "src/assets/L3chemin.png", "titre" => "Jeu de chenilles", "openfenetre" => "Jeu_de_chenilles", "description" => "Projet réalisé en licence - Création d'un jeu sous OpenGL et Tkinter liant la théorie des graphes et l'infographie"],
            ["imgSrc" => "src/assets/handtracking.png", "titre" => "Handtracking", "openfenetre" => "Handtracking", "description" => "Projet réalisé en loisirs - Création d'une application Python de handtracking"],
        ],
    ];

    foreach ($projets as $projetRow) {
        foreach ($projetRow as $projet) {
            echo '<div class="projet-frame">';
            echo '<img src="' . $projet["imgSrc"] . '" alt="' . $projet["titre"] . '">';
            echo '<h3>' . $projet["titre"] . '</h3>';
            echo '<p>' . $projet["description"] . '</p>';
            echo '</div>';
        }
    }
    ?>
` 
export const php_contact =`
 php con
 <?php
function afficher_contact()
{
    $contact_info = array(
        "Nom" => "Votre Nom",
        "Email" => "votre.email@example.com",
        "Téléphone" => "+33 6 12 34 56 78",
        "LinkedIn" => "https://www.linkedin.com/in/votreprofil",
        "Portfolio" => "https://votreportfolio.com"
    );

    echo "<h3>Contactez-moi !</h3>";
    foreach ($contact_info as $key => $value) {
        echo "<p><strong>$key :</strong> $value</p>";
    }
}

afficher_contact();
?>
`  

export const dico_python: { [nom: string]: string } = {
   
        // Mots-clés Python - Contrôle de flux
        "if": "#C586C0", // Bleu
        "else": "#C586C0", // Bleu
        "elif": "#569CD6", // Bleu
        "for": "#569CD6", // Bleu
        "while": "#569CD6", // Bleu
        "break": "#569CD6", // Bleu
        "continue": "#569CD6", // Bleu
        "return": "#C586C0", // Violet
        "try": "#569CD6", // Bleu
        "except": "#569CD6", // Bleu
        "finally": "#569CD6", // Bleu
        "with": "#569CD6", // Bleu
        "as": "#569CD6", // Bleu
        "assert": "#569CD6", // Bleu
        "raise": "#569CD6", // Bleu
      
        // Définition de Fonction/Classe
        "def": "#C586C0", // Violet
        "class": "#C586C0", // Violet
        "lambda": "#C586C0", // Violet
      
        // Importation de Modules
        "import": "#C586C0", // Violet
        "from": "#C586C0", // Violet
      
        // Logique
        "and": "#569CD6", // Bleu
        "or": "#569CD6", // Bleu
        "not": "#569CD6", // Bleu
        "is": "#569CD6", // Bleu
        "in": "#569CD6", // Bleu
      
        // Types de Données Primitives
        "True": "#569CD6", // Bleu
        "False": "#569CD6", // Bleu
        "None": "#569CD6", // Bleu
      
        // Affichage/Entrée
        "print": "#DCDCAA", // Jaune clair
        "input": "#DCDCAA", // Jaune clair
      
        // Divers
        "yield": "#569CD6", // Bleu
        "async": "#569CD6", // Bleu
        "await": "#569CD6", // Bleu
        };
  
export const dico_php: { [nom: string]: string } = {
   
            // Mots-clés PHP - Contrôle de flux
            "if": "#C586C0", // Violet
            "else": "#C586C0", // Violet
            "elseif": "#569CD6", // Bleu
            "php": "#569CD6", // Bleu
            "for": "#569CD6", // Bleu
            "while": "#569CD6", // Bleu
            "break": "#569CD6", // Bleu
            "continue": "#569CD6", // Bleu
            "return": "#C586C0", // Violet
            "try": "#569CD6", // Bleu
            "catch": "#569CD6", // Bleu
            "finally": "#569CD6", // Bleu
            "switch": "#569CD6", // Bleu
            "case": "#569CD6", // Bleu
            "default": "#569CD6", // Bleu
        
            // Définition de Fonction/Classe
            "function": "#C586C0", // Violet
            "class": "#C586C0", // Violet
            "interface": "#C586C0", // Violet
            "trait": "#C586C0", // Violet
            "public": "#569CD6", // Bleu
            "private": "#569CD6", // Bleu
            "protected": "#569CD6", // Bleu
            "static": "#569CD6", // Bleu
            "const": "#569CD6", // Bleu
        
            // Importation de Modules/Namespaces
            "include": "#C586C0", // Violet
            "require": "#C586C0", // Violet
            "use": "#C586C0", // Violet
            "namespace": "#C586C0", // Violet
        
            // Logique
            "and": "#569CD6", // Bleu
            "or": "#569CD6", // Bleu
            "xor": "#569CD6", // Bleu
            "not": "#569CD6", // Bleu
            "instanceof": "#569CD6", // Bleu
            "as": "#569CD6", // Bleu
        
            // Types de Données Primitives
            "true": "#569CD6", // Bleu
            "false": "#569CD6", // Bleu
            "null": "#569CD6", // Bleu
        
            // Affichage/Entrée
            "echo": "#DCDCAA", // Jaune clair
            "print": "#DCDCAA", // Jaune clair
        
            // Divers
            "yield": "#569CD6", // Bleu
            "array": "#569CD6", // Bleu
            "new": "#569CD6", // Bleu
            "clone": "#569CD6", // Bleu
            "async": "#569CD6", // Bleu
            "await": "#569CD6", // Bleu
        };
        

  export const dico: { [nom: string]: string } = {
       // Déclaration de Variables
       "var": "#D69D85", // Orange clair
       "let": "#569CD6", // Orange clair
       "const": "#D69D85", // Orange clair
    // Mots-clés de contrôle de flux
    "if": "#C586C0", // Bleu
    "else": "#C586C0", // Bleu
    "switch": "#C586C0", // Bleu
    "case": "#C586C0", // Bleu
    "default": "#C586C0", // Bleu
    "for": "#C586C0", // Bleu
    "while": "#C586C0", // Bleu
    "do": "#C586C0", // Bleu
    "break": "#C586C0", // Bleu
    "continue": "#C586C0", // Bleu
    "return": "#C586C0", // Violet
    "throw": "#C586C0", // Violet
    "try": "#C586C0", // Bleu
    "catch": "#C586C0", // Bleu
    "finally": "#C586C0", // Bleu
    
    // Définition de Fonction/Classe
    "function": "#C586C0", // Violet
    "class": "#C586C0", // Violet
    "constructor": "#C586C0", // Violet
    "async": "#C586C0", // Violet
    "await": "#C586C0", // Violet
    
    // Importation de Modules
    "import": "#C586C0", // Violet
    "export": "#C586C0", // Violet
    "from": "#C586C0", // Violet
    "'":"#D69D85",

    // Logique
    "and": "#C586C0", // Bleu (remplacé par && en JS)
    "or": "#C586C0", // Bleu (remplacé par || en JS)
    "not": "#C586C0", // Bleu (remplacé par ! en JS)
    "is": "#C586C0", // Bleu (pas de équivalent direct en JS)
    "in": "#C586C0", // Bleu (pas de équivalent direct en JS)

    // Types de Données Primitives
    "true": "#C586C0", // Bleu
    "false": "#C586C0", // Bleu
    "null": "#C586C0", // Bleu
    "undefined": "#C586C0", // Bleu
    
    // Affichage/Entrée
    "console": "#37A3F0", // Jaune clair
    "log": "#DCDCAA", // Jaune clair
    "alert": "#DCDCAA", // Jaune clair
    
    // Divers
    "yield": "#C586C0", // Bleu (plus utilisé dans les générateurs)
     // Violet
};

  
  
  
  