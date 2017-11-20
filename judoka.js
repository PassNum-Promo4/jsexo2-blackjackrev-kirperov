//Les Variables
var messageAgeFr = "Votre catégorie d'age est: ";
var messageAgeEn = "Your age category is ";
var messagePoidsFr = "Votre catégorie de poids est :";
var messagePoidsEn = "Your weight category is :";
var messageCombIndivFr = "La durée de vos combats individuels est ";
var messageCombIndivEn = "The duration of your individual battles is :";
var messageCombEquipFr = "La durée de vos combats par équipe c'est :";
var messageCombEquipEn = "The duration of tour team fight is :";
var langueProfil = prompt("Entrez votre langue Français ou English / Enter your language English or Français");

const Dames = 0;
const Hommes = 1;
var poids = Number(prompt("Entrez votre poids en kg / Enter your weight in kg"));
var age = Number(prompt("Entrez votre age / Enter your age"));
var sexe = prompt("Entrez votre sexe(Dames ou Hommes) / Enter your sex (woman = Dames or man = Hommes)");


//Catégories pour Femmes
switch (sexe) {
    case "Dames":
        if (age >= 9 && age <= 10 && poids >= 30 && poids <= 50 && langueProfil == "Français")
            console.log(messageAgeFr + "Preminimes, " + messagePoidsFr + "30 à 50 kg, " + messageCombIndivFr + "1 min 30, " + messageCombEquipFr + "Pas de combats par équipe pour cette carègorie. ");

        else if (age >= 9 && age <= 10 && poids >= 30 && poids <= 50 && langueProfil == "English")
            console.log(messageAgeEn + "U-11, " + messagePoidsEn + "30 at 50 kg, " + messageCombIndivEn + "1 min 30, " + messageCombEquipEn + "No team fights for this category.");

        else if (age >= 11 && age <= 12 && poids >= 30 && poids <= 50 && langueProfil == "Français")
            console.log(messageAgeFr + "Minimes, " + messagePoidsFr + "30 à 50 kg, " + messageCombIndivFr + "2 min, " + messageCombEquipFr + "Pas de combats par équipe pour cette carègorie.");

        else if (age >= 11 && age <= 12 && poids >= 30 && poids <= 50 && langueProfil == "English")
            console.log(messageAgeEn + "Minimal, " + messagePoidsEn + "30 at 50 kg, " + messageCombIndivEn + "2 min, " + messageCombEquipEn + "No team fights for this category.");

        else if (age >= 13 && age <= 14 && poids >= 32 && poids <= 63 && langueProfil == "Français")
            console.log(messageAgeFr + "Cadette, " + messagePoidsFr + "32 à 63 kg, " + messageCombIndivFr + "3 min, " + messageCombEquipFr + "3 min.");

        else if (age >= 11 && age <= 12 && poids >= 32 && poids <= 63 && langueProfil == "English")
            console.log(messageAgeEn + "Younger, " + messagePoidsEn + "32 at 63 kg, " + messageCombIndivEn + "3 min, " + messageCombEquipEn + "3 min.");

        else if (age >= 15 && age <= 16 && poids >= 40 && poids <= 70 && langueProfil == "Français")
            console.log(messageAgeFr + "Espoir, " + messagePoidsFr + "40 à 70 kg, " + messageCombIndivFr + "4 min, " + messageCombEquipFr + "4 min.");

        else if (age >= 15 && age <= 16 && poids >= 40 && poids <= 70 && langueProfil == "English")
            console.log(messageAgeEn + "Hope, " + messagePoidsEn + "40 at 70 kg, " + messageCombIndivEn + "4 min, " + messageCombEquipEn + "4 min.");

        else if (age >= 17 && age <= 19 && poids >= 44 && poids <= 78 && langueProfil == "Français")
            console.log(messageAgeFr + "Junior, " + messagePoidsFr + "44 à 78g, " + messageCombIndivFr + "4 min, " + messageCombEquipFr + "4 min.");

        else if (age >= 17 && age <= 19 && poids >= 44 && poids <= 78 && langueProfil == "English")
            console.log(messageAgeEn + "Junior, " + messagePoidsEn + "44 at 78 kg, " + messageCombIndivEn + "4 min, " + messageCombEquipEn + "4 min.")

        else if (age >= 20 && poids >= 48 && poids <= 78 && langueProfil == "Français")
            console.log(messageAgeFr + "Seniors, " + messagePoidsFr + "48 à 78kg, " + messageCombIndivFr + "5 min, " + messageCombEquipFr + "5 min.")

        else if (age >= 20 && poids >= 48 && poids <= 78 && langueProfil == "English")
            console.log(messageAgeEn + "Seniors, " + messagePoidsEn + "48 at 78kg, " + messageCombIndivEn + "5 min, " + messageCombEquipEn + "5 min.")
        else
            console.log("Vous n'avez pas de catégorie ou vous avez mal saisie vos informations / You have no category or you have incorrectly entered your information.");
}

//Catégories pour Hommes
switch (sexe) {
    case "Hommes":
        if (age >= 9 && age <= 10 && poids >= 30 && poids <= 50 && langueProfil == "Français")
            console.log(messageAgeFr + "Preminimes, " + messagePoidsFr + "30 à 50 kg, " + messageCombIndivFr + "1 min 30, " + messageCombEquipFr + "Pas de combats par équipe pour cette carègorie. ");

        else if (age >= 9 && age <= 10 && poids >= 30 && poids <= 50 && langueProfil == "English")
            console.log(messageAgeEn + "U-11, " + messagePoidsEn + "30 at 50 kg, " + messageCombIndivEn + "1 min 30, " + messageCombEquipEn + "No team fights for this category.");
        
        else if (age >= 11 && age <= 12 && poids >= 30 && poids <= 50 && langueProfil == "Français")
            console.log(messageAgeFr + "Minimes, " + messagePoidsFr + "30 à 50 kg, " + messageCombIndivFr + "2 min, " + messageCombEquipFr + "Pas de combats par équipe pour cette carègorie.");
        
        else if (age >= 11 && age <= 12 && poids >= 30 && poids <= 50 && langueProfil == "English")
            console.log(messageAgeEn + "Minimal, " + messagePoidsEn + "30 at 50 kg, " + messageCombIndivEn + "2 min, " + messageCombEquipEn + "No team fights for this category.");
        
        else if (age >= 13 && age <= 14 && poids >= 34 && poids <= 66 && langueProfil == "Français")
            console.log(messageAgeFr + "Cadette, " + messagePoidsFr + "34 à 66 kg, " + messageCombIndivFr + "3 min, " + messageCombEquipFr + "3 min.");
        
        else if (age >= 13 && age <= 14 && poids >= 34 && poids <= 66 && langueProfil == "English")
            console.log(messageAgeEn + "Younger, " + messagePoidsEn + "34 at 66 kg, " + messageCombIndivEn + "3 min, " + messageCombEquipEn + "3 min.");
        
        else if (age >= 15 && age <= 16 && poids >= 42 && poids <= 90 && langueProfil == "Français")
            console.log(messageAgeFr + "Espoir, " + messagePoidsFr + "42 à 90 kg, " + messageCombIndivFr + "4 min, " + messageCombEquipFr + "4 min.");
        
        else if (age >= 15 && age <= 16 && poids >= 42 && poids <= 90 && langueProfil == "English")
            console.log(messageAgeEn + "Hope, " + messagePoidsEn + "42 at 90 kg, " + messageCombIndivEn + "4 min, " + messageCombEquipEn + "4 min.");
        
        else if (age >= 17 && age <= 19 && poids >= 55 && poids <= 100 && langueProfil == "Français")
            console.log(messageAgeFr + "Junior, " + messagePoidsFr + "55 à 100 kg, " + messageCombIndivFr + "4 min, " + messageCombEquipFr + "4 min.");

        else if (age >= 17 && age <= 19 && poids >= 55 && poids <= 100 && langueProfil == "English")
            console.log(messageAgeEn + "Junior, " + messagePoidsEn + "55 at 100 kg, " + messageCombIndivEn + "4 min, " + messageCombEquipEn + "4 min.")

        else if (age >= 20 && poids >= 60 && poids <= 100 && langueProfil == "Français")
            console.log(messageAgeFr + "Seniors, " + messagePoidsFr + "60 à 100 kg, " + messageCombIndivFr + "5 min, " + messageCombEquipFr + "4 min.")

        else if (age >= 20 && poids >= 60 && poids <= 100 && langueProfil == "English")
            console.log(messageAgeEn + "Seniors, " + messagePoidsEn + "60 at 100 kg, " + messageCombIndivEn + "5 min, " + messageCombEquipEn + "4 min.")
        //Message en cas d'erreur
        else
            console.log("Vous n'avez pas de catégorie ou vous avez mal saisie vos informations / You have no category or you have incorrectly entered your information.");
}
