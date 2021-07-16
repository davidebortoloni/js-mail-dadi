alert("Quando sei pronto per giocare clicca ok");

var userResult;
var pcResult;
var userVictories = 0;
var pcVictories = 0;
var gameMessage = "";
var endMessage;
var gameAreaId = document.getElementById("game-area");
var endGameId = document.getElementById("end-game");

var i = 0;
var fun = setInterval(function () {
    if (i == 5) {
        clearInterval(fun);
    }
    userResult = Math.floor(Math.random() * 6) + 1;
    pcResult = Math.floor(Math.random() * 6) + 1;
    gameMessage += "<h3>" + (i + 1) + "° round</h3>";
    gameMessage += "<div>Il tuo dado: " + userResult + "</div>";
    gameMessage += "<div>Il dado del computer: " + pcResult + "</div>";
    if (userResult > pcResult) {
        gameMessage += "<div>Bravo! Hai vinto il " + (i + 1) + "° round</div>";
        userVictories++;
    }
    else if (userResult < pcResult) {
        gameMessage += "<div>Peccato! Hai perso il " + (i + 1) + "° round</div>";
        pcVictories++;
    }
    else {
        gameMessage += "<div>Nulla di fatto! Il " + (i + 1) + "° round è un pareggio</div>";
    }
    gameAreaId.innerHTML = gameMessage;
    i++;
}, 1000);
setTimeout(function () {
    if (userVictories > pcVictories) {
        endMessage = "Complimenti, hai battuto il computer!";
    }
    else if (userVictories < pcVictories) {
        endMessage = "Che sfortuna, il computer ti ha sconfitto!";
    }
    else {
        endMessage = "Un pareggio, meglio che aver perso, dai. Fai un altro tentativo.";
    }
    endGameId.innerHTML = endMessage;
}, 7000);