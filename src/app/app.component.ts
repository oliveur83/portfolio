import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './style_add.css']
})
export class AppComponent {
  imagePath: SafeResourceUrl;
  
  isDevMode: boolean = false;
  modedevfond: boolean = false;
  constructor(private sanitizer: DomSanitizer, private router: Router, private activatedRoute: ActivatedRoute) {
    this.imagePath = '';
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateRoute();
    });
  }
  

  ngOnInit() {
    
    this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl('assets/logo_olicode.png');
  }
  contact(){
    console.log("toto")
    this.router.navigate(['/contact']);
       
  }
  profil(){
    console.log("toto")
    this.router.navigate(['/profil']);
       
  }
  modedev() {
    console.log("mode avant",this.isDevMode)
    this.updateRoute();
  }

  updateRoute() {
    console.log("update", this.isDevMode);
    const currentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path || 'principal';
    console.log(currentRoute, this.isDevMode);
  
    // Si isDevMode est true, ajoutez le préfixe 'dev/' ; sinon, retirez-le.
    const newRoute = this.isDevMode ? `dev/${currentRoute}` : currentRoute.replace('dev/', '');
    document.body.style.backgroundColor = this.isDevMode ? "rgb(42, 48, 52)" :"rgb(196, 228, 244)";
    this.router.navigate([newRoute]);
  }
  
  principal(){
    console.log("toto")
    this.router.navigate(['/principal']);
       
  }
  
  projet(){
    console.log("toto")
    this.router.navigate(['/projet']);
       
  }
}
