import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent {
  projets = [[
    { imgSrc: "./assets/emploie.png", titre: "Emploi du temps", openfenetre: "Emploi_du_temps", description: "Projet réalisé en master-Création d'une application web de gestion et visualisation d'emploi du temps sous différentes formes techno:" },
    { imgSrc: "./assets/oie.png", titre: "Jeu de l'oie", openfenetre: "jeu-de-loie", description: "Projet réalisé en master(hackaton)-Création d'une application web de gestion de nos voitures électriques sous forme de jeu de l'oie" },
    { imgSrc: "./assets/dame.png", titre: "Jeu de dames", openfenetre: "jeu-de-dame", description: "Projet réalisé en master-Création d'une application web type jeu de dame qui utilise l'IA" },
  ],[
    { imgSrc: "./assets/camping.png", titre: "Gestion de camping", openfenetre: "Gestion_de_camping", description: "Projet réalisé en licence-Création d'une application web de gestion d'un camping totalement connecté" },
    { imgSrc: "./assets/angular.png", titre: "Application universitaire-Vuejs & angular", openfenetre: "Application_universitaire_Vuejs_&_angular", description: "Projet réalisé en master-Création d'une application web de gestion et visualisation d'emploi du temps et gestion d'un environnement universitaire (notes, inscription,...)" },
    { imgSrc: "./assets/oxi.png", titre: "Application pour OXI", openfenetre: "Application_pour_OXI", description: "Projet réalisé en master (lors du concours innovation)-Création d'une application web et mobile de visualisation de plusieurs paramètres." },
  ],[
    { imgSrc: "./assets/L3chemin.png", titre: "Jeu de chenilles", openfenetre: "chenille", description: "Projet réalisé en licence-Création d'un jeu sous opengl et tkinter qui lie la théorie des graphes et l'infographie temps." },
    { imgSrc: "./assets/handtracking.png", titre: "Handtracking", openfenetre: "Handtracking", description: "Projet réalisé en loisirs-Création d'une application python de handtracking." },
    ]// Ajoutez d'autres projets de la même manière
  ];
  constructor(private router: Router) {
  }
  open_projet(open:String){
    console.log('/'+open)
    this.router.navigate(['/'+open]);
  }
}
