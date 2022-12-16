import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {TNote} from "../types/type"
type Props = {
  note: TNote
  key: number
  onDelete: (id: string| number) =>void
}
function Note({note, key, onDelete}: Props) {
  function handleClick(id: TNote["id"]) {
    onDelete(note.id);
  }

  return (
    <div className="note">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button onClick={()=> handleClick(note.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
