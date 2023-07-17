import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
import  ListGroup from "./components/ListGroup/ListGroup";
import './App.css'
import Icon from "./components/Icon";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false)
  const items = ["item1", "item2", "item3"];
  // const handleClick()
  return (
    <div>
      <ListGroup items = {items} heading="Cities"/>
      <Icon/>
    </div>
  );
}

export default App;
