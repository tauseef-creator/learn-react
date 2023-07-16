import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Chakwal", "Rawalpindi", "Islamabad", "Lahore", "Karachi"];
   return <div><ListGroup items={items} heading={"Cities"}/></div>
}

export default App;