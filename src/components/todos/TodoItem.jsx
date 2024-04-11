import React, { useState } from "react";
import useSound from 'use-sound';
import kickBass from "./ping.mp3";

const TodoItem = ({ item, id, onDelete }) => {
  const [play] = useSound(kickBass, { volume: 0.5, playbackRate: 0.75}); 
  const [checked, setChecked] = useState(false);

  const handleRadioClick = () => {
    onDelete(id);
    play();
    setChecked(false);
  };

  return (
    <div className="item" id={id}>
      <input
        type="radio"
        name={item}
        value={item}
        onClick={handleRadioClick}
        checked={checked}
        className="input-items"
      />
      <label htmlFor={id}>{item}</label>
    </div>
  );
};

export default TodoItem;
