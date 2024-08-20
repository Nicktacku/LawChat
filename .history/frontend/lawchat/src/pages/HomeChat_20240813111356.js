import React from "react";

import logo from "../images/logo.svg";

const HomeChat = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <img src={logo} />
      </div>
      <div className="chats"></div>
      <div classNmae="chat-contents"></div>
    </div>
  );
};

export default HomeChat;
