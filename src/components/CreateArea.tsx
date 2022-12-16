import React, { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { Zoom } from '@mui/material';
import { TNote } from "../types/type"
type Props = {
  onAdd: (note: TNote) => void
}
function CreateArea({ onAdd }: Props) {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [note, setNote] = useState<TNote | null>(null);



  function handleChange(event: any) {
    const { name, value } = event.target;
    if (note) {
      setNote({
        ...note,
        [name]: value,


      });
    }

  }

  function submitNote(event: any) {
    if (note) {
      onAdd({ ...note, id: Date.now() })

    }
    setNote({
      title: "",
      content: "",
      id: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note?.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note?.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
