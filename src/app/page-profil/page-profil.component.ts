import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
type Utilisateur = {
  nom: string;
  age: number;
  date_naissance: string;
  lieu_naissance: string;
  forces_programmation: string;
  faiblesses_programmation: string;
  plus_grande_reussite: string;
  interets: string;
 
};
@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.css']
})
export class PageProfilComponent {
  titreProjet: string='';
  utilisateurs:{ [key: string]: Utilisateur } = {
    'Tom': {
        'nom': 'Tom OLIVIER',
        'age': 24,
        'date_naissance': '02/02/1999',
        'lieu_naissance': 'Paris, Corse',
        'forces_programmation': 'Python, bases de données, développement web',
        'faiblesses_programmation': 'réseaux',
        'plus_grande_reussite': "entrop 'var , Hackaton 2023 and 2024,Challenge innovation ,Pix,Voltaire ",
        'interets': 'Triathlon, street workout',

    },
    'Dimitri': {
      'nom': 'Dimitri Denis',
      'age': 25,
      'date_naissance': '21,05,1998',
      'lieu_naissance': 'Tours, France',
      'forces_programmation': 'Angular',
      'faiblesses_programmation': 'Everything else',
      'plus_grande_reussite': ' Quoted in Corse-matin but not for coding',
      'interets': ' Quoted in Corse-matin but not for coding',
    },
    'Amine': {
      'nom': 'Amine MAOURID',
      'age': 27,
      'date_naissance': '23/05/1996',
      'lieu_naissance': 'Casablanca, Morocco',
      'forces_programmation': 'Laravel, React',
      'faiblesses_programmation': ' IA shit and data science ',
      'plus_grande_reussite': 'an app that serves as a mini social network, allowing users to share and explore photos. It provides secure authentication, registration and password reset, users can like and comment photos, receive notifications for their photos interactions, friendship, and messagerie,',
      'interets': 'FootBall, Chess',
      
    },
    'Felicien': {
      'nom': ' Félicien BERTRAND',
      'age': 22,
      'date_naissance': ' 14/07/2001',
      'lieu_naissance': ' Bastia, Corsica',
      'forces_programmation': 'Python, database',
      'faiblesses_programmation': 'IA',
      'plus_grande_reussite': 'Challenge Innovation 2023 ',
      'interets': 'All sports, video games',
    },
    'Fode': {
      'nom': 'fode',
      'age': 10000,
      'date_naissance': 'all time ',
      'lieu_naissance': 'sun',
      'forces_programmation': 'GO and Go and little flutter',
      'faiblesses_programmation': 'all rest',
      'plus_grande_reussite': 'he all do  in GO',
      'interets': 'coding GO',

    },
    'Francois': {
      'nom': 'francois ',
      'age': 18,
      'date_naissance': '28/12/2004',
      'lieu_naissance': 'norway',
      'forces_programmation': 'bases de données, c#',
      'faiblesses_programmation': 'IA',
      'plus_grande_reussite': 'Hackaton 2022 ',
      'interets': 'Football',
    
  },
  'Idrice': {
    'nom': 'Idricealy MOURTADHOI',
    'age': 22,
    'date_naissance': '29/04/2001',
    'lieu_naissance': 'Marseille, France',
    'forces_programmation': 'Kotlin ,Vue.js',
    'faiblesses_programmation': 'IA',
    'plus_grande_reussite': 'Hackaton 2022 ',
    'interets': 'football',
    
  },
  'Jean': {
    'nom': 'Jean BERTRAND',
    'age': 22,
    'date_naissance': '14/07/2001',
    'lieu_naissance': ' Bastia, Corsica',
    'forces_programmation': 'Python, web',
    'faiblesses_programmation': 'IOS',
    'plus_grande_reussite': 'Hackathon 2022 (automatic content generation) ',
    'interets': 'Im blue right now',
  },
  'Jeank': {
    'nom': 'Jean KHOGE',
    'age': 24,
    'date_naissance': ' 28/07/1999',
    'lieu_naissance': 'Afrine, Syrie',
    'forces_programmation': 'Python, Django ',
    'faiblesses_programmation': 'Data Science',
    'plus_grande_reussite': 'Developing a custom CRM system for a local NGO ',
    'interets': 'Developing a custom CRM system for a local NGO',
  
  },
  'Jean José': {
    'nom': 'jean josé',
    'age': 23,
    'date_naissance': '02/02/2000',
    'lieu_naissance': 'Bastia, Corse',
    'forces_programmation': 'Python, bases de données, développement web',
    'faiblesses_programmation': 'IA',
    'plus_grande_reussite': 'Hackaton 2022, my travel  ',
    'interets': 'girls',
    
  },
  'Edouard': {
    'nom': 'Chevenslove EDOUARD',
    'age': 25,
    'date_naissance': '06/02/1998',
    'lieu_naissance': 'Leogane, Haiti',
    'forces_programmation': ' JS, React',
    'faiblesses_programmation': 'IA',
    'plus_grande_reussite': 'A Monitoring and Evaluation Platform for a consortium (ACF, HEIFER, JWT) ',
    'interets': 'Football and Music.',

},
'Pilou': {
  'nom': 'Pierre-Louis SQUAGLIA',
  'age': 22,
  'date_naissance': '14/11/2001',
  'lieu_naissance': 'Bastia, Corse',
  'forces_programmation': 'JS, Angular',
  'faiblesses_programmation': 'IA',
  'plus_grande_reussite': 'NO code',
  'interets': 'Central Back in Football',
  
},
'Quentin': {
  'nom': 'quentin',
  'age': 22,
  'date_naissance': '02/02/2001',
  'lieu_naissance': 'lyon, France',
  'forces_programmation': 'développement IA',
  'faiblesses_programmation': 'réseaux',
  'plus_grande_reussite': 'are teacher ',
  'interets': 'programming ',
  
},
'Big Boss': {
  'nom': 'Big BOSS',
  'age': 0,
  'date_naissance': 'inconnue',
  'lieu_naissance': 'univers',
  'forces_programmation': 'english',
  'faiblesses_programmation': 'japanese',
  'plus_grande_reussite': 'my love for my class ',
  'interets': 'i like hard work ',

},
'Toussaint': {
  'nom': 'Toussaint CARLOTTI',
  'age': 23,
  'date_naissance': ' 17/12/2000',
  'lieu_naissance': 'Ajaccio, Corse',
  'forces_programmation': 'Laravel, VueJs',
  'faiblesses_programmation': 'Web developer',
  'plus_grande_reussite': "Creation of an application to manage a company's quotes and customers ",
  'interets': 'FootBall, Rhum',
},
 
 
   
}

  constructor(private route: ActivatedRoute,private router: Router,) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.titreProjet = params['titre'];
    });
  }
  retour(){
    console.log("je suis la ")
    this.router.navigate(['/test']);
       
  }
}
