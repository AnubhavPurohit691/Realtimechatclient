'use client'

import { useState } from 'react';
import { Send, Menu, Phone, Video, MoreVertical, Image, Smile, Paperclip, ArrowLeft } from 'lucide-react';

const ChatConversation = () => {
  const [message, setMessage] = useState('');
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
        {/* Sidebar */}
        <div className={`${showSidebar ? 'block' : 'hidden'} md:block w-full md:w-80 bg-white/10 backdrop-blur-lg border-r border-white/20`}>
          {/* Profile Section */}
          <div className="p-4 border-b border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <h3 className="text-white font-semibold">John Doe</h3>
                  <p className="text-white/60 text-sm">Online</p>
                </div>
              </div>
              <Menu className="text-white/60 hover:text-white cursor-pointer md:hidden" onClick={toggleSidebar} />
            </div>
          </div>

          {/* Conversations List */}
          <div className="overflow-y-auto h-[calc(100vh-72px)] md:h-[calc(100vh-72px)]">
            {Array.from({ length: 5 }).map((_, index) => (
              <div 
                key={index}
                className={`p-4 border-b border-white/20 hover:bg-white/5 cursor-pointer transition-colors ${
                  index === 0 ? 'bg-white/10' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 flex items-center justify-center text-white font-bold">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="text-white font-semibold">User {index + 1}</h4>
                      <span className="text-white/60 text-xs">09:30 AM</span>
                    </div>
                    <p className="text-white/60 text-sm truncate">Latest message preview...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 bg-white/10 backdrop-blur-lg border-b border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ArrowLeft className="md:hidden text-white/60 hover:text-white cursor-pointer" onClick={toggleSidebar} />
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <h3 className="text-white font-semibold">Alex Johnson</h3>
                  <p className="text-white/60 text-sm">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="hidden sm:block text-white/60 hover:text-white cursor-pointer" />
                <Video className="hidden sm:block text-white/60 hover:text-white cursor-pointer" />
                <MoreVertical className="text-white/60 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {demoMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] ${msg.sent ? 'bg-gradient-to-r from-pink-500 to-pink-400' : 'bg-white/10'} rounded-2xl px-4 py-2`}>
                  <p className="text-white">{msg.text}</p>
                  <p className="text-xs text-white/60 text-right mt-1">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white/10 backdrop-blur-lg border-t border-white/20">
            <div className="flex items-center space-x-4">
              <button className="hidden sm:block text-white/60 hover:text-white">
                <Paperclip className="h-6 w-6" />
              </button>
              <button className="hidden sm:block text-white/60 hover:text-white">
                <Image className="h-6 w-6" />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white">
                  <Smile className="h-6 w-6" />
                </button>
              </div>
              <button className="bg-gradient-to-r from-pink-500 to-pink-400 p-3 rounded-full text-white hover:shadow-lg transition-shadow">
                <Send className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatConversation;

