import logo from "../images/logo.svg";
import Button from "../components/Button.js";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="login">
        <img src={logo} />
        <h3 className="h3">LawChat</h3>

        <form>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <NavLink to="/homechat">
            <Button text="Continue"></Button>
          </NavLink>

          <input type="checkbox" />
          <label>Keep me signed in</label>
        </form>
      </div>
    </div>
  );
}

export default Login;
