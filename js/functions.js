function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var computerMove;
var playerMove;
computerMove = 'kamień';
playerMove = 'papier';

function printScore(move){
    move = computerMove;
    printMessage('Zagrałem ' + move + '! Jeśli twój ruch to papier - WYGRYWASZ!');
}

function printScore1(move){
    move = playerMove;
printMessage('Zagrałem ' + move + '! Jeśli twój ruch to nożyce - WYGRYWASZ!');
}