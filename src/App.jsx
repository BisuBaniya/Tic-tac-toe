import Player from "./components/Player";

export default function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName='Player 1' playerSymbol='X'/>
          <Player initialName='Player 2' playerSymbol='O'/>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}
