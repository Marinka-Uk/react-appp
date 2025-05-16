import React from 'react';
import { useContext } from 'react';
import { Context } from './App';
import { useFirst } from './Context';

export const Button = () => {
  const cba = useFirst();
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
