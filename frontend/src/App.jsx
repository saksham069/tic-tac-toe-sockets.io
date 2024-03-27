import React, { useState } from "react";
import "./App.css";
import Cross from "./Cross";
import Circle from "./Circle";

function App() {
  const [grid, setGrid] = useState(new Array(9).fill(null));
  const [player1Turn, setPlayer1Turn] = useState(false);
  const handleClick = (e) => {
    if (!e.target.classList.contains("filled")) {
      const ind = e.target.classList[e.target.classList.length - 1];
      setGrid((prev) => {
        prev[ind] = player1Turn ? <Cross /> : <Circle />;
        return prev;
      });
      e.target.classList.add("filled");
      e.target.classList.add(player1Turn ? "x" : "o");
      setPlayer1Turn(!player1Turn);
    }
  };
  return (
    <div className="tic-tac-toe-board">
      <div onClick={handleClick} className="cell top left 0">
        {grid[0]}
      </div>
      <div onClick={handleClick} className="cell top center 1">
        {grid[1]}
      </div>
      <div onClick={handleClick} className="cell top right 2">
        {grid[2]}
      </div>
      <div onClick={handleClick} className="cell middle left 3">
        {grid[3]}
      </div>
      <div onClick={handleClick} className="cell middle center 4">
        {grid[4]}
      </div>
      <div onClick={handleClick} className="cell middle right 5">
        {grid[5]}
      </div>
      <div onClick={handleClick} className="cell bottom left 6">
        {grid[6]}
      </div>
      <div onClick={handleClick} className="cell bottom center 7">
        {grid[7]}
      </div>
      <div onClick={handleClick} className="cell bottom right 8">
        {grid[8]}
      </div>
    </div>
  );
}

export default App;
