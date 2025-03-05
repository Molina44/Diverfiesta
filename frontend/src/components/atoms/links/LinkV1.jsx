import React from 'react';

const LinkV1 = ({ href, children, className = '' }) => {
  return (
    <a href={href} className={`text-gray-500 hover:text-black ${className}`}>
      {children}
    </a>
  );
};

export default LinkV1;
