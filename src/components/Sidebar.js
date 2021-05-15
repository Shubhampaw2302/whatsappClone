import React from "react";
import "../css/Sidebar.css";
import SidebarChat from "./SidebarChat";
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import shubham from "./shubham.jpg";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src={shubham} />                         {/* An Avatar is a component which can take a source as an image */}
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />                   {/* Wrapping the donut icon inside IconButton makes it clickable. */}
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar;