import React from 'react';

export const Button = (props) => {
  const { className, children, name } = props;
  return (
    <button
      type="button"
      className={className}
      name={name}
      onClick={() => console.log(name + ' button was clicked ')}
    >
      {children}
    </button>
  );
};
