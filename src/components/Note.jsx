import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

//display notes with some functions
function Note({ title, content, onDelete, id }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
        <AiOutlineDelete size={25} />
      </button>
    </div>
  );
}

export default Note;
