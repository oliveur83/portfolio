import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // Assurez-vous que vous importez FormsModule
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactComponent } from './contact/contact.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProjetComponent } from './projet/projet.component';
import { ProfilComponentdev } from './dev/profil/profildev.component';
import { DevPrincipalComponent } from './dev/principal/principaldev.component';
import { ContactComponentdev } from './dev/contact/contactdev.component';
import { JeuDeLoieComponent } from './projet/jeu-de-loie/jeu-de-loie.component';
import { JeuDeDameComponent } from './projet/jeu-de-dame/jeu-de-dame.component';
import { OXIComponent } from './projet/oxi/oxi.component';
import { EDTComponent } from './projet/edt/edt.component';
import { GestionCampingComponent } from './projet/gestion-camping/gestion-camping.component';
import { AngularVuejsComponent } from './projet/angular-vuejs/angular-vuejs.component';
import { HandtrackingComponent } from './projet/handtracking/handtracking.component';
import { ModalComponent } from './dev/profil/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    ContactComponentdev,
    DevPrincipalComponent,
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
   
  ],
  imports: [CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
