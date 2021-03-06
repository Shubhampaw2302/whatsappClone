import React from "react";
import "../css/SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
    return (
        <div className="sidebarchat">
            <Avatar />
            <div className="sidebarchat_info">
                <h2>Room Name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat;