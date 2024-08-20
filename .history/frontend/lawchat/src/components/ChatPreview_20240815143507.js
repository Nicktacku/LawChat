import React from "react";

import personaldp from "../images/personaldp.svg";
import bluedot from "../images/bluedot.svg";
import "../styles/chatpreview.css";

function ChatPreview(props) {
  return (
    <div className="container">
      <div className="images">
        <img src={personaldp} />
      </div>
      <div className="body">
        {props.name} <br />
        {props.preview}
        <b>1m</b>
        <img src={bluedot} />
      </div>
    </div>
  );
}

export default ChatPreview;
