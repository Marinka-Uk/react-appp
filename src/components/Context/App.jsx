import React, { useState, useContext } from 'react';
import { Message } from './Message';
import { Button } from './Button';
import { Context } from './Context';

export const App = () => {
  return (
    <>
      <Context>
        
        <Button />
        <Message />
      </Context>
    </>
  );
};
