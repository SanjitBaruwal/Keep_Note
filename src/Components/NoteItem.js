import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  //define random colors
  const colors = [
    "#3498db",
    "#2ecc71",
    "#f39c12",
    "#9b59b6",
    "#e74c3c",
    "#16a085",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  return (
    <Link
      to={`/edit-note/${note.id}`}
      className="note"
      style={{ backgroundColor: randomColor }}
    >
      <h4 style={{ padding: "8px", fontFamily: "cursive" }}>
        {note.title.length > 40 ? note.title.substr(0, 40) + "..." : note.title}
      </h4>
      <h6
        style={{
          padding: "8px",
          fontFamily: "Times New Roman",
          fontStyle: "revert",
        }}
      >
        {note.details}
      </h6>
      <p
        style={{
          fontFamily: "serif",
          padding: "8px",
          textAlign: "center",
          fontSize: "10px",
        }}
      >
        last edited on: {note.date}
      </p>
    </Link>
  );
};

export default NoteItem;
