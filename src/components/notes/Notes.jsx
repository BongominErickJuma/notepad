import React from "react";
import Today from "../Today";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Footer from "../Footer.jsx";
import NotesIcon from '@mui/icons-material/Notes';

const Notes = ({ states, setStates }) => {
  const addNote = (newNote) => {
    if (newNote.title.trim() === "" && newNote.content.trim() === "") return;
    setStates((prevItems) => {
      return {
        ...states,
        notes: [...prevItems.notes, newNote],
      };
    });
  };
  const deleteNote = (id) => {
    setStates((prevItems) => {
      return {
        ...states,
        notes: prevItems.notes.filter((item, idx) => idx !== id),
      };
    });
  };
  return (
    <>
      <div>
        <header>
          <h1><NotesIcon/> Notes</h1>
          <Today />
        </header>
        <div className="note-box">
        <CreateArea onAdd={addNote} />
        </div>

        {states.notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}

        <Footer />
      </div>
    </>
  );
};

export default Notes;
