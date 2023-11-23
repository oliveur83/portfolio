prenom = "tom"
nom = " olivier"
mail = "tomolivierpro@gmail.com"
ville="lyon"
langages=False

print(" formation ")
if ville == "toulon":
    print("DUT GEII , 2017-2019")
    print("licence informatique , 2019 - 2022")
elif ville == "corse":
    print("master informatique, 2022 -2024")

print("experience profesionnel")
if ville == "toulon":
    print(""" stage fin de DUT GEII , 2019, 8 semaine
          hopitla saint anne
          techno principaux  :php ,mysql
          """)
   
elif ville == "corse":
    print("""stage fin de master , 2024 , 6 mois a
          alteca 
          techno principaux php(synfony), vuejs
          
          """)
    
def switch_case_annee(annee):
    switch = {
        2019: """ Stage à l'Hôpital d'Instruction des Armées Sainte-Anne de Toulon, création d'une application web de type QCM destinée aux apprentis
Docteurs en transfusion sanguine. Récupération de données pour analyse par le directeur.

Concours entrepreneuriat "Les Entrep' Var", création de "Handicap Indépendance", une application connectée à différents modules qui
Permettront à n'importe quelle personne handicapée d'être autonome chez elle.
""",
        2022: """Hackathon, développement d'une application web de type jeu de loi avec des voitures électriques comme pions pour que l'utilisateur
Comprenne l'importance de la gestion de l'énergie. Réalisé en
Collaboration avec EDF Corse.""",
        2023: """Concours entrepreneuriat "Challenge Innovation", création d'un boîtier connecté relié à une application intelligente. OXI (nom de
L’entreprise) vous permet d'arrêter de fumer en gérant à votre place votre consommation de tabac.""",
        2024: """2024 """,
    }
    
    return switch.get(annee, "L'année n'est pas 2022, 2023, 2024 ou 2029.")

# Exemple d'utilisation
annee = 2023
resultat = switch_case_annee(annee)
print(resultat) 

print("compétence")
if langages==True:
    top_langage_decroissante={1:'python',2:'javascript',3:'php'
                              ,4:'html/css',5:'typescript',6:'flutter',7:'SQL'}
    for cle, valeur in top_langage_decroissante.items():
        print(f"Clé : {cle}, Valeur : {valeur}")
else :
    top_framework=["angular",'vuejs','react']
    logiciel=['github','vscode']

print("loisir")

def myloisir():
    print(""" 
          Pratique du street workout et du triathlon, ce qui m'apporte 
          rigueur et dis-cipline. Voyages autour du monde (Japon, États-Unis, 
          Irlande, Londres, Thaïlande), grâce à quoi j'ai acquis une adaptabilité
           aux imprévus et une ouverture d'esprit.
Les projets 3D JavaScript et les projets Python handtracking qui satisfont
           ma curiosité et mon envie de réaliser des projets.
          """)

myloisir()
