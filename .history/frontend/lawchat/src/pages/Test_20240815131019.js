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
        setUsers(response.data);
        // setLoading(false);
        console.log(`users: ${response.data.data}`);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
}

export default Test;
