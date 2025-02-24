// src/components/LetterForm/LetterForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LetterForm({ mailboxes, addLetter }) {
  const [mailboxId, setMailboxId] = useState(mailboxes[0]?._id || '');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ mailboxId: Number(mailboxId), recipient, message });
    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <div>
      <h2>New Letter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Mailbox:
          <select
            value={mailboxId}
            onChange={(e) => setMailboxId(e.target.value)}
            required
          >
            {mailboxes.map((mailbox) => (
              <option key={mailbox._id} value={mailbox._id}>
                Box {mailbox._id} - {mailbox.boxOwner}
              </option>
            ))}
          </select>
        </label>
        <label>
          Recipient Name:
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button type="submit">Send Letter</button>
      </form>
    </div>
  );
}

export default LetterForm;
