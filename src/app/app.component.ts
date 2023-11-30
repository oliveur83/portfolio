import { Component,ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { logo } from './logo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './style_add.css']
})

export class AppComponent {
  imagePath: SafeResourceUrl;
  
  isDevMode: boolean = false;
  modedevfond: boolean = false;
  constructor( private elementRef: ElementRef,private sanitizer: DomSanitizer, private router: Router, private activatedRoute: ActivatedRoute) {
    this.imagePath = '';
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateRoute();
    });
  }
  
  ngAfterViewInit() {
    const container = this.elementRef.nativeElement.querySelector('#container');

    const threeJSUtils = new logo(container);
    threeJSUtils.init();
  }
  ngOnInit() {
    
    this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl('assets/logo_olicode.png');
  }
  contact(){
    console.log("toto")
    this.router.navigate(['/contact']);
       
  }
  profil(){
    
    this.router.navigate(['/profil']);
       
  }
  modedev() {
  
    this.updateRoute();
  }

  updateRoute() {
   
    const currentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path || 'principal';
   
    // Si isDevMode est true, ajoutez le préfixe 'dev/' ; sinon, retirez-le.
    const newRoute = this.isDevMode ? `dev/${currentRoute}` : currentRoute.replace('dev/', '');
    document.body.style.backgroundColor = this.isDevMode ? "rgb(42, 48, 52)" :"rgb(196, 228, 244)";
    this.router.navigate([newRoute]);
  }
  
  principal(){
   
    this.router.navigate(['/principal']);
       
  }
  
  projet(){
    
    this.router.navigate(['/projet']);
       
  }
}
