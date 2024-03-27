import React, { useEffect } from "react";
import { io } from "socket.io-client";
import TicTacToeBoard from "./TicTacToeBoard";

function OnlineGame() {
  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("connect", () => {
      console.log("connected");
    });
  }, []);
  return <TicTacToeBoard />;
}

export default OnlineGame;
