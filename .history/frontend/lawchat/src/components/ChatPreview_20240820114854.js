import React from "react";

import personaldp from "../images/personaldp.svg";
import bluedot from "../images/bluedot.svg";
import "../styles/chatpreview.css";

function ChatPreview(props) {
  return (
    <div className="chats-container">
      <div className="images">
        <img src={personaldp} />
      </div>
      <div className="body">
        {props.name} <br />
        {props.preview}g<b className="last_message_time">1m</b>
      </div>
    </div>
  );
}

export default ChatPreview;
