import React, { useState } from "react";
import Sidebar from "../components/conversation/Sidebar";
import ChatHeader from "../components/conversation/ChatHeader";
import Message from "../components/conversation/Message";
import MessageInput from "../components/conversation/MessageInput";
import { useGetMessage } from "../hooks/usegetmessage";

export interface messages {
  id: string;
  conversationId: string;
  senderId: string;
  body: string;
  createdAt: string;
}

const ChatConversation: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { message }: { message: messages[] | null } = useGetMessage();

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="max-w-6xl mx-auto h-screen flex flex-col md:flex-row">
        <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col">
          <ChatHeader toggleSidebar={toggleSidebar} />
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {message ? (
              message.length > 0 ? (
                message.map((msg) => (
                  <Message
                    key={msg.id}
                    text={msg.body}
                    time={new Date(msg.createdAt).toLocaleString()}
                  />
                ))
              ) : (
                <div className="text-center text-gray-300">
                  No messages found.
                </div>
              )
            ) : (
              <div className="text-center text-gray-300">Loading messages...</div>
            )}
          </div>
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default ChatConversation;
