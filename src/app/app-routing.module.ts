import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from  './profil/profil.component';
import { ContactComponent } from './contact/contact.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProjetComponent } from './projet/projet.component';
import {DevPrincipalComponent} from './dev/principal/principal.component'
import {ProfilComponentdev} from './dev/profil/profildev.component'

const routes: Routes = [
  { path: 'dev/principal', component: DevPrincipalComponent }, // Assurez-vous que le composant est correct
  { path: 'dev/profil', component: ProfilComponentdev }, // Assurez-vous que le composant est correct
 
  {path: 'profil',component: ProfilComponent },
  {path: 'contact',component: ContactComponent },
  {path: 'projet',component: ProjetComponent },
  {path: 'principal',component: PrincipalComponent },
  
  {
  path:'',redirectTo:'principal',pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
