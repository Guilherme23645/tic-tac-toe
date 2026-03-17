import Board from "./Board"
import { useState } from "react"

const Game = () => {
  const [flag, setFlag] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (updatedSquares) => {
    setHistory([...history, updatedSquares])
    setFlag(!flag)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board flag={flag} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  )
}

export default Game