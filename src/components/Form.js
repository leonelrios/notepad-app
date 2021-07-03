import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import styled from "@emotion/styled";

const FormNote = styled.form`
  background-color: #4d4b4b;
  border-radius: 10px;
`;

const Form = ({ newNotes }) => {
  const [error, setError] = useState(false);

  const [note, setNote] = useState({
    title: "",
    text: "",
    date: "",
  });

  const { title, text, date } = note;

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || text.trim() === "" || date.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    note.id = uuid();
    newNotes(note);

    setNote({
      title: "",
      text: "",
      date: "",
    });
  };

  return (
    <FormNote className="col s12 m8 offset-m2" onSubmit={handleSubmit}>
      {error ? <Error message="Complete all fields" /> : null}

      <div className="input-field">
        <input
          className="white-text"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
        />
        <label htmlFor="title">Title:</label>
      </div>

      <div className="input-field">
        <textarea
          className="white-text"
          name="text"
          placeholder="Note"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="input-field">
        <input
          className="white-text"
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={handleChange}
        />
        <label htmlFor="title">Date: </label>
      </div>

      <div className="input-field center-align">
        <button
          className="waves-effect waves-light btn light-blue darken-4"
          type="submit"
        >
          add note
          <i className="material-icons right">add</i>
        </button>
      </div>
      
    </FormNote>
  );
};

Form.propTypes = {
  newNotes: PropTypes.func.isRequired,
};

export default Form;
