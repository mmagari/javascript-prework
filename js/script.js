
function playGame(){
    var playerMove2, computerMove2;
    computerMove2 = draw();
    playerMove2 = playerMoveFunction();
    
if (playerMove2 == computerMove2) {
    printMessage('Twój ruch: ' + playerMove2 + ' Ruch komputera to: ' + computerMove2 + 'Remis');
}   else if( playerMove2 == 'kamień' && computerMove2 == 'nożyce'){
    printMessage('Twój ruch: ' + playerMove2 + ' Ruch komputera to: ' + computerMove2 + '<br> Gratulacje - Wygrałeś');
}   else if( playerMove2 == 'nożyce' && computerMove2 == 'papier'){ 
    printMessage('Twój ruch: ' + playerMove2 + ' Ruch komputera to: ' + computerMove2 + '<br> Gratulacje - Wygrałeś');
}   else if( playerMove2 == 'papier' && computerMove2 == 'kamień'){   
    printMessage('Twój ruch: ' + playerMove2 + ' Ruch komputera to: ' + computerMove2 + '<br> Gratulacje - Wygrałeś');
}   else {
    printMessage('Twój ruch: ' + playerMove2 + ' Ruch komputera to: ' + computerMove2 +' <br> Niestety przegrałeś.');
    }
}