import { Component,HostListener, OnInit  } from '@angular/core';

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
  ouvreeditorla: boolean= true;
  mot: string = 'terminal';
  terminalSelectionne: string = 'TERMINAL';
  isSubMenuVisible: boolean = false;
  ongletSelectionne: string = 'python';
  fichierSelectionne: string = 'profil';
  menuItems: MenuItem[] = [
    { label: 'File', isSubMenuVisible: false, subMenuItems: [{ label: 'download' }, { label: 'Print' }, { label: 'Tutu' }, { label: 'Toto' }] },
    { label: 'Edit', isSubMenuVisible: false, subMenuItems: [{ label: 'Cut' }, { label: 'Copy' }, { label: 'Paste' }] },
    // Ajoutez d'autres éléments du menu avec leurs sous-menus ici
  ];
  nginit(){
  console.log('tata')

}
ouvreeditors(){
this.ouvreeditorla=!this.ouvreeditorla
}
toggleSubMenu(menuItem: MenuItem) {
  menuItem.isSubMenuVisible = !menuItem.isSubMenuVisible;
}
submenu(subMenuItems: string) {
  console.log(subMenuItems)
  subMenuItems=== "download" ? this.download() : null; 
}
download()
{
  const filePath = 'assets/cv.pdf';

  // Créer un élément <a> temporaire
  const link = document.createElement('a');

  // Définir l'attribut href avec le chemin du fichier
  link.href = filePath;

  // Définir l'attribut download avec le nom que vous souhaitez pour le fichier
  link.download = 'cv.pdf';

  // Ajouter l'élément <a> à la page
  document.body.appendChild(link);

  // Simuler un clic sur le lien pour déclencher le téléchargement
  link.click();

  // Supprimer l'élément <a> après le téléchargement
  document.body.removeChild(link);
}

changerOnglet(nouvelOnglet: string): void {
  this.ongletSelectionne = nouvelOnglet;
 
this.syncMinimap();
}
changerterminal(nouvelterminal: string): void {
  this.terminalSelectionne = nouvelterminal;
  this.mot = nouvelterminal;
}
changerfichier(nouvelficher: string): void {
  this.fichierSelectionne = nouvelficher;
  
this.syncMinimap();
}
ngOnInit() {
  this.syncMinimap();
}

@HostListener('window:resize', ['$event'])
onResize(event: Event) {
  this.syncMinimap();
  }
  ngAfterViewInit() {
    this.syncMinimap();
    console.log('ici')// Code à exécuter après l'initialisation de la vue
  }
  syncMinimap(event?: Event) {
    const codeContent = document.getElementById('code');
    const minimap = document.getElementById('minimap');
    console.log(minimap,codeContent)
    if (codeContent && minimap) {
      // Copiez le contenu de la div principale dans la minimap
      minimap.innerHTML = codeContent.innerHTML;
      console.log("reussi")
      // Ajustez la hauteur de la minimap en fonction de la fenêtre principale
      const scaleFactor = codeContent.clientHeight / codeContent.scrollHeight;
    
      // Synchronisez la position de défilement entre la div principale et la minimap
      minimap.scrollTop = codeContent.scrollTop * scaleFactor;

    }
    else{
      console.log("pas trop")
    }
  }
  

@HostListener('scroll', ['$event'])
onScroll(event: Event) {
  this.syncMinimap();
}@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {
  this.syncMinimap();
}
}
