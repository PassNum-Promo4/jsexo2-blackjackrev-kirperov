/* Variables avec les functions */




function getNumbers() {
    var userNumber = document.getElementById("numb_user").value;
    var cpuNumber = Math.floor(Math.random() * 10);

/*test conditions*/
    if (cpuNumber > userNumber) {

        alert("Vous avez perdu, pourquoi pas essayer encore une fois...?");

    } else if (cpuNumber < userNumber) {

        alert("Vous avez gagné! Félicitations!");

    } else if (cpuNumber === userNumber) {

    alert("Egalité, l'ordinateur a gagné. Retantez votre chance.");
    }

  }
