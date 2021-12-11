export function generateBoard(row, column) {
  const board = [];

  for (let i = 0; i < row; i++) {
    board[i] = [];

    for (let j = 0; j < column; j++) board[i][j] = null;
  }

  return board;
}
