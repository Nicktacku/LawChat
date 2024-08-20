import React, { useEffect, useState } from "react";

function Test() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5555/users").then((response) => {});
  });
  return <div>Test</div>;
}

export default Test;
