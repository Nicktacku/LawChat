import logo from "../images/logo.svg";
import Button from "../components/Button.js";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [isValidated, setIsValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, Pass] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container">
      <div className="login">
        <img src={logo} />
        <h3 className="h3">LawChat</h3>

        <form>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmail}
          />
          <input type="password" placeholder="Password" value={pass} />
          {isValidated ? (
            <NavLink to="/homechat">
              <Button text="Continue"></Button>
            </NavLink>
          ) : (
            <Button text="Continue"></Button>
          )}

          <input type="checkbox" />
          <label>Keep me signed in</label>
        </form>
      </div>
    </div>
  );
}

export default Login;
