import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

const InputArea = ({ onAdd, length }) => {
  const [inputValue, setInputValue] = useState();
  const [isExpanded, setExpanded] = useState(false);

  const handleChange = (e) => {
    const newItem = e.target.value;
    setInputValue(newItem);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  
  function expand() {
    setExpanded(true);
  }

  return (
    <form className="input-area create-note" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        placeholder={`add item number ${length + 1} here ...`}
        value={inputValue}
        onChange={handleChange}
        onClick={expand}
      />
      <Zoom in={isExpanded}>
        <Fab
          onClick={() => {
            onAdd(inputValue), setInputValue("");
          }}
        >
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
};

export default InputArea;
