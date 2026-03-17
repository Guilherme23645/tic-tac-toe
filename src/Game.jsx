import Board from "./Board"
import { useState } from "react"

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const flag = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  const handlePlay = (updatedSquares) => {
    const updatedHistory = [...history.slice(0, currentMove + 1), updatedSquares]
    setHistory(updatedHistory)
    setCurrentMove(updatedHistory.length - 1)
    setFlag(!flag)
  }

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove)
    setFlag(flag % 2 === 0)
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board flag={flag} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game