// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBoard, togglePlayer, resetGame, updateScore } from "./redux/action";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";

const App = () => {
  const dispatch = useDispatch();
  const { board, xPlaying, score, gameOver } = useSelector((state) => state);

  const win_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleBoxClick = (boxIdx) => {
    if (!board[boxIdx] && !gameOver) {
      const updatedBoard = [...board];
      updatedBoard[boxIdx] = xPlaying ? "x" : "o";

      dispatch(setBoard(updatedBoard));
      dispatch(togglePlayer());

      const winner = checkWinner(updatedBoard);
      if (winner) {
        dispatch(updateScore(winner));
      }
    }
  };

  const checkWinner = (board) => {
    for (let i = 0; i < win_conditions.length; i++) {
      const [x, y, z] = win_conditions[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        dispatch(resetGame());
        return board[x];
      }
    }
    return null;
  };

  const resetBoard = () => {
    dispatch(resetGame());
  };

  return (
    <div className="App">
      <ScoreBoard score={score} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
};

export default App;
