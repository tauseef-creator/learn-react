import React, { useState } from 'react'

const Drink = () => {
    
    const [drink, setDrink] = useState({
        name: "Margarita",
        price: 5
    });
    const handleClick = () => {
        console.log(drink)
        const newDrink = {
            ...drink,
            price: 10
        }
        setDrink(newDrink)
    }
  return (
    <div>
    <button onClick={handleClick}>
        {drink.name + " " + drink.price}
    </button>    
    </div>
  )
}

export default Drink