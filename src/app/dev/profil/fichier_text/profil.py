# Informations personnelles
nom = "Olivier"
prenom = "Tom"
mail = "tomolivierpro@gmail.com"
ville = "Lyon"
langages = False

print("Formation")
if ville == "Toulon":
    print("DUT GEII, 2017-2019")
    print("Licence informatique, 2019 - 2022")
elif ville == "Corse":
    print("Master informatique, 2022 - 2024")

print("\nExpérience professionnelle")
if ville == "Toulon":
    print("Stage fin de DUT GEII, 2019, 8 semaines")
    print("Hôpital Saint Anne")
    print("Techno principaux : PHP, MySQL")
elif ville == "Corse":
    print("Stage fin de master, 2024, 6 mois à")
    print("Alteca")
    print("Techno principaux : PHP (Symfony), Vue.js")

def switch_case_annee(annee):
    match annee:
        case 2019:
            print("Stage à l'Hôpital d'Instruction des Armées Sainte-Anne de Toulon, création d'une application web de type QCM destinée aux apprentis Docteurs en transfusion sanguine. Récupération de données pour analyse par le directeur.\n")
            print("Concours entrepreneuriat \"Les Entrep' Var\", création de \"Handicap Indépendance\", une application connectée à différents modules qui permettront à n'importe quelle personne handicapée d'être autonome chez elle.\n")
        case 2022:
            print("Hackathon, développement d'une application web de type jeu de loi avec des voitures électriques comme pions pour que l'utilisateur comprenne l'importance de la gestion de l'énergie. Réalisé en collaboration avec EDF Corse.\n")
        case 2023:
            print("Concours entrepreneuriat \"Challenge Innovation\", création d'un boîtier connecté relié à une application intelligente. OXI (nom de l’entreprise) vous permet d'arrêter de fumer en gérant à votre place votre consommation de tabac.\n")
        case 2024:
            print("2024\n")
        case _:
            print("L'année n'est pas 2019, 2022, 2023, 2024 ou 2029.\n")

# Exemple d'utilisation
annee = 2023
switch_case_annee(annee)

print("Compétence")
if langages:
    top_langage_decroissante = {1: 'Python', 2: 'JavaScript', 3: 'PHP', 4: 'HTML/CSS', 5: 'TypeScript', 6: 'Flutter', 7: 'SQL'}
    for cle, valeur in top_langage_decroissante.items():
        print(f"Clé : {cle}, Valeur : {valeur}")
else:
    top_framework = ["Angular", 'Vue.js', 'React']
    logiciel = ['GitHub', 'VSCode']
    print(f"Frameworks principaux : {', '.join(top_framework)}")
    print(f"Logiciels utilisés : {', '.join(logiciel)}")

print("\nLoisir")
def myloisir():
    print("Pratique du street workout et du triathlon, ce qui m'apporte rigueur et discipline.")
    print("Voyages autour du monde (Japon, États-Unis, Irlande, Londres, Thaïlande), grâce à quoi j'ai acquis une adaptabilité aux imprévus et une ouverture d'esprit.")
    print("Les projets 3D JavaScript et les projets Python handtracking qui satisfont ma curiosité et mon envie de réaliser des projets.")

myloisir()
