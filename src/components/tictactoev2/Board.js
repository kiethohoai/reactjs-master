import React, { useState } from "react";
import Cells from "./Cells";

const Board = (props) => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const handleClickCell = (index) => {
    if (checkWinner()) {
      setXIsNext(true);
      return;
    }
    const cellsClone = cells;

    if (cellsClone[index] !== null) {
      return;
    } else {
      cellsClone[index] = xIsNext ? "X" : "O";
      setXIsNext(!xIsNext);
      setCells(cellsClone);
    }

    let result = checkWinner();
    if (result) {
      setWinner(result);
    }
  };

  // Check Winner
  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  };

  //   handleResetGame
  const handleResetGame = () => {
    setCells(Array(9).fill(null));
  };

  return (
    <>
      <div className="app-board">
        {cells &&
          cells.length > 0 &&
          cells.map((cell, index) => {
            return (
              <Cells
                key={index}
                index={index}
                cell={cell}
                handleClickCell={handleClickCell}
              />
            );
          })}
      </div>
      <button onClick={handleResetGame}>Reset Game</button> <br />
      {winner && winner === "X" && <span>The Winner Is: "X" </span>}
      {winner && winner === "O" && <span>The Winner Is: "O" </span>}
      {winner === null && <span>The Winner Is: Waiting... </span>}
    </>
  );
};

export default Board;
