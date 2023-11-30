import { Component, Output, EventEmitter,ElementRef, Renderer2, ChangeDetectorRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  projets = [[
    { imgSrc: "./assets/emploie.png", titre: "Emploi du temps", openfenetre: "Emploi_du_temps", description: "Projet réalisé en master-Création d'une application web de gestion et visualisation d'emploi du temps sous différentes formes techno:" },
    { imgSrc: "./assets/oie.png", titre: "Jeu de l'oie", openfenetre: "jeu-de-loie", description: "Projet réalisé en master(hackaton)-Création d'une application web de gestion de nos voitures électriques sous forme de jeu de l'oie" },
    { imgSrc: "./assets/dame.png", titre: "Jeu de dames", openfenetre: "Jeu_de_dames", description: "Projet réalisé en master-Création d'une application web type jeu de dame qui utilise l'IA" },
  ],[
    { imgSrc: "./assets/camping.png", titre: "Gestion de camping", openfenetre: "Gestion_de_camping", description: "Projet réalisé en licence-Création d'une application web de gestion d'un camping totalement connecté" },
    { imgSrc: "./assets/angular.png", titre: "Application universitaire-Vuejs & angular", openfenetre: "Application_universitaire_Vuejs_&_angular", description: "Projet réalisé en master-Création d'une application web de gestion et visualisation d'emploi du temps et gestion d'un environnement universitaire (notes, inscription,...)" },
    { imgSrc: "./assets/oxi.png", titre: "Application pour OXI", openfenetre: "Application_pour_OXI", description: "Projet réalisé en master (lors du concours innovation)-Création d'une application web et mobile de visualisation de plusieurs paramètres." },
  ],[
    { imgSrc: "./assets/L3chemin.png", titre: "Jeu de chenilles", openfenetre: "Jeu_de_chenilles", description: "Projet réalisé en licence-Création d'un jeu sous opengl et tkinter qui lie la théorie des graphes et l'infographie temps." },
    { imgSrc: "./assets/handtracking.png", titre: "Handtracking", openfenetre: "Handtracking", description: "Projet réalisé en loisirs-Création d'une application python de handtracking." },
    ]// Ajoutez d'autres projets de la même manière
  ];
  @Output() dialogClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() mouseMove: EventEmitter<{ x: number, y: number }> = new EventEmitter<{ x: number, y: number }>();

  handleClickInsideDialog() {
    // Émettre l'événement personnalisé
    this.dialogClick.emit();
  }
  handleMouseMove(event: MouseEvent) {
    
    // Émettre l'événement personnalisé avec les coordonnées x et y de la souris
    this.mouseMove.emit({ x: event.clientX, y: event.clientY });
  }
}
