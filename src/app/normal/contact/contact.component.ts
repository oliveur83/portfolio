import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { javacript_profil,dico } from './toto';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  liste_code: string[] = [];
  string_complete:string ="";
  htmlContent: SafeHtml | undefined;
  constructor(private http: HttpClient,private sanitizer: DomSanitizer) {}

  code = javacript_profil; // Assurez-vous que javacript_profil est une chaîne de caractères

  ngOnInit(): void {
    // Vérifier si `code` est bien une chaîne de caractères
    if (typeof this.code === 'string') {
      // Extraction des mots en utilisant une expression régulière
      const words = this.code.match(/\b\w+\b|[{}\[\]()]/g);
      if (words ) {
        // Ajout des mots extraits à la liste
        this.liste_code.push(...words);
        
      }
    }
    for (const motCle of this.liste_code) {
      if (motCle in dico )
      {
        this.string_complete=this.string_complete+'<span style="color:'+dico[motCle]+';">'+motCle+"</span>"
      }
      else{
        this.string_complete=this.string_complete+motCle

      }
   }
   this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.string_complete);
 
    // Affichage de la liste dans la console (optionnel)
    console.log(this.liste_code);
  }
}
