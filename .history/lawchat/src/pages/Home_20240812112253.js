import Button from "../components/Button.js";
import appstore from "../images/appstore.svg";
import playstore from "../images/playstore.svg";

function Home() {
  return (
    <div className="">
      <nav></nav>
      <div className="body">
        <div className="body-content">
          <h3>LawChat on your pocket</h3>
          <p>it makes it easy to communicate and ask for help</p>
          <Button text="Continue as Admin" />
          <a href="#">Switch Account</a>
          <img src={appstore} />
          <img src={playstore} />
        </div>
        <div className="body-image"></div>
      </div>
    </div>
  );
}

export default Home;
