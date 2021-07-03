import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContentNote = styled.div`
  background-color: #4d4b4b;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const TitleText = styled.p`
  color: white;
  text-align: center;
  font-size: 22px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const TextNote = styled.p`
  color: white;
  text-align: center;
  font-size: 17px;
  margin-bottom: 5px;
`;

const DateNote = styled.p`
  color: white;
  text-align: center;
  font-size: 10px;
  margin-bottom: 5px;
`;

const Notes = ({ note, deleteNote }) => {
  return (
    <ContentNote className="col s12 m8 offset-m2">
      <TitleText>Title: {note.title}</TitleText>
      <TextNote>Note: {note.text}</TextNote>
      <DateNote>Date: {note.date}</DateNote>

      <div className="input-field center-align">
        <button
          className="waves-effect waves-light btn-small red darken-4"
          onClick={() => deleteNote(note.id)}
        >
          Delete
          <i className="material-icons right">delete_forever</i>
        </button>
      </div>
    </ContentNote>
  );
};

Notes.propTypes = {
  note: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default Notes;
