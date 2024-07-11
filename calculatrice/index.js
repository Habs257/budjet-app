const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

// Variable pour la sortie
let output = "";

// Fonction de calcul
function calculate(btnValue) {
  // Vérifier si le bouton "=" est cliqué
  if (btnValue === "=" && output !== "") {
    // Remplacer les ÷ par /
    output = output.replace("÷", "/");

    // Valider la sortie
    const isInputValid = validateInput(output);
    if (!isInputValid) {
      output = "Invalid input";
    } else {
      // Convertir la sortie en nombre
      const result = eval(output);
      
      // Vérifier si le résultat est valide
      if (isNaN(result) || !isFinite(result)) {
        output = "Invalid input";
      } else {
        output = result;
      }
    }
  } else if (btnValue === "RESET") {
    // Réinitialiser la sortie
    output = "";
  } else if (btnValue === "DEL") {
    // Supprimer le dernier caractère de la sortie
    output = output.slice(0, -1);
  } else {
    // Ajouter le caractère à la fin de la sortie
    output += btnValue;
  }

  // Mettre à jour la valeur de la sortie dans l'élément <input>
  display.value = output;
}

// Fonction de validation des entrées
function validateInput(input) {
  // Vérifier que l'entrée ne contient que des nombres, des opérateurs et des parenthèses
  const regex = /^[0-9+\-*/.()]+$/;
  return regex.test(input);
}

// Parcourir tous les boutons
buttons.forEach((button) => {
  // Ajouter un écouteur d'événements "click" au bouton
  button.addEventListener("click", () => calculate(button.dataset.value));
});
