import React, { useState } from 'react'

const Game = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "John",
            age: 10
        }
    })

    const handleClick = () => {
        const newGame = {
            ...game,
            player: {
                ...game.player,
                name:'tsf'
            }
        }
        setGame(newGame)
    }

  return (
    <div>Game
        <button onClick={handleClick}>{game.player.name}</button>
    </div>
  )
}

export default Game