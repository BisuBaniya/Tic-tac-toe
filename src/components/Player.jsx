import React, { useState } from "react";

export default function Player({ initialName, playerSymbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function handlEditClick() {
    setIsEditing(item => !item);
  }

  function handleChange(event){
    console.log(event);
  }

  let editContent = <span className="player-name">{name}</span>;

  if(isEditing){
    editContent = <input type="text" name="Enter Name" defaultValue={name} onChange={handleChange} required/>;
  }

  return (
    <li>
      <span className="player">
        {editContent}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handlEditClick}>{isEditing? 'Save': 'Edit'}</button>
    </li>
  );
}
