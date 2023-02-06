import React from "react";
import UserCard from "./UserCard";

const Content = ({ users, isFetched, isFetching }) => {
  if (!isFetched) {
    return (
      <div className="message">Please click "Get Users" to get the data.</div>
    );
  }

  if (users.length === 0) {
    return <div className="message">No data found.</div>;
  }

  if (isFetching) {
    return (
      <div className="message">
        <div className="spinner"></div>
        <br />
        Loading
      </div>
    );
  }

  return (
    <div className="container">
      {users.map((user) => (
        <UserCard
          avatar={user.avatar}
          first_name={user.first_name}
          last_name={user.last_name}
          email={user.email}
          key={user.id}
        />
      ))}
    </div>
  );
};

export default Content;
