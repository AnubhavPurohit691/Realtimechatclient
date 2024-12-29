import React from 'react';
import { Menu } from 'lucide-react';
import UserAvatar from './useAvatar';

interface SidebarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, toggleSidebar }) => {
  return (
    <div className={`${showSidebar ? 'block' : 'hidden'} md:block w-full md:w-80 bg-white/10 backdrop-blur-lg border-r border-white/20`}>
      <div className="p-4 border-b border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <UserAvatar initials="JD" />
            <div>
              <h3 className="text-white font-semibold">John Doe</h3>
              <p className="text-white/60 text-sm">Online</p>
            </div>
          </div>
          <Menu className="text-white/60 hover:text-white cursor-pointer md:hidden" onClick={toggleSidebar} />
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-72px)] md:h-[calc(100vh-72px)]">
        {Array.from({ length: 5 }).map((_, index) => (
          <div 
            key={index}
            className={`p-4 border-b border-white/20 hover:bg-white/5 cursor-pointer transition-colors ${
              index === 0 ? 'bg-white/10' : ''
            }`}
          >
            <div className="flex items-center space-x-3">
              <UserAvatar initials={String.fromCharCode(65 + index)} size="lg" gradient />
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
  );
};

export default Sidebar;

