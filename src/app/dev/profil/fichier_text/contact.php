<?php
function afficher_contact()
{
    $contact_info = array(
        "Nom" => "Votre Nom",
        "Email" => "votre.email@example.com",
        "Téléphone" => "+33 6 12 34 56 78",
        "LinkedIn" => "https://www.linkedin.com/in/votreprofil",
        "Portfolio" => "https://votreportfolio.com"
    );

    echo "<h3>Contactez-moi !</h3>";
    foreach ($contact_info as $key => $value) {
        echo "<p><strong>$key :</strong> $value</p>";
    }
}

afficher_contact();
?>