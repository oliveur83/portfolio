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
@NgModule({
  declarations: [
    ContactComponentdev,
    DevPrincipalComponent,
    ProfilComponentdev,
    AppComponent,
    ProfilComponent,
    ContactComponent,
    PrincipalComponent,
    ProjetComponent
  ],
  imports: [CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
