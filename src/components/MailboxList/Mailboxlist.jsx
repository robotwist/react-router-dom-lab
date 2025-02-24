import React from 'react';
import { Link } from 'react-router-dom';

function MailboxList({ mailboxes }) {
  return (
    <div>
      <h2>Mailboxes</h2>
      <div className="mailbox-list">
        {mailboxes.map((mailbox) => (
          <div key={mailbox._id} className="mail-box">
            <Link to={`/mailboxes/${mailbox._id}`}>Box {mailbox._id}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MailboxList;
