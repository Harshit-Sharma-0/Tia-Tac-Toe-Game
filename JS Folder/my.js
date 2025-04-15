let boxs = document.querySelectorAll(".bt");
let resetBt = document.querySelector(".resetBt");

const player1Name = localStorage.getItem("player1Name") || "Player 1";
const player2Name = localStorage.getItem("player2Name") || "Player 2";
const player1Symbol = localStorage.getItem("player1Symbol") || "X";
const player2Symbol = localStorage.getItem("player2Symbol") || "O";
let turnO = JSON.parse(localStorage.getItem("turnO")) || false;

const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

const disableBoxes = () => {
    for (let box of boxs) {
        box.disabled = true;
    }
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxs[pattern[0]].innerText;
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                // Determine who the winner is based on symbol
                let winnerName = (pos1 === player1Symbol) ? player1Name : player2Name;
                alert(`🎉 Winner is ${winnerName}!`);
                disableBoxes();
                return;
            }
        }
    }
};

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return;

        if (turnO) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }

        box.disabled = true;
        checkWinner();
        turnO = !turnO;
    });
});

resetBt.addEventListener("click", () => {
    boxs.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
});
