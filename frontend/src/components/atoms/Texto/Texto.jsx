import React from 'react';

const TextoV1 = ({ children, size = 'base', className = '' }) => {
  const sizeClasses = {
    small: 'text-sm',
    base: 'text-base',
    large: 'text-lg',
    xl: 'text-xl',
  };

  return <p className={`${sizeClasses[size]} text-gray-700 ${className}`}>{children}</p>;
};

export default TextoV1;
