import { useState } from "react"

const Cart = () => {
    const [cart, setCart] = useState({
        discount: .1,
        items: [
            {id:1, title: 'Product 1',quantity: 1},
            {id:2, title: 'Product 2',quantity: 1},
        ]
    })
    const handleClick = () => {
        setCart({
            ...cart,
            items: cart.items.map( item => item.id === 1? {...item, quantity: item.quantity+1}: item)
        })

    }
    return (
    <div>
        <ul>
            {cart.items.map( item => <li key={item.id}>{item.title}-{item.quantity}</li>)}
        </ul>
        <button onClick={handleClick} >click</button>
    </div>
  )
}

export default Cart