import logo from "../images/logo.svg";
import Button from "../components/Button.js";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [isValidated, setIsValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [result, setResult] = useState({});

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const validate = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5555/user")
      .then((response) => {
        console.log(JSON.stringify(response));
      })
      .catch((err) => {
        console.log("in chats", err);
      });
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
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={handlePass}
          />
          {isValidated ? (
            <NavLink to="/homechat">
              <Button text="Continue"></Button>
            </NavLink>
          ) : (
            <Button text="Continue" onClick={validate}></Button>
          )}

          <input type="checkbox" />
          <label>Keep me signed in</label>
        </form>
      </div>
    </div>
  );
}

export default Login;
