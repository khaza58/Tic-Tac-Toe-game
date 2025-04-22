let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reseter");
let newgame=document.querySelector(".newgame");
let winbox =document.querySelector(".winbox");
let win=document.querySelector(".win")

let turno=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame =()=>{
    turno=true;
    enableb();
    winbox.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turno){
            box.innerText="O";
            box.style.color = "#b0413e";
            turno=false;
        }else{
            box.innerText="X";
            box.style.color = "#1945ba";
            turno=true;
        }
        box.disabled=true;

        checkwinner();
    });
});

const disableb =()=>{
    for(let box of boxes){
        box.disabled =true;
    }
};
const enableb =()=>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
};
const showWinner=(winner) =>{
    win.innerText=`congrats ${winner}`;
    winbox.classList.remove("hide");
    disableb();
}
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1 =boxes[pattern[0]].innerText;
        let pos2 =boxes[pattern[1]].innerText;
        let pos3 =boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" &&  pos3 !=""){
            if (pos1 == pos2 && pos2 == pos3){
                showWinner(pos1);
            }
        }
    }
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);