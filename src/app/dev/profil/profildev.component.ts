import { Component } from '@angular/core';

@Component({
  selector: 'app-profil-dev',
  templateUrl: './profildev.component.html',
  styleUrls: ['./profildev.component.css']
})
export class ProfilComponentdev {
  isSubMenuVisible: boolean = false;
nginit(){
  console.log('tata')
}
toggleSubMenu() {
  this.isSubMenuVisible = !this.isSubMenuVisible;
  
}
}
