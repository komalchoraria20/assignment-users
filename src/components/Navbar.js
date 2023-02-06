import React from "react";

const Navbar = ({ handleGetUsersClick, isFetching }) => {
  return (
    <nav>
      <span className="logo">Assignment</span>
      <button
        onClick={handleGetUsersClick}
        disabled={isFetching}
      >
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
