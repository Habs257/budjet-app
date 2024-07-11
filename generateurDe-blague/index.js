const mesBlagues = [
 "la France FR nous a souvent volé nos richesses 💎💎... Vous allez aussi nous voler nos footballeur ⚽️ ?",

"le crocodile 🐊 n 'attent pas que le gorille 🦍 accouche .",

"il est tombé comme du n'importe quoi, on dirait la girafe 🦒 qui s'emmele les pattes.",

"On as pas besoin d'eau 💧 potable pour eteindre un incendie ",

"la chenille 🐛 ne porte pas des lunettes 👓 quand elle bois l'eau ",

"c'est quoi méme ces maniéres ? tu m'interomps avec ton education de phacochére  🐗 .",

] 

let bouton =document.querySelector("button");
let bla = document.querySelector('p');
function generateJoke() {
    return mesBlagues[Math.floor(Math.random() * mesBlagues.length)];
  }
bouton.addEventListener("click", () =>  {
    let rand = generateJoke();
    document.querySelector("p").textContent = rand;
})