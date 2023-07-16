import { useState } from "react";

interface ListGroupProps {
  items: String[];
  heading: String;
  onSelectItem: (item: String) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
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
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
        {/*enclosed in {} bcz only comp and html allowed in jsx */}
      </ul>
    </>
  );
}

export default ListGroup;
