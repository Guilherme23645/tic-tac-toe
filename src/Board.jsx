import Square from './Square.jsx'

const Board = () => {
  return (
    <>
      <div className="board-row">
        <Square value="X"/>
        <Square value="X"/>
        <Square value="X"/>
      </div>
      <div className="board-row">
        <Square value="X"/>
        <Square value="X"/>
        <Square value="X"/>
      </div>
      <div className="board-row">
        <Square value="X"/>
        <Square value="X"/>
        <Square value="X"/>
      </div>
    </>
  )
}

export default Board