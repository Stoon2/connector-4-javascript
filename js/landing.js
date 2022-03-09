// Capture first button from DOM
let startBtn = document.getElementById("start-btn");

// Capture buttons from DOM
let computerBtn = document.getElementById("computer-btn");
let humanBtn = document.getElementById("human-btn");

// Capture main container from DOM
let mainContainer = document.getElementsByClassName("main-container")[0];

// Usernames
let firstPlayer = "Default"
let secondPlayer = "Default 2"

startBtn.addEventListener('click', ()=>{
    startBtn.style.display = 'none';
    mainContainer.style.flexDirection = "row"
    computerBtn.style.display = "inline";
    humanBtn.style.display = "inline";
});

computerBtn.addEventListener('click', ()=>{
    console.log("Do stuff with computer");
    // Take user input for 1 username
    firstPlayer = prompt("Please enter your name");
    sessionStorage.setItem('player1', firstPlayer);
    window.location.href = "../html/main-game.html";
});

humanBtn.addEventListener('click', ()=>{
    console.log("Do stuff with human");
    // Take user input for 2 usernames
    firstPlayer = prompt("Please enter the first player's name");
    sessionStorage.setItem('firstPlayer', firstPlayer);
    secondPlayer = prompt("Please enter the second player's name");
    sessionStorage.setItem('secondPlayer', secondPlayer);
    window.location.href = "../html/main-game.html";
});