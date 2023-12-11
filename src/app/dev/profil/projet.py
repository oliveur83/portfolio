import tkinter as tk
from tkinter import PhotoImage

def afficher_image ():
    
    fenetre = tk.Tk()
    fenetre.title("Affichage d'une image")

    chemin_image = "chemin/vers/votre/image.png"
    img =PhotoImage (file=chemin_image )

    label_image = tk.label(fenetre, image=img)
    label_image.pack()
    fenetre.mainloop()
# veulliez executer le code pour voir le resultat
afficher_image()





    
projets = [
    [
        {"imgSrc": "src/assets/emploie.png", "titre": "Emploi du temps", "openfenetre": "Emploi_du_temps", "description": "Projet réalisé en master - Création d'une application web de gestion et visualisation \nd'emploi du temps sous différentes formes techno:"},
        {"imgSrc": "src/assets/oie.png", "titre": "Jeu de l'oie", "openfenetre": "jeu-de-loie", "description": "Projet réalisé en master (hackathon) - Création d'une application web de gestion de voitures électriques sous forme de jeu de l'oie"},
        {"imgSrc": "src/assets/dame.png", "titre": "Jeu de dames", "openfenetre": "Jeu_de_dames", "description": "Projet réalisé en master - Création d'une application web type jeu de dames utilisant l'IA"},
    ],
    [
        {"imgSrc": "src/assets/camping.png", "titre": "Gestion de camping", "openfenetre": "Gestion_de_camping", "description": "Projet réalisé en licence - Création d'une application web de gestion d'un camping totalement connecté"},
        {"imgSrc": "src/assets/angular.png", "titre": "Application universitaire (Vue.js & Angular)", "openfenetre": "Application_universitaire_Vuejs_&_angular", "description": "Projet réalisé en master - Création d'une application web de gestion d'emploi du temps et d'un environnement universitaire (notes, inscriptions, etc.)"},
        {"imgSrc": "src/assets/oxi.png", "titre": "Application pour OXI", "openfenetre": "Application_pour_OXI", "description": "Projet réalisé en master (concours innovation) - Création d'une application web et mobile de visualisation de plusieurs paramètres"},
    ],
    [
        {"imgSrc": "src/assets/L3chemin.png", "titre": "Jeu de chenilles", "openfenetre": "Jeu_de_chenilles", "description": "Projet réalisé en licence - Création d'un jeu sous OpenGL et Tkinter liant la théorie des graphes et l'infographie"},
        {"imgSrc": "src/assets/handtracking.png", "titre": "Handtracking", "openfenetre": "Handtracking", "description": "Projet réalisé en loisirs - Création d'une application Python de handtracking"},
    ],
]

class ProjetFrame(tk.Frame):
    def __init__(self, master, projet):
        super().__init__(master)
        self.projet = projet
        self.create_widgets()

    def create_widgets(self):
        img = PhotoImage(file=self.projet["imgSrc"]).subsample(10)  # Réduire la taille à 10%
        image_label = tk.Label(self, image=img)
        image_label.image = img
        image_label.pack()

        title_label = tk.Label(self, text=self.projet["titre"], font=("Helvetica", 12, "bold"))
        title_label.pack()

        description_label = tk.Label(self, text=self.projet["description"])
        description_label.pack()

def main():
    root = tk.Tk()
    root.title("Projets")

    for row_idx, projet_row in enumerate(projets):
        for col_idx, projet in enumerate(projet_row):
            frame = ProjetFrame(root, projet)
            frame.grid(row=row_idx, column=col_idx, padx=10, pady=10)

    root.mainloop()

if __name__ == "__main__":
    main()