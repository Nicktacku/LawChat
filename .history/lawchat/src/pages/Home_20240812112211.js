import Button from "../components/Button.js";
import appstore from "../images/appstore.svg"

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
          <img src={require("../images/playstore.svg")} />
        </div>
        <div className="body-image"></div>
      </div>
    </div>
  );
}

export default Home;
