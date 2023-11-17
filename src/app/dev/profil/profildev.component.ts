import { Component } from '@angular/core';
interface MenuItem {
  label: string;
  isSubMenuVisible: boolean;
  subMenuItems: { label: string }[];
}
@Component({
  selector: 'app-profil-dev',
  templateUrl: './profildev.component.html',
  styleUrls: ['./profildev.component.css']
})
export class ProfilComponentdev {
  isSubMenuVisible: boolean = false;
  ongletSelectionne: string = 'python';
  menuItems: MenuItem[] = [
    { label: 'File', isSubMenuVisible: false, subMenuItems: [{ label: 'Save' }, { label: 'Print' }, { label: 'Tutu' }, { label: 'Toto' }] },
    { label: 'Edit', isSubMenuVisible: false, subMenuItems: [{ label: 'Cut' }, { label: 'Copy' }, { label: 'Paste' }] },
    // Ajoutez d'autres éléments du menu avec leurs sous-menus ici
  ];
  nginit(){
  console.log('tata')
}

toggleSubMenu(menuItem: MenuItem) {
  menuItem.isSubMenuVisible = !menuItem.isSubMenuVisible;
}
changerOnglet(nouvelOnglet: string): void {
  this.ongletSelectionne = nouvelOnglet;
}
}
