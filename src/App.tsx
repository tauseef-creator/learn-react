import { useState } from "react";
import Alert from "./components/Alert";
import Button  from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import "./App.css";
import Icon from "./components/Icon";
import Like from "./components/Like"
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const items = ["item1", "item2", "item3"];
  // const handleClick()
   const changeLikeStatus = () => console.log('liked')

  return (
    <div>
      {/* <ListGroup items = {items} heading="Cities"/> */}
      {/* <Icon/> */}
      <Like changeStatus={changeLikeStatus}/>
    </div>
  );
}

export default App;
