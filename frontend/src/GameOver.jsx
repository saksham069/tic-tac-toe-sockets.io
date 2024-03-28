import React from "react";

function GameOver(props) {
  return (
    <>
      <h1>Game Over</h1>
      <h2>Player {props.winner} wins</h2>
    </>
  );
}

export default GameOver;
