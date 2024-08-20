import React from "react";

import personaldp from "../images/personaldp.svg";

function ChatBubble(props) {
  return (
    <div className="container">
      <img src={personaldp} />
      <div className="chat">
        {props.name}
        {props.content}
      </div>
    </div>
  );
}

export default ChatBubble;
