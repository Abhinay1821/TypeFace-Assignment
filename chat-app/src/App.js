import React, { useState } from "react";
import Sidebar from "./SideBar";
import ChatPage from "./ChatPage";
import { Userslist } from "./Config/UsersConfig";
import "./App.css";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="app">
      <Sidebar users={Userslist} selectUser={setSelectedUser} selectedUserId={selectedUser?.id} />
      <ChatPage selectedUser={selectedUser} />
    </div>
  );
}

export default App;
