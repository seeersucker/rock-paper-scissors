let gameStatusElement = document.querySelector('.gameStatusEl');

let choicesElement = document.querySelector('.choicesEl');

let statsElement = document.querySelector('.statsEl');

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

let myChoiceIcon = '';
let computerChoiceIcon = '';

showScore();

function computerMove(){

  let rivalChoice3 = '';

  const randomNo = Math.random();

  if(randomNo <= 0.33){

    rivalChoice3 = 'rock';

    // computerChoiceIcon = '<img class=\'moveIcon\' src=\'/images/rock-emoji.png\'>'

  } else if(randomNo > 0.33 && randomNo < 0.66) {

    rivalChoice3 = 'paper';

    // computerChoiceIcon = '<img class=\'moveIcon\' src=\'/images/paper-emoji.png\'>'

  } else{

    rivalChoice3 = 'scissors';

    // computerChoiceIcon = '<img class=\'moveIcon\' src=\'/images/scissors-emoji.png\'>'

  }

  return rivalChoice3;

}

function showScore(){
  statsElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  return statsElement.innerHTML;
}

function winner(myChoice){

  const rivalChoice3 = computerMove();

  let winner = '';

  if(rivalChoice3 === myChoice){
    winner = 'Tie';
    score.ties+=1;
  } 
  
  else if(myChoice === 'rock' && rivalChoice3 === 'paper'){
    winner = 'You lose';
    score.losses+=1;
  } 
  
  else if(myChoice === 'scissors' && rivalChoice3 === 'rock'){
    winner = 'You lose';
    score.losses+=1;
  } 
  
  else if(myChoice === 'paper' && rivalChoice3 === 'scissors'){
    winner = 'You lose';
    score.losses+=1;
  }

  else {
    winner = 'You win';
    score.wins+=1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  gameStatusElement.innerHTML = winner;

  // choicesElement.innerHTML = (`You picked ${myChoice}, Computer picked ${rivalChoice3}`);

  // Shortest way
  choicesElement.innerHTML = (`You <img class="moveIcon" src="/images/${myChoice}-emoji.png"> <img class="moveIcon" src="/images/${rivalChoice3}-emoji.png"> Rival`);

  statsElement.classList.add('sizing');

  showScore();

  return winner;

}
