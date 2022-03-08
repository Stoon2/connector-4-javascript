// Capture first button from DOM
let startBtn = document.getElementById("start-btn");
// Capture buttons from DOM
let computerBtn = document.getElementById("computer-btn");
let humanBtn = document.getElementById("human-btn");
// Capture main container from DOM
let mainContainer = document.getElementsByClassName("main-container")[0];

startBtn.addEventListener('click', ()=>{
    startBtn.style.display = 'none';
    mainContainer.style.flexDirection = "row"
    computerBtn.style.display = "inline";
    humanBtn.style.display = "inline";
});

computerBtn.addEventListener('click', ()=>{
    console.log("Do stuff with computer");
    // Take user input for 1 username
    window.location.href = "../html/main-game.html";
});

humanBtn.addEventListener('click', ()=>{
    console.log("Do stuff with human");
    // Take user input for 2 usernames
    window.location.href = "../html/main-game.html";
});