var player1_score = Math.floor(Math.random()*6 +1);
var player2_score = Math.floor(Math.random()*6 +1);


console.log("player-1   "+player1_score);
console.log("player-2  "+player2_score);
switch(player1_score){
    case 1:
        document.querySelector('#player-1img').setAttribute("src",'./dice-1.JPG');
        // document.querySelector('#player-1img').src = './dice-1.JPG';
        break;
    case 2:
        document.querySelector('#player-1img').setAttribute("src",'./dice-2.JPG');
        // document.querySelector('#player-1img').src = './dice-2.JPG';
        break;
    case 3:
        document.querySelector('#player-1img').setAttribute("src",'./dice-3.JPG');
        // document.querySelector('#player-1img').src = './dice-3.JPG';
        break;
    case 4:
        document.querySelector('#player-1img').setAttribute("src",'./dice-4.JPG');
        // document.querySelector('#player-1img').src='./dice-4.JPG';
        break;
    case 5:
        document.querySelector('#player-1img').setAttribute("src",'./dice-5.JPG');
        // document.querySelector('#player-1img').src='./dice-5.JPG';
        break;
    case 6:
        document.querySelector('#player-1img').setAttribute("src",'./dice-6.JPG');
        // document.querySelector('#player-1img').src='./dice-6.JPG';
        break;
}



switch(player2_score){
    case 1:
        document.querySelector('#player-2img').setAttribute("src",'./dice-1.JPG');
        // document.querySelector('#player-2img').src = './dice-1.JPG';
        break;
    case 2:
        document.querySelector('#player-2img').setAttribute("src",'./dice-2.JPG');
        // document.querySelector('#player-2img').src = './dice-2.JPG';
        break;
    case 3:
        document.querySelector('#player-2img').setAttribute("src",'./dice-3.JPG');
        // document.querySelector('#player-2img').src = './dice-3.JPG';
        break;
    case 4:
        document.querySelector('#player-2img').setAttribute("src",'./dice-4.JPG');
        // document.querySelector('#player-2img').src='./dice-4.JPG';
        break;
    case 5:
        document.querySelector('#player-2img').setAttribute("src",'./dice-5.JPG');
        // document.querySelector('#player-2img').src='./dice-5.JPG';
        break;
    case 6:
        document.querySelector('#player-2img').setAttribute("src",'./dice-6.JPG');
        // document.querySelector('#player-2img').src='./dice-6.JPG';
        break;
}



if(player1_score>player2_score){
document.querySelector('h1').textContent = ('Player 1 WINS!');
}
else if(player1_score<player2_score){
    document.querySelector('h1').textContent = ('Player 2 WINS!');  
}
else{
    document.querySelector('h1').textContent = ('Its a DRAW!'); 
}





document.querySelector('')















