let  userScore=document.querySelector('#user-score');
let compScore=document.querySelector('#comp-score');
let msg=document.querySelector('#msg');
let reset=document.querySelector('#reset')
// console.log(msg);


const genCompChoice=()=>{
    let choices=['rock','paper','scissors'];
    let opiton=Math.floor(Math.random()*3)
    return choices[opiton];
}

const choiceValue=(choice)=>{
    if (choice==='rock') {
        return 3;
    }
    else if (choice==='scissor') {
        return 2;
    }
    else return 1;
}
const choices=document.querySelectorAll('.choice')
const playGame=(userchoice)=>{
    let CompChoice=genCompChoice();
    let userval=choiceValue(userchoice);    
    let compval=choiceValue(CompChoice); 
    let previserscore=Number(userScore.innerText)  
    let previserscorecomp=Number(compScore.innerText);
    if (userval===compval) {
        // console.log('Draw');
        msg.innerText=`Draw comp choice was ${CompChoice}`
    }
    else if( userval>compval){
        previserscore+=1
        userScore.innerText=`${previserscore}`;
        msg.style.color='green'
        msg.innerText=`user win, comp choice was ${CompChoice}`
        // console.log(`user win, comp choice :${CompChoice}`);
        
    }
    else if(userval<compval){
        previserscorecomp+=1
        msg.style.color='red'
        compScore.innerText=`${previserscorecomp}`;
        msg.innerText=`comp win, comp choice was ${CompChoice}`
        // console.log(`comp win, comp choice :${CompChoice}`);
        
    }   
}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const choiceId=choice.getAttribute('id')
        playGame(choiceId)
    })
})

reset.addEventListener('click',()=>{
    userScore.innerText='0';
    compScore.innerText='0';
    msg.style.color='white'
    msg.innerText='Play Your Move';


})
