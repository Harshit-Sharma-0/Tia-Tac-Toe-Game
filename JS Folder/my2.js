export let turnO = false;
export let player1Name = "";
export let player2Name = "";
export let player1Symbol = "X";
export let player2Symbol = "O";

export function showPlayer2Form() {
  const player1Form = document.getElementById("player1-form");
  const player2Form = document.getElementById("player2-form");

  player1Name = document.getElementById("player1").value;
  player1Symbol = document.getElementById("symbol1").value;
  player2Symbol = (player1Symbol === "X") ? "O" : "X";
  turnO = (player1Symbol === "O");

  // Save player 1 info in localStorage
  localStorage.setItem("player1Name", player1Name);
  localStorage.setItem("player1Symbol", player1Symbol);
  localStorage.setItem("player2Symbol", player2Symbol);
  localStorage.setItem("turnO", JSON.stringify(turnO));

  if (player1Form && player2Form) {
    player1Form.style.display = "none";
    player2Form.style.display = "block";
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.getElementById("next-btn");
  if (nextButton) {
    nextButton.addEventListener("click", showPlayer2Form);
  }

  const player2Input = document.getElementById("player2");
  const submitBtn = document.querySelector("form button[type='submit']");

  if (submitBtn && player2Input) {
    submitBtn.addEventListener("click", () => {
      const player2Name = player2Input.value;
      localStorage.setItem("player2Name", player2Name);
    });
  }
});
