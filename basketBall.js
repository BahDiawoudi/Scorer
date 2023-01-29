let guessEl = document.getElementById("guess-el")
let homeEl = document.getElementById("home-el")
console.log(guessEl);
let countGuess = 5;
let countHome = 12;
function incOneHome(){

countHome += 1;
homeEl.innerText = countHome;

}
function incOneGuess(){
    countGuess += 1;
    guessEl.innerText = countGuess;
    }
function incTwoHome(){
    
    countHome += 2;
    
    homeEl.textContent = countHome;
}
function incTwoGuess(){
    countGuess += 2;
   
    guessEl.innerText = countGuess;
    
}
function incThreeHome(){
    
countHome += 3;

homeEl.textContent = countHome;
}
function incThreeGuess(){
    countGuess += 3;

guessEl.innerText = countGuess;

}