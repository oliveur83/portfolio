let prenom = 'Tom';
let nom = 'Olivier';
let mail = 'tomolivierpro@gmail.com';
let ville = 'Lyon';
let langages = false;

console.log('Formation');
if (ville === 'Toulon') {
    console.log('DUT GEII , 2017-2019');
    console.log('Licence informatique , 2019 - 2022');
} else if (ville === 'Corse') {
    console.log('Master informatique, 2022 - 2024');
}

console.log('Expérience professionnelle');
if (ville === 'Toulon') {
    console.log('Stage fin de DUT GEII , 2019, 8 semaines');
    console.log('Hopital Saint Anne');
    console.log('Techno principaux : PHP, MySQL');
} else if (ville === 'Corse') {
    console.log('Stage fin de master , 2024 , 6 mois à');
    console.log('Alteca');
    console.log('Techno principaux: PHP (Symfony), Vue.js');
}

function switch_case_annee(annee) {
    switch (annee) {
        case 2019:
            console.log('Stage à lHôpital dInstruction des Armées Sainte-Anne de Toulon, création dune application web de type QCM destinée aux apprentis Docteurs en transfusion sanguine. Récupération de données pour analyse par le directeur.\n\nConcours entrepreneuriat \'Les Entrep Var\', création de \'Handicap Indépendance\', une application connectée à différents modules qui permettront à nimporte quelle personne handicapée dêtre autonome chez elle.');
            break;
        case 2022:
            console.log('Hackathon, développement dune application web de type jeu de loi avec des voitures électriques comme pions pour que lutilisateur comprenne limportance de la gestion de lénergie. Réalisé en collaboration avec EDF Corse.');
            break;
        case 2023:
            console.log('Concours entrepreneuriat \'Challenge Innovation\', création dun boîtier connecté relié à une application intelligente. OXI (nom de l’entreprise) vous permet darrêter de fumer en gérant à votre place votre consommation de tabac.');
            break;
        case 2024:
            console.log('2024');
            break;
        default:
            console.log('Lannée nest pas 2019, 2022, 2023, 2024 ou 2029.');
    }
}

// Exemple d'utilisation
let annee = 2023;
switch_case_annee(annee);

console.log('Compétence');
if (langages) {
    let top_langage_decroissante = { 1: 'Python', 2: 'JavaScript', 3: 'PHP', 4: 'HTML/CSS', 5: 'TypeScript', 6: 'Flutter', 7: 'SQL' };
    for (let cle in top_langage_decroissante) {
        if (top_langage_decroissante.hasOwnProperty(cle)) {
            console.log('Clé : ${cle}, Valeur : ${top_langage_decroissante[cle]}');
        }
    }
} else {
    let top_framework = ['Angular', 'Vue.js', 'React'];
    let logiciel = ['GitHub', 'VSCode'];
}

console.log('Loisir');
function myloisir() {
    console.log('Pratique du street workout et du triathlon, ce qui mapporte rigueur et discipline. Voyages autour du monde (Japon, États-Unis, Irlande, Londres, Thaïlande), grâce à quoi jai acquis une adaptabilité aux imprévus et une ouverture desprit.');
    console.log('Les projets 3D JavaScript et les projets Python handtracking qui satisfont ma curiosité et mon envie de réaliser des projets.');
}

myloisir();
