import logo from "../images/logo.svg";

function Login() {
  return (
    <div className="container">
      <div className="login">
        <img src={logo} />
        <h3 className="h3">LawChat</h3>

        <form>
          <input type="text"></input>
        </form>
      </div>
    </div>
  );
}

export default Login;
