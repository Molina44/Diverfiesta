import React, { memo } from 'react';
import logoSrc from '../../../assets/logo-party-horn_.svg';

const LogoV1 = memo(({ onClick, size = 50, className = '' }) => {
  return (
    <img
      src={logoSrc}
      alt="Logo"
      onClick={onClick}
      className={`cursor-pointer ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
});

export default LogoV1;
