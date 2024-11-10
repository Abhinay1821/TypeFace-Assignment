import React from "react";

const Sidebar = ({ users, selectUser, selectedUserId }) => (
  <div className="sidebar">
    <h2>Chats</h2>
    <ul>
      {users.map(user => (
        <li
          key={user.id}
          onClick={() => selectUser(user)}
          className={selectedUserId === user.id ? "active" : ""}
        >
          {user.name}
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
