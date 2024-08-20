import { useState } from "react";
import "../styles/button.css";
import axios from "axios";

function Button(props) {
  const [isValidated, setIsValidated] = useState(false);

  const validate = (e) => {
    e.preventDefault(); // Prevent form submission
    axios
      .get("http://localhost:5555/user")
      .then((response) => {
        console.log("result ", JSON.stringify(response));
        console.log("button pressed");
        // Add logic to handle successful validation and set isValidated to true
        setIsValidated(true); // Update this as needed based on your validation logic
      })
      .catch((err) => {
        console.log("in chats", err);
      });
  };
  return (
    <div>
      <button className="button" onClick={props.onClickProp}>
        <b>{props.text}</b>
      </button>
    </div>
  );
}

export default Button;
