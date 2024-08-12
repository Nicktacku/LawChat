import "../styles/button.css";

function Button(props) {
  return (
    <div>
      <button
        className="button"
        style={{ padding: `${props.height}px ${props.width}px` }}
      >
        {props.text}
      </button>
    </div>
  );
}

export default Button;
