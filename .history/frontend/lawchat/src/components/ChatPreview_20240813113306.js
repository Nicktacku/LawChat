import React from "react";

import personaldp from "../images/personaldp.svg";

function ChatPreview(props) {
  return (
    <div className="container">
      <div className="images">
        <img src={personaldp} />
        <img src={personaldp} />
      </div>
      <div className="body">
        {props.name}
        {props.preview}
      </div>
    </div>
  );
}

export default ChatPreview;
