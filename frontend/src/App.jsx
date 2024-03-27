import React, { useState } from "react";
import "./App.css";
import OnlineGame from "./OnlineGame";
import OfflineGame from "./OfflineGame";

function App() {
  const [game, setGame] = useState(null);

  const handleClick = (e) => {
    setGame(e.target.innerText);
  };

  if (!game)
    return (
      <div className="buttons">
        <button onClick={handleClick} type="button">
          Offline
        </button>
        {/*back krne se waapis ni jaata is an issue*/}
        <button onClick={handleClick} type="button">
          Online
        </button>
      </div>
    );
  else if (game == "Online") return <OnlineGame />;
  else return <OfflineGame />;
}

export default App;
