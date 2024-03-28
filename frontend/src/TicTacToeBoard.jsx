import React, { useEffect, useState } from "react";
import Cross from "./Cross";
import Circle from "./Circle";
import GameOver from "./GameOver";

function TicTacToeBoard() {
  const [grid, setGrid] = useState(new Array(9).fill(null));
  const [player1Turn, setPlayer1Turn] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const checkGameOver = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        grid[a] &&
        grid[a].type === grid[b]?.type &&
        grid[a].type === grid[c]?.type
      )
        setGameOver(true);
    }
  };

  useEffect(checkGameOver, [grid]);

  const handleClick = (e) => {
    if (!e.target.classList.contains("filled")) {
      const ind = e.target.classList[e.target.classList.length - 1];
      setGrid((prev) => {
        const newGrid = [...prev];
        newGrid[ind] = player1Turn ? <Cross /> : <Circle />;
        return newGrid;
      });
      e.target.classList.add("filled");
      setPlayer1Turn(!player1Turn);
    }
  };
  return gameOver ? (
    <GameOver winner={player1Turn ? "Player 1" : "Player 2"} />
  ) : (
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

export default TicTacToeBoard;
