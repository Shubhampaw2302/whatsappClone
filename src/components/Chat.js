import React, { useState } from "react";
import "../css/Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined, MoreVert } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic";
import axios from "../axios";

function Chat({ messages }) {
    const [input, setInput] = useState("");
    const sendMessage = async (event) => {
        event.preventDefault();
        await axios.post("/messages/new", {
            message: input,
            name: "Name",
            timestamp: "Just Now!",
            received: true
        });

        setInput("");
    };
    
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />

                <div className="chat_header_info">
                    <h3>Room Name</h3>
                    <p>Last seen at ....</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                {messages.map((message) => (
                    <p className={message.received ? "chat_message chat_receiver" : "chat_message"}>
                        <span className="chat_name">{message.name}</span>
                        {message.message}
                        <span className="chat_timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))}
            </div>

            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}


export default Chat;