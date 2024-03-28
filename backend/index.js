import express from "express";
import { Server } from "socket.io";
import { resolve } from "node:path";
import { createServer } from "node:http";
import cors from "cors";

const app = express();
const port = 3000;

const server = createServer(app);

app.use(express.static(resolve("../frontend/dist")));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(resolve("../frontend/dist/index.html"));
});

server.listen(port, () => {
  console.log(`server active at http://localhost:${port}`);
});

// sockets
const players = { player1: null, player2: null };
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"], credentials: true },
});

io.on("connection", (socket) => {
  console.log(`new connection... socket-id: ${socket.id}`);
  if (players.player1) {
    if (!players.player2) {
      players.player2 = socket.id;
      socket.emit("player2", "you are player2");
    }
    // else emit server full
  } else {
    players.player1 = socket.id;
    socket.emit("player1", "you are player1");
  }

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
    if (socket.id === players.player1) players.player1 = null;
    else if (socket.id === players.player2) players.player2 = null;
  });
});
