import { ReactDOM, useState } from "react";
import './App.css'

function App() {
  const [count, setcount] = useState(0);
  const [board, setboard] = useState(["", "", "", "", "", "", "", "", "", ""]);
  const [lock, setlock] = useState(0);
  const [winner, setwinner] = useState("");
  const [color, setcolor] = useState();
  const [titledisplay, settitledisplay] = useState({ display: "flex" });
  const [winnerdisplay, setwinnerdisplay] = useState({ display: "none" });
  const [won, setwon] = useState("Won!");

  const handleClick = (index) => {
    if (lock || board[index]) return;

    setcount(count + 1);

    const currentPlayer = count % 2 === 0 ? "X" : "O";
    const playerColor = currentPlayer === "X" ? "red" : "rgb(8, 199, 135)";

    let temp = [...board];
    temp[index] = { value: currentPlayer, color: { color: playerColor } };
    setboard(temp);

    const winner = checkWinner(temp);

    if (winner) {
      setlock(1);
      settitledisplay({ display: "none" });
      setwinnerdisplay({ display: "flex" });
      setwinner(winner);
      setcolor({ color: playerColor });
    } else if (count === 8) {
      settitledisplay({ display: "none" });
      setwinnerdisplay({ display: "flex" });
      setwon("Draw!");
    }
  };

  const checkWinner = (board) => {
    const winningCombinations = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [1, 5, 9],
      [2, 5, 8],
      [3, 6, 9],
      [3, 5, 7],
    ];
    for (const [a, d, c] of winningCombinations) {
      if (
        board[a].value &&
        board[a].value === board[d].value &&
        board[a].value === board[c].value
      ) {
        return board[a].value;
      }
    }
    return null;
  };

  const reset = () => {
    setcount(0);
    setlock(0);
    setboard(["", "", "", "", "", "", "", "", "", ""]);
    setwon("Won!");
    settitledisplay({ display: "flex" });
    setwinnerdisplay({ display: "none" });
    setwinner("");
  };

  return (
    <div className="container">
      <div className="title-box">
        <h1 className="title" style={titledisplay}>
          Tic Tac Toe
        </h1>
        <div className="win" style={winnerdisplay}>
          <h1 className="winner" style={color}>
            {winner}
          </h1>
          <h1 className="won">{won}</h1>
        </div>
      </div>

      <div className="flex">
        <div className="main">
          <button
            className="buttons"
            style={board[1].color}
            onClick={() => handleClick(1)}
          >
            {board[1].value}
          </button>
          <button
            className="buttons"
            style={board[2].color}
            onClick={() => handleClick(2)}
          >
            {board[2].value}
          </button>
          <button
            className="buttons"
            style={board[3].color}
            onClick={() => handleClick(3)}
          >
            {board[3].value}
          </button>
          <button
            className="buttons"
            style={board[4].color}
            onClick={() => handleClick(4)}
          >
            {board[4].value}
          </button>
          <button
            className="buttons"
            style={board[5].color}
            onClick={() => handleClick(5)}
          >
            {board[5].value}
          </button>
          <button
            className="buttons"
            style={board[6].color}
            onClick={() => handleClick(6)}
          >
            {board[6].value}
          </button>
          <button
            className="buttons"
            style={board[7].color}
            onClick={() => handleClick(7)}
          >
            {board[7].value}
          </button>
          <button
            className="buttons"
            style={board[8].color}
            onClick={() => handleClick(8)}
          >
            {board[8].value}
          </button>
          <button
            className="buttons"
            style={board[9].color}
            onClick={() => handleClick(9)}
          >
            {board[9].value}
          </button>
        </div>
      </div>

      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
