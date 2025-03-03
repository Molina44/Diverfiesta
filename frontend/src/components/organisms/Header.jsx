import React from 'react';
import SearchBar from '../molecules/SearchBar';

const Header = ({ onSearch }) => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;