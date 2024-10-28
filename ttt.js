let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#re");
let check = document.querySelector(".check");
let msg = document.querySelector("#msg");

let turnO = true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO) {
         box.innerText = "O";
         turnO = false;
        }
        else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledbox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

showwinner = (winner)=>{
          msg.innerText = `winner is ${winner}`;
          check.classList.remove("hide");
          disabledbox();

}

const checkWinner = ()=>{
    for(let pattern of winpatterns){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if(p1 != ""&& p2 != ""&&p3 !=""){
            if (p1===p2 && p2===p3 ) {
                console.log("winner");
                showwinner(p1);
            }
        }
    }
   
};

const enablebox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        check.classList.add("hide");
    }
};

reset.addEventListener("click",enablebox);