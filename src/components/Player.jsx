import React,{useState} from "react";

export default function Player({ playerName, playerSymbol }) {
  const [isEditing, setIsEditing] = useState(false);

  let editContent = (<span className="player-name">{playerName}</span>);
  let button = (<button onClick={handlEdit}>Edit</button>);

  function handlEdit() {
    setIsEditing(true)
  }


  editContent = <input type="text" name="Enter Name" />;
  button = (<button onClick={handlEdit}>Save</button>)
  return (
    <li>
      <span className="player">
        {editContent}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      {button}
    </li>
  );
}
