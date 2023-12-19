import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
   projets = [
  [
    { imgSrc: "./assets/equipe/Big Boss (1).png", titre: "Big Boss", openfenetre: "page-profil" },
    { imgSrc: "./assets/equipe/Amine (1).png", titre: "Amine", openfenetre: "page-profil" },
    { imgSrc: "./assets/equipe/Dimitri (1).png", titre: "Dimitri", openfenetre: "page-profil" },
  ],
  [
    { imgSrc: "./assets/equipe/Felicien (1).png", titre: "Felicien", openfenetre: "page-profil" },
    { imgSrc: "./assets/equipe/Fode (1).png", titre: "Fode", openfenetre: "page-profil" },
    { imgSrc: "./assets/equipe/Idrice (1).png", titre: "Idrice", openfenetre: "page-profil" },
  ],
  [
    { imgSrc: "./assets/equipe/Jean (1).png", titre: "Jean", openfenetre: "page-profil" },
    { imgSrc: "./assets/equipe/Jeank (1).png", titre: "Jeank", openfenetre: "page-profil" },
    { imgSrc: "./assets/equipe/Jean José (1).png", titre: "Jean José", openfenetre: "page-profil" },
  ],
  [
    { imgSrc: "./assets/equipe/Edouard (1).png", titre: "Edouard", openfenetre: "page-profil" },
    { imgSrc: "./assets/equipe/Pilou (1).png", titre: "Pilou", openfenetre: "page-profil" },
    { imgSrc: "./assets/equipe/Quentin (1).png", titre: "Quentin", openfenetre: "page-profil" },
  ],
  [
    { imgSrc: "./assets/equipe/Tom (1).png", titre: "Tom", openfenetre: "page-profil" },
    { imgSrc: "./assets/equipe/Francois (1).png", titre: "Francois", openfenetre: "page-profil" },
    { imgSrc: "./assets/equipe/Toussaint (1).png", titre: "Toussaint", openfenetre: "page-profil" },
  ]
  // Ajoutez d'autres projets de la même manière
];


constructor(private router: Router) {}

open_projet(projet: any) {
  this.router.navigate(['/page'], { queryParams: { titre: projet.titre } });
}
}
