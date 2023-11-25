import { Component,HostListener, ElementRef,OnInit, Renderer2, ViewChild  } from '@angular/core';

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
  lineNumbers: number[] = [];
  scrollTop = 0;
  lines = 0;
  menuItems: MenuItem[] = [
    { label: 'File', isSubMenuVisible: false, subMenuItems: [{ label: 'download' }] },
    { label: 'Edit', isSubMenuVisible: false, subMenuItems: [{ label: 'texte_agrandir' },] },
    // Ajoutez d'autres éléments du menu avec leurs sous-menus ici
  ];

  side_h_var: String='copy'
  side_h_var_vi: boolean =true
  constructor(private el: ElementRef,private renderer: Renderer2){

  }
  nginit(){

}
ouvreeditors(){
this.ouvreeditorla=!this.ouvreeditorla
}
toggleSubMenu(menuItem: MenuItem) {
  menuItem.isSubMenuVisible = !menuItem.isSubMenuVisible;
}
submenu(subMenuItems: string) {
 
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
  sied_h(side_h: String){
    
    const codeDiv = this.el.nativeElement.querySelector('.pourcode');
    if (side_h==this.side_h_var){ 
   const currentWidth = codeDiv.offsetWidth;
      if (currentWidth=="2422"){
        this.renderer.setStyle(codeDiv, 'width', '96%');
        this.side_h_var_vi=false
      }
      else{
        this.renderer.setStyle(codeDiv, 'width', '86%');
        this.side_h_var_vi=true
      }
   
  }
  else{
    
      this.renderer.setStyle(codeDiv, 'width', '86%');
    this.side_h_var_vi=true
    
  }
  this.side_h_var=side_h
  }
  ngAfterViewInit() {
    this.syncMinimap();
    const codeDiv = this.el.nativeElement.querySelector('.code');
    const lines = codeDiv.innerHTML.split('<br _ngcontent-ng-c2496203463="">').length;
    console.log(codeDiv)
    this.lineNumbers = Array.from({ length: lines }, (_, index) => index + 1);
 }
  getLinesForNumber(lineNumber: number): string[] {
    // Remplacez cela par votre logique pour générer les lignes associées à chaque numéro
    return [`${lineNumber}`];
  }
  syncMinimap(event?: Event) {
    const codeElement = document.getElementById('code');
    const numCodeElement = document.querySelector('.num_code');

    if (codeElement && numCodeElement) {
      numCodeElement.scrollTop = codeElement.scrollTop;
    }
    const codeContent = document.getElementById('code');
    const minimap = document.getElementById('minimap');
    const numCode = document.getElementById('num_code');
    if (codeContent && minimap) {
      // Copiez le contenu de la div principale dans la minimap
      minimap.innerHTML = codeContent.innerHTML;
      
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
 
 console.log(this.scrollTop)
  this.syncMinimap();
  
}@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {
  this.syncMinimap();
}
private isResizing = false;
private initialHeight = 0;
onMouseDown(event: MouseEvent): void {

  // Vérifier si le clic est sur le bord supérieur
  const boundingRect = (event.target as HTMLElement).getBoundingClientRect();
  const offsetY = event.clientY - boundingRect.top;

  if (offsetY < 30) {
   
    this.isResizing = true;
    this.initialHeight = boundingRect.height;
  }
}

onMouseMove(event: MouseEvent): void {
  
  if (this.isResizing) {

    const newHeight = this.initialHeight + (event.clientY - this.initialHeight);
    const codeDiv = document.getElementById('terminal');
    console.log("hauteur",codeDiv?.style.height)
    this.renderer.setStyle(codeDiv, 'height', `${newHeight}px`);
    console.log(newHeight)
  }
}

onMouseUp(): void {
  this.isResizing = false;
}
}
