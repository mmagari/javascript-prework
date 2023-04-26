//funkcja losująca ruch komputera
function draw(){
    let computerMove,
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    if (randomNumber == '1'){
        computerMove = 'kamień';
    }else if (randomNumber == '2'){
        computerMove = 'papier';
    }else if (randomNumber == '3'){
        computerMove = 'nożyce';
    }else{
        computerMove = 'nieznany ruch';
    }
    return(computerMove);
}

//funkcja pozwalająca wpisać graczowi swój ruch
function playerMoveFunction(){
    let playerMove, playerInput;
    playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');
    console.log('Wpisana odpowiedź to:' + playerInput);
    if (playerInput == '1'){
        playerMove = 'kamień';
    }else if (playerInput == '2'){
        playerMove = 'papier';
    }else if (playerInput == '3'){
        playerMove = 'nożyce';
    }else{
        playerMove = 'nieznany ruch';
    }
    return(playerMove);
}
//funkcja porównująca ruch gracza z ruchem komputera
function playGame(){
    let buttonPlay = draw(),
    argButtonName = playerMoveFunction();
    
if (argButtonName == buttonPlay) {
    printMessage('Twój ruch: ' + argButtonName + ' Ruch komputera to: ' + buttonPlay + '<br> Remis');
}   else if( argButtonName == 'kamień' && buttonPlay == 'nożyce'){
    printMessage('Twój ruch: ' + argButtonName + ' Ruch komputera to: ' + buttonPlay + '<br> Gratulacje - Wygrałeś');
}   else if( argButtonName == 'nożyce' && buttonPlay == 'papier'){ 
    printMessage('Twój ruch: ' + argButtonName + ' Ruch komputera to: ' + buttonPlay + '<br> Gratulacje - Wygrałeś');
}   else if( argButtonName == 'papier' && buttonPlay == 'kamień'){   
    printMessage('Twój ruch: ' + argButtonName + ' Ruch komputera to: ' + buttonPlay + '<br> Gratulacje - Wygrałeś');
}   else {
    printMessage('Twój ruch: ' + argButtonName + ' Ruch komputera to: ' + buttonPlay +' <br> Niestety przegrałeś.');
    }
}

//**funckja testowa, na użycie przycisków
//var argButtonName, buttonPlay;

//function buttonClicked(argButtonName){
    //clearMessages();
//    console.log(argButtonName + ' został kliknięty');
//}

//buttonPlay = document.getElementById('button-rock');
//buttonPlay.addEventListener('click', function(){ buttonClicked('Guzik kamień'); });

//buttonPlay = document.getElementById('button-paper');
//buttonPlay.addEventListener('click', function(){ buttonClicked('Guzik paper'); });

//buttonPlay = document.getElementById('button-scissors');
//buttonPlay.addEventListener('click', function(){ buttonClicked('Guzik nożyce'); });


//funckja porównująca ruchy, z użyciem przycisków
function buttonClicked(argButtonName){
    console.log(argButtonName + ' został kliknięty');
    let argCompMove = draw();
    if (argButtonName == argCompMove) {
        printMessage('Twój ruch: ' + argButtonName + ' Ruch komputera to: ' + argCompMove + '<br> Remis');
    }   else if( argButtonName == 'kamień' && argCompMove == 'nożyce'){
        printMessage('Twój ruch: ' + argButtonName + ' Ruch komputera to: ' + argCompMove + '<br> Gratulacje - Wygrałeś');
    }   else if( argButtonName == 'nożyce' && argCompMove == 'papier'){ 
        printMessage('Twój ruch: ' + argButtonName + ' Ruch komputera to: ' + argCompMove + '<br> Gratulacje - Wygrałeś');
    }   else if( argButtonName == 'papier' && argCompMove == 'kamień'){   
        printMessage('Twój ruch: ' + argButtonName + ' Ruch komputera to: ' + argCompMove + '<br> Gratulacje - Wygrałeś');
    }   else {
        printMessage('Twój ruch: ' + argButtonName + ' Ruch komputera to: ' + argCompMove +' <br> Niestety przegrałeś.');
        }
    }

const argButtonRock = document.getElementById('button-rock');
argButtonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

const argButtonPaper = document.getElementById('button-paper');
argButtonPaper.addEventListener('click', function(){ buttonClicked('papier'); });

const argButtonScissors = document.getElementById('button-scissors');
argButtonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

