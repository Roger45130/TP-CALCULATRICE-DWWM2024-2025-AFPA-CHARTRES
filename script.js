document.querySelector('.formCal').addEventListener('submit', function(event) {
    event.preventDefault();

    const denominateurInput = document.querySelector('#denominateur');
    const deuxChiffreInput = document.querySelector('#deux__chiffre');

    // Vérifie si les deux champs sont remplis
    if (denominateurInput.value.length === 0 || deuxChiffreInput.value.length === 0) {
        alert('Veuillez saisir une opération valide.');
        return;
    }

    const denominateur = parseFloat(document.getElementById('denominateur').value);
    const symbol = document.getElementById('symbol__select').value;
    const deuxChiffre = parseFloat(document.getElementById('deux__chiffre').value);
    let resultat;

    switch (symbol) {
        case 'addition':
            resultat = denominateur + deuxChiffre;
        break;
        case 'soustraction':
            resultat = denominateur - deuxChiffre;
        break;
        case 'multiplication':
            resultat = denominateur * deuxChiffre;
        break;
        case 'division':
            resultat = denominateur / deuxChiffre;
            if (deuxChiffre === 0) {
                alert("Erreur : il est impossible de diviser par 0.");
                return}
        break;
    }

    const message = `${denominateur} ${symbol === 'addition' ? '+' : symbol === 'soustration' ? '-' : symbol === 'multiplication' ? '*' : '/'} ${deuxChiffre} = ${resultat}`;

    alert(message)
    console.log(resultat);
});
    const apparaitre = document.querySelector('.apparaitre');
    const disparaitre = document.querySelector('.disparaitres');
    const formCal = document.querySelector('.formCal');

    apparaitre.addEventListener("click", function(event) {
    event.preventDefault();
    formCal.style.display = "block";
    });

    disparaitre.addEventListener("click", function(event) {
    event.preventDefault();
    formCal.style.display = "none";
    });

    // Div class : Information
    // Sélectionne les données.
    const informationDiv = document.querySelector('.information');
    const denominateurInput = document.getElementById('denominateur');
    const symbolSelect = document.getElementById('symbol__select');
    const deuxChiffreInput = document.getElementById('deux__chiffre');

    function afficherInformation(message) {
        informationDiv.textContent = message;
        informationDiv.style.display = 'flex';
    }
    function masquerInformation() {
        informationDiv.style.display = 'none';
    }

    //  Lorsque le curseur de la souris passe au dessus de la première zone de chiffre.
    denominateurInput.addEventListener('mouseover', () => {
        afficherInformation("Saisir un chiffre");
    });
    denominateurInput.addEventListener('mouseout', masquerInformation);;
    //  Lorsque le curseur de la souris passe au dessus des opérateur +,-,*,/.
    symbolSelect.addEventListener('mouseover', () => {
        afficherInformation("Sélectionner l'un des opérateurs : +, -, *, /.");
    });
    symbolSelect.addEventListener('mouseout', masquerInformation);
    //  Lorsque le curseur de la souris passe au dessus de la deuxième zone de chiffre.
    deuxChiffreInput.addEventListener('mouseover', () => {
        afficherInformation("Saisir un chiffre dans cette zone.");
    });
    deuxChiffreInput.addEventListener('mouseout', masquerInformation);





// Sélectionne le bouton
const buttonSubmit = document.querySelector('.button__submit');

// Initialisation des styles pour le bouton
buttonSubmit.style.cursor = 'pointer';
buttonSubmit.style.padding = '20px'; // Marge interne de 20px autour du texte
buttonSubmit.style.fontSize = '2rem';
buttonSubmit.style.color = '#fff'; // Couleur du texte blanc
buttonSubmit.style.backgroundColor = '#3498DB'; // Couleur de fond
buttonSubmit.style.border = 'none';
buttonSubmit.style.borderRadius = '10px';
buttonSubmit.style.textDecoration = 'none';
buttonSubmit.style.margin = '30px auto';
buttonSubmit.style.display = 'inline-block';
buttonSubmit.style.boxShadow = '4px 4px 11px 3px rgba(0,0,0,0.27)';
buttonSubmit.style.borderBottom = '5px solid #2980B9';
buttonSubmit.style.textShadow = '0px -2px #2980B9';
buttonSubmit.style.transition = 'all 0.1s ease-in-out';

// Fonction pour l'effet de survol
buttonSubmit.addEventListener('mouseover', () => {
    buttonSubmit.style.boxShadow = '6px 6px 15px 4px rgba(0,0,0,0.35)'; // Ombre plus forte au survol
    buttonSubmit.style.backgroundColor = '#57A0DB'; // Légèrement plus clair au survol
});

// Fonction pour réinitialiser le style après le survol
buttonSubmit.addEventListener('mouseout', () => {
    buttonSubmit.style.boxShadow = '4px 4px 11px 3px rgba(0,0,0,0.27)';
    buttonSubmit.style.backgroundColor = '#3498DB'; // Couleur de fond originale
});

// Fonction pour l'effet "enfoncé" lors du clic
buttonSubmit.addEventListener('mousedown', () => {
    buttonSubmit.style.transform = 'translateY(5px)'; // Déplacement pour effet de pression
    buttonSubmit.style.borderBottom = '1px solid #2980B9';
});

// Réinitialisation des styles après le clic
buttonSubmit.addEventListener('mouseup', () => {
    buttonSubmit.style.transform = 'translateY(0px)'; // Remonte le bouton
    buttonSubmit.style.borderBottom = '5px solid #2980B9';
});