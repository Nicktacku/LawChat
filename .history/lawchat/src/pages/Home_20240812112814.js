import Button from "../components/Button.js";

import logo from "../log.svg";

import appstore from "../images/appstore.svg";
import playstore from "../images/playstore.svg";

import map from "../images/map.svg";
import location from "../images/location.svg";
import sample_chat from "../images/sample_chat.svg";

function Home() {
  return (
    <div className="">
      <nav className="navbar"></nav>
      <div className="body">
        <div className="body-content">
          <h3>LawChat on your pocket</h3>
          <p>it makes it easy to communicate and ask for help</p>
          <Button text="Continue as Admin" />
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
