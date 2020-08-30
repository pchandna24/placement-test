import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { SearchOutlined, Room } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db from "../firebase";

function Sidebar() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/pqrs.svg`} />
      </div>
      <div className="sidebar_search">
        <div className="siderbar_searchContainer">
          <SearchOutlined />

          <input
            className="search"
            placeholder="Search or Chat"
            type="text"
          ></input>
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {chats.map((chat) => (
          <SidebarChat key={chat.id} id={chat.id} name={chat.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
