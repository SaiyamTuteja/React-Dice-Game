import { useState } from "react";
import "./App.css";
import Startgame from "./componenets/Startgame";
import Gameplay from "./componenets/Gameplay";

function App() {
  const [isGameStarted, SetIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    SetIsGameStarted(!isGameStarted);
  };

  return (
    <>
      {isGameStarted ? (
        <Gameplay />
      ) : (
        <Startgame toggleGamePlay={toggleGamePlay} />
      )}
    </>
  );
}

export default App;
