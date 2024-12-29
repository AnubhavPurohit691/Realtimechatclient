import React from 'react';

interface MessageProps {
  text: string;
  time: string;
  sent: boolean;
}

const Message: React.FC<MessageProps> = ({ text, time, sent }) => {
  return (
    <div className={`flex ${sent ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[70%] ${sent ? 'bg-gradient-to-r from-pink-500 to-pink-400' : 'bg-white/10'} rounded-2xl px-4 py-2`}>
        <p className="text-white">{text}</p>
        <p className="text-xs text-white/60 text-right mt-1">{time}</p>
      </div>
    </div>
  );
};

export default Message;

