import time

def reveal_contact_info():
    contact_info = {
        "Nom": "Votre Nom",
        "Email": "votre.email@example.com",
        "Téléphone": "+33 6 12 34 56 78",
        "LinkedIn": "linkedin.com/in/votreprofil",
        "Portfolio": "votreportfolio.com"
    }
    
    print("Découvrons mes contacts !")
    for key, value in contact_info.items():
        print(f"{key}: ", end="", flush=True)
        time.sleep(1)  # Attendre 1 seconde avant de révéler chaque info
        print(value)
        
reveal_contact_info()
