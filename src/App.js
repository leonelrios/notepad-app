import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Colors from "./components/Colors";
import Form from "./components/Form";
import Notes from "./components/Notes";
import Footer from "./components/Footer";
import styled from "@emotion/styled";

const BodyPage = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: "Raleway", sans-serif;
`;

function App() {
  let startNotes = JSON.parse(localStorage.getItem("notes"));
  if (!startNotes) startNotes = [];

  const [color, setColor] = useState({
    colors: "white",
  });

  const { colors } = color;

  const [notes, setNotes] = useState(startNotes);

  useEffect(() => {
    let startNotes = JSON.parse(localStorage.getItem("notes"));

    if (startNotes) {
      localStorage.setItem("notes", JSON.stringify(notes));
    } else {
      localStorage.setItem("notes", JSON.stringify([]));
    }
  }, [notes]);

  const newNotes = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    const afterDeleted = notes.filter((note) => note.id !== id);

    setNotes(afterDeleted);
  };

  return (
    <Fragment>
      <BodyPage className={colors}>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <Colors setColor={setColor} />
            </div>

            <div className="col s12">
              <Header title="Notepad" />
            </div>

            <div className="col s12 m6">
              <h4 className="col s12 m8 offset-m2 center-align">New Notes</h4>
              <Form newNotes={newNotes} />
            </div>

            <div className="col s12 m6">
              <h4 className="col s12 m8 offset-m2 center-align">
                {notes.length === 0 ? null : "My Notes"}
              </h4>
              {notes.map((note) => (
                <Notes deleteNote={deleteNote} key={note.id} note={note} />
              ))}
            </div>
          </div>
        </div>
        <Footer message="Leonel Ríos &copy; 2021, Personal Project" />
      </BodyPage>
    </Fragment>
  );
}

export default App;
