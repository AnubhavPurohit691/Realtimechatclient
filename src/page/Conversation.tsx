import React, { useState } from 'react';
import Sidebar from '../components/conversation/Sidebar';
import ChatHeader from '../components/conversation/ChatHeader';
import Message from '../components/conversation/Message';
import MessageInput from '../components/conversation/MessageInput';

const ChatConversation: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const demoMessages = [
    { id: 1, text: "Hey! How are you?", sent: false, time: "09:41 AM" },
    { id: 2, text: "I'm doing great! Just finished my project.", sent: true, time: "09:42 AM" },
    { id: 3, text: "That's awesome! Would love to see it sometime.", sent: false, time: "09:45 AM" },
    { id: 4, text: "I can show you tomorrow at the coffee shop ☕", sent: true, time: "09:47 AM" },
  ];

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="max-w-6xl mx-auto h-screen flex flex-col md:flex-row">
        <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col">
          <ChatHeader toggleSidebar={toggleSidebar} />
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {demoMessages.map((msg) => (
              <Message key={msg.id} text={msg.text} time={msg.time} sent={msg.sent}  />
            ))}
          </div>
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default ChatConversation;