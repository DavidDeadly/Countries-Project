import React from 'react';

const Button = ({ className, legend }) => {
  return (
    <button className={className}>{legend}</button>
  );
}

export default Button;
