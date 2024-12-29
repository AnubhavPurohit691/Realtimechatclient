import React from 'react';
import { ArrowLeft, Phone, Video, MoreVertical } from 'lucide-react';
import UserAvatar from './useAvatar';

interface ChatHeaderProps {
  toggleSidebar: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ toggleSidebar }) => {
  return (
    <div className="p-4 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <ArrowLeft className="md:hidden text-white/60 hover:text-white cursor-pointer" onClick={toggleSidebar} />
          <UserAvatar initials="A" gradient />
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
  );
};

export default ChatHeader;

