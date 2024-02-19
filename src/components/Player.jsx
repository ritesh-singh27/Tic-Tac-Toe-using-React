import { useState } from "react";
export default function Player({ initialname, symbol, isActive }) {
  const [playerName, setplayerName] = useState(initialname);
  const [IsEditing, setIsEditing] = useState(false);
  function handleEdiClick() {
    setIsEditing((editing) => !editing);
  }
  function handlechange(event) {
    setplayerName(event.target.value);
  }
  let editablePlayer = <span className="player-name"> {playerName}</span>;
  if (IsEditing) {
    editablePlayer = (
      <input type="text" required Value={playerName} onChange={handlechange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayer}
        <span className="player-symbol"> {symbol}</span>
      </span>
      <button onClick={handleEdiClick}>{IsEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
