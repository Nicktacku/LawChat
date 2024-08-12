import logo from "../images/logo.svg";
import Button from "../components/Button.js";

function Login() {
  return (
    <div className="container">
      <div className="login">
        <img src={logo} />
        <h3 className="h3">LawChat</h3>

        <form>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <Button text="Continue"></Button>
          <input type="checkbox"><label>Keep me signed in</label>
        </form>
      </div>
    </div>
  );
}

export default Login;
