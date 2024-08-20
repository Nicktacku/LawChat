import React from "react";

import logo from "../images/logo.svg";
import chaticon from "../images/chaticon.svg";
import friendsicon from "../images/friendsicon.svg";
import locationicon from "../images/locationicon.svg";
import personaldp from "../images/personaldp.svg";

import newchaticon from "../images/newchaticon.svg";
import ChatPreview from "../components/ChatPreview";

import addicon from "../images/addicon.svg";
import tripledoticon from "../images/tripledoticon.svg";

const HomeChat = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <img src={logo} />
        <img src={chaticon} />
        <img src={friendsicon} />
        <img src={locationicon} />
        <img src={personaldp} />
      </div>
      <div className="chats">
        <h3 className="h3">
          <b>Chats</b>
        </h3>
        <image src={newchaticon} />
        <form>
          <input type="text" placeholder="Search Message" />
        </form>
        <ChatPreview name="SMJ Law Firm" preview="blah blah" />
      </div>
      <div className="chat">
        <div className="chat-bar">
          <img src={personaldp} />
          <img src={personaldp} />
          <img src={addicon} />
          <img src={tripledoticon} />
        </div>
        <div className="chat-content"></div>
      </div>
    </div>
  );
};

export default HomeChat;
