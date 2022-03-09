// Capture first button from DOM
let startBtn = document.getElementById("start-btn");
// Capture buttons from DOM
let computerBtn = document.getElementById("computer-btn");
let humanBtn = document.getElementById("human-btn");
// Pick level
let levelFourBtn = document.getElementById("level-1-btn");
let levelFiveBtn = document.getElementById("level-2-btn");

// Capture main container from DOM
let mainContainer = document.getElementsByClassName("main-container")[0];

// Capture Headers and buttons for styling
let greetingHeader = document.getElementById("greeting-header");
let modeChoiceHeader = document.getElementById("mode-choice-header");
let levelChoiceHeader = document.getElementById("level-choice-header");

// Usernames
let firstPlayer = "Default"
let secondPlayer = "Default 2"

// Choice combination`
let single_level_choice = false;

// Check localStorage for previous data, if not found then prompt user
stored_player = localStorage.getItem('firstPlayer');
stored_last_played = localStorage.getItem('lastPlayed');
prompt_for_usernames = false;
if(stored_player == null){
    prompt_for_usernames = true;
}
else {
    if(!confirm("Welcome back ".concat(stored_player).concat( 
    ", do you want to continue using the same user-name?"))){
        prompt_for_usernames = true;
    }
    else {
        localStorage.setItem('lastPlayed', new Date().toLocaleString());
        stored_last_played = localStorage.getItem('lastPlayed');
    }
}

if(!prompt_for_usernames){
    greetingHeader.innerHTML = "<h1>Welcome back ".concat(stored_player).concat(", You last played: ").concat(stored_last_played).concat("</h1>");
    greetingHeader.style.fontSize = "3rem"
}

startBtn.addEventListener('click', ()=>{
    startBtn.style.display = 'none';
    mainContainer.style.flexDirection = "row"
    computerBtn.style.display = "inline";
    humanBtn.style.display = "inline";
    greetingHeader.style.display = "None"
    modeChoiceHeader.style.display = "inherit"
});

computerBtn.addEventListener('click', ()=>{
    // Show two buttons for user to pick level
    updateBtns();
    // Take user input for 1 username and save in localStorage
    if(prompt_for_usernames){
        firstPlayer = prompt("Please enter your name");
        localStorage.setItem('firstPlayer', firstPlayer);
        localStorage.setItem('lastPlayed', new Date().toLocaleString());
    }
    single_level_choice = true;
});

humanBtn.addEventListener('click', ()=>{
    // Show two buttons for user to pick level
    updateBtns();
    // Take user input for 2 usernames and save in localStorage
    if(prompt_for_usernames){
        firstPlayer = prompt("Please enter the first player's name");
        localStorage.setItem('firstPlayer', firstPlayer);
    }
    secondPlayer = prompt("Please enter the second player's name");
    localStorage.setItem('secondPlayer', secondPlayer);
    single_level_choice = false;
});

levelFourBtn.addEventListener('click', ()=>{
    if(single_level_choice){
        window.location.href = "../html/single-level-1.html";
    }
    else{
        window.location.href = "../html/mulitgamelevel1.html";
    }
});

levelFiveBtn.addEventListener('click', ()=>{
    if(single_level_choice){
        console.log("Single player level 2 is not implemented yet");
        // window.location.href = "../html/single-level2.html";
    }
    else{
        window.location.href = "../html/multi-level2.html";
    }
});

function updateBtns(){
    modeChoiceHeader.style.display = "none"
    levelChoiceHeader.style.display = "inline"
    levelFourBtn.style.display = "inline"
    levelFiveBtn.style.display = "inline"
    humanBtn.style.display = "none"
    computerBtn.style.display = "none"
}