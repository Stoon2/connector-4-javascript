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
let firstPlayer;
let  secondPlayer;

// Choice combination`
let single_level_choice = false;
// Check localStorage for previous data, if not found then prompt user
let stored_player = localStorage.getItem('firstPlayer');
let stored_last_played = localStorage.getItem('lastPlayed');
prompt_for_usernames = false;
if(stored_player == null){
    prompt_for_usernames = true;
}
else {
    if(confirm("Welcome back ".concat(stored_player).concat( 
    ", do you want to continue using the same user-name?"))){
        stored_last_played = localStorage.getItem('lastPlayed');
        firstPlayer = localStorage.getItem("firstPlayer");
    }
    else {
        prompt_for_usernames = true;
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
    // Take user input for 1 username and save in localStorage
    if(prompt_for_usernames){
        firstPlayer = prompt("Please enter your name");
        localStorage.setItem('firstPlayer', firstPlayer);
    }
    else{
        console.log("Here")
        console.log(firstPlayer)
        while(firstPlayer == null){
            firstPlayer = prompt("Please enter your name");
        }
    }
    localStorage.setItem('lastPlayed', stored_last_played);
    updateBtns();
    single_level_choice = true;
});

humanBtn.addEventListener('click', ()=>{
    // Show two buttons for user to pick level
    // Take user input for 2 usernames and save in localStorage
    if(prompt_for_usernames){
        firstPlayer = prompt("Please the first player's name");
        secondPlayer = prompt("Please enter the second player's name");
    }
    while(firstPlayer == null){
        firstPlayer = prompt("Please the first player's name");
    }
    while(secondPlayer == null){
        secondPlayer = prompt("Please enter the second player's name");
    }
    updateBtns();
    localStorage.setItem('secondPlayer', secondPlayer);
    localStorage.setItem('firstPlayer', firstPlayer);
    localStorage.setItem('lastPlayed', stored_last_played);
    single_level_choice = false;
});

levelFourBtn.addEventListener('click', ()=>{
    localStorage.setItem('lastPlayed', new Date().toLocaleString());
    if(single_level_choice){
        if(firstPlayer != null){
            window.location.href = "../html/single-level-1.html";
        }
        else {
            alert("You need to enter a username, please go back!");
        }
    }
    else{
        if((firstPlayer != null) && (secondPlayer != null)){
            window.location.href = "../html/mulitgamelevel1.html";
        }
        else {
            alert("You need to enter two usernames, please go back!");
        }
    }
});

levelFiveBtn.addEventListener('click', ()=>{
    localStorage.setItem('lastPlayed', new Date().toLocaleString());
    if(single_level_choice){
        if(firstPlayer != null){
            window.location.href = "../html/single-level-2.html";
        }
        else {
            alert("You need to enter a username, please go back!");
        }
    }
    else{
        if((firstPlayer != null) && (secondPlayer != null)){
            window.location.href = "../html/multi-level2.html";
        }
        else {
            alert("You need to enter two usernames, please go back!");
        }
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