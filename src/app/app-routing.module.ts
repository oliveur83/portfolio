import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from  './normal/profil/profil.component';
import { ContactComponent } from './normal/contact/contact.component';
import { PrincipalComponent } from './normal/principal/principal.component';
import { ProjetComponent } from './normal/projet/projet.component';
import {ProfilComponentdev} from './dev/profil/profildev.component'
import { JeuDeLoieComponent } from './normal/projet/jeu-de-loie/jeu-de-loie.component';
import { JeuDeDameComponent } from './normal/projet/jeu-de-dame/jeu-de-dame.component';
import { HandtrackingComponent } from './normal/projet/handtracking/handtracking.component';
import { GestionCampingComponent } from './normal/projet/gestion-camping/gestion-camping.component';
import { EDTComponent } from './normal/projet/edt/edt.component';
import { OXIComponent } from './normal/projet/oxi/oxi.component';
import { AngularVuejsComponent } from './normal/projet/angular-vuejs/angular-vuejs.component';
import { ChenilleComponent } from './normal/projet/chenille/chenille.component';
import { TestComponent } from './test/test.component' 
import {PageProfilComponent} from "./page-profil/page-profil.component"
const routes: Routes = [
{ path: 'dev/profil', component: ProfilComponentdev }, // Assurez-vous que le composant est correct
{path: 'test',component:TestComponent },
{path: 'page',component:PageProfilComponent },


  {path: 'profil',component: ProfilComponent },
  {path: 'contact',component: ContactComponent },
  {path: 'projet',component: ProjetComponent },
  {path: 'principal',component: PrincipalComponent },
  {path: 'jeu-de-loie',component: JeuDeLoieComponent },
  {path: 'jeu-de-dame',component: JeuDeDameComponent },
  
  {path: 'Emploi_du_temps',component: EDTComponent },
  {path: 'Gestion_de_camping',component: GestionCampingComponent },
  {path: 'Application_universitaire_Vuejs_&_angular',component: AngularVuejsComponent },
  {path: 'Application_pour_OXI',component: OXIComponent },
  {path: 'Handtracking',component: HandtrackingComponent },
  {path: 'chenille',component: ChenilleComponent },

  {
  path:'',redirectTo:'principal',pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
