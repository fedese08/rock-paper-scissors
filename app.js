var allChoices = ["rock","paper","scissors"];

var totalTime = 3;

var choice;

function updateClock() {
    document.getElementById('main-screen').innerHTML = totalTime;
    if(totalTime==0){
        // console.log('Final');
        var game = allChoices[Math.floor(Math.random() * 2)];
        showResult(choice,game)
    }else{
        totalTime-=1;
        setTimeout("updateClock()",1000);
    }
}

function buttonListener(c){
    updateClock()
    choice = c;
}

function showResult(player, game) {
    var result;
    if (player == "rock" && game == "scissors"){
        result = "WIN";
    }
    else if (player == "scissors" && game == "paper"){
        result = "WIN";
    }
    else if (player == "paper" && game == "rock"){
        result = "WIN";
    }
    else if (player == game) {
        result = "DRAW";
    }
    else {
        result = "LOSE"
    }
    console.log("RESULTADO: ",result)
    console.log(choice)
    console.log(game)









    document.getElementById('main-screen').style.display = 'none';

    document.getElementById('result').innerText = result;
    document.getElementById('playerChoice').setAttribute("src", "./img/"+player+".png")
    document.getElementById('gameChoice').setAttribute("src", "./img/"+game+".png");    
    document.getElementById('game-over').style.display = 'flex';

    if (result == "WIN"){
        document.getElementById('playerChoice').style.background = "rgb(110, 190, 110)";
        document.getElementById('gameChoice').style.background = "rgb(221, 81, 81)";
    }
    else if ( result == "LOSE"){
        document.getElementById('playerChoice').style.background = "rgb(221, 81, 81)";
        document.getElementById('gameChoice').style.background = "rgb(110, 190, 110)";
    }
    else {
        document.getElementById('playerChoice').style.background = "rgb(249, 211, 88)";
        document.getElementById('gameChoice').style.background = "rgb(249, 211, 88)";
    }

}

