import React from "react";
import Cell from "./Cell";
import { caculateWinner } from "../../helper";

const Board = (props) => {
  // console.log("🚀CHECK  props =", props);
  // const cells = [null, null, null, "x", "x", "x", null, null, null];
  // console.log(caculateWinner(cells));

  return (
    <div className="game-board">
      {props.cells.map((item, index) => {
        return (
          <Cell key={index} value={item} onClick={() => props.onClick(index)} />
        );
      })}
    </div>
  );
};

export default Board;
