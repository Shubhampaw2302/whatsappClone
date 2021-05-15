import React, { useEffect, useState } from "react";
import './App.css';
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      console.log(response.data);
      setMessages(response.data);
    })
  }, [])

  useEffect(() => {                                            // This useEffect is executed only when a change occurs in messages, or when
    const pusher = new Pusher('6f7a2599d007bdb6be7b', {        // a message has been received.
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages} />
      </div>

    </div>
  );
}

export default App;