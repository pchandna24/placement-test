import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const chatName = prompt("Please enter name for chat");
    if (chatName) {
      // clever database stuff..
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat_info">
        <h3>Person name</h3>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat}>
      <div className="sidebarChat">
        <h3>Add new Chat</h3>
      </div>
    </div>
  );
}

export default SidebarChat;
