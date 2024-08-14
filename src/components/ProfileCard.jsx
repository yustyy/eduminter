import React from 'react';

const ProfileCard = ({ name, imageSrc }) => {
  return (
    <div className="flex items-center space-x-4">
      <img src={imageSrc} alt={name} className="w-10 h-10 rounded-full" />
      <p className="text-white font-semibold">{name}</p>
    </div>
  );
};

export default ProfileCard;
