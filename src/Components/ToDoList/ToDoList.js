import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function ToDoList() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    const item = {
      id: Math.floor(Math.random() * 10),
      value: newItem,
      complete: false,
    };

    setItems((items) => [...items, item]);
    setNewItem("");
  };

  const markDone = (id) => {
    const nawArry = items.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setItems(nawArry);
  };
  const deletItem = (id) => {
    const nawArry = items.filter((item) => item.id !== id);
    setItems(nawArry);
  };

  return (
    <>
      <Form.Label>To Do List</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <br />
      <br />
      <Button
        variant="success"
        onClick={() => {
          addItem();
        }}
      >
        Add
      </Button>
      <ul>
        {items.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                markDone(item.id);
              }}
              style={{
                textDecoration: item.complete ? "line-through" : "none",
              }}
            >
              {item.value}{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default ToDoList;
