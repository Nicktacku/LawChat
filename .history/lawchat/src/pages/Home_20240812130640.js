import Button from "../components/Button.js";
import { NavLink } from "react-router-dom";

import logo from "../images/logo.svg";

import appstore from "../images/appstore.svg";
import playstore from "../images/playstore.svg";

import map from "../images/map.svg";
import location from "../images/location.svg";
import sample_chat from "../images/sample_chat.svg";

function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <img src={logo} />
        <ul>
          <li>Features</li>
          <li>Desktop App</li>
          <li>Privacy & Safety</li>
        </ul>
      </nav>
      <div className="body">
        <div className="body-content">
          <h3>LawChat on your pocket</h3>
          <p>it makes it easy to communicate and ask for help</p>
          <NavLink to="/login">
            <Button text="Continue as Admin" />
          </NavLink>

          <a href="#">Switch Account</a>
          <img src={appstore} />
          <img src={playstore} />
        </div>
        <div className="body-image">
          <img src={map} />
          <img src={location} />
          <img src={sample_chat} />
        </div>
      </div>
    </div>
  );
}

export default Home;
