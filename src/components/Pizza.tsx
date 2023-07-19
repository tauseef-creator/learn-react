import React, { useState } from 'react'

const Pizza = () => {
    const [pizza, setPizza] = useState({
        name: 'Spicy Pepporoni',
        toppings: ['Mushroom']
    })
    const handleClick = () => {
        setPizza({
            ...pizza,
            toppings: [...pizza.toppings, 'Pepporoni']
        })    
    }
  return (
    <div>
        Pizza
        <button onClick={handleClick}>
            <ul>
                {pizza.toppings.map( topping => <li key={topping}>{topping}</li>)}
            </ul>
        </button>
    </div>
  )
}

export default Pizza