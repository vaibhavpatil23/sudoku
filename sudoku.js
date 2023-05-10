const gameBoard = document.querySelector(".game-board");
const cells = document.querySelectorAll(".cell");
const newGameBtn = document.getElementById("new-game-btn");
const checkBtn = document.getElementById("check-btn");

// initialize the game board with empty cells
let board = Array.from(Array(9), () => Array(9).fill(0));

// update the HTML cells to match the game board
function updateBoard() {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      cells[row * 9 + col].textContent = board[row][col] || "";
    }
  }
}

// select a cell and highlight its row, column, and block
function selectCell(cell) {
  cells.forEach((cell) => cell.classList.remove("selected", "highlight"));
  cell.classList.add("selected");
  const row = Math.floor(cell.dataset.index / 9);
  const col = cell.dataset.index % 9;
  for (let i = 0; i < 9; i++) {
    cells[row * 9 + i].classList.add("highlight");
    cells[i * 9 + col].classList.add("highlight");
    const blockRow = Math.floor(row / 3) * 3 + Math.floor(i / 3);
    const blockCol = Math.floor(col / 3) * 3 + (i % 3);
    cells[blockRow * 9 + blockCol].classList.add("highlight");
  }
}

// handle user input on a selected cell
function handleInput(event) {
  const cell = document.querySelector(".selected");
  if (!cell) return;
  const num = parseInt(event.key);
  if (num >= 1 && num <= 9) {
    const row = Math.floor(cell.dataset.index / 9);
    const col = cell.dataset.index % 9;
    board[row][col] = num;
    updateBoard();
  }
}

// generate a new game board with random starting numbers
function newGame() {
  // TODO: generate a new game board
  updateBoard();
}

// check if the current board is a valid solution
function checkSolution() {
  // TODO: check ifthe current board is a valid solution
  alert("Congratulations! You solved the puzzle.");
}

// add event listeners to the cells and buttons
cells.forEach((cell) => cell.addEventListener("click", () => selectCell(cell)));
document.addEventListener("keydown", handleInput);
newGameBtn.addEventListener("click", newGame);
checkBtn.addEventListener("click", checkSolution);
