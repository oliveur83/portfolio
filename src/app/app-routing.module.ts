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
const routes: Routes = [
  {path:'dev/contact' , component:ContactComponentdev},
  { path: 'dev/principal', component: DevPrincipalComponent }, // Assurez-vous que le composant est correct
  { path: 'dev/profil', component: ProfilComponentdev }, // Assurez-vous que le composant est correct
 
  {path: 'profil',component: ProfilComponent },
  {path: 'contact',component: ContactComponent },
  {path: 'projet',component: ProjetComponent },
  {path: 'principal',component: PrincipalComponent },
  {path: 'jeu-de-loie',component: JeuDeLoieComponent },
  
  {
  path:'',redirectTo:'principal',pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
