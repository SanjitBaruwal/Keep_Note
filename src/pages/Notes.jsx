import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NoteItem from "../Components/NoteItem";

const Notes = ({ notes }) => {
  const [showsearch, setShowsearch] = useState(false);
  const [text, setText] = useState("");
  const [filterNotes, setFilterNotes] = useState(notes);

  const handelSearch = () => {
    setFilterNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLowerCase())) return note;
      })
    );
  };

  //for every changes on text in search bar render the notes by using useEffect hook.
  useEffect(handelSearch, [text]);

  return (
    <section className="style">
      <header className="notes_header">
        {!showsearch && <h2 style={{ width: "200px" }}>My Notes</h2>}
        {showsearch && (
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handelSearch();
            }}
            autoFocus
            placeholder="Search by title..."
          />
        )}
        <button
          className="btn"
          onClick={() => setShowsearch((prevState) => !prevState)}
        >
          {showsearch ? (
            <FontAwesomeIcon
              icon={faXmark}
              beat
              style={{ color: "#fff", fontSize: "24px" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              beatFade
              style={{ color: "#fff", fontSize: "24px" }}
            />
          )}
        </button>
      </header>
      <div className="notes_container">
        {filterNotes.length === 0 && (
          <p className="empty "> No any matched notes found.</p>
        )}
        {filterNotes.map((note) => (
          <NoteItem note={note} key={note.id} />
        ))}
      </div>
      <Link to="/create-note" className="plus">
        <button className="btn add_btn">
          <FontAwesomeIcon
            icon={faPlus}
            bounce
            style={{ fontSize: "24px", color: "#ffffff" }}
          />
        </button>
      </Link>
    </section>
  );
};

export default Notes;
