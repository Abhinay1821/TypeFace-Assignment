// src/components/Message.js
import React from "react";

const Message = ({ message }) => (
  <div className="message">
    <p><strong>{message.username}</strong>: {message.text}</p>
    <span>{new Date(message.timestamp?.toDate()).toLocaleString()}</span>
  </div>
);

export default Message;
