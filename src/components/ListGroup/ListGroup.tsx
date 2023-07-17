import { useState } from "react";
//importing css module
import "./ListGroup.css";
import styled from "styled-components";
interface Props {
  items: String[];
  heading: String;
}

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

// in below line, we added "ListItemProps" to pass the props to "styled.li
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${ (props) => (props.active ? "blue" : "yellow")}
`;

function ListGroup({ items, heading }: Props) {
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
          <ListItem
            // className={
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            active={index === selectedIndex}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </ListItem>
        ))}
        {/*enclosed in {} bcz only comp and html allowed in jsx */}
      </List>
    </>
  );
}

export default ListGroup;
