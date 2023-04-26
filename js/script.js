//funkcja porównująca ruch gracza z ruchem komputera
function playGame(){
    var argButtonName, buttonPlay;
    buttonPlay = draw();
    argButtonName = playerMoveFunction();
    
if (argButtonName == buttonPlay) {
    printMessage('Twój ruch: ' + argButtonName + ' Ruch komputera to: ' + buttonPlay + 'Remis');
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
var argButtonName, argCompMove, argCompMove;

function buttonClicked(argButtonName){
    console.log(argButtonName + ' został kliknięty');
    argCompMove = draw();
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


argCompMove = document.getElementById('button-rock');
argCompMove.addEventListener('click', function(){ buttonClicked('kamień'); });

argCompMove = document.getElementById('button-paper');
argCompMove.addEventListener('click', function(){ buttonClicked('paper'); });

argCompMove = document.getElementById('button-scissors');
argCompMove.addEventListener('click', function(){ buttonClicked('nożyce'); });

