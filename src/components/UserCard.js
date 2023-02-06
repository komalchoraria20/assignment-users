import React from "react";
import PropTypes from "prop-types";

const UserCard = ({ avatar, first_name, last_name, email }) => {
  return (
    <div className="card">
      <img
        src={avatar}
        alt={`${first_name} ${last_name} avatar`}
      />
      <span className="name">
        {first_name} {last_name}
      </span>
      <span className="email">
        <span>✉</span>
        <a href={`mailto:${email}`}>{email}</a>
      </span>
    </div>
  );
};

UserCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserCard;
