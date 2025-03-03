import React, { useContext } from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';
import { AppContext } from '../../context/AppContext';

const Home = () => {
  const { searchQuery, setSearchQuery } = useContext(AppContext);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
  };

  return (
    <DefaultTemplate>
      <h1 className="text-3xl font-bold self-stretch text-center">Home de Diverfiesta</h1>
      <p className="mt-4">Current Search Query: {searchQuery}</p>
    </DefaultTemplate>
  );
};

export default Home;