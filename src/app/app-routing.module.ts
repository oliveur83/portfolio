import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from  './profil/profil.component';
import { ContactComponent } from './contact/contact.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProjetComponent } from './projet/projet.component';
import {DevPrincipalComponent} from './dev/principal/principaldev.component'
import {ProfilComponentdev} from './dev/profil/profildev.component'
import { ContactComponentdev } from './dev/contact/contactdev.component';
import { JeuDeLoieComponent } from './projet/jeu-de-loie/jeu-de-loie.component';
import { JeuDeDameComponent } from './projet/jeu-de-dame/jeu-de-dame.component';
import { HandtrackingComponent } from './projet/handtracking/handtracking.component';
import { GestionCampingComponent } from './projet/gestion-camping/gestion-camping.component';
import { EDTComponent } from './projet/edt/edt.component';
import { OXIComponent } from './projet/oxi/oxi.component';
import { AngularVuejsComponent } from './projet/angular-vuejs/angular-vuejs.component';
import { ChenilleComponent } from './projet/chenille/chenille.component';
const routes: Routes = [
  {path:'dev/contact' , component:ContactComponentdev},
  { path: 'dev/principal', component: DevPrincipalComponent }, // Assurez-vous que le composant est correct
  { path: 'dev/profil', component: ProfilComponentdev }, // Assurez-vous que le composant est correct
 
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
