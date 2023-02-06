import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

const GET_USERS_URL = "https://reqres.in/api/users?page=1";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const fetchUsers = async () => {
    setIsFetching(true);
    const response = await fetch(GET_USERS_URL);
    const data = await response.json();
    setUsers(data?.data);
    setIsFetching(false);
    setIsFetched(true);
  };

  return (
    <div className="main">
      <Navbar
        handleGetUsersClick={fetchUsers}
        isFetching={isFetching}
      />
      <Content
        users={users}
        isFetched={isFetched}
        isFetching={isFetching}
      />
    </div>
  );
};

export default App;
