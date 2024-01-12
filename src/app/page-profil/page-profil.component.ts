// page-profil.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.css']
})
export class PageProfilComponent implements OnInit {
  rows: any[] = [];
  showTooltipFlag: boolean = false;
  currentTooltip: string = '';
  tooltipTop: string = '0';
  tooltipLeft: string = '0';
  progressValue: number | undefined;
  progressValuevelo: number | undefined;
  startDate!: Date;
  dayOfWeek :number | undefined;
  nbr_data: { [key: string]: any } = {};
  seanceSouplesse: number=0;
  seanceJapanese: string = "nom_de_la_seance_japanese";
  seanceMorse: string = "nom_de_la_seance_morse";
  seanceLire: string = "nom_de_la_seance_lire";
  seancePodcast: string = "nom_de_la_seance_podcast";
  seanceSerie: string = "nom_de_la_seance_serie";
  seanceChapitreJW: string = "nom_de_la_seance_chapitre_JW";

  constructor(private http: HttpClient) { }
 
  ngOnInit() {
    this.readJsonFile();
    this.startDate = new Date('2024-01-01');
    this.progressValue = this.calculateProgress();
    this.progressValuevelo = this.calculateProgressvelo();
    const currentDate = new Date();
    this.dayOfWeek = currentDate.getDay(); 
    this.nbr_data_fun();
  }
  nbr_data_fun(){
    
  }
  calculateProgress(): number {
    const currentDate = new Date();
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const daysPassed = Math.floor((currentDate.getTime() - this.startDate.getTime()) / millisecondsPerDay);
    
    return (daysPassed/7)* 40;
  }
  calculateProgressvelo(): number {
    const currentDate = new Date();
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const daysPassed = Math.floor((currentDate.getTime() - this.startDate.getTime()) / millisecondsPerDay);
    
    return (daysPassed/7)* 50;
  }
  readJsonFile() {
    // Replace 'your-json-file.json' with the actual path to your JSON file
    this.http.get('assets/calendri/calendar.json').subscribe(
      (data: any) => {
        
        // Assuming your JSON file is an array
        // Split the data into rows of 18 elements each
        this.rows = this.chunkArray(data, 18);
        console.log("toto")
        const jwOccurrences = this.extractJWOccurrences(data);
      console.log('Occurrences of "jw":', jwOccurrences);
      },
      error => {
        console.error('Error reading JSON file', error);
      }
    );
  }
extractJWOccurrences(data: any[]){
  
console.log("titi")
  // Iterate over each object in the array
  data.forEach(item => {
    // Extract occurrences of "jw" from the "doit" property
    const matches = item.doit.match(/jw/gi);
    console.log("toto") // 'gi' makes it case-insensitive
    if (matches) {
    this.seanceSouplesse=this.seanceSouplesse+1
      console.log(this.seanceSouplesse)
    }
  });
  console.log("fin")

}
  // Function to split an array into chunks
  private chunkArray(array: any[], chunkSize: number): any[] {
    const result = [];
    
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }
  showTooltip(doit: string, cell: HTMLElement): void {
    const rect = cell.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

    this.currentTooltip = doit;
    this.tooltipTop = rect.top + scrollTop + 'px';
    this.tooltipLeft = rect.left + scrollLeft + 'px';
    this.showTooltipFlag = true;
}
  
}
