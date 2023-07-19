import { useState } from "react";
import Alert from "./components/Alert";
import Button  from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import "./App.css";
import Icon from "./components/Icon";
import Like from "./components/Like"
import Drink from "./components/Drink";
import Person from "./components/Person";
import StateArray from "./components/StateArray";
import StateObjArray from "./components/StateObjArray";
import Navbar from "./components/SharedState/Navbar";
import Cart from "./components/Cart";
import Game from "./components/Game";
import Pizza from "./components/Pizza";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const items = ["item1", "item2", "item3"];
  const [cartItems, setCartItems] =  useState(['Product1', 'Product2']);
  // const handleClick()
   const changeLikeStatus = () => console.log('liked')

  return (
    <div>
      {/* <ListGroup items = {items} heading="Cities"/> */}
      {/* <Icon/> */}
      {/* <Like changeStatus={changeLikeStatus}/> */}
      {/* <Drink/> */}
      {/* <Person/> */}
      {/* <StateArray/> */}
      {/* <StateObjArray/> */}
      {/* <Navbar cartItemsCount={cartItems.length}/> */}
      {/* <Cart cartItems={cartItems} removeItems={() => { setCartItems([])}}/> */}
      {/* <Game/> */}
      {/* <Pizza/> */}
      {/* <Cart/> */}
      {/* <ExpandableText lengthToSet={10}>Lorem</ExpandableText>   */}
      <Form/>
    </div>
  );
}

export default App;
