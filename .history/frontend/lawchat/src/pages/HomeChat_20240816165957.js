import React, { useEffect, useState } from "react";
import axios from "axios";

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

const HomeChat = () => {
  const [loading, setLoading] = useState(false);
  const [gcs, setGcs] = useState([]);
  const [userNames, setUserNames] = useState({});
  const [typedChat, setTypedChat] = useState("");
  const [currentGc, setCurrentGc] = useState("66bdc4c92b6710e2a4cfd866");
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/gc")
      .then((response) => {
        setGcs(response.data);
        fetchUserNames(response.data);
      })
      .catch((err) => {
        console.log("in chats", err);
        setLoading(false);
      });
  }, [gcs]);

  const fetchUserNames = async (gcs) => {
    const userIds = [
      ...new Set(gcs.flatMap((gc) => gc.chats.map((chat) => chat.sender))),
    ];

    const userPromises = userIds.map((id) =>
      axios
        .get(`http://localhost:5555/users/${id}`)
        .then((response) => ({
          id,
          name: response.data.name,
        }))
        .catch((error) => {
          console.error(`Error fetching user ${id}:`, error);
          return { id, name: null }; // or handle differently
        })
    );

    const userData = await Promise.all(userPromises);
    const userNameMap = userData.reduce((acc, user) => {
      acc[user.id] = user.name || "Unknown User"; // Fallback if name is missing
      return acc;
    }, {});

    setUserNames(userNameMap);
    setLoading(false);
  };

  const sendChat = async (message, sender) => {
    const now = new Date();
    const newChat = {
      message: message,
      sender: sender,
      time: now.toLocaleTimeString(),
      is_owner: true,
    };
    await axios
      .post(`http://localhost:5555/gc/chat/send/${currentGc}`, newChat)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setTypedChat("");
  };

  const handleChange = (e) => {
    setTypedChat(e.target.value);
  };

  const handleCurrentGc = (gcId) => {
    setCurrentGc(gcId);
    console.log(gcId);
  };

  const handleNewGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const handleNewGroup = async (e) => {
    e.preventDefault();
    const newGroupChat = {
      name: groupName,
      members: [
        "66bd6a69b21a0789dbf1601f",
        "66bd6b0db21a0789dbf16022",
        "66bd6b53b21a0789dbf16024",
      ],
    };
    await axios
      .post(`http://localhost:5555/gc/create`, newGroupChat)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setShowModal(true);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <img src={logo} className="img" alt="Logo" /> <br />
        <img src={chaticon} className="img" alt="Chat Icon" /> <br />
        <img src={friendsicon} className="img" alt="Friends Icon" /> <br />
        <img src={locationicon} className="img" alt="Location Icon" /> <br />
        <img src={personaldp} className="img" alt="Personal DP" /> <br />
      </div>
      <div className="chats">
        <h3 className="h3">
          <b>Chats</b>
        </h3>
        <img src={newchaticon} alt="New Chat Icon" />
        <div
          id="myModal"
          class="modal"
          style={!showModal ? { display: "block" } : { display: "none" }}
        >
          <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Create Group Chat</h2>
            <form>
              <label>Group Name:</label>
              <input
                type="text"
                onChange={handleNewGroupName}
                value={groupName}
              />
              <label>Add Members:</label>
              <button onClick={handleNewGroup}>Create</button>
            </form>
          </div>
        </div>
        <form>
          <input type="text" placeholder="Search Message" className="search" />
        </form>
        {gcs.map((gc) => (
          <>
            <div
              onClick={() => handleCurrentGc(gc._id)}
              className="chat-previews"
            >
              <ChatPreview
                key={gc._id}
                name={gc.name}
                preview={gc.chats.message}
              />
            </div>
            <button onClick={handleGcDelete}>delete</button>
          </>
        ))}
      </div>
      <div className="chat">
        <div className="chat-bar">
          <img src={personaldp} className="chat-image" alt="Chat Image" />
          <h3 className="chat-name">
            {gcs.map((gc) => (currentGc === gc._id ? gc.name : <></>))}
          </h3>
          <img src={addicon} className="chat-add" alt="Add Icon" />
          <img src={tripledoticon} className="chat-menu" alt="Menu Icon" />
        </div>
        <span className="chat-content">
          <p>Sun, Aug 20 at 5:45 PM</p>
          {gcs.map((gc) =>
            currentGc === gc._id ? (
              gc.chats.map((chat) => (
                <ChatBubble
                  key={chat.id}
                  name={userNames[chat.sender] || chat.sender}
                  message={chat.message}
                  className="chat-content"
                />
              ))
            ) : (
              <></>
            )
          )}
        </span>
        <div className="chatbox">
          <img src={attachicon} alt="Attach Icon" />
          <form>
            <input
              type="text"
              onChange={handleChange}
              value={typedChat}
              placeholder=""
            />
            <img
              src={sendicon}
              onClick={() => sendChat(typedChat, "66bd6a69b21a0789dbf1601f")}
              alt="Send Icon"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeChat;
