const generateBoard = (row, column) => {
  const board = [];

  for (let i = 0; i < row; i++) {
    board[i] = [];

    for (let j = 0; j < column; j++) board[i][j] = null;
  }

  return board;
};

const isPlayerWinner = (board, playedCell) => {
  if (isVerticallyWin(board, playedCell)) return true;
  if (isHorizontallyWin(board, playedCell)) return true;
  if (isTopLeftToBottomRightDiagonallyWin(board, playedCell)) return true;
  if (isTopRightToBottomLeftDiagonallyWin(board, playedCell)) return true;

  return false;
};

const isVerticallyWin = (board, playedCell) => {
  let counter = 1;
  for (let i = 1; i <= 3; i++) {
    if (playedCell.row + i === board.length) return false;

    if (
      board[playedCell.row + i][playedCell.column] ===
      board[playedCell.row][[playedCell.column]]
    ) {
      counter++;

      if (counter === 4) return true;
    } else return false;
  }
};

const isHorizontallyWin = (board, playedCell) => {
  let counter = 1;
  for (let i = 1; i <= 3; i++) {
    if (playedCell.column + i === board[0].length) break;

    if (
      board[playedCell.row][playedCell.column + i] ===
      board[playedCell.row][[playedCell.column]]
    ) {
      counter++;

      if (counter === 4) return true;
    } else {
      break;
    }
  }

  for (let i = 1; i <= 3; i++) {
    if (playedCell.column - i === -1) return false;

    if (
      board[playedCell.row][playedCell.column - i] ===
      board[playedCell.row][[playedCell.column]]
    ) {
      counter++;

      if (counter === 4) return true;
    } else {
      return false;
    }
  }

  return false;
};

const isTopLeftToBottomRightDiagonallyWin = (board, playedCell) => {
  let counter = 1;
  for (let i = 1; i <= 3; i++) {
    if (
      playedCell.column + i === board[0].length ||
      playedCell.row + i === board.length
    )
      break;

    if (
      board[playedCell.row + i][playedCell.column + i] ===
      board[playedCell.row][[playedCell.column]]
    ) {
      counter++;

      if (counter === 4) return true;
    } else {
      break;
    }
  }

  for (let i = 1; i <= 3; i++) {
    if (playedCell.column - i === -1 || playedCell.row - i === -1) return false;

    if (
      board[playedCell.row - i][playedCell.column - i] ===
      board[playedCell.row][[playedCell.column]]
    ) {
      counter++;

      if (counter === 4) return true;
    } else {
      return false;
    }
  }

  return false;
};

const isTopRightToBottomLeftDiagonallyWin = (board, playedCell) => {
  let counter = 1;
  for (let i = 1; i <= 3; i++) {
    if (playedCell.column + i === board[0].length || playedCell.row - i === -1)
      break;

    if (
      board[playedCell.row - i][playedCell.column + i] ===
      board[playedCell.row][[playedCell.column]]
    ) {
      counter++;

      if (counter === 4) return true;
    } else {
      break;
    }
  }

  for (let i = 1; i <= 3; i++) {
    if (playedCell.column - i === -1 || playedCell.row + i === board.length)
      return false;

    if (
      board[playedCell.row + i][playedCell.column - i] ===
      board[playedCell.row][[playedCell.column]]
    ) {
      counter++;

      if (counter === 4) return true;
    } else {
      return false;
    }
  }

  return false;
};

export { isPlayerWinner, generateBoard };
