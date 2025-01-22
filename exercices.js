// // Définition de variables
// const currency = "🪙";
// const nom_boutique = "Le Grimmoire Enchanté";
// const nom_sorcier = "Henri PotdBeurre";
// let nb_potions = 10;
// let prix_potion_soin = 1;
// let open = true;

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

// //C'est l'heure de faire l'inventaire...

// const inventaire = [
//   {
//     nom_potion: "Élixir de Vitalité",
//     prix_potion: 2,
//     stock_potion: 30,
//   },
//   {
//     nom_potion: "Nectar de l'Invisibilité",
//     prix_potion: 5,
//     stock_potion: 15,
//   },
//   {
//     nom_potion: "Essence de Sérénité",
//     prix_potion: 3,
//     stock_potion: 20,
//   },
// ];

// //Aventurier, regarde tout ce que je vends!

// for (let i = 0; i < inventaire.length; i++) {
//   console.log(`Nom : ${inventaire[i].nom_potion}`);
//   console.log(`Prix : ${inventaire[i].prix_potion}`);
//   console.log(`Stock : ${inventaire[i].stock_potion}`);
// }

// //Affichage dynamique
// console.log("Affichage dynamique")

// for (let i = 0; i < inventaire.length; i++) {
//   for (let objet in inventaire[i]) {
//     console.log(`${objet} : ${inventaire[i][objet]}`);
//   }
// }

//L'heure est venu pour moi d'être un grand marchande potion

let ma_bourse = 0;
let aventurier_bourse = 100;

const inventaire = [
  {
    nom_potion: "Potion de soin",
    prix_potion: 40,
    stock_potion: 1,
  },
  {
    nom_potion: "Potion d'endurance",
    prix_potion: 20,
    stock_potion: 1,
  },
  {
    nom_potion: "Potion de mana",
    prix_potion: 20,
    stock_potion: 2,
  },
];

const inventaire_aventurier = [];
// Fonction pour gérer les transactions
function transaction(
    bourse_acheteur,
    bourse_vendeur,
    inventaire_acheteur,
    inventaire_vendeur,
    article,
    quantite
  ) {
    // Gestion de la partie monétaire de la transaction
    let prix = quantite * article.prix_potion;
    bourse_acheteur -= prix;
    bourse_vendeur += prix;
  
    // Ajout de l'article dans l'inventaire de l'acheteur
    let article_existe = inventaire_acheteur.find(
      (potion) => potion.nom_potion === article.nom_potion
    );
  
    if (article_existe) {
      // Si l'article existe déjà, augmenter le stock de la quantité demandée
      article_existe.stock_potion += quantite;
    } else {
      // Si l'article n'existe pas encore, ajouter l'article à l'inventaire de l'acheteur
      inventaire_acheteur.push({
        nom_potion: article.nom_potion,
        prix_potion: article.prix_potion,
        stock_potion: quantite,
      });
    }
  
    // Réduire le stock de l'inventaire du vendeur
    let potion_vendeur = inventaire_vendeur.find(
      (potion) => potion.nom_potion === article.nom_potion
    );
    if (potion_vendeur) {
      potion_vendeur.stock_potion -= quantite;
    }
  }
  
  // Processus d'achat de l'Aventurier
  function achat() {
    // Tri de l'inventaire par stock décroissant
    inventaire.sort((a, b) => b.stock_potion - a.stock_potion);
  
    console.log("Aventurier, voici ce que j'ai à te proposer :");
    //Affichage de l'inventaire
    for (let i = 0; i < inventaire.length; i++) {
      if (inventaire[i].stock_potion !== 0) {
        console.log(`Nom : ${inventaire[i].nom_potion}`);
        console.log(`Prix : ${inventaire[i].prix_potion}`);
        console.log(`Stock : ${inventaire[i].stock_potion}`);
      }
    }
  
    let choix_potion_nom = prompt("Que désirez-vous acheter ?"); // Demander le nom de la potion
    let choix_quantite = parseInt(prompt("En quelle quantité ?")); // Demander la quantité
  
    // Trouver la potion choisie dans l'inventaire
    let choix_potion = inventaire.find(
      (potion) =>
        potion.nom_potion.toLowerCase() === choix_potion_nom.toLowerCase()
    );
    // Vérifier si la potion existe avant de procéder à la transaction
    if (!choix_potion) {
      console.log("Désolé, cette potion n'existe pas.");
    } else {
      let prix_total = choix_potion.prix_potion * choix_quantite;
  
      // Vérifier si l'aventurier a assez d'argent
      if (prix_total > aventurier_bourse) {
        console.log(
          `Désolé Aventurier, vous n'avez pas assez d'argent pour cela...`
        );
      } else {
        // Vérifier si le stock est suffisant
        if (choix_quantite > choix_potion.stock_potion) {
          console.log(
            `Désolé Aventurier, nous n'avons pas suffisamment de potions en stock.`
          );
        } else {
          console.log(`Cela vous fera un total de ${prix_total} Aventurier.`);
          console.log(`Voici vos potions Aventurier! Merci pour votre achat!`);
  
          // Effectuer la transaction
          transaction(
            aventurier_bourse,
            ma_bourse,
            inventaire_aventurier,
            inventaire,
            choix_potion,
            choix_quantite
          );
        }
      }
    }
  }
  
  // Vente du côté de l'aventurier
  function vente() {
    let gamble = Math.random(1, 5);
    let choix_gamble = prompt(`Choisis une valeur entre 1 et 5`);
    choix_gamble = parseInt(choix_gamble);
    // On trie l'inventaire pour qu'il commence à vendre la potion qu'il a le plus
    inventaire_aventurier.sort((a, b) => b.stock_potion - a.stock_potion);
    if (inventaire_aventurier != [])
      if (choix_gamble == gamble) {
        // Si l'aventurier gagne le pari, on doit racheter tout son stock
        transaction(
          ma_bourse,
          aventurier_bourse,
          inventaire,
          inventaire_aventurier,
          inventaire_aventurier[0],
          inventaire_aventurier[0].stock_potion
        );
      } else {
        console.log("Vous n'avez rien à vendre")
      }
  }
  
do{
    let action=prompt("Qu'est ce que vous voulez faire? (achat/vente)");
    switch (action){
        case "achat":
            achat()
        case "vente":
            vente()
        default:
            console.log("Cette action n'est pas disponible Aventurier")
    }
} while(aventurier_bourse!=0)

