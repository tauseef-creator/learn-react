import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import "./App.css";
import Icon from "./components/Icon";
import Like from "./components/Like";
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
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ProductList from "./components/ProductList";
import axios, { AxiosError } from "axios";
import { set } from "react-hook-form";

interface User {
  id: number;
  name: string;
}

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);
  // const items = ["item1", "item2", "item3"];
  // const [cartItems, setCartItems] =  useState(['Product1', 'Product2']);
  // const handleClick()
  //  const changeLikeStatus = () => console.log('liked')

  // const ExpenseCategoriesToAdd = ['',"Utility", "Entertainment", "Food", "Misc"];
  // const ExpenseCategoriesToView = ['All',"Utility", "Entertainment", "Food", "Misc"];
  //declaring state array of objs. without any initial value

  // const [items, setItems] = useState<any[]>([]);

  //add item
  // const addItem = (item: any) => {
  //   setItems([...items, item]);
  // };
  // const removeItem = (item: any) => {
  //   setItems(items.filter((i) => i !== item));
  // };
  // const [category, setCategory] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const res = axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
        setLoading(false);
      });
    // return () => {
    //   controller.abort();
    // }
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .catch((err: AxiosError) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  const addUser = () => {
    const user = {
      id: users.length + 1,
      name: "New User"+ users.length + 1,
    };
    const originalUsers = [...users];
    axios.post("https://jsonplaceholder.typicode.com/users", user)
    .then((res) => {
      setUsers([res.data, ...users]);
    })
    .catch((err: AxiosError) => {
      setError(err.message);
      setUsers(originalUsers);
    });

    }

  return (
    <div>
      {isLoading && (
        <div className="spinner-border" role="status">
          {/* <span className="sr-only">Loading...</span> */}
        </div>
      )}
      {error && <p className="text-danger">{error}</p>}
      {!users.length && <p>No item to show</p>}
      <ul className="list-group">
        <button className="btn btn-primary"
        onClick={addUser}
        >Add</button>
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item  d-flex justify-content-between"
          >
            {user.name}
            <button
              onClick={() => deleteUser(user)}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {/* <select className="form-select" 
     onChange={(event) => {
      setCategory(event.target.value);
    }}
    >
      <option value=""></option>
      <option value="Household">Household</option>
      <option value="Electronics">Electronics</option>
      <option value="Grocery">Grocery</option>
    </select> */}
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
      {/* <Form categories={ExpenseCategoriesToAdd} addItem={addItem}/> */}
      {/* <ExpenseList categories={ExpenseCategoriesToView} items={items} removeItem={removeItem}/> */}
      {/* <ProductList category={category}/> */}
    </div>
  );
}

export default App;
