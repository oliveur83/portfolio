import { Component,HostListener,AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../date.service';
import { HttpClient } from '@angular/common/http';
import { javacript_profil,dico } from './toto';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface MenuItem {
  label: string;
  isSubMenuVisible: boolean;
  subMenuItems: { label: string }[];
}
@Component({
  selector: 'app-profil-dev',
  templateUrl: './profildev.component.html',
  styleUrls: ['./profildev.component.css','./profildev2.component.css']
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
  deplacement_dialog=false;
  side_h_var: String='copy';
  side_h_var_vi: boolean =true;
  dialogRef: MatDialogRef<ModalComponent> | undefined;
 /// nombre de seance 
 

  constructor(private http: HttpClient,private sanitizer: DomSanitizer,private dialog: MatDialog,private el: ElementRef,private renderer: Renderer2,private route: ActivatedRoute,private dataService: DataService){
    this.fichierSelectionne = this.route.snapshot.queryParams['parametre1'];
  console.log("affichage",this.fichierSelectionne)
  this.dataService.setSharedValue(this.fichierSelectionne);
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
toto()
{   this.http.get('dev/profil/profil.js', { responseType: 'text' as 'json' }).subscribe(data => {
  const lines: string[] = data.toString().split('\n');
  console.log(lines);
});

  return '<div><p>Contenu généré par la fonction.</p></div>';
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
exectkinter()
{
  const dialogConfig = new MatDialogConfig();
  dialogConfig.position = {
    top: '50px',
    left: '50px'
  };
  this.dialogRef = this.dialog.open(ModalComponent, dialogConfig);
  this.dialogRef.componentInstance.dialogClick.subscribe(() => {
    this.deplacement_dialog=! this.deplacement_dialog
    console.log('Clic à l\'intérieur de la boîte de dialogue détecté');
    // Vous pouvez effectuer d'autres actions ici
  });
}
@HostListener('document:mousemove', ['$event'])
  onMouseMovedialog(event: MouseEvent) {
   
    if (this.deplacement_dialog) {
      // Mettre à jour la position de la boîte de dialogue en fonction des nouvelles coordonnées
      this.dialogRef?.updatePosition({
        top: event.clientY + 'px',
        left: event.clientX + 'px'
      });
    }
  }
changerOnglet(nouvelOnglet: string): void {
  this.ongletSelectionne = nouvelOnglet;
 
this.syncMinimap();
}
changerOngletFleche(direction: string) {
  // Logique de votre fonction ici
  if (direction=="right"){
   
    if (this.ongletSelectionne=="python"){this.ongletSelectionne="php"}
    else if  (this.ongletSelectionne=="php"){this.ongletSelectionne="javascript"}
    else{this.ongletSelectionne="python"}
  }
  else{
    if (this.ongletSelectionne=="python"){this.ongletSelectionne="javascript"}
    else if  (this.ongletSelectionne=="javacript"){this.ongletSelectionne="php"}
    else{this.ongletSelectionne="python"}
  }
  this.syncMinimap();
}



changerterminal(nouvelterminal: string): void {
  this.terminalSelectionne = nouvelterminal;
  this.mot = nouvelterminal;
}
changerfichier(nouvelficher: string): void {
  this.fichierSelectionne = nouvelficher;
  this.dataService.setSharedValue(this.fichierSelectionne);
this.syncMinimap();
this.ngAfterViewInit()
}
ngOnInit() {
  this.syncMinimap();
 this.totoo()
}


@HostListener('window:resize', ['$event'])
onResize(event: Event) {
  this.syncMinimap();
  }
  sied_h(side_h: String){
    
    const codeDiv = this.el.nativeElement.querySelector('.pourcode');
    if (side_h==this.side_h_var){ 
   const currentWidth = codeDiv.offsetWidth;
   const screenWidth = window.innerWidth;
   const percentage = (currentWidth / screenWidth) * 100;

   console.log(percentage)
      if (percentage<87){
        this.renderer.setStyle(codeDiv, 'width', '96%');
        this.side_h_var_vi=false
      }
      else{
        this.renderer.setStyle(codeDiv, 'width', '81%');
        this.side_h_var_vi=true
      }
   
  }
  else{
    
      this.renderer.setStyle(codeDiv, 'width', '81%');
    this.side_h_var_vi=true
    
  }
  this.side_h_var=side_h
  }
  ngAfterViewInit() {
    this.syncMinimap();
    const codeDiv = this.el.nativeElement.querySelector('.code');
    console.log("oh oh ",codeDiv)
    const lines = codeDiv.innerHTML.split('<br _ngcontent-ng-c1625721920="">').length;
    
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
    
      // Synchronisez    la position de défilement entre la div principale et la minimap
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

    const interfaceTer = this.el.nativeElement.querySelector('.interface_ter');

    const terminalHeight = event.clientY;
    const containerHeight = window.innerHeight - terminalHeight;
    const interfaceTerHeight=terminalHeight-450
    this.renderer.setStyle(this.el.nativeElement.querySelector('.containerdev'), 'height', `${containerHeight}px`);
    //this.renderer.setStyle(this.el.nativeElement.querySelector('.interface_ter'), 'height', `${terminalHeight}px`);
    this.renderer.setStyle(interfaceTer, 'height', `${interfaceTerHeight}px`);
    
  }
}

onMouseUp(): void {
  this.isResizing = false;
}
liste_code: string[] = [];
string_complete:string ="";
htmlContent: SafeHtml | undefined;
code = javacript_profil; // Assurez-vous que python_profil est une chaîne de caractères

totoo():void {
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
 
}
}
