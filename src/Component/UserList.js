import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((error) => setError(error));
    }
    fetchData();
  }, []);

  return (
    <div className="userslist">
      {data.map((user) => (
        <div key={user.id}>
          <UserCard user={user} />
        </div>
      ))}
    </div>
  );
};
export default UserList;
