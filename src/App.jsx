import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import React, { useState } from "react";

export default function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((item) => (item === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            initialName="Player 1"
            playerSymbol="X"
            isSelected={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            playerSymbol="O"
            isSelected={activePlayer === "O"}
          />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}
