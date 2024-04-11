import React from "react";
import Today from "../Today";
import InputArea from "./InputArea";
import TodoItem from "./TodoItem";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const Todos = ({ states, setStates }) => {

  const addItem = (item) => {
    if (item.trim() === "") return;

    setStates((prevItems) => {
      return {
        ...states,
        items: [...prevItems.items, item],
      };
    });
  };
  const deleteItem = (id) => {
    setStates((prevItems) => {
      return {
        ...states,
        items: prevItems.items.filter((item, idx) => idx !== id),
      };
    });
  };
  return (
    <div className="todos">
      <header>
        <h1><FormatListBulletedIcon/> To-dos</h1>
        <Today />
      </header>

      <div className="box">
        <InputArea onAdd={addItem} length = {states.items.length} />
        {states.items.map((item, index) => (
          <TodoItem key={index} id={index} item={item} onDelete={deleteItem} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
