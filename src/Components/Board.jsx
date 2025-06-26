import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./Square"
import { TURNS, WINNER_COMBOS } from "../constants"
import { Turns } from "./Turns"

export const Board = () => {
    
    const [board, setBoard] = useState(Array(9).fill(null))

    const [turn, setTurn] = useState(TURNS.X)

    const [winner, setWinner] = useState(null)

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
      }    

    const checkWinner = (boardToCheck) => {
      for (const combo of WINNER_COMBOS)
      {
        const [a,b,c] = combo
        if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c])
        {
          confetti({particleCount: 1000, spread: 200})
          setWinner(boardToCheck[a])
        }
      }
    }

    const checkEndGame = (newBoard) => {
      return newBoard.every((square) => square !== null)
    }

    const updateBoard = (index) => {
    if(board[index] || winner) return
    const newBoard = [...board]
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    newBoard[index] = turn
    setBoard(newBoard)
    setTurn(newTurn)
    checkWinner(newBoard)
    checkEndGame(newBoard) ? setWinner(false) : null
  }


    return (
    <main className="board">
        <h1>Tic tac Toe</h1>
        <button onClick={resetGame}> Empezar de nuevo</button>
        <section className="game">
        {
            board.map((_, index) => {
            return(
            <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
                </Square>
            )
            })
        }
        </section>

        <Turns turn={turn} />
        {winner !== null &&  <section className="winner">
        <div className="text">
          <h2>
            {winner == false ? 'Empate' : 'Ganó: ' + winner}
          </h2>
          <header className="win">
            {winner && <Square>{winner}</Square>}
          </header>
  
          <footer>
            <button onClick={resetGame}> Empezar de nuevo</button>
          </footer>
        </div>
      </section>}
  </main>)
}