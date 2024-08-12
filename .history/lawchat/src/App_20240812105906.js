import Button from "./components/Button.js";

function App() {
  return (
    <div className="App">
      <nav></nav>
      <div>
        <div>
          <h3>LawChat on your pocket</h3>
          <p>it makes it easy to communicate and ask for help</p>
          <Button text="Continue as Admin" />
          <a href="#">Switch Account</a>
        </div>
      </div>
    </div>
  );
}

export default App;
