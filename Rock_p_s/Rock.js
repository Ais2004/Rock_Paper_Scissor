let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const para=document.querySelector(".para");
const user=document.querySelector("#user");
const comp=document.querySelector("#comp");

const getCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const radidx=Math.floor(Math.random()*3);
    return options[radidx];
}

const showWinner=(userWin)=>{
     if(userWin){
     console.log("you win");
     para.innerText="You win";
    userScore++;
    user.innerText=userScore;}
    else{
    console.log("you lost");
    para.innerText="You lost";
    compScore++
    comp.innerText=compScore;;
}}
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=getCompChoice();
    console.log("computer choice=",compChoice);
    if(userChoice===compChoice){
        console.log("game was draw");
        para.innerText="Game was draw.Please try again."
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            if(compChoice==="paper"){
            console.log("Computer win");
            userWin=false;}
            else{
            console.log("user win");
            userWin=true;}
        }
        if(userChoice==="paper"){
            if(compChoice==="scissor"){
            console.log("Computer win");
            userWin=false;}
            else{
            console.log("user win");
            userWin=true;}
        }
        if(userChoice==="scissor"){
            if(compChoice==="paper"){
            console.log("user win");
            userWin=true;}
            else{
            console.log("computer win");
            userWin=false;}
        }
        showWinner(userWin);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});