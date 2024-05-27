const prompt =require("prompt-sync")()

console.log("Welcome to the Quiz");
let correctanswer=0;
const totalanswer=3;
const answer1 = prompt("What is the brain of the computer?:");

const canswer1 ="CPU";
if(answer1.toUpperCase()===canswer1){
    console.log("WRIGHT ANSWER");
    correctanswer++;
}else{
    console.log("Wrong ansswer");
}
const answer2 = prompt("Name a pointer device?:");

const canswer2 ="MOUSE";
if(answer2.toUpperCase()===canswer2){
    console.log("WRIGHT ANSWER");
    correctanswer++;
}else{
    console.log("Wrong ansswer");
}
const answer3 = prompt("Node is good?:");

const canswer3 ="YES";
if(answer3.toUpperCase()===canswer3){
    console.log("WRIGHT ANSWER");
    correctanswer++;
}else{
    console.log("Wrong ansswer");
}
console.log("You got",correctanswer,"Answers");
console.log("You got",(correctanswer/totalanswer)*100,"percentage");
