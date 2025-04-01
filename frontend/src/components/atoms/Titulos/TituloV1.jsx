import React from 'react';

const TituloV1 = ({ children, level = 1, className = '' }) => {
  const Tag = `h${level}`;
  return <Tag className={`text-gray-900 font-bold ${className}`}>{children}</Tag>;
};

export default TituloV1;
