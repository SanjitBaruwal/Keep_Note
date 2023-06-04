import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import useCreateDate from "../Components/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handelForm = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);

      navigate("/");
    }
  };

  const handelDelete = () => {
    if (window.confirm("are you sure want to delete?")) {
      const newNotes = notes.filter((item) => item.id !== id);
      setNotes(newNotes);
      navigate("/");
    }
  };

  return (
    <section className="style">
      <header className="create_note_header">
        <button className="btn">
          <Link style={{ textDecoration: "none" }} to="/">
            <FontAwesomeIcon
              icon={faAngleLeft}
              size="2xl"
              style={{ color: "#ffffff" }}
              beat
            />
          </Link>
        </button>
        <button className="save_btn" onClick={handelForm}>
          save
        </button>
        <button className="btn" onClick={handelDelete}>
          <FontAwesomeIcon
            icon={faTrash}
            shake
            style={{ fontSize: "24px", color: "#ff0000" }}
          />
        </button>
      </header>
      <form className="create_note_form" onSubmit={handelForm}>
        <input
          type="text"
          placeholder="title"
          value={title}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="28"
          placeholder="note details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </form>
    </section>
  );
};

export default EditNote;
