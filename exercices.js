// Définition de variables
const currency = "🪙";
const nom_boutique = "Le Grimmoire Enchanté";
const nom_sorcier = "Henri PotdBeurre";
let nb_potions = 10;
let prix_potion_soin = 1;
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

// // //Calcul du prix total d'une commande de potion

// let quantite_potion_soin=prompt("Combien de potions de soin désirez-vous?");
// let prix_total=quantite_potion_soin*prix_potion_soin;
// console.log(`Prix de ${quantite_potion_soin} potions de soin: ${prix_total} ${currency} mon cher Aventurier. 💸.`)

// //Bourse de l'Aventurier 💰

// let stock_argent=20;

// if(prix_total>stock_argent){
//     console.log(`Désolé Aventurier, vous n'avez pas assez d'argent pour cela...`)
// }else{
//     if(quantite_potion_soin>nb_potions){
//         console.log(`Désolé Aventurier, nous n'avons pass suffisament de potions en stock`);
//     }else{
//         console.log(`Voici vos potions Aventurier! Merci pour votre achat!`);
//         stock_argent-=prix_total;
//         nb_potions-=quantite_potion_soin;
//     };
// };

// // Liste des potions
// const potions = [
//   "Élixir de Vitalité",
//   "Nectar de l'Invisibilité",
//   "Essence de Sérénité",
// ];

// console.log(potions);

// //Affichage des potions

// console.log(potions[0]);
// console.log(potions[potions.length - 1]);

// for (let i = 0; i < potions.length; i++) {
//   console.log(`Nous avons de la potion :${potions[i]}`);
// }

// // Ajout d'une nouvelle potion

// potions.push("Philtre de Régénération");
// console.log(potions);

// // Finally,nope.

// potions.pop();
// console.log(potions);

// //Rangeons les informations de la potion de soin dans un objet

// const potion_soin = {
//   nom_potion: "Élixir de Vitalité",
//   prix_potion: 2,
//   stock_potion: 30,
// };

// console.log(potion_soin);

// //Affichons les informations de la potion

// console.log(potion_soin.nom_potion);
// console.log(potion_soin["prix_potion"]);

//C'est l'heure de faire l'inventaire...

const inventaire = [
  {
    nom_potion: "Élixir de Vitalité",
    prix_potion: 2,
    stock_potion: 30,
  },
  {
    nom_potion: "Nectar de l'Invisibilité",
    prix_potion: 5,
    stock_potion: 15,
  },
  {
    nom_potion: "Essence de Sérénité",
    prix_potion: 3,
    stock_potion: 20,
  },
];

//Aventurier, regarde tout ce que je vends!

for (let i = 0; i < inventaire.length; i++) {
  console.log(`Nom : ${inventaire[i].nom_potion}`);
  console.log(`Prix : ${inventaire[i].prix_potion}`);
  console.log(`Stock : ${inventaire[i].stock_potion}`);
}

//Affichage dynamique
console.log("Affichage dynamique")

for (let i = 0; i < inventaire.length; i++) {
  for (let objet in inventaire[i]) {
    console.log(`${objet} : ${inventaire[i][objet]}`);
  }
}