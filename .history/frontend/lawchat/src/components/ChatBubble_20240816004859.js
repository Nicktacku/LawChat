import React from "react";

import personaldp from "../images/personaldp.svg";

import "../styles/chatbubbles.ss";

function ChatBubble(props) {
  return (
    <div className="container">
      <img src={personaldp} />
      <div className="chat-message">
        {props.name}
        {props.message}
      </div>
    </div>
  );
}

export default ChatBubble;
