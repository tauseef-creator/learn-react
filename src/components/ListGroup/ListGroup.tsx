import { useState } from "react";
//importing css module
import "./ListGroup.css";
import styled from "styled-components";
interface ListGroupProps {
  items: String[];
  heading: String;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  background: red;
`;

function ListGroup({ items, heading }: ListGroupProps) {
  // hooks,used if some component might have value that changes over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const GetMessage = () => {
    return items.length === 0 && <p>No item found</p>;
  };
  //event handler
  return (
    <>
      <h1>{heading}</h1>
      {GetMessage()}
      <List>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
        {/*enclosed in {} bcz only comp and html allowed in jsx */}
      </List>
    </>
  );
}

export default ListGroup;
