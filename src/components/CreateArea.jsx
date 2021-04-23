import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    id: "",
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      if (name === "title") {
        return {
          id: uuidv4(),
          title: value,
          content: prevNote.content
        };
      } else if (name === "content") {
        return {
          id: uuidv4(),
          title: prevNote.title,
          content: value
        };
      }
    });
  }

  function addNote(event) {
    onAdd(note);
    setNote({
      id: "",
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
