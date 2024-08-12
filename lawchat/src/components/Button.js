import "../styles/button.css";

function Button(props) {
  return (
    <div>
      <button className="button">{props.text}</button>
    </div>
  );
}

export default Button;
