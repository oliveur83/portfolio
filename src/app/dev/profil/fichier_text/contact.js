<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
</head>
<body>

<h3>Contactez-moi !</h3>
<div id="contact-info"></div>

<script>
    function afficherContact() {
        const contactInfo = {
            "Nom": "Votre Nom",
            "Email": "votre.email@example.com",
            "Téléphone": "+33 6 12 34 56 78",
            "LinkedIn": "https://www.linkedin.com/in/votreprofil",
            "Portfolio": "https://votreportfolio.com"
        };

        const contactDiv = document.getElementById("contact-info");

        for (const [key, value] of Object.entries(contactInfo)) {
            const p = document.createElement("p");
            p.innerHTML = `<strong>${key} :</strong> ${value}`;
            contactDiv.appendChild(p);
        }
    }

    afficherContact();
</script>

</body>
</html>
