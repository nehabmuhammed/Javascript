const prompt =require("prompt-sync")()

const target = Math.round(Math.random()*100);
console.log(target);
let guesses=0;
while(true){
    guesses++;
const guess = Number(prompt("guess the number (0-100)"));


if(guess>target){
    console.log("Your gues is to high");
}else if (guess<target ){
    console.log("Your guess is to low");
}else{
    console.log("The guessed number is correct");
    break;
}
}
console.log("You guessed correct answr in",guesses,"    tries");