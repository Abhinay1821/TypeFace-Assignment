import React, { useState } from "react";
import Message from "./Components/Message";
import InputBox from "./Components/InputBox";

const ChatPage = ({ selectedUser }) => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    const newMessage = {
      text,
      sender: "You",
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
  };

  if (!selectedUser) return <div className="chat-window">Select a user to start chatting</div>;

  return (
    <div className="chat-window">
      <h3>Chat with {selectedUser.name}</h3>
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>
      <InputBox onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatPage;
