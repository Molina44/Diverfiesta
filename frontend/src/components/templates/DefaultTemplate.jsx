import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const DefaultTemplate = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultTemplate;