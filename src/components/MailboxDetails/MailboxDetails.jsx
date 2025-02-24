// src/components/MailboxDetails/MailboxDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function MailboxDetails({ mailboxes, letters }) {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((mb) => mb._id === Number(mailboxId));
  const mailboxLetters = letters.filter((letter) => letter.mailboxId === Number(mailboxId));

  if (!mailbox) {
    return <div>Mailbox Not Found!</div>;
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p>Box Number: {mailbox._id}</p>
      <p>Box Owner: {mailbox.boxOwner}</p>
      <p>Box Size: {mailbox.boxSize}</p>
      <h3>Letters</h3>
      {mailboxLetters.length > 0 ? (
        <ul>
          {mailboxLetters.map((letter, index) => (
            <li key={index}>
              <p><strong>Recipient:</strong> {letter.recipient}</p>
              <p><strong>Message:</strong> {letter.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No letters in this mailbox.</p>
      )}
    </div>
  );
}

export default MailboxDetails;
