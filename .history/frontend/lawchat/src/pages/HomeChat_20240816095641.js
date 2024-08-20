import React, { useEffect, useState } from "react";

import logo from "../images/logo.svg";
import chaticon from "../images/chaticon.svg";
import friendsicon from "../images/friendsicon.svg";
import locationicon from "../images/locationicon.svg";
import personaldp from "../images/personaldp.svg";

import newchaticon from "../images/newchaticon.svg";
import ChatPreview from "../components/ChatPreview";

import addicon from "../images/addicon.svg";
import tripledoticon from "../images/tripledoticon.svg";
import ChatBubble from "../components/ChatBubble";

import attachicon from "../images/attachicon.svg";

import sendicon from "../images/sendicon.svg";

import "../styles/homechat.css";

import axios from "axios";

const HomeChat = () => {
  const [loading, setLoading] = useState(false);
  const [gcs, setGcs] = useState([]);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/gc")
      .then((response) => {
        setGcs(response.data);
        return axios.get("http://localhost:5555/gc/chats");
      })
      .then((response) => {
        setChats(response.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="container">
      <div className="sidebar">
        <img src={logo} className="img" /> <br />
        <img src={chaticon} className="img" /> <br />
        <img src={friendsicon} className="img" /> <br />
        <img src={locationicon} className="img" /> <br />
        <img src={personaldp} className="img" /> <br />
      </div>
      <div className="chats">
        <h3 className="h3">
          <b>Chats</b>
        </h3>
        <image src={newchaticon} />
        <form>
          <input type="text" placeholder="Search Message" className="search" />
        </form>
        {gcs.map((gc) => (
          <ChatPreview name={gc.name} preview="blah blah" />
        ))}
      </div>
      <div className="chat">
        <div className="chat-bar">
          <img src={personaldp} className="chat-image" />
          <h3 className="chat-name">Group Name</h3>
          <img src={addicon} className="chat-add" />
          <img src={tripledoticon} className="chat-menu" />
        </div>
        <span className="chat-content">
          <p>Sun, Aug 20 at 5:45 PM</p>
          <ChatBubble
            name="madel"
            message="hi hello goodbye"
            className="chat-content"
          />
        </span>
        <div className="chatbox">
          <img src={attachicon} />
          <form>
            <input type="text" placeholder="" />
            <img src={sendicon} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeChat;
