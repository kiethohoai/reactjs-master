import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { caculateWinner } from "../../helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(false);
  const winner = caculateWinner(board);

  // handleClick
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;

    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  // handleResetGame
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  // render
  return (
    <div>
      <Board cells={board} onClick={handleClick} />
      <div>
        {winner && winner === "X" && "Winner is 'X'"}
        {winner && winner === "O" && "Winner is 'O'"}
      </div>

      <div>
        <button onClick={handleResetGame}>Reset Game!</button>
      </div>
    </div>
  );
};

export default Game;
