import React, { useEffect, useState } from 'react';
import { Send, Image, Smile, Paperclip } from 'lucide-react';
import { usesendmessage } from '../../hooks/usesendmessage';
import { usesocket } from '../../hooks/usesocket';

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const { sendmessage } = usesendmessage();
  const { socket } = usesocket();

  useEffect(() => {
    const newsocket = new WebSocket('ws://localhost:8000');
    const cleanup = () => {
      if (newsocket.readyState === WebSocket.OPEN || WebSocket.CONNECTING) {
        newsocket.close();
      }
    };

    socket(newsocket, message);

    return cleanup;
  }, [socket, message]);

  return (
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
        <button
          className="bg-gradient-to-r from-pink-500 to-pink-400 p-3 rounded-full text-white hover:shadow-lg transition-shadow"
          onClick={() => {
            sendmessage(message);
            setMessage('');
          }}
        >
          <Send className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
