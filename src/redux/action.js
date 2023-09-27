// actions.js
export const setBoard = (board) => ({
    type: "SET_BOARD",
    payload: board,
  });
  
  export const togglePlayer = () => ({
    type: "TOGGLE_PLAYER",
  });
  
  export const resetGame = () => ({
    type: "RESET_GAME",
  });
  
  export const updateScore = (winner) => ({
    type: "UPDATE_SCORE",
    payload: winner,
  });
  