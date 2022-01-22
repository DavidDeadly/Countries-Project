import React from 'react';

const Button = ({ className, legend, onClick,}) => {
  return (
    <button className={className} onClick={onClick}>{legend}</button>
  );
}

export default Button;
