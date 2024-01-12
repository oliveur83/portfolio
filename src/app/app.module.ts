import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // Assurez-vous que vous importez FormsModule
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilComponent } from './normal/profil/profil.component';
import { ContactComponent } from './normal/contact/contact.component';
import { PrincipalComponent } from './normal/principal/principal.component';
import { ProjetComponent } from './normal/projet/projet.component';
import { ProfilComponentdev } from './dev/profil/profildev.component';
import { JeuDeLoieComponent } from './normal/projet/jeu-de-loie/jeu-de-loie.component';
import { JeuDeDameComponent } from './normal/projet/jeu-de-dame/jeu-de-dame.component';
import { OXIComponent } from './normal/projet/oxi/oxi.component';
import { EDTComponent } from './normal/projet/edt/edt.component';
import { GestionCampingComponent } from './normal/projet/gestion-camping/gestion-camping.component';
import { AngularVuejsComponent } from './normal/projet/angular-vuejs/angular-vuejs.component';
import { HandtrackingComponent } from './normal/projet/handtracking/handtracking.component';
import { ModalComponent } from './dev/profil/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChenilleComponent } from './normal/projet/chenille/chenille.component';
import { PageProfilComponent } from './page-profil/page-profil.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [

    ProfilComponentdev,
    AppComponent,
    ProfilComponent,
    ContactComponent,
    PrincipalComponent,
    ProjetComponent,
    JeuDeLoieComponent,
    JeuDeDameComponent,
    OXIComponent,
    EDTComponent,
    GestionCampingComponent,
    AngularVuejsComponent,
    HandtrackingComponent,
    ModalComponent,
    ChenilleComponent,

    PageProfilComponent,
   
  ],
  imports: [CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
