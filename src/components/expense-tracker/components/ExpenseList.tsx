import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
interface ExpenseItems {
  description: String,
  amount: String,
  category: String,
  totalAmount: String
}

interface Props {
  categories: string[];
  items: ExpenseItems[];
  removeItem: (item: ExpenseItems) => void
}


const ExpenseList = ({ items, categories, removeItem }: Props) => {


  const [selectedOption, setSelectedOption] = useState('All');
  if(items.length === 0) return (<h1>No items to show</h1>
  );
  return (
    <div>
      <select 
      onChange={(event) => {
        setSelectedOption(event.target.value);
      }}
      value={selectedOption}
      className="form-select">
        {categories.map((category) => (

          <option 
          value={category}
          key={category}>{category}
          </option>

        ))}
      </select>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount($)</th>
            <th scope="col">Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {  items.map((item) => (
              item.category === selectedOption &&
            <tr>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button onClick = {() => removeItem(item)}
                  className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td><b>Total</b></td>
            <td>
              {/* add amount of only selected category items */}
              {items.reduce((acc, item) => {
                if (item.category === selectedOption) {
                  return acc + Number(item.amount);
                }
                return acc;
              }
                , 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
