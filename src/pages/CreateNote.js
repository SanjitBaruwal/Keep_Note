import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import useCreateDate from "../Components/useCreateDate";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      const note = { id: uuid(), title, details, date };
      //add this notes to the notes array
      setNotes((prevNotes) => [note, ...prevNotes]);
      //redirect to home
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
              style={{ fontSize: "24px", color: "white" }}
              beat
            />
          </Link>
        </button>
        <button className="save_btn" onClick={handelSubmit}>
          save
        </button>
      </header>
      <form className="create_note_form" onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
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

export default CreateNote;
