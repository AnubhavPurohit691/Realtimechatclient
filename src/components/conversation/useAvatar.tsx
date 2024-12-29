import React from 'react';

interface UserAvatarProps {
  initials: string;
  size?: 'sm' | 'md' | 'lg';
  gradient?: boolean;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ initials, size = 'md', gradient = false }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const backgroundClass = gradient
    ? 'bg-gradient-to-r from-pink-500 to-pink-400'
    : 'bg-pink-500';

  return (
    <div className={`${sizeClasses[size]} ${backgroundClass} rounded-full flex items-center justify-center text-white font-bold`}>
      {initials}
    </div>
  );
};

export default UserAvatar;

