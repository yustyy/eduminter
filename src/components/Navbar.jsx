import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/path/to/lnpm install axios" alt="EduMinter Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-xl font-bold">EduMinter</h1>
      </div>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/courses" className="hover:underline">Courses</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
      </nav>
      <div className="flex items-center">
        <span className="text-sm">4°12'S 332°48'E</span>
        <span className="ml-4 text-sm">MON 22:07</span>
      </div>
    </header>
  );
};

export default Navbar;
