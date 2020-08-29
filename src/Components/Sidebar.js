import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
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
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
