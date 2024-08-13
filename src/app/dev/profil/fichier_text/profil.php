<?php
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
