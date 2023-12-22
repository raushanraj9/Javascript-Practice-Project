let randomNumber=parseInt(Math.random()*100+1);
// console.log(randomNumber);
const submit=document.querySelector("#subt");
const userInput=document.querySelector("#guessField");
const Numberofguessess=document.querySelector(".guesses");
const RemainingGuessess=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
const resultSection=document.querySelector(".resultParas");
const p=document.createElement("p");
let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame)
{
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guessValue=userInput.value;
        console.log(guessValue);
        validateGuess(guessValue);
    })
}

function validateGuess(guess)
{
  if(guess>100 || isNaN(guess) || guess<1)
  {
    alert("Please enter a valid number");
  }
  else
  {
    prevGuess.push(guess);
    if(numGuess>10)
    {
        displayGuess(guess);
        displayMessage(`Game is over, random number was ${randomNumber}`);
        endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
  }
}
function checkGuess(guess)
{
    if(guess===randomNumber)
    {
        displayMessage(`You guessed it right`);
    }
    else if(guess<randomNumber)
    {
        displayMessage(`Your guess value is low`);
    }
    else if(guess>randomNumber)
    {
        displayMessage(`Your guess value is high`);
    }
 
}
function displayGuess(guess)
{
   userInput.value="";
   Numberofguessess.innerHTML+=`${guess},`;
   numGuess++;
   
   RemainingGuessess.innerHTML=`${11-numGuess}`;
}
function displayMessage(message)
{
   lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function newGame()
{
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      RemainingGuessess.innerHTML = '';
      Numberofguessess.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      resultSection.removeChild(p);
  
      playGame = true;
    })
 
}
function endGame()
{
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    resultSection.appendChild(p);
    playGame = false;
    newGame();
}

