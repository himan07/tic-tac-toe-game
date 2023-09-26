import React, { useState } from "react";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXplaying] = useState(true);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

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
    const updatedboard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "x" : "o";
      } else {
        return value;
      }
    });

    const winner = checkwinner(updatedboard);
    if (winner) {
      if (winner === "o") {
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore });
      } else {
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore });
      }
    }

    setBoard(updatedboard);
    setXplaying(!xPlaying);
  };

  const checkwinner = (board) => {
    for (let i = 0; i < win_conditions.length; i++) {
      const [x, y, z] = win_conditions[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
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
