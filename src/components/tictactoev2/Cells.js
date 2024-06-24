const Cells = (props) => {
  const { cell, index, handleClickCell } = props;

  return (
    <div className="app-cells" onClick={() => handleClickCell(index)}>
      {cell}
    </div>
  );
};

export default Cells;
