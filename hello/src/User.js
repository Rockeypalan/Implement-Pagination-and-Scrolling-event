import React from "react";

const Users = ({ user }) => {
  return (
    <div className="card-detail">
      <img src={user.picture.large} alt="user avi" />
      <h3>
        {user.name.first} {user.name.last}
      </h3>
    </div>
  );
};

export default Users;
