window.addEventListener('load', init);

// Global variables

let time, score, isPlaying;

time = 5;
score = 0;
isPlaying;

// DOM Elements variable names
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// Word List
const words = [
'ability',
'according',
'account',
'activity',
'actually',
'Follies',
'Ephernal',
'Verisimilitude',
'Reprobate',
'Propensity',
'Feigh',
'Papacy',
'Prying',
'Pertinent',
'Heresy',
'Clench',
'Tavern',
'Envisage',
'Coinage',
'Skulking',
'Adorn',
'Retroactively',
'Dilettante',
'Outlandish',
'Usury',
'Bilking',
'Crimson',
'Cauterize',
'Ergot',
'Slander',
'Prioress',
'Frieghter'
];

function init(){

    // Show random word on screen
    showWord(words);

    // Start Word Matching
    wordInput.addEventListener('input', startMatch);

    // Timer function to show remaining time
    setInterval(countdown, 1000);

    // Checking for conditions for Game Over
    setInterval(checkStatus, 50);

}
function startMatch(){
    if (matchWords()){
        // once the matchWords condition is true, then start over the game
        isPlaying = true;
        // time for reload, greater than playtime
        time = 6;
        // show the new word again
        showWord(words);
        // Clearing the input Field for new game
        wordInput.value = '';
        score++;
    }
    if(score === -1){
        // Display the Updated Score
        scoreDisplay.textContent = 0;
    }else{
        scoreDisplay.textContent = score;
    }
    
    
}

function matchWords(){
    // check & compare words
    if(wordInput.value === currentWord.textContent){
        message.textContent = 'Correct!!!';
        // for accessing result outside the code block
        return true;
    } else {
        message.textContent = '';
        return false;
    }
}

function showWord(){
    // Creating the random number
    const randIndex = Math.floor(Math.random() * words.length);
    // SHowing random number on screen 
    currentWord.textContent = words[randIndex];
}


function countdown(){
    // Set time Limit to Play
    if (time>0){
        // then start decreasing time
        time --;
    } else if (time===0){
        // If time = 0 , then GAME OVER
        isPlaying = false;
    }
    // Display the time countdown
    timeDisplay.textContent = time;
}

function checkStatus(){
    if (!isPlaying && time === 0 ){
        message.textContent = 'GAME OVER!!!'
        score = -1;
    }
}
