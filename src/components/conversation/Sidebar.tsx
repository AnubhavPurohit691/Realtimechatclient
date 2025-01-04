import React from 'react';
import { Menu } from 'lucide-react';
import UserAvatar from './useAvatar';
import { useGetuser } from '../../hooks/usegetusers';
import { useSetRecoilState } from 'recoil';
import { selectuser } from '../../recoil/atom';
import { usegetme } from '../../hooks/usegetme';



interface SidebarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

interface user{
  fullName:string
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, toggleSidebar }) => {
  
  const setuser=useSetRecoilState(selectuser)
  
  const {getme}=usegetme()
  const {userData}:{userData:user[]|any}=useGetuser()
  
  return (
    <div className={`${showSidebar ? 'block' : 'hidden'} md:block w-full md:w-80 bg-white/10 backdrop-blur-lg border-r border-white/20`}>
      <div className="p-4 border-b border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <UserAvatar initials="JD" />
            <div>
              <h3 className="text-white font-semibold">{getme.fullName}</h3>
              <p className="text-white/60 text-sm">{getme.id}</p>
            </div>
          </div>
          <Menu className="text-white/60 hover:text-white cursor-pointer md:hidden" onClick={toggleSidebar} />
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-72px)] md:h-[calc(100vh-72px)]">
        {userData?.map((data:any, index:any) => {
          
          return  <div 
            key={index}
            className={`p-4 border-b border-white/20 hover:bg-white/5 cursor-pointer transition-colors ${
              index === 0 ? 'bg-white/10' : ''
            }`}
          >
            <button className="flex items-center space-x-3" 
            onClick={()=>{
              setuser(data)
            }}
            >
              <UserAvatar initials={data.fullName.charAt(0).toUpperCase()} size="lg" gradient />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="text-white font-semibold">{data?.fullName}</h4>
                </div>
                {/* <p className="text-white/60 text-sm truncate">Latest message preview...</p> */}
              </div>
            </button>
          </div>
})}
      </div>
    </div>
  );
};

export default Sidebar;

