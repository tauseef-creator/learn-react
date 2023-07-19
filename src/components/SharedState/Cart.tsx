import React from "react";

interface Props {
  cartItems: string[];
  removeItems: () => void;
}
const Cart = ({ cartItems, removeItems }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={removeItems}>ClearAll</button>
    </>
  );
};

export default Cart;
