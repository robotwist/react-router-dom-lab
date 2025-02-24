import React from 'react';
import { useParams } from 'react-router-dom';

function MailboxDetails({ mailboxes }) {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((mb) => mb._id === Number(mailboxId));

  if (!mailbox) {
    return <div>Mailbox Not Found!</div>;
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p>Box Number: {mailbox._id}</p>
      <p>Box Owner: {mailbox.boxOwner}</p>
      <p>Box Size: {mailbox.boxSize}</p>
    </div>
  );
}

export default MailboxDetails;
