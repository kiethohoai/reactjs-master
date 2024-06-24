import React from "react";

const Cell = ({ value, onClick }) => {
  // const { value, onClick } = props;

  return (
    <div className="game-cell" onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
