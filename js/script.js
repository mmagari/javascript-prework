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

//funckja porównująca ruchy, z użyciem przycisków
function buttonClicked(argButtonName){
    console.log(argButtonName + ' został kliknięty');
    let argCompMove = draw();
    if (argButtonName == argCompMove) {
        printMessage('<br>Twój ruch: ' + argButtonName + '<br> Ruch komputera to: ' + argCompMove + '<br> Remis');
    }   else if( argButtonName == 'kamień' && argCompMove == 'nożyce'){
        printMessage('<br>Twój ruch: ' + argButtonName + '<br> Ruch komputera to: ' + argCompMove + '<br> Gratulacje - Wygrałeś');
    }   else if( argButtonName == 'nożyce' && argCompMove == 'papier'){ 
        printMessage('<br>Twój ruch: ' + argButtonName + '<br> Ruch komputera to: ' + argCompMove + '<br> Gratulacje - Wygrałeś');
    }   else if( argButtonName == 'papier' && argCompMove == 'kamień'){   
        printMessage('<br>Twój ruch: ' + argButtonName + '<br> Ruch komputera to: ' + argCompMove + '<br> Gratulacje - Wygrałeś');
    }   else {
        printMessage('<br>Twój ruch: ' + argButtonName + '<br> Ruch komputera to: ' + argCompMove +' <br> Niestety przegrałeś.');
        }
    }

const argButtonRock = document.getElementById('button-rock');
argButtonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

const argButtonPaper = document.getElementById('button-paper');
argButtonPaper.addEventListener('click', function(){ buttonClicked('papier'); });

const argButtonScissors = document.getElementById('button-scissors');
argButtonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

