import React from 'react';
import { useContext } from 'react';
import { Context } from './App';

export const Button = () => {
  const cba = useContext(Context);
  return (
    <button
      onClick={() => {
        cba.setShowMessage(prevState =>   !prevState);
      }}
    >
      Click
    </button>
  );
};
