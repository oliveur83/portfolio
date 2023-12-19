import { Component,ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { logo } from './logo';
import { DataService } from './date.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './style_add.css']
})

export class AppComponent {
  imagePath: SafeResourceUrl;
  
  isDevMode: boolean = false;
  modedevfond: boolean = false;
  constructor( private dataService: DataService, private elementRef: ElementRef,private sanitizer: DomSanitizer, private router: Router, private activatedRoute: ActivatedRoute) {
    this.imagePath = '';
    
   
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
    this.router.navigate(['/contact']);
       
  }
  profil(){
    
    this.router.navigate(['/profil']);
       
  }
  modedev() {
  
    this.updateRoute();
  }

  updateRoute() {
    var currentRouteservice = this.dataService.getSharedValue();
 
    var currentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path || 'principal';
    var queryParams = {
      parametre1: currentRoute,
      
    };
    if (currentRoute!==currentRouteservice)
    {
      this.dataService.setSharedValue(currentRoute);
    }
    console.log("avant changement ",currentRoute,currentRouteservice)
    // Si isDevMode est true, ajoutez le préfixe 'dev/' ; sinon, retirez-le.
    const newRoute2 = this.isDevMode ? `dev/profil` : currentRouteservice ;

    document.body.style.backgroundColor = this.isDevMode ? "rgb(42, 48, 52)" :"rgb(196, 228, 244)";
   
    this.router.navigate([newRoute2], { queryParams });
  }
  
  principal(){
   
    this.router.navigate(['/principal']);
       
  }
  
  projet(){
    
    this.router.navigate(['/projet']);
       
  }
Test(){
    console.log("je suis la ")
    this.router.navigate(['/test']);
       
  }
}

   //const currentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path || 'principal';

