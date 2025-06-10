let boxes=document.querySelectorAll('.box')
let resetBtn=document.querySelector('.reset')
let msgcontainer=document.querySelector('.msgcontainer');
let msg=document.querySelector('#msg');
let newGame=document.querySelector('#new-btn');

let turnO=true;//playerX,playerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let count=0;
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('box was clicked')
        if(turnO){
            box.style.color = "#4ecdc4";
            box.innerText='O';
            turnO=false;
            count++;
        }else{
            box.style.color = "#ff6b6b";
            box.innerText='X';
            turnO=true;
            count++;
        }
        // console.log(count);
        box.setAttribute('disabled','true');
        checkWinner();
    })
})




const checkWinner=()=>{
    for (let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&& pos2Val!="" && pos3Val!=""){
            if (pos1Val===pos2Val && pos2Val==pos3Val) {
                showWinner(pos1Val);
                disabledBoxes();
                resetBtn.classList.add('hide');
            }
            else if(count==9){
                msg.innerText=`Draw`;
                resetBtn.classList.add('hide');
                msgcontainer.classList.remove("hide")
                disabledBoxes();
            }
        }
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`
    msgcontainer.classList.remove("hide")
}
const disabledBoxes=()=>{
    boxes.forEach((box)=>{
        box.setAttribute('disabled','true');
    })
}
const enableBoxes=()=>{
    boxes.forEach((box)=>{
        box.removeAttribute('disabled');
        box.innerText=''
    })
}
const resetBoxes=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide")
    resetBtn.classList.remove('hide');
}
newGame.addEventListener('click',resetBoxes);
resetBtn.addEventListener('click',()=>{
    resetBoxes();
})