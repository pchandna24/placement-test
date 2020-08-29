import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
      </div>
      <div className="sidebar_search">
        <div className="siderbae_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or Chat" type="text"></input>
        </div>
      </div>
      <div className="sidebar_chats"></div>
    </div>
  );
}

export default Sidebar;
