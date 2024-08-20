import React from "react";

import personaldp from "../images/personaldp.svg";

import "../styles/chatbubble.css";

function ChatBubble(props) {
  return (
    <div className="container">
      <img src={personaldp} alt="Profile Picture" />
      <div className="message-wrapper">
        <div className="sender-name">{props.name}</div>
        <div className="chat-message">{props.message}</div>
        <div className="chat-message">{props.last_chat_tome}</div>
      </div>
    </div>
  );
}

export default ChatBubble;
