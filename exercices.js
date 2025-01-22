// Définition de variables
const currency = "🪙";
const nom_boutique = "Le Grimmoire Enchanté";
const nom_sorcier = "Henri PotdBeurre";
let nb_potions = 10;
let prix_potion_soin = 2;
let open = true;

// //Affichage conditionnel

// if (open) {
//   console.log(`Bienvenue dans la boutique ${nom_boutique} Aventurier!`);
// } else {
//   console.log(`La boutique ${nom_boutique} est fermée, revenez plus tard`);
// }

// // Affichage conditionnel avec switch

// console.log(
//   "Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔",
//   "1. Le nom de la boutique",
//   "2. Le nom du Sorcier",
//   "3. Le prix d'un potion de soin",
//   "4. La quantité d'une potion de soin"
// );

// let user_choice = prompt(
//   "Rentrez le numéro entre 1 et 4, correspondant à votre choix"
// );
// user_choice = parseInt(user_choice);
// switch (user_choice) {
//   case 1:
//     console.log(`Le nom de la boutique est: ${nom_boutique}`);
//   case 2:
//     console.log(`Le nom du sorcier est: ${nom_sorcier}`);
//   case 3:
//     console.log(
//       `Le prix d'une potion de soin est de : ${prix_potion_soin} ${currency}`
//     );
//   case 4:
//     console.log(
//       `La boutique a actuellement en stock: ${nb_potions} potion(s) de soin`
//     );
//   default:
//     console.log(
//       `Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕`
//     );
// }

//Calcul du prix total d'une commande de potion

let quantite_potion_soin=prompt("Combien de potions de soin désirez-vous?");
let prix_total=quantite_potion_soin*prix_potion_soin;
console.log(`Prix de ${quantite_potion_soin} potions de soin: ${prix_total} ${currency} mon cher Aventurier. 💸.`)
