// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import LetterForm from './components/LetterForm/LetterForm';

function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = ({ boxOwner, boxSize }) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxOwner,
      boxSize,
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  const addLetter = ({ mailboxId, recipient, message }) => {
    const newLetter = {
      mailboxId,
      recipient,
      message,
    };
    setLetters([...letters, newLetter]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        <Route
          path="/new-letter"
          element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
