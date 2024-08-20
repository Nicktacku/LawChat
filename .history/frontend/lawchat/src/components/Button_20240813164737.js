import "../styles/button.css";

function Button(props) {
  return (
    <div>
      <button className="button">
        <b>{props.text}</b>
      </button>
    </div>
  );
}

export default Button;
