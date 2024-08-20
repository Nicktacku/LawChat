import React, { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/users")
      .then((response) => {
        setUsers(response.data.data);
        // setLoading(false);
        console.log(`users: ${response.data.data}`);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return <div>Test</div>;
}

export default Test;
