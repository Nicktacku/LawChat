import Button from "../components/Button.js";
import { NavLink } from "react-router-dom";

import logo from "../images/logo.svg";

import appstore from "../images/appstore.svg";
import playstore from "../images/playstore.svg";

import map from "../images/map.svg";
import location from "../images/location.svg";
import sample_chat from "../images/sample_chat.svg";

import "../styles/home.css";

function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <img src={logo} className="logo" />
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">Features</a>
          </li>
          <li className="nav-item">
            <a href="#">Desktop App</a>
          </li>
          <li className="nav-item">
            <a href="#">Privacy & Safety</a>
          </li>
        </ul>
      </nav>
      <div className="body">
        <div className="body-content">
          <h1 className="h1">LawChat on your pocket</h1>
          <p className="p">it makes it easy to communicate and ask for help</p>

          <NavLink to="/login" style={{ margin: "auto" }}>
            <Button text="Continue as Admin" />
          </NavLink>

          <a href="#" style={{ margin: "auto" }}>
            Switch Account
          </a>
          <div className="stores">
            <img src={appstore} />
            <img src={playstore} />
          </div>
        </div>
        <div className="body-image">
          <img src={map} className="body-image-content" />
          <img src={location} className="body-image-content" />
          <img src={sample_chat} className="body-image-content" />
        </div>
      </div>
    </div>
  );
}

export default Home;
