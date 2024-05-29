const prompt =require("prompt-sync")()

let win=0;
let loss=0;
let draw=0;
while(true){
const choice= prompt("Enter rock,papper or scissor or q to quit");
if(choice.toLowerCase()==="q"){
    break;
}
if(choice ==="rock"||choice=="papper"||choice=="scissor"){

}else{
    console.log("Please enter a valid choice");
    continue;
}
const choices =["rock", "papper", "scissor"];
const randomIndex = Math.round(Math.random() * 2);
const computerChoice = choices[randomIndex];
console.log("The computer choose",computerChoice);

if(choice ===computerChoice ){
    console.log("Draw");
    draw++;
}else if(choice === "papper" && computerChoice==="rock"||
choice === "rock" && computerChoice==="scissor"||
choice === "scissor" && computerChoice==="rock"){
    console.log("Win");
    win++;
}else{
    console.log("Loss");
    loss++;
}

}
console.log("Win=",win,"Loss=",loss,"Draw",draw);