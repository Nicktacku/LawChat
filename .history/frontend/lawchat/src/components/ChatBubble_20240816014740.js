import React from "react";

import personaldp from "../images/personaldp.svg";

import "../styles/chatbubble.css";

function ChatBubble(props) {
  return (
    <div className="container">
      <img src={personaldp} />
      <div className="sender-name">{props.name}</div>
      <div className="chat-message">{props.message}</div>
    </div>
  );
}

export default ChatBubble;
