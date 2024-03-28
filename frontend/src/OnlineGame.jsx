import React, { useEffect } from "react";
import { io } from "socket.io-client";
import TicTacToeBoard from "./TicTacToeBoard";

function OnlineGame() {
  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("player1", (msg) => {
      console.log(msg);
    });

    socket.on("player2", (msg) => {
      console.log(msg);
    });
  }, []);
  return <TicTacToeBoard />;
}

export default OnlineGame;
